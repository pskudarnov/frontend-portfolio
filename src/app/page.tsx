import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Briefcase,
  Code2,
  ExternalLink,
  GitBranch,
  Layers,
  Send,
  Settings,
  Sparkles,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import {
  aboutText,
  additionalInfo,
  contacts,
  experience,
  hero,
  metrics,
  navItems,
  projects,
  skillGroups,
  techStack,
} from "@/data/portfolio";

const skillIcons = [Code2, Layers, Wrench, Sparkles, Blocks] as const;

export default function HomePage() {
  const githubHref = contacts.find((contact) => contact.label === "GitHub")?.href ?? "https://github.com/pskudarnov";
  const telegramHref = contacts.find((contact) => contact.label === "Telegram")?.href ?? "https://t.me/pskudarnov";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#07080d]/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-xs font-semibold text-zinc-100">
              PS
            </div>
            <span className="text-sm font-medium tracking-wide text-zinc-200">Павел Скударнов</span>
          </div>

          <nav aria-label="Основная навигация" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="GitHub профиль"
            >
              <GitBranch className="size-4" />
              <span className="hidden md:inline">GitHub</span>
            </Link>
            <Link
              href={telegramHref}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 lg:inline-flex"
              aria-label="Telegram"
            >
              <Send className="size-4" /> Telegram
            </Link>
            <a
              href="/resume.pdf"
              className="hidden items-center gap-2 rounded-md bg-violet-500 px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 lg:inline-flex"
              aria-label="Скачать резюме"
            >
              Скачать резюме
            </a>
          </div>
        </Container>
        <Container className="pb-3 md:hidden">
          <nav aria-label="Мобильная навигация" className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </header>

      <main>
        <AnimatedSection className="pb-16 pt-14 sm:pt-18 md:pb-20 md:pt-20">
          <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-zinc-500 sm:text-sm">{hero.role}</p>
              <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">{hero.subtitle}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">{hero.supporting}</p>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                <a
                  href="#projects"
                  className="rounded-md bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  Смотреть кейсы
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  Связаться со мной
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-400 sm:mt-10">
                {techStack.map((tech) => (
                  <li key={tech} className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 sm:p-7">
              <div
                className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_75%_15%,rgba(139,92,246,0.24),transparent_42%)]"
                aria-hidden
              />
              <div className="relative rounded-xl border border-zinc-700/80 bg-[#0b0d14] shadow-[0_0_0_1px_rgba(139,92,246,0.12)]">
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  </div>
                  <p className="font-mono text-[11px] text-zinc-500">portfolio.tsx</p>
                </div>
                <div className="grid gap-4 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/avatar-dev.svg"
                      alt="Developer avatar"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-lg border border-zinc-700"
                    />
                    <div>
                      <p className="text-sm font-medium text-zinc-100">Pavel Skudarnov</p>
                      <p className="text-xs text-zinc-400">Senior Frontend Developer</p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-black/30 p-3 font-mono text-xs leading-6 text-zinc-300">
                    <p>
                      <span className="text-violet-300">const</span> profile = {"{"}
                    </p>
                    <p className="pl-3">stack: [&quot;react&quot;, &quot;next&quot;, &quot;typescript&quot;],</p>
                    <p className="pl-3">focus: [&quot;architecture&quot;, &quot;ssr&quot;, &quot;performance&quot;],</p>
                    <p className="pl-3">status: &quot;open to senior frontend roles&quot;</p>
                    <p>{"}"};</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="pb-10">
          <Container>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <article
                  key={metric}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-4 text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-700"
                >
                  {metric}
                </article>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="about" className="scroll-mt-24 border-y border-zinc-900 py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-zinc-100">Обо мне</h2>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-400">{aboutText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {additionalInfo.map((item) => (
                <article key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                  <p className="mt-2 text-sm text-zinc-200">{item.value}</p>
                </article>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="experience" className="scroll-mt-24 py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-zinc-100">Опыт</h2>
            <div className="mt-10 space-y-8 border-l border-zinc-800 pl-6">
              {experience.map((item) => (
                <article key={item.role} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-violet-500" aria-hidden />
                  <p className="text-sm text-zinc-500">{item.period}</p>
                  <h3 className="mt-1 text-xl font-medium text-zinc-100">{item.role}</h3>
                  <p className="text-zinc-400">{item.company}</p>
                  <ul className="mt-4 space-y-2 text-zinc-400">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="skills" className="scroll-mt-24 border-y border-zinc-900 py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-zinc-100">Навыки</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index] ?? Code2;

                return (
                  <article
                    key={group.title}
                    className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 transition-all duration-200 hover:border-violet-500/70"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-violet-300" aria-hidden />
                      <h3 className="text-lg font-medium text-zinc-100">{group.title}</h3>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-300">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-full border border-zinc-700 px-3 py-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="projects" className="scroll-mt-24 py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-zinc-100">Ключевые проекты и кейсы</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/85 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:shadow-[0_16px_40px_-24px_rgba(139,92,246,0.55)]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="flex h-full flex-col p-5">
                    <h3 className="text-xl font-medium text-zinc-100">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-1">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-zinc-500">Highlights</p>
                    <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.actions.demo ? (
                        <Link
                          href={project.actions.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1 rounded-md border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        >
                          Открыть demo <ExternalLink className="size-3.5" />
                        </Link>
                      ) : null}
                      {project.actions.github ? (
                        <Link
                          href={project.actions.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1 rounded-md border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        >
                          GitHub <GitBranch className="size-3.5" />
                        </Link>
                      ) : null}
                      {project.actions.caseStudy ? (
                        <Link
                          href={project.actions.caseStudy}
                          className="inline-flex items-center justify-center gap-1 rounded-md bg-violet-500/90 px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        >
                          Обсудить кейс <ArrowUpRight className="size-3.5" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="contact" className="scroll-mt-24 py-20">
          <Container>
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 text-center sm:p-10">
              <h2 className="text-2xl font-semibold text-zinc-100 sm:text-3xl">Есть проект или предложение?</h2>
              <p className="mt-4 text-zinc-400">
                Открыт к frontend-задачам, enterprise-продуктам, проектной работе и техническим консультациям.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {contacts.map((contact) => (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("/") || contact.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={contact.href.startsWith("/") || contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  >
                    {contact.label}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </AnimatedSection>
      </main>

      <footer className="border-t border-zinc-900 py-8">
        <Container className="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Павел Скударнов</p>
          <p className="inline-flex items-center gap-2">
            <Briefcase className="size-4" /> Frontend Engineer
            <Blocks className="size-4" />
            <Settings className="size-4" />
          </p>
        </Container>
      </footer>
    </>
  );
}
