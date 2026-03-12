"use client";

import { useLanguage } from "@/components/contexts/LanguageContext";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-slate-300/80 bg-blue-50/80 dark:border-white/[0.08] dark:bg-white/[0.04] p-0.5">
      {(["en", "fr"] as const).map((lang) => (
        <motion.button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
            locale === lang
              ? "text-slate-800 dark:text-zinc-100"
              : "text-slate-500 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-zinc-300"
          }`}
          whileTap={{ scale: 0.97 }}
        >
          {locale === lang && (
            <motion.span
              layoutId="lang-bg"
              className="absolute inset-0 bg-slate-200/90 dark:bg-white/10 rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative">{lang.toUpperCase()}</span>
        </motion.button>
      ))}
    </div>
  );
}
