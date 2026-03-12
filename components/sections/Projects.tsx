"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="My Work"
      heading="Projects"
      subheading="A selection of things I've built — real tools, real use-cases."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300
                       border border-black/[0.07] bg-white shadow-sm
                       dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none
                       hover:border-accent/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]"
          >
            {/* Screenshot */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-heading text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Feature pills */}
              <ul className="flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-md bg-black/[0.04] border border-black/[0.06] px-2.5 py-1 text-xs text-zinc-600
                               dark:bg-white/[0.04] dark:border-white/[0.06] dark:text-zinc-400"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/10 border border-accent/20 px-3 py-0.5 text-xs font-medium text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-1">
                <Button
                  variant="secondary"
                  size="sm"
                  href={project.url}
                  external={project.url !== "#"}
                  className="w-full justify-center"
                >
                  View Project
                  <ExternalLink size={13} />
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
