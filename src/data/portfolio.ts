export const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#projects", label: "Проекты" },
  { href: "#skills", label: "Навыки" },
  { href: "#contact", label: "Контакты" },
] as const;

export const techStack = ["React", "Next.js", "TypeScript", "Accessibility", "Technical SEO"] as const;

export const metrics = [
  { label: "Коммерческий опыт", value: "4+ года" },
  { label: "Production релизы", value: "20+" },
  { label: "Основной стек", value: "React / Next.js" },
  { label: "Фокус", value: "A11y + SEO + UX" },
] as const;

export const hero = {
  role: "Frontend Engineer",
  headline: "Павел Скударнов",
  subtitle:
    "Разрабатываю быстрые, доступные и SEO-ориентированные интерфейсы на React, Next.js и TypeScript.",
  supporting:
    "Работаю от задачи до production: архитектура UI, стабильность, качество релиза и последующая поддержка.",
} as const;

export const aboutText =
  "Frontend-инженер с опытом коммерческой разработки интерфейсов для SaaS и внутренних кабинетов. В работе делаю упор на предсказуемое поведение UI, читаемую архитектуру компонентов и надёжный production-процесс: типизация, QA-проверки, метрики качества, SEO и accessibility. Для меня важен не только внешний вид, но и то, как интерфейс живёт после релиза.";

export const experience = [
  {
    role: "Frontend Developer",
    company: "Product / Commercial Projects",
    period: "2021 — настоящее время",
    bullets: [
      "Проектировал и реализовывал адаптивные интерфейсы для dashboard-систем и кабинетов.",
      "Снижал time-to-release через переиспользуемые UI-компоненты и единые паттерны состояния.",
      "Вёл задачи с фокусом на accessibility, SEO и производительность до production-ввода.",
      "Участвовал в пост-релизной стабилизации: bugfix, UX-polish, доработка edge-cases.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance / Client Projects",
    period: "2019 — 2021",
    bullets: [
      "Делал промо- и корпоративные сайты под реальные бизнес-задачи.",
      "Интегрировал формы, адаптив, базовую аналитику и SEO-структуру страниц.",
      "Сопровождал проекты после релиза и закрывал критичные проблемы в проде.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
  },
  {
    title: "UI Engineering",
    items: ["Responsive UI", "Accessibility", "Semantic HTML", "Design Systems", "Animation", "Micro-interactions"],
  },
  {
    title: "Architecture & Quality",
    items: ["Component Architecture", "Feature-based Structure", "ESLint", "Prettier", "Testing", "CI"],
  },
  {
    title: "Product & SEO",
    items: ["Technical SEO", "Metadata", "Sitemap", "Performance", "Lighthouse", "UX"],
  },
] as const;

export const projects = [
  {
    title: "SEO Audit Platform",
    description:
      "Платформа технического SEO-аудита с очередями задач, защищённой выдачей отчётов и фокусом на стабильную обработку в production.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    implemented: [
      "Фоновая обработка SEO-аудитов через queue/worker модель",
      "Token-protected доступ к статусу и скачиванию отчётов",
      "Генерация PDF-отчётов с actionable структурой",
    ],
    decisions: [
      "Разделение публичного API и внутренних worker-процессов",
      "Retry-механика и fail-safe обработка нестабильных задач",
      "RU-first metadata/canonical структура для индексации",
    ],
    production: [
      "Контроль payload и валидации входных данных",
      "Защита report endpoints и снижение риска утечек",
      "Проверки lint/type/build перед выкладкой",
    ],
    impact: "Сделал аудит предсказуемым: отчёты генерируются и доставляются стабильнее, а публичный слой безопаснее.",
    image: "/projects/seo-audit.svg",
    actions: {
      demo: "https://github.com/pskudarnov",
      github: "https://github.com/pskudarnov",
      caseStudy: "#contact",
    },
  },
  {
    title: "FlowPilot Dashboard",
    description:
      "Dashboard showcase с реальными инженерными ограничениями: SSR, графики, адаптивная навигация и release-quality пайплайн.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    implemented: [
      "Dashboard-страницы с аналитическими блоками и chart-сценариями",
      "Мобильная навигация с доступным keyboard-поведением",
      "SEO assets: robots/sitemap/OG + структурированные metadata",
    ],
    decisions: [
      "SSR-safe рендеринг графиков без hydration-конфликтов",
      "Упор на mobile-first spacing и предсказуемые breakpoints",
      "Явные quality gates: lint + typecheck + build",
    ],
    production: [
      "Снижение layout shift в карточках и графиках",
      "Проверка external links и runtime-console чистоты",
      "Стабильный деплой-профиль для VPS/PM2",
    ],
    impact: "Собран как живой production-шаблон dashboard-проекта, который можно показывать клиентам и команде.",
    image: "/projects/affiliate-dashboard.svg",
    actions: {
      demo: "https://github.com/pskudarnov/flowpilot-dashboard",
      github: "https://github.com/pskudarnov/flowpilot-dashboard",
      caseStudy: "#contact",
    },
  },
  {
    title: "Frontend Portfolio",
    description:
      "Инженерное портфолио без шаблонного маркетинга: акцент на структуру, внятную подачу опыта и production-ready UI/UX.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "SEO"],
    implemented: [
      "Структурированные секции для HR/клиентского просмотра за 30 секунд",
      "Subtle motion с поддержкой prefers-reduced-motion",
      "Чистая metadata-конфигурация и корректные служебные страницы",
    ],
    decisions: [
      "Спокойная типографика и минималистичный контрастный UI",
      "Без overengineering: простые предсказуемые компоненты",
      "Семантика, focus-states и доступная якорная навигация",
    ],
    production: [
      "No placeholder links и валидация внешних кнопок",
      "404/loading/error сценарии для runtime-устойчивости",
      "Релизные проверки lint/type/build + ручной runtime QA",
    ],
    impact: "Портфолио выглядит как продуктовая инженерная работа, а не как tutorial landing.",
    image: "/projects/ai-toolkit.svg",
    actions: {
      demo: "https://github.com/pskudarnov/frontend-portfolio",
      github: "https://github.com/pskudarnov/frontend-portfolio",
      caseStudy: "#about",
    },
  },
] as const;

export const contacts = [
  { label: "GitHub", href: "https://github.com/pskudarnov" },
  { label: "Email", href: "mailto:pskudarnov@gmail.com" },
  { label: "Резюме PDF", href: "/resume.pdf" },
] as const;
