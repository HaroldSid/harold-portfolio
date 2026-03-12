"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/components/contexts/LanguageContext";

const NAV_KEYS = ["services", "projects", "tech", "about"] as const;

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-300/80 dark:border-white/[0.06] bg-blue-100 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-heading text-xl font-bold text-slate-800 dark:text-zinc-100 hover:text-accent transition-colors"
            >
              {t.hero.name} {t.hero.surname}<span className="text-accent">.</span>
            </a>
            <p className="mt-1 text-sm text-slate-600">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-800 dark:hover:text-zinc-100 transition-colors"
              >
                {t.nav[NAV_KEYS[i]]}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-800 dark:hover:text-zinc-100
                         hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-800 dark:hover:text-zinc-100
                         hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              aria-label="Send email"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-800 dark:hover:text-zinc-100
                         hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="p-2 rounded-lg text-slate-600 hover:text-accent hover:bg-accent/10 transition-all"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 dark:text-zinc-600">
          © {new Date().getFullYear()} {t.hero.name} {t.hero.surname}. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
