# Portfolio

A modern, responsive portfolio website built with the Next.js App Router and Tailwind CSS v4.

![CI](https://github.com/jorgeasmz/Portfolio/actions/workflows/ci.yml/badge.svg)

[Live Demo](https://jorgeasmz-portfolio.vercel.app/)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Page transitions, reveal effects)
- **Visualizations**: [Recharts](https://recharts.org/) (Skill radar, activity graphs)
- **Content**: MDX (next-mdx-remote)
- **Theming**: next-themes (System/Dark/Light preferences)

## Features

- **Dynamic Navigation**: Context-aware routing (`ProjectBackLink`) preserves user history between the home feed and full project lists.
- **Interactive Visuals**:
  - Custom canvas-based quantum particle background.
  - Interactive research carousel.
  - Data visualizations for skills and activity history.
- **Content System**: MDX case studies whose front matter is parsed against a schema, so a
  malformed or incomplete file fails the build instead of rendering `undefined`.
- **Explicit ordering**: projects carry `order` and `featured` flags rather than depending on
  dates, so the landing page shows what it should regardless of chronology.
- **Responsive Design**: Fully adaptable UI with mobile-optimized navigation.

## Running Locally

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000).

## Development

```bash
npm run typecheck      # tsc --noEmit
npm run lint           # eslint
npm test               # 14 unit and component tests (Vitest)
npm run test:e2e       # 8 end-to-end tests (Playwright, production build)
```

The unit suite parses every file in `content/projects`, so a broken case study is caught before
it reaches a page. The end-to-end suite runs against `next build && next start` rather than the
dev server, because the production build is what actually ships: it is what caught an unknown
project slug returning a 500 instead of a 404, and MDX tables rendering as plain text without
`remark-gfm`.

## Project Structure

- `/app`: App Router pages and layouts.
- `/components`: Reusable UI components, layout foundations, and visualizations.
- `/content`: MDX files for project pages.
- `/lib`: Utility functions and type definitions.
- `/public`: Static assets (images, PDFs).
- `/tests`: Unit and component tests (`unit/`) and browser tests (`e2e/`).
