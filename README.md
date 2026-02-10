# Portfolio

A modern, responsive portfolio website built with the Next.js App Router and Tailwind CSS v4.

[Live Demo](https://jorgeasmz-portfolio.vercel.app/)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
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
- **Content System**: Markdown-based workflow for project case studies.
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

## Project Structure

- `/app`: App Router pages and layouts.
- `/components`: Reusable UI components, layout foundations, and visualizations.
- `/content`: MDX files for project pages.
- `/lib`: Utility functions and type definitions.
- `/public`: Static assets (images, PDFs).
