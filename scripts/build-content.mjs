// Builds the site's content from the content/ folder.
//
//   content/<section>/<project-id>/project.md   title, dates, text
//   content/<section>/<project-id>/*.jpg|png|…  photos, shown in filename order
//   content/about/                              portrait for the About page
//
// Output (both generated, both gitignored):
//   public/media/<section>/<project-id>/*.webp  resized, web-ready images
//   src/generated/content.json                  everything the pages need
//
// Run with `npm run content`. `npm run dev` and `npm run build` run it automatically.

import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const CONTENT_DIR = path.join(ROOT, "content");
const MEDIA_DIR = path.join(ROOT, "public", "media");
const JSON_OUT = path.join(ROOT, "src", "generated", "content.json");
// Remembers which photos have already been converted, so only new or changed ones are redone.
const CACHE_FILE = path.join(ROOT, "src", "generated", "media-cache.json");

export const SECTIONS = ["design", "photo", "art", "about"];
const MAX_EDGE = 2000; // px, longest side of a generated image
const WEBP_QUALITY = 80;
const RESIZABLE = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".avif"]);
const COPIED = new Set([".gif"]); // animated, served as is
const HEIC = new Set([".heic", ".heif"]);

const naturalSort = (a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });
const isHidden = (name) => name.startsWith(".") || name.startsWith("_");

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !isHidden(d.name))
    .map((d) => d.name)
    .sort(naturalSort);
}

/** iPhone HEIC photos can't be read on the deploy server, so on a Mac make a JPEG copy next to each one. */
function convertHeic(dir, files, problems) {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!HEIC.has(ext)) continue;
    const jpg = file.slice(0, -ext.length) + ".jpg";
    if (files.includes(jpg)) continue;
    if (process.platform !== "darwin") {
      problems.push(`${path.relative(ROOT, path.join(dir, file))}: HEIC can only be converted on a Mac. Export it as JPEG.`);
      continue;
    }
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "92", path.join(dir, file), "--out", path.join(dir, jpg)], { stdio: "ignore" });
    files.push(jpg);
    console.log(`  converted ${file} -> ${jpg}`);
  }
}

function outputName(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, path.extname(file));
  return COPIED.has(ext) ? `${base}${ext}` : `${base}.webp`;
}

async function processImage(src, dest, cache, problems) {
  const key = path.relative(ROOT, src);
  const hash = crypto.createHash("sha1").update(fs.readFileSync(src)).digest("hex");
  const signature = `${hash}:${MAX_EDGE}:${WEBP_QUALITY}`;
  if (cache.old[key] === signature && fs.existsSync(dest)) {
    cache.next[key] = signature;
    return;
  }
  try {
    if (COPIED.has(path.extname(src).toLowerCase())) {
      fs.copyFileSync(src, dest);
    } else {
      await sharp(src)
        .rotate() // apply the camera's orientation flag
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(dest);
    }
    cache.next[key] = signature;
    cache.converted += 1;
  } catch (err) {
    problems.push(`${key}: could not be processed (${err.message})`);
  }
}

/** Runs the jobs a few at a time. */
async function runPool(jobs, size) {
  let next = 0;
  const worker = async () => {
    while (next < jobs.length) await jobs[next++]();
  };
  await Promise.all(Array.from({ length: Math.min(size, jobs.length) }, worker));
}

function asList(value) {
  if (value == null || value === "") return [];
  return (Array.isArray(value) ? value : [value]).map(String);
}

/** Accepts a normal YouTube/Vimeo link or an embed link and returns an embeddable URL. */
function toEmbedUrl(url) {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo && !url.includes("player.vimeo.com")) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return url;
}

/**
 * @param {{ quiet?: boolean, includeDrafts?: boolean }} options
 *   includeDrafts: show projects marked "draft: true" (used by `npm run dev` so you can preview them).
 */
export async function buildContent({ quiet = false, includeDrafts = false } = {}) {
  const log = quiet ? () => {} : console.log;
  const problems = [];
  const content = {};
  const keep = new Set(); // generated files that are still wanted
  const jobs = [];
  const cache = { old: {}, next: {}, converted: 0 };
  try {
    cache.old = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  } catch {
    // no cache yet: everything gets converted
  }
  const seenIds = new Map();
  let imageCount = 0;

  for (const section of SECTIONS) {
    content[section] = [];
    // "about" is a single folder (content/about/); every other section holds one folder per project.
    const entries =
      section === "about"
        ? fs.existsSync(path.join(CONTENT_DIR, "about")) ? [["about", path.join(CONTENT_DIR, "about")]] : []
        : listDirs(path.join(CONTENT_DIR, section)).map((id) => [id, path.join(CONTENT_DIR, section, id)]);
    for (const [id, dir] of entries) {
      const rel = path.relative(ROOT, dir);
      const mdPath = path.join(dir, "project.md");
      if (!fs.existsSync(mdPath)) {
        problems.push(`${rel}: missing project.md`);
        continue;
      }
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
        problems.push(`${rel}: folder name must be lowercase letters, numbers and dashes (e.g. "tile-shelf")`);
        continue;
      }
      if (seenIds.has(id)) {
        problems.push(`${rel}: the name "${id}" is already used in ${seenIds.get(id)}`);
        continue;
      }
      seenIds.set(id, rel);

      let parsed;
      try {
        parsed = matter(fs.readFileSync(mdPath, "utf8"));
      } catch (err) {
        problems.push(`${rel}/project.md: the settings block at the top is not valid (${err.reason || err.message})`);
        continue;
      }
      const data = parsed.data;
      if (!data.title) problems.push(`${rel}/project.md: missing "title"`);
      const draft = data.draft === true;
      if (draft && !includeDrafts) {
        log(`  draft, not published: ${rel}`);
        continue;
      }

      const files = fs.readdirSync(dir).filter((f) => !isHidden(f));
      convertHeic(dir, files, problems);
      const sources = files
        .filter((f) => RESIZABLE.has(path.extname(f).toLowerCase()) || COPIED.has(path.extname(f).toLowerCase()))
        .sort(naturalSort);

      const mediaPath = section === "about" ? "about" : `${section}/${id}`;
      const outDir = path.join(MEDIA_DIR, mediaPath);
      fs.mkdirSync(outDir, { recursive: true });
      const images = [];
      const usedNames = new Map();
      for (const file of sources) {
        const outName = outputName(file);
        if (usedNames.has(outName)) {
          problems.push(`${rel}: "${file}" and "${usedNames.get(outName)}" have the same name. Rename one.`);
          continue;
        }
        usedNames.set(outName, file);
        jobs.push(() => processImage(path.join(dir, file), path.join(outDir, outName), cache, problems));
        keep.add(path.join(outDir, outName));
        images.push(`/media/${mediaPath}/${encodeURIComponent(outName)}`);
      }
      imageCount += images.length;

      const title = String(data.title ?? id);
      const when = data.year ?? data.date;
      content[section].push({
        id,
        title,
        label: String(data.label ?? title) + (draft ? " (draft)" : ""),
        order: typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
        year: when == null ? undefined : String(when),
        location: data.location == null ? undefined : String(data.location),
        client: data.client == null ? undefined : String(data.client),
        description: data.description == null ? "" : String(data.description),
        body: parsed.content.trim(),
        images,
        videos: asList(data.videos ?? data.video).map(toEmbedUrl),
      });
    }
    content[section].sort((a, b) => a.order - b.order || naturalSort(a.title, b.title));
  }

  await runPool(jobs, Math.max(2, os.cpus().length));

  // Remove generated images whose source photo or project is gone.
  const prune = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        prune(full);
        if (fs.readdirSync(full).length === 0) fs.rmdirSync(full);
      } else if (!keep.has(full)) {
        fs.unlinkSync(full);
      }
    }
  };
  prune(MEDIA_DIR);

  if (problems.length) {
    throw new Error(`Content problems:\n  - ${problems.join("\n  - ")}`);
  }

  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache.next));

  const json = JSON.stringify(content, null, 2) + "\n";
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  if (!fs.existsSync(JSON_OUT) || fs.readFileSync(JSON_OUT, "utf8") !== json) fs.writeFileSync(JSON_OUT, json);

  const projects = SECTIONS.reduce((n, s) => n + content[s].length, 0);
  log(`content: ${projects} entries, ${imageCount} images (${cache.converted} converted, ${imageCount - cache.converted} unchanged)`);
  return content;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  buildContent({ includeDrafts: process.argv.includes("--drafts") }).catch((err) => {
    console.error(`\n${err.message}\n`);
    process.exit(1);
  });
}
