import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Briefcase,
  Code2,
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
  contacts,
  experience,
  hero,
  navItems,
  projects,
  skillGroups,
  techStack,
} from "@/data/portfolio";

const skillIcons = [Layers, Sparkles, Wrench, Code2] as const;

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#07080d]/80 backdrop-blur-md">
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
                className="rounded-sm text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="https://github-link-placeholder.example"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="GitHub профиль"
            >
              <GitBranch className="size-4" />
              <span className="hidden md:inline">GitHub</span>
            </Link>
            <Link
              href="https://telegram-link-placeholder.example"
              target="_blank"
              className="hidden items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:inline-flex"
              aria-label="Telegram"
            >
              <Send className="size-4" /> Telegram
            </Link>
            <a
              href="/resume.pdf"
              className="hidden items-center gap-2 rounded-md bg-violet-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:inline-flex"
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
                className="rounded-md border border-zinc-800 px-3 py-1 text-xs text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </header>

      <main>
        <AnimatedSection className="pb-24 pt-20">
          <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">{hero.role}</p>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-zinc-50 sm:text-7xl">
                {hero.headline}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">{hero.subtitle}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">{hero.supporting}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-md bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  Смотреть проекты
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  Связаться со мной
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-2 text-sm text-zinc-400">
                {techStack.map((tech) => (
                  <li key={tech} className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8">
              <div
                className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_70%_10%,rgba(139,92,246,0.22),transparent_45%)]"
                aria-hidden
              />
              <div className="relative grid place-items-center rounded-xl border border-zinc-800 bg-[#0b0d14] p-10">
                <Image
                  src="/avatar-placeholder.svg"
                  alt="Аватар Павла Скударнова"
                  width={240}
                  height={240}
                  priority
                  className="h-52 w-52"
                />
              </div>
              <div className="relative mt-6 rounded-lg border border-zinc-800 bg-black/40 p-4 font-mono text-xs text-zinc-300">
                <p>{"const profile = {"}</p>
                <p className="pl-4 text-violet-300">name: &quot;Pavel Skudarnov&quot;,</p>
                <p className="pl-4 text-violet-300">role: &quot;Frontend Developer&quot;,</p>
                <p className="pl-4 text-violet-300">focus: [&quot;SEO&quot;, &quot;Performance&quot;, &quot;A11y&quot;]</p>
                <p>{"};"}</p>
              </div>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="about" className="border-y border-zinc-900 py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-zinc-100">Обо мне</h2>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-400">{aboutText}</p>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="experience" className="py-20">
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

        <AnimatedSection id="skills" className="border-y border-zinc-900 py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-zinc-100">Навыки</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index];

                return (
                  <article
                    key={group.title}
                    className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 transition hover:border-violet-500/70"
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

        <AnimatedSection id="projects" className="py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-zinc-100">Проекты</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 transition duration-300 hover:scale-[1.01] hover:border-violet-500/70"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-medium text-zinc-100">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-zinc-500">Highlights</p>
                    <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex gap-4 text-sm">
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-zinc-200 transition hover:text-white"
                      >
                        Demo <ArrowUpRight className="size-4" />
                      </Link>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-zinc-200 transition hover:text-white"
                      >
                        GitHub <GitBranch className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-20">
          <Container>
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-10 text-center">
              <h2 className="text-3xl font-semibold text-zinc-100">Есть проект или предложение?</h2>
              <p className="mt-4 text-zinc-400">
                Открыт к frontend-задачам, проектной работе и продуктовой разработке.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {contacts.map((contact) => (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("/") ? undefined : "_blank"}
                    className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
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
