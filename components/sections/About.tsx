"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

const highlights = [
  { value: "5+", label: "Years experience" },
  { value: "20+", label: "Projects delivered" },
  { value: "100%", label: "Remote-friendly" },
];

export function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="about" label="About" heading="Who I am" centered={false}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed sm:text-lg">
            I&apos;m{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Harold Delacroix</span>,
            a backend-focused freelance developer who builds custom tools and
            applications for businesses. I specialise in turning complex
            requirements into clean, maintainable software — whether that&apos;s
            an internal ERP module, a full-stack web application, or a
            data-driven dashboard.
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            My background spans Java and Python on the server side, through to
            React and Next.js on the frontend, with PostgreSQL as my go-to
            database. I work independently, communicate clearly, and deliver on
            time.
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            If you have a problem that needs a software solution, I&apos;d love
            to hear about it.
          </p>

          <div className="mt-2">
            <Button variant="primary" size="md" onClick={scrollToContact}>
              Let&apos;s work together
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: "easeOut" }}
              className="flex items-center gap-5 rounded-2xl
                         border border-black/[0.07] bg-white shadow-sm
                         dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none
                         px-6 py-5 hover:border-accent/20 transition-colors"
            >
              <span className="font-heading text-3xl font-bold text-accent">
                {h.value}
              </span>
              <span className="text-sm text-zinc-500">{h.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
