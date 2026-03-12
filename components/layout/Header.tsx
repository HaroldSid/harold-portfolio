"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/components/contexts/LanguageContext";

const NAV_KEYS = ["services", "projects", "tech", "about"] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    setMobileOpen(false);
    // Only delay scroll when closing the mobile menu so touch devices don't ignore it
    if (mobileOpen) {
      window.setTimeout(scrollToSection, 10);
    } else {
      scrollToSection();
    }
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-300/80 bg-blue-50/90 backdrop-blur-lg dark:border-white/[0.06] dark:bg-[#0a0a0a]/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading text-lg font-bold text-slate-800 dark:text-zinc-100 tracking-tight hover:text-accent transition-colors"
        >
          HD<span className="text-accent">.</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-zinc-400 rounded-lg
                         transition-all duration-200 hover:text-slate-800 dark:hover:text-zinc-100
                         hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              {t.nav[NAV_KEYS[i]]}
            </button>
          ))}

          <div className="ml-2 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            onClick={() => handleNavClick("#contact")}
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-lg bg-accent text-zinc-950
                       transition-all duration-200 hover:bg-accent-dark
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {t.nav.hireMe}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-100
                       hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-black/[0.06] dark:border-white/[0.06]
                       bg-blue-50/95 dark:bg-[#0a0a0a]/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-zinc-400 rounded-lg
                             hover:text-slate-800 dark:hover:text-zinc-100
                             hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors"
                >
                  {t.nav[NAV_KEYS[i]]}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-4 py-3 text-sm font-semibold rounded-lg bg-accent text-zinc-950
                           hover:bg-accent-dark transition-colors"
              >
                {t.nav.hireMe}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
