export const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#projects", label: "Проекты" },
  { href: "#skills", label: "Навыки" },
  { href: "#contact", label: "Контакты" },
] as const;

export const techStack = ["React", "Next.js", "TypeScript", "UI/UX", "Performance"] as const;

export const metrics = [
  { label: "Опыт в разработке", value: "более 5 лет" },
  { label: "Production релизы", value: "20+" },
  { label: "Основной стек", value: "React / Next.js" },
  { label: "Фокус", value: "UI + UX + Performance" },
] as const;

export const hero = {
  role: "Frontend Engineer",
  headline: "Павел Скударнов",
  subtitle:
    "Разрабатываю современные web-интерфейсы и production-ready приложения на React, Next.js и TypeScript.",
  supporting:
    "Работаю с frontend-задачами от идеи и UI до стабильного релиза: архитектура компонентов, адаптив, производительность и аккуратный пользовательский опыт.",
} as const;

export const aboutText =
  "Frontend Engineer с опытом разработки web-приложений на React и Next.js. Занимаюсь созданием современных интерфейсов, SSR-приложений и развитием frontend-архитектуры. Есть опыт работы как в продуктовых командах, так и на freelance-проектах: разработка с нуля, редизайн существующих сервисов, оптимизация производительности и улучшение пользовательского опыта. Помимо frontend-разработки, интересуюсь UI/UX и стараюсь делать интерфейсы не только функциональными, но и визуально аккуратными и удобными для пользователя.";

export const experience = [
  {
    role: "Frontend Engineer",
    company: "Freelance / собственные проекты",
    period: "2024 — настоящее время",
    bullets: [
      "Разрабатываю и развиваю web-проекты на React / Next.js для клиентов и собственных продуктов.",
      "Создаю адаптивные интерфейсы, дизайн-системы и переиспользуемые UI-компоненты.",
      "Делаю редизайн существующих сервисов, улучшаю UX и визуальную подачу продукта.",
      "Оптимизирую производительность frontend-приложений и базовые SEO-сценарии.",
      "Довожу интерфейсы до production-состояния: адаптивность, мультиязычность, темы оформления, интеграция с API и базовая SEO-подготовка.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "SberTech",
    period: "2020 — 2024",
    bullets: [
      "Участвовал в разработке внутренних web-платформ и frontend-сервисов компании.",
      "Разрабатывал интерфейсы на React и Next.js, поддерживал и развивал frontend-архитектуру.",
      "Интегрировал frontend с backend API и работал с SSR-сценариями.",
      "Создавал переиспользуемые UI-компоненты и улучшал пользовательский опыт.",
      "Участвовал в code review, командной разработке и оптимизации производительности интерфейсов.",
    ],
  },
  {
    role: "Frontend Developer / QA Engineer",
    company: "Rambler&Co",
    period: "2017 — 2019",
    bullets: [
      "Начинал как QA Engineer: функциональное тестирование, тестовые сценарии, дефекты и проверка требований.",
      "Позже перешёл во frontend-разработку и участвовал в развитии клиентских приложений.",
      "Работал с legacy-кодом, помогал переводить части проекта на React и упрощать поддержку интерфейсов.",
      "Опыт в тестировании помог лучше понимать качество продукта, edge-cases и стабильность интерфейсов перед релизом.",
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
    items: ["Component Architecture", "Feature-based Structure", "ESLint", "Prettier", "Testing", "Code Review"],
  },
  {
    title: "Product & SEO",
    items: ["UI/UX", "Technical SEO", "Metadata", "Sitemap", "Performance", "Lighthouse"],
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
