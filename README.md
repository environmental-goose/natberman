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
   active: true                            # true = live on the site, false = hidden
   year: "2025"                            # photo galleries use  date: "February 2025"
   location: "Brooklyn, NY"
   client: "Personal Project"              # design only: company name or "Personal Project"
   order: 40                               # position in the sidebar, lowest first
   videos:                                 # optional, normal YouTube or Vimeo links
     - https://www.youtube.com/watch?v=qEbs4oX95wQ
   ---

   Project text goes here. Leave a blank line between paragraphs.
   ```

4. Preview: `npm run dev`, then open http://localhost:8080. Hidden projects are visible
   here, marked "(hidden)", and the page reloads when you change anything in `content/`.

5. Publish: set `active: true`, then commit and push to `main`.

## Showing and hiding projects

Every `project.md` has an `active` line near the top:

- `active: true`: the project is live on the site.
- `active: false`: the project stays in the repo but is left off the live site entirely.
  Its text and photos are not deployed, so it can't be found by URL either. `npm run dev`
  still shows it, marked "(hidden)", so you can preview it.

Change the value and push to `main` to apply it. `npm run status` lists every project and
whether it is live or hidden. A missing `active` line counts as `true`, and a value other
than true or false stops the build with a message naming the file.

To reorder projects, change their `order` numbers. To remove a project for good, delete
its folder.

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
| `npm run dev` | Local preview, including hidden projects, with live reload |
| `npm run new -- <design\|photo\|art> "Title"` | Create a new project folder (starts hidden) |
| `npm run status` | List every project as live or hidden |
| `npm run build` | Production build into `dist/` |
| `npm run content` | Run only the content step (add `-- --hidden` to include hidden projects) |

## Deploying

`.github/workflows/static.yml` builds the site and deploys it to GitHub Pages on every
push to `main`.
