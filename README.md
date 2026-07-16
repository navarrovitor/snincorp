# Architecture Portfolio

Single-page Next.js 14 (App Router) portfolio for showcasing architecture
projects. Built for structure first — visual design is still in progress and
will be layered on via Tailwind utility classes.

## Status

This is a **temporary scaffold**. Placeholder content in place:

- Hero background is a CSS gradient animation (`src/components/sections/Hero.tsx`)
  — swap for a video (`/public/animations/hero-bg.webm`) or canvas/Three.js scene
  once the final animation is exported from Claude Design.
- Project images (`public/images/projects/*`) are generated placeholders.
- Contact form posts to `/api/contact`, which does not exist yet — wire up
  Formspree, Resend, or a Next.js Route Handler before shipping.
- Colors, typography, and spacing use Tailwind defaults; final design tokens
  go in `tailwind.config.ts`.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Project data as JSON (`data/projects/*/metadata.json`), loaded server-side
  in `src/lib/projects.ts`

## Project Structure

```
src/
  app/            Root layout + single-page route
  components/
    sections/     Hero, Projects, About, Contact
  lib/             Data loading (projects.ts)
  hooks/           useIntersectionObserver
  types/           Shared TypeScript interfaces
data/projects/     One folder per project, metadata.json each
public/images/     Project images (hero + gallery)
public/animations/ Hero background animation (video/webm)
```

## Adding a Project

1. Create `data/projects/<project-id>/metadata.json` following the `Project`
   interface in `src/types/index.ts`.
2. Add images to `public/images/projects/<project-id>/hero.jpg` and
   `public/images/projects/<project-id>/details/*.jpg`.
3. The homepage picks up new projects automatically via `getAllProjects()`.

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

- Export and drop in the final hero animation.
- Apply final design tokens (colors, fonts, spacing) once design is ready.
- Replace placeholder project images/data with real content.
- Wire up the contact form to a real backend/service.
- Decide on project detail interaction pattern (current: modal overlay).
