# frontend-portfolio

Premium minimal engineering portfolio/resume website for frontend developer.

## Overview

This project is a production-ready personal portfolio built with Next.js App Router and TypeScript.
Design direction: Vercel/Linear/Railway style minimalism — dark theme, strong typography, clean spacing, subtle interactions.

## Features

- Next.js 16 App Router
- React + TypeScript strict mode
- Tailwind CSS v4
- Framer Motion (subtle reveal/hover)
- Responsive mobile-first layout
- Accessibility-first focus styles and semantic sections
- SEO-ready metadata (OpenGraph, Twitter cards, canonical)
- `robots.ts` + `sitemap.ts`
- Production build ready for Vercel

## Sections

- Sticky Header with navigation and social links
- Hero
- About
- Experience timeline
- Skills cards
- Projects showcase
- Contact CTA
- Minimal footer

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- ESLint
- Prettier

## Project Structure

src/
- app/
- components/
- shared/
- styles/
- data/
- hooks/

public/
- projects/
- avatar-placeholder.svg
- og-image.svg
- resume.pdf

## Screenshots

Add real screenshots after deployment:

- `public/screenshots/home-desktop.png`
- `public/screenshots/home-mobile.png`

## Lighthouse Goals

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Local Development

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run dev
```

## Environment

Copy and adjust:

```bash
cp .env.example .env.local
```

## Deployment (Vercel)

1. Push repository to GitHub
2. Import project in Vercel
3. Set environment variables (if needed)
4. Deploy

Build command: `npm run build`
Output: Next.js default

## License

MIT
