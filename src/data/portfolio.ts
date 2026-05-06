export const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#projects", label: "Проекты" },
  { href: "#skills", label: "Навыки" },
  { href: "#contact", label: "Контакты" },
] as const;

export const techStack = ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"] as const;

export const experience = [
  {
    role: "Frontend Developer",
    company: "SEO Technology",
    period: "2022 — Сейчас",
    description: "Разрабатываю продуктовые интерфейсы, ускоряю рендеринг и внедряю архитектурные frontend-паттерны.",
  },
  {
    role: "Freelance Frontend Engineer",
    company: "Various Projects",
    period: "2020 — 2022",
    description: "Запускал коммерческие веб-приложения на React/Next.js с фокусом на UX, SEO и стабильность в production.",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST API", "PostgreSQL", "Prisma"],
  },
  {
    title: "Инструменты",
    items: ["Git", "GitHub Actions", "Vercel", "Figma", "Linux"],
  },
  {
    title: "Другое",
    items: ["SEO", "Accessibility", "Web Performance", "Architecture", "Code Review"],
  },
] as const;

export const projects = [
  {
    title: "SEO Audit Platform",
    description: "SaaS-платформа для автоматического SEO-аудита с генерацией отчётов и actionable рекомендаций.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/seo-audit.svg",
    demo: "https://example.com",
    github: "https://github.com/pskudarnov/seo-audit",
  },
  {
    title: "Affiliate Dashboard UI",
    description: "Интерфейс аналитики партнёрских метрик: отчёты, сегментация и visual insights в real-time.",
    tags: ["React", "Tailwind", "Charts"],
    image: "/projects/affiliate-dashboard.svg",
    demo: "https://example.com",
    github: "https://github.com/pskudarnov",
  },
  {
    title: "AI Workflow Toolkit",
    description: "Набор инженерных UI-инструментов для AI-воркфлоу: orchestration, tracing и quality gates.",
    tags: ["Next.js", "Node.js", "AI"],
    image: "/projects/ai-toolkit.svg",
    demo: "https://example.com",
    github: "https://github.com/pskudarnov",
  },
] as const;
