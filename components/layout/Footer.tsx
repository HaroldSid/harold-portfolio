"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.06] bg-zinc-50 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-accent transition-colors"
            >
              Harold Delacroix<span className="text-accent">.</span>
            </a>
            <p className="mt-1 text-sm text-zinc-500">
              Freelance Developer · harolddelacroix.dev
            </p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.label}
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
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100
                         hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100
                         hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              aria-label="Send email"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100
                         hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="p-2 rounded-lg text-zinc-500 hover:text-accent hover:bg-accent/10 transition-all"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Harold Delacroix. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
