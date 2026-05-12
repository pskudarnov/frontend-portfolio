# Pavel Skudarnov — Frontend Portfolio

Personal portfolio website for Pavel Skudarnov, a frontend engineer working with React, Next.js, TypeScript, responsive interfaces, performance, accessibility, and product UI.

## Profile

- Role: Frontend Engineer / React Developer
- Current focus: freelance work, product interfaces, UI polish, performance, and SEO basics
- Previous experience: SberTech, Rambler&Co
- Core stack: React, Next.js, TypeScript, SSR, REST API, Tailwind CSS
- Strong areas: component architecture, responsive layouts, refactoring, code review, and release quality

## About this project

This repository contains my personal portfolio and resume website. The site is built as a compact product-style page: it introduces my background, shows selected projects, links to live demos and source code, and keeps the content available in Russian and English.

The main goal is simple: make it easy for a recruiter, client, or teammate to understand what I build, how I think about frontend work, and where to see the projects in action.

## Featured projects

### FlowPilot

- Live: https://flowpilot.pavel-skudarnov.ru/
- Source: https://github.com/pskudarnov/flowpilot-dashboard
- Stack: Next.js, TypeScript, Tailwind CSS, Recharts
- Focus: analytics dashboard, charts, responsive layout, loading and empty states

### NordShop

- Live: https://nordshop.pavel-skudarnov.ru/
- Source: https://github.com/pskudarnov/nordshop-store
- Stack: Next.js, TypeScript, Tailwind CSS, Zustand
- Focus: storefront, catalog, product pages, cart UI, themes, and localization

### StayFinder

- Live: https://stayfinder.pavel-skudarnov.ru/
- Source: https://github.com/pskudarnov/stayfinder-booking
- Stack: Next.js, TypeScript, Tailwind CSS, React Hook Form, Zod
- Focus: booking flow, search, filters, forms, validation, and mobile layout

### DevDocs

- Live: https://devdocs.pavel-skudarnov.ru/
- Source: https://github.com/pskudarnov/devdocs-portal
- Stack: Next.js, TypeScript, Tailwind CSS
- Focus: documentation layout, navigation, readable typography, and technical content structure

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- ESLint
- Prettier

## Main sections

- Header and navigation
- Hero
- About
- Experience
- Skills
- Projects
- Contact CTA
- Footer

## Local development

```bash
npm install
npm run dev
```

Open locally:

```text
http://localhost:3000
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Deployment

Production URL:

```text
https://pavel-skudarnov.ru/
```

Example PM2 commands:

```bash
pm2 restart frontend-portfolio
pm2 status
```

## Project structure

```text
src/app/                 App Router pages, layouts, metadata routes
src/components/          UI sections and reusable components
src/dictionaries/        Russian and English page content
src/i18n/                Locale routing and navigation helpers
public/projects/         Project preview assets
public/resume_ru.pdf        Resume file served from the site
```

## Resume

The current resume is stored at:

```text
public/resume_ru.pdf
```

To update it, replace this file with a new export and rebuild the site.

## License

MIT
