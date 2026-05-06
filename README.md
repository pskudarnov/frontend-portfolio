# frontend-portfolio

Production-ready personal resume portfolio for Pavel Skudarnov (Middle Frontend Developer) in premium minimal dark style.

## Description

This project is a focused resume-style portfolio built as a modern engineering landing page.
It highlights practical frontend experience, commercial UI delivery, architecture mindset, accessibility, and technical SEO.

Design direction:
- dark premium minimal UI
- clean typography and spacing
- subtle motion and hover states
- no overdesigned visual noise

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- ESLint
- Prettier

## Sections

- Header (navigation + quick links)
- Hero (positioning + key focus)
- About
- Experience timeline
- Skills (4 groups)
- Projects (3 focused cases + highlights)
- Contacts CTA
- Footer

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy

Recommended: Vercel

1. Push repository to GitHub
2. Import repository in Vercel
3. Set environment variables if needed
4. Deploy

## Customization

Main content source:
- `src/data/portfolio.ts`

Page composition:
- `src/app/page.tsx`

SEO metadata:
- `src/app/layout.tsx`

SEO endpoints:
- `src/app/robots.ts`
- `src/app/sitemap.ts`

Visual assets:
- `public/projects/*`
- `public/og-image.svg`
- `public/resume.pdf`

## License

MIT
