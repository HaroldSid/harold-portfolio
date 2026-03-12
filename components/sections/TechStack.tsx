"use client";

import { Server, Layout, Database } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TECH_STACK } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Server, Layout, Database };

export function TechStack() {
  return (
    <SectionWrapper
      id="tech"
      label="Toolbox"
      heading="Tech Stack"
      subheading="The technologies I use to build reliable, modern software."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {TECH_STACK.map((group, gi) => {
          const Icon = iconMap[group.icon];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-5 rounded-2xl
                         border border-black/[0.07] bg-white shadow-sm
                         dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none
                         p-7"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  {Icon && <Icon size={18} strokeWidth={1.75} />}
                </div>
                <h3 className="font-heading text-base font-semibold text-zinc-800 dark:text-zinc-200">
                  {group.category}
                </h3>
              </div>

              {/* Tech items */}
              <ul className="flex flex-col gap-3">
                {group.items.map((item, ii) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: gi * 0.1 + ii * 0.07,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3 rounded-lg
                               border border-black/[0.05] bg-black/[0.03]
                               dark:border-white/[0.05] dark:bg-white/[0.03]
                               px-4 py-2.5
                               hover:border-accent/20 hover:bg-accent/5 transition-all duration-200"
                  >
                    <span className="text-base w-6 text-center select-none" aria-hidden>
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
