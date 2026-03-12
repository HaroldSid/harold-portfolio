"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

// High-level stats reflecting Harold's CV:
// - Several years in industrial automation and client-facing roles
// - A few years focused on software development
// - Bilingual (French / English), based in Brussels
const highlights = [
  { value: "3+", label: "Years in software" },
  { value: "5+", label: "Years with clients & industry" },
  { value: "2", label: "Languages (FR / EN)" },
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
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Harold Delacroix
            </span>
            , a Brussels-based developer with a background in industrial
            engineering and automation. After several years delivering and
            validating monitoring systems on client sites, I moved into software
            development and now focus on building backend services, internal
            tools, and web applications for teams and businesses.
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;ve worked on Java backends, geographic and banking
            applications, HR tools, and public-sector projects, collaborating
            closely with DevOps, support, and non-technical stakeholders. My
            stack spans Java / Spring Boot, Python, and Node.js on the server
            side, through to React, Next.js, and modern front-end tooling —
            usually with PostgreSQL or SQL databases underneath.
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I enjoy understanding real-world constraints, translating them into
            clear requirements, and turning those into robust features that are
            easy to maintain. If you need someone who can talk to users, reason
            about systems, and ship code, I&apos;d love to hear about your
            project.
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
              transition={{
                duration: 0.45,
                delay: 0.15 + i * 0.08,
                ease: "easeOut",
              }}
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
