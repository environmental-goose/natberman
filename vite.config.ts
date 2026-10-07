import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { buildContent, CONTENT_DIR } from "./scripts/build-content.mjs";

// Turns the content/ folder into optimized images + src/generated/content.json.
// In dev it also shows drafts and rebuilds whenever a file in content/ changes.
function contentPlugin(): Plugin {
  let dev = false;
  return {
    name: "portfolio-content",
    configResolved(config) {
      dev = config.command === "serve";
    },
    async buildStart() {
      await buildContent({ includeDrafts: dev });
    },
    configureServer(server) {
      server.watcher.add(CONTENT_DIR);
      let timer: ReturnType<typeof setTimeout> | undefined;
      const rebuild = (file: string) => {
        if (!file.startsWith(CONTENT_DIR)) return;
        clearTimeout(timer);
        timer = setTimeout(async () => {
          try {
            await buildContent({ includeDrafts: true, quiet: true });
            server.ws.send({ type: "full-reload" });
          } catch (err) {
            server.config.logger.error((err as Error).message);
          }
        }, 300);
      };
      server.watcher.on("add", rebuild).on("change", rebuild).on("unlink", rebuild);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [contentPlugin(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
