export const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
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
    title: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "SSR", "REST API"],
  },
  {
    title: "UI Engineering",
    items: ["Responsive UI", "Design Systems", "Accessibility", "Animation"],
  },
  {
    title: "Product Quality",
    items: ["Testing", "Code Review", "Refactoring", "Release Checks"],
  },
  {
    title: "Product & Performance",
    items: ["UI/UX", "Performance", "Technical SEO", "Core Web Vitals"],
  },
] as const;

export interface Project {
  title: string;
  description: string;
  techStack: readonly string[];
  implemented: readonly string[];
  decisions?: readonly string[];
  production?: readonly string[];
  impact?: string;
  image: string;
  actions: {
    demo: string;
    github: string;
    caseStudy?: string;
  };
}

export const projects: readonly Project[] = [
  {
    title: "Frontend Portfolio",
    description:
      "Этот сайт — персональное портфолио frontend-инженера с фокусом на живую подачу опыта, аккуратный UI, адаптивность, SEO и понятную структуру для рекрутеров и клиентов.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "SEO"],
    implemented: [
      "Структура страницы для быстрого просмотра опыта и проектов",
      "Адаптивный интерфейс, subtle motion и доступная навигация",
      "SEO metadata, sitemap, robots и production-ready базовая конфигурация",
    ],
    image: "/projects/ai-toolkit.svg",
    actions: {
      demo: "https://pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/frontend-portfolio",
    },
  },
  {
    title: "FlowPilot",
    description:
      "Dashboard-интерфейс для аналитики и управления рабочими процессами. Акцент сделан на понятную структуру данных, адаптивные виджеты, графики и аккуратный production UI.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    implemented: [
      "Dashboard-страницы с аналитическими виджетами и графиками",
      "Адаптивная навигация и responsive layout",
      "Состояния загрузки, пустые состояния и аккуратная UI-подача",
    ],
    image: "/projects/affiliate-dashboard.svg",
    actions: {
      demo: "https://flowpilot.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/flowpilot-dashboard",
    },
  },
  {
    title: "NordShop",
    description:
      "E-commerce showcase для бренда товаров рабочего пространства. Проект сфокусирован на премиальной витрине, карточках товаров, корзине, мультиязычности и аккуратном shopping experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "i18n"],
    implemented: [
      "Главная страница, каталог, карточки товаров и продуктовые страницы",
      "Корзина, состояния интерфейса и responsive shopping flow",
      "Поддержка мультиязычности, темы оформления и визуальный редизайн витрины",
    ],
    image: "/projects/seo-audit.svg",
    actions: {
      demo: "https://nordshop.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/nordshop-store",
    },
  },
  {
    title: "StayFinder",
    description:
      "Booking-интерфейс для поиска и выбора жилья. Основной акцент — удобный поиск, фильтры, карточки объектов, responsive layout и визуально приятный сценарий выбора.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "UI/UX"],
    implemented: [
      "Поисковый сценарий, фильтры и карточки объектов",
      "Адаптивная сетка и mobile-friendly интерфейс выбора",
      "Редизайн в сторону более премиального booking experience",
    ],
    image: "/projects/affiliate-dashboard.svg",
    actions: {
      demo: "https://stayfinder.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/stayfinder-booking",
    },
  },
  {
    title: "DevDocs",
    description:
      "Документационный сайт для developer tooling / SaaS-продукта. Акцент на понятную навигацию, структуру контента, читаемость, быстрый доступ к разделам и аккуратный technical UI.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Docs UI"],
    implemented: [
      "Структурированная документационная главная и разделы контента",
      "Навигация, readable typography и быстрый доступ к ключевым блокам",
      "Визуальная подача в стиле современного developer product",
    ],
    image: "/projects/ai-toolkit.svg",
    actions: {
      demo: "https://devdocs.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/devdocs-platform",
    },
  },
];

export const contacts = [
  { label: "GitHub", href: "https://github.com/pskudarnov" },
  { label: "Email", href: "mailto:pskudarnov@gmail.com" },
  { label: "Резюме PDF", href: "/resume.pdf" },
] as const;
