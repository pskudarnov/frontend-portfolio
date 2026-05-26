"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./container";
import { navItems, getResumePath } from "@/data/portfolio";
import { track } from "@/lib/analytics";
import { Locale } from "@/i18n-config";

type NavbarDict = {
  hero: { headline: string };
  nav: Record<string, string>;
};

interface NavbarProps {
  lang: Locale;
  dict: NavbarDict;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize if it's open and we hit desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#07080d]/90 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link 
            href={lang === "ru" ? "/" : `/${lang}`} 
            onClick={(e) => {
              if (window.location.pathname === "/" || window.location.pathname === `/${lang}`) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }
            }}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-xs font-semibold text-zinc-100">
              PS
            </div>
            <span className="text-sm font-medium tracking-wide text-zinc-200">
              {dict.hero.headline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label={dict.nav.about} className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {dict.nav[item.key as keyof typeof dict.nav]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 rounded-md border border-zinc-800 bg-black/20 p-1 sm:flex">
              {(["en", "ru"] as const).map((l) => (
                <Link
                  key={l}
                  href={l === "ru" ? "/" : `/${l}`}
                  onClick={(e) => {
                    if (lang === l) {
                      e.preventDefault();
                    }
                  }}
                  className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase transition-colors ${
                    lang === l ? "bg-violet-500 text-white cursor-default" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <a
                href={getResumePath(lang)}
                target="_blank"
                onClick={() => track("resume_click")}
                className="inline-flex items-center gap-2 rounded-md bg-violet-500 px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                aria-label={lang === "ru" ? "Скачать резюме" : "Download resume"}
              >
                {lang === "ru" ? "Резюме PDF" : "Resume PDF"}
              </a>
            </div>

            {/* Burger Button */}
            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[64px] bottom-0 z-[100] flex flex-col bg-zinc-950 p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-semibold tracking-tight text-zinc-100 transition-colors hover:text-violet-400"
                >
                  {dict.nav[item.key as keyof typeof dict.nav]}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-6 pb-10 pt-8 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-500">{lang === 'ru' ? 'Язык' : 'Language'}</span>
                <div className="flex items-center gap-1 rounded-md border border-zinc-800 bg-black/20 p-1">
                  {(["en", "ru"] as const).map((l) => (
                    <Link
                      key={l}
                      href={l === "ru" ? "/" : `/${l}`}
                      onClick={(e) => {
                        if (lang === l) {
                          e.preventDefault();
                          setIsOpen(false);
                        }
                      }}
                      className={`rounded px-4 py-1.5 text-xs font-bold uppercase transition-colors ${
                        lang === l ? "bg-violet-500 text-white cursor-default" : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href={getResumePath(lang)}
                target="_blank"
                onClick={() => track("resume_click")}
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:bg-violet-400 active:scale-[0.98]"
                aria-label={lang === "ru" ? "Скачать резюме" : "Download resume"}
              >
                {lang === "ru" ? "Резюме PDF" : "Resume PDF"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
