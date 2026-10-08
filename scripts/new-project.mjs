// Creates the folder and project.md for a new project.
//
//   npm run new -- design "Split Flap Clock"
//   npm run new -- photo "Patagonia"
//   npm run new -- art "Linocuts"

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CONTENT_DIR } from "./build-content.mjs";

const TEMPLATES = {
  design: (title, order) => `---
title: ${JSON.stringify(title)}
year: "${new Date().getFullYear()}"
location: "Brooklyn, NY"
client: "Personal Project"
order: ${order}
active: false  # true = live on the site, false = hidden
# videos:
#   - https://www.youtube.com/watch?v=...
---

Write the project description here. Leave a blank line between paragraphs.

Key technical highlights:

  → First highlight

  → Second highlight
`,
  photo: (title, order) => `---
title: ${JSON.stringify(title)}
date: "Month ${new Date().getFullYear()}"
location: "City, Country"
order: ${order}
active: false  # true = live on the site, false = hidden
---

One or two sentences about the trip.
`,
  art: (title, order) => `---
title: ${JSON.stringify(title)}
order: ${order}
active: false  # true = live on the site, false = hidden
---

A short description. Medium and materials.
`,
};

const [section, ...rest] = process.argv.slice(2);
const title = rest.join(" ").trim();
if (!TEMPLATES[section] || !title) {
  console.error('Usage: npm run new -- <design|photo|art> "Project Title"');
  process.exit(1);
}

const id = title
  .normalize("NFKD")
  .replace(/[̀-ͯ]/g, "")
  .toLowerCase()
  .replace(/&/g, " ")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const sectionDir = path.join(CONTENT_DIR, section);
const dir = path.join(sectionDir, id);
if (fs.existsSync(dir)) {
  console.error(`Already exists: content/${section}/${id}`);
  process.exit(1);
}

// Default to the top of the list: one step above the current first project.
let lowest = 20;
if (fs.existsSync(sectionDir)) {
  for (const name of fs.readdirSync(sectionDir)) {
    const md = path.join(sectionDir, name, "project.md");
    if (!fs.existsSync(md)) continue;
    const order = matter(fs.readFileSync(md, "utf8")).data.order;
    if (typeof order === "number") lowest = Math.min(lowest, order);
  }
}

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "project.md"), TEMPLATES[section](title, lowest - 10));

console.log(`Created content/${section}/${id}/
  1. Drop photos into that folder. They appear in filename order (01-hero.jpg, 02-detail.jpg, ...).
  2. Fill in project.md.
  3. Preview with "npm run dev", then set "active: true" to publish.`);
