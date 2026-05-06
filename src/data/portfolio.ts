export const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#projects", label: "Кейсы" },
  { href: "#skills", label: "Навыки" },
  { href: "#contact", label: "Контакты" },
] as const;

export const techStack = ["React", "Next.js", "TypeScript", "SSR", "GraphQL", "Frontend Architecture"] as const;

export const metrics = [
  "8+ лет опыта",
  "SberTech / Rambler&Co",
  "React / Next.js / SSR",
  "Architecture / Code Review",
] as const;

export const hero = {
  role: "Senior Frontend Developer",
  headline: "Павел Скударнов",
  subtitle:
    "Разрабатываю масштабируемые frontend-приложения на React, Next.js и TypeScript для enterprise-продуктов.",
  supporting:
    "Фокус: frontend architecture, SSR, performance, accessibility, code review и развитие сложных UI-систем.",
} as const;

export const aboutText =
  "Senior Frontend Developer с 8+ годами опыта в разработке высоконагруженных веб-приложений. Специализируюсь на React, Next.js, TypeScript, SSR и построении масштабируемой frontend-архитектуры. Работал над enterprise-продуктами в SberTech и Rambler&Co, участвовал в разработке GitVerse и 21-school, проводил code review, менторил разработчиков и занимался оптимизацией производительности. Имею опыт как разработки продуктов с нуля, так и масштабного рефакторинга legacy-систем.";

export const additionalInfo = [
  {
    label: "Образование",
    value: "МИЭТ, магистр",
  },
  {
    label: "Английский",
    value: "B1",
  },
  {
    label: "Формат",
    value: "Remote / Hybrid / Product teams",
  },
] as const;

export const experience = [
  {
    role: "Инженер-разработчик / Senior Frontend Developer",
    company: "SberTech",
    period: "Январь 2020 — настоящее время",
    bullets: [
      "Разрабатываю и развиваю frontend-модули enterprise-продуктов на React, Next.js и TypeScript.",
      "Работал над платформой GitVerse: SSR, сложная бизнес-логика, Effector, Tailwind CSS и взаимодействие с backend-командой.",
      "Участвовал в развитии образовательной платформы 21-school: React, GraphQL, Redux и styled-components.",
      "Проектировал структуру клиентских приложений, переиспользуемые компоненты и масштабируемую frontend-архитектуру.",
      "Проводил code review, участвовал в архитектурных обсуждениях и менторил менее опытных разработчиков.",
      "Работал в кросс-функциональной команде 250+ человек.",
    ],
  },
  {
    role: "Инженер-разработчик клиентских приложений",
    company: "Rambler&Co",
    period: "Сентябрь 2018 — декабрь 2019",
    bullets: [
      "Разрабатывал новый функционал и участвовал в определении архитектуры клиентских приложений.",
      "Участвовал в переводе проектов с Backbone на React и снижении технического долга.",
      "Проводил масштабный рефакторинг legacy-кода, аудит зависимостей и удаление устаревших библиотек.",
      "Проектировал новую архитектуру запросов к серверу и типизировал ответы и запросы API.",
      "Коммуницировал с backend-разработчиками, оценивал задачи и предлагал альтернативные технические решения.",
    ],
  },
  {
    role: "Младший инженер по тестированию",
    company: "Rambler&Co",
    period: "Август 2017 — сентябрь 2018",
    bullets: [
      "Проводил функциональное тестирование веб-продуктов.",
      "Готовил тестовые сценарии, собирал требования и документировал поведение систем.",
      "Вёл дефекты и взаимодействовал с командой разработки.",
      "Полученный QA-бэкграунд помогает внимательнее относиться к качеству интерфейсов, edge cases и пользовательским сценариям.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Core Frontend",
    items: ["HTML5", "CSS3", "Sass/SCSS", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "Frameworks & State",
    items: ["Next.js", "SSR", "Redux", "Effector", "GraphQL", "styled-components", "Tailwind CSS"],
  },
  {
    title: "Architecture & Quality",
    items: [
      "Frontend Architecture",
      "Modular Architecture",
      "Code Review",
      "Refactoring",
      "Legacy Migration",
      "API Contracts",
      "Webpack",
      "Git",
    ],
  },
  {
    title: "UI Engineering",
    items: [
      "Responsive UI",
      "Accessibility",
      "Semantic HTML",
      "Design Systems",
      "Reusable Components",
      "Performance Optimization",
    ],
  },
  {
    title: "Product & Team",
    items: [
      "Enterprise Products",
      "Cross-functional Teams",
      "Mentoring",
      "Technical Discussions",
      "QA Background",
      "Documentation",
    ],
  },
] as const;

export const projects = [
  {
    title: "GitVerse — платформа для работы с исходным кодом",
    description:
      "Enterprise-платформа для работы с репозиториями и исходным кодом. Участвовал в разработке ключевых frontend-модулей на Next.js, React, SSR, Tailwind CSS и Effector.",
    techStack: ["Next.js", "React", "SSR", "Effector", "Tailwind CSS"],
    highlights: [
      "Разработка и развитие ключевых модулей платформы",
      "Проектирование масштабируемой frontend-архитектуры",
      "SSR и оптимизация производительности",
      "Сложная бизнес-логика и управление состоянием через Effector",
      "Code review, API discussions и менторинг разработчиков",
    ],
    image: "/projects/gitverse.svg",
    actions: {
      demo: "https://gitverse.ru",
      github: "",
      caseStudy: "#contact",
    },
  },
  {
    title: "21-school — образовательная платформа",
    description:
      "Образовательная платформа, где я занимался архитектурой клиентского приложения, интеграцией с GraphQL API, Redux-состоянием и созданием переиспользуемой компонентной базы.",
    techStack: ["React", "GraphQL", "Redux", "styled-components"],
    highlights: [
      "Проектирование структуры клиентского приложения",
      "Интеграция с backend через GraphQL",
      "Участие в проектировании API-контрактов",
      "Создание переиспользуемой компонентной базы",
      "Оптимизация производительности и улучшение UX",
    ],
    image: "/projects/school-21.svg",
    actions: {
      demo: "https://21-school.ru",
      github: "",
      caseStudy: "#contact",
    },
  },
  {
    title: "Legacy Migration — Backbone to React",
    description:
      "Кейс по переводу legacy-проектов на React в Rambler&Co: снижение технического долга, рефакторинг, аудит зависимостей и новая архитектура клиент-серверного взаимодействия.",
    techStack: ["React", "Backbone", "TypeScript", "API", "Webpack"],
    highlights: [
      "Перевод проектов с Backbone на React",
      "Масштабный рефакторинг legacy-кода",
      "Аудит зависимостей и удаление устаревших библиотек",
      "Новая архитектура запросов к серверу",
      "Полная типизация ответов и запросов API",
    ],
    image: "/projects/legacy-migration.svg",
    actions: {
      demo: "",
      github: "",
      caseStudy: "#contact",
    },
  },
  {
    title: "SEO Audit Platform — personal project",
    description:
      "Личный SaaS-проект для автоматического SEO-аудита сайтов, генерации PDF-отчётов и проверки технических SEO-факторов.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PDF", "SEO"],
    highlights: [
      "Next.js App Router и TypeScript",
      "Token-protected report pages",
      "PDF report generation",
      "i18n, metadata, sitemap и canonical URLs",
      "Worker/retry architecture для фоновой обработки",
    ],
    image: "/projects/seo-audit.svg",
    actions: {
      demo: "http://64.188.63.171:3000",
      github: "",
      caseStudy: "#contact",
    },
  },
] as const;

export const contacts = [
  { label: "GitHub", href: "https://github.com/pskudarnov" },
  { label: "Telegram", href: "https://t.me/pskudarnov" },
  { label: "Email", href: "mailto:pawel.skudarnov@yandex.ru" },
  { label: "Resume PDF", href: "/resume.pdf" },
] as const;
