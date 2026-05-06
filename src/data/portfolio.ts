export const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#projects", label: "Проекты" },
  { href: "#skills", label: "Навыки" },
  { href: "#contact", label: "Контакты" },
] as const;

export const techStack = ["React", "Next.js", "TypeScript", "Accessibility", "Technical SEO"] as const;

export const hero = {
  role: "Frontend Developer / Frontend Engineer",
  headline: "Павел Скударнов",
  subtitle:
    "Разрабатываю быстрые, адаптивные и SEO-оптимизированные веб-интерфейсы на React, Next.js и TypeScript.",
  supporting:
    "Фокус: frontend architecture, accessibility, performance, SEO и clean UI.",
} as const;

export const aboutText =
  "Фронтенд-разработчик с коммерческим опытом в создании интерфейсов для SaaS, dashboard-систем, лендингов и внутренних кабинетов. Работаю с React, Next.js, TypeScript и современным frontend tooling. Умею не только верстать интерфейсы, но и думать о продукте: UX, SEO, производительность, поддерживаемость и доступность.";

export const experience = [
  {
    role: "Frontend Developer",
    company: "Product / Commercial Projects",
    period: "2021 — настоящее время",
    bullets: [
      "Разрабатывал адаптивные интерфейсы для dashboard-систем и клиентских кабинетов.",
      "Улучшал структуру SCSS/компонентов и переиспользуемость UI.",
      "Работал с React, TypeScript, i18n, accessibility и сложными интерактивными состояниями.",
      "Участвовал в SEO и performance улучшениях.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance / Client Projects",
    period: "2019 — 2021",
    bullets: [
      "Создавал лендинги, промо-страницы и корпоративные сайты.",
      "Интегрировал формы, навигацию, адаптивную верстку и базовую SEO-структуру.",
      "Работал с HTML, CSS/SCSS, JavaScript, PHP/Blade.",
    ],
  },
  {
    role: "Frontend / AI-assisted Engineering",
    company: "Personal Projects",
    period: "2024 — настоящее время",
    bullets: [
      "Разрабатываю SEO Audit Platform на Next.js и TypeScript.",
      "Использую AI-assisted workflows для QA, архитектурного планирования и ускорения разработки.",
      "Пишу документацию, README, архитектурные планы и проверочные сценарии.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS Modules", "Tailwind CSS"],
  },
  {
    title: "UI Engineering",
    items: ["Responsive UI", "Accessibility", "Semantic HTML", "Design Systems", "Storybook", "SVG sprites", "Animation"],
  },
  {
    title: "Architecture & Quality",
    items: ["Component Architecture", "Feature-based Structure", "ESLint", "Prettier", "Testing", "CI checks", "Code Review"],
  },
  {
    title: "Product & SEO",
    items: ["Technical SEO", "Metadata", "Sitemap", "i18n", "Performance", "Lighthouse", "UX", "Conversion-focused UI"],
  },
] as const;

export const projects = [
  {
    title: "SEO Audit Platform",
    description:
      "Собственный SaaS-проект для автоматического SEO-аудита сайтов, генерации отчётов и проверки технических SEO-факторов.",
    highlights: [
      "Next.js App Router + TypeScript",
      "protected report pages",
      "PDF report generation",
      "i18n and SEO metadata",
      "worker/retry architecture",
    ],
    image: "/projects/seo-audit.svg",
    demo: "https://demo-link-placeholder.example",
    github: "https://github-link-placeholder.example",
  },
  {
    title: "Affiliate Dashboard UI",
    description:
      "Коммерческий UI/case для партнёрского кабинета с навигацией, dropdown-сценариями, адаптивной вёрсткой и accessibility-паттернами.",
    highlights: [
      "React + TypeScript",
      "SCSS architecture",
      "ARIA states",
      "reusable UI components",
      "responsive dashboard layout",
    ],
    image: "/projects/affiliate-dashboard.svg",
    demo: "https://demo-link-placeholder.example",
    github: "https://github-link-placeholder.example",
  },
  {
    title: "AI-assisted Engineering Workflow",
    description:
      "Набор процессов и документации для работы с Codex/Qwen/Spec Kit: постановка задач, QA-проверки, архитектурные планы и CI-first workflow.",
    highlights: [
      "agent task prompts",
      "QA checklists",
      "architecture docs",
      "deployment docs",
      "CI validation flow",
    ],
    image: "/projects/ai-toolkit.svg",
    demo: "https://demo-link-placeholder.example",
    github: "https://github-link-placeholder.example",
  },
] as const;

export const contacts = [
  { label: "GitHub", href: "https://github-link-placeholder.example" },
  { label: "Telegram", href: "https://telegram-link-placeholder.example" },
  { label: "Email", href: "mailto:email-placeholder@example.com" },
  { label: "Resume PDF", href: "/resume.pdf" },
] as const;
