# natberman.me

Portfolio site. Vite + React + TypeScript + Tailwind.

## Adding a project

Everything about a project lives in one folder under `content/`:

```
content/
  design/<project-name>/project.md + photos
  photo/<gallery-name>/project.md + photos
  art/<project-name>/project.md + photos
  about/                               portrait for the About page
```

1. Create the folder and a starter `project.md`:

   ```sh
   npm run new -- design "Split Flap Clock"     # or: photo "Patagonia", art "Linocuts"
   ```

2. Drop photos into the new folder. They appear in filename order, so name them
   `01-hero.jpg`, `02-detail.jpg`, and so on. JPEG, PNG, WebP and GIF work. iPhone HEIC
   files are converted to JPEG automatically when you run the site on your Mac.

3. Fill in `project.md`:

   ```md
   ---
   title: "Split Flap Clock Restoration"   # heading on the project page
   label: "Split Flap Clock"               # optional shorter name for the sidebar
   year: "2025"                            # photo galleries use  date: "February 2025"
   location: "Brooklyn, NY"
   client: "Personal Project"              # design only: company name or "Personal Project"
   order: 40                               # position in the sidebar, lowest first
   draft: true                             # delete this line to publish
   videos:                                 # optional, normal YouTube or Vimeo links
     - https://www.youtube.com/watch?v=qEbs4oX95wQ
   ---

   Project text goes here. Leave a blank line between paragraphs.
   ```

4. Preview: `npm run dev`, then open http://localhost:8080. Drafts are visible here,
   marked "(draft)", and the page reloads when you change anything in `content/`.

5. Publish: delete the `draft: true` line, then commit and push to `main`.

To reorder projects, change their `order` numbers. To remove a project, delete its folder
or set `draft: true`.

## How it works

`scripts/build-content.mjs` reads `content/`, writes resized WebP copies of every photo
(longest side 2000 px) to `public/media/`, and writes `src/generated/content.json`, which
the pages read. Both outputs are generated and not committed. The script runs as part of
`npm run dev` and `npm run build`, and only converts photos that are new or changed.
It stops with a message naming the file if a project is missing its `project.md` or title.

The originals in `content/` are never modified.

Not managed by `content/`: blog posts (`src/data/blogPosts.ts`) and the About page text
(`src/pages/About.tsx`).

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (once, and after pulling changes to `package.json`) |
| `npm run dev` | Local preview with drafts and live reload |
| `npm run new -- <design\|photo\|art> "Title"` | Create a new project folder |
| `npm run build` | Production build into `dist/` |
| `npm run content` | Run only the content step (add `-- --drafts` to include drafts) |

## Deploying

`.github/workflows/static.yml` builds the site and deploys it to GitHub Pages on every
push to `main`.
