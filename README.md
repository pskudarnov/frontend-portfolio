# Pavel Skudarnov — Senior Frontend Developer Portfolio

Senior resume portfolio for Pavel Skudarnov in dark premium minimal style.

## Profile

- Role: Senior Frontend Developer / Frontend Engineer
- Experience: 8+ years (8 years 10 months)
- Companies: SberTech, Rambler&Co
- Focus: React, Next.js, TypeScript, SSR, frontend architecture, performance optimization, code review

## Project overview

This is a production-ready resume portfolio focused on honest senior positioning:
- enterprise frontend delivery
- architecture and quality mindset
- performance and accessibility
- real experience timeline and case-based project section

## Showcase project card

FlowPilot is featured as the primary showcase card in the projects section:
- Live Demo: http://64.188.63.171:3210
- GitHub: https://github.com/pskudarnov/flowpilot-dashboard
- Stack: Next.js, TypeScript, Tailwind CSS, Recharts
- Purpose: showcase project with live demo and public code

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- ESLint

## Sections

- Header and navigation
- Hero
- About
- Experience
- Skills (5 groups)
- Key projects and cases (4 cases)
- Contacts CTA
- Footer

## Development

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment notes (temporary VPS)

Current temporary public URL:
- http://64.188.63.171:3200

If running with PM2:
```bash
pm2 restart frontend-portfolio
pm2 status
```

## Content sources

- Main content (hero/about/experience/projects/contacts/additionalInfo): `src/data/portfolio.ts`
- Contacts email is set in `src/data/portfolio.ts` (`contacts` array)
- Page composition/UI: `src/app/page.tsx`
- Project previews (SVG): `public/projects/*.svg`
- SEO metadata: `src/app/layout.tsx`
- SEO endpoints: `src/app/robots.ts`, `src/app/sitemap.ts`

## Resume PDF

- Public file path: `public/resume.pdf`
- If you need to update it, replace this file with the latest resume export.

## License

MIT
