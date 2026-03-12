"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="about" label={t.about.label} heading={t.about.heading} centered={false}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed sm:text-lg">
            {t.about.p1}
          </p>
          <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            {t.about.p2}
          </p>
          <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            {t.about.p3}
          </p>

          <div className="mt-2">
            <Button variant="primary" size="md" onClick={scrollToContact}>
              {t.about.cta}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1"
        >
          {t.about.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.15 + i * 0.08,
                ease: "easeOut",
              }}
              className="flex items-center gap-5 rounded-2xl
                         border border-slate-300/70 bg-blue-50 shadow-sm
                         dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none
                         px-6 py-5 hover:border-accent/20 transition-colors"
            >
              <span className="font-heading text-3xl font-bold text-accent">
                {h.value}
              </span>
              <span className="text-sm text-slate-600">{h.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
