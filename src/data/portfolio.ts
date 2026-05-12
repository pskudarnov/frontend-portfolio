export const navItems = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export const techStack = ["React", "Next.js", "TypeScript", "SSR", "REST API"] as const;

export const experience = [
  {
    company: "Freelance / Private Projects",
    techKey: "freelance",
  },
  {
    company: "SberTech",
    techKey: "sber",
  },
  {
    company: "Rambler&Co",
    techKey: "rambler",
  },
] as const;

export const skillGroups = [
  {
    key: "frontend",
    items: ["React", "Next.js", "TypeScript", "SSR", "REST API"],
  },
  {
    key: "ui",
    items: ["Responsive UI", "Design Systems", "Accessibility", "Animation"],
  },
  {
    key: "quality",
    items: ["Testing", "Code Review", "Refactoring", "Release Checks"],
  },
  {
    key: "seo",
    items: ["UI/UX", "Performance", "Technical SEO", "Core Web Vitals"],
  },
] as const;

export interface Project {
  title: string;
  image: string;
  techStack: readonly string[];
  actions: {
    demo: string;
    github: string;
    caseStudy?: string;
  };
}

export const projects: readonly Project[] = [
  {
    title: "Frontend Portfolio",
    image: "/projects/ai-toolkit.svg",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "SEO"],
    actions: {
      demo: "https://pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/frontend-portfolio",
    },
  },
  {
    title: "FlowPilot",
    image: "/projects/affiliate-dashboard.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    actions: {
      demo: "https://flowpilot.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/flowpilot-dashboard",
    },
  },
  {
    title: "NordShop",
    image: "/projects/seo-audit.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind", "i18n"],
    actions: {
      demo: "https://nordshop.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/nordshop-store",
    },
  },
  {
    title: "StayFinder",
    image: "/projects/affiliate-dashboard.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind", "UI/UX"],
    actions: {
      demo: "https://stayfinder.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/stayfinder-booking",
    },
  },
  {
    title: "DevDocs",
    image: "/projects/ai-toolkit.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Docs UI"],
    actions: {
      demo: "https://devdocs.pavel-skudarnov.ru/",
      github: "https://github.com/pskudarnov/devdocs-portal",
    },
  },
];

export const contacts = [
  { label: "Telegram", href: "https://t.me/PSkudarov", key: "tg" },
  { label: "GitHub", href: "https://github.com/pskudarnov", key: "gh" },
  { label: "Email", href: "mailto:pskudarnov@gmail.com", key: "email" },
  { label: "Resume PDF", href: "/resume.pdf", key: "resume" },
] as const;

export const getResumePath = (lang: string) => 
  lang === "ru" ? "/resume_ru.pdf" : "/resume_en.pdf";
