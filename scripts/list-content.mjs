// Lists every project and whether it is live or hidden.
//
//   npm run status

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CONTENT_DIR, SECTIONS } from "./build-content.mjs";

let live = 0;
let hidden = 0;

for (const section of SECTIONS.filter((s) => s !== "about")) {
  const dir = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(dir)) continue;
  const rows = fs
    .readdirSync(dir)
    .filter((name) => fs.existsSync(path.join(dir, name, "project.md")))
    .map((name) => {
      const { data } = matter(fs.readFileSync(path.join(dir, name, "project.md"), "utf8"));
      const flag = data.active ?? (data.draft === true ? false : true);
      const isLive = flag === true || ["true", "yes", "on"].includes(String(flag).toLowerCase());
      return { name, title: data.title ?? name, order: typeof data.order === "number" ? data.order : Infinity, isLive };
    })
    .sort((a, b) => a.order - b.order);

  console.log(`\n${section.toUpperCase()}`);
  for (const row of rows) {
    console.log(`  ${row.isLive ? "live  " : "HIDDEN"}  ${row.title}  (content/${section}/${row.name})`);
    row.isLive ? live++ : hidden++;
  }
}

console.log(`\n${live} live, ${hidden} hidden. Change "active:" in a project.md to switch.\n`);
