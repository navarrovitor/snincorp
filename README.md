# snINcorp — Architecture Portfolio

Single-page Next.js 14 (App Router) portfolio for snINcorp, an architecture,
urbanism, and construction management studio in São Paulo. Implements the
design from Claude Design (`Portfolio.dc.html`).

## Status

- Hero features an animated SVG wordmark background and fade-in copy, built
  with plain CSS keyframes (`src/app/globals.css`).
- Project cards use a diagonal-stripe placeholder pattern with a text label
  instead of real photos — swap in real images once available.
- Contact section is informational only (email, location, Instagram) — no
  form, matching the design.
- Styling is plain CSS + inline styles ported directly from the design file,
  not a utility framework — no design tokens/theme layer exists yet.

## Stack

- Next.js 14 (App Router) + TypeScript
- Plain CSS (`src/app/globals.css`) for resets, hover states, and keyframe
  animations; inline styles for layout, matching the source design 1:1
- Project data as JSON (`data/projects/*/metadata.json`), loaded server-side
  in `src/lib/projects.ts`

## Project Structure

```
src/
  app/            Root layout, global styles, single-page route
  components/
    sections/     Hero, Projects, Contact
  lib/             Data loading (projects.ts)
  types/           Shared TypeScript interfaces
data/projects/     One folder per project, metadata.json each
```

## Adding a Project

1. Create `data/projects/<project-id>/metadata.json` following the `Project`
   interface in `src/types/index.ts`.
2. The Projects section renders exactly one featured project (`featured: true`)
   and up to five others, arranged into the design's fixed bento layout
   (2 large + 3 medium + 1 featured strip) — adjust `src/components/sections/Projects.tsx`
   if the project count changes.
3. The homepage picks up projects automatically via `getAllProjects()`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No extra build config needed.
4. Deploy — every push to the default branch redeploys automatically.

## Next Steps

- Replace placeholder project cards with real photography.
- Decide on a project detail interaction (the design has none yet — cards are
  hover-only, `cursor: pointer` with no click destination).
- Wire up the contact email/Instagram links to real destinations if placeholders.
