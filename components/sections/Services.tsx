"use client";

import { Monitor, BarChart2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICES } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Monitor, BarChart2, Globe };

export function Services() {
  return (
    <SectionWrapper
      id="services"
      label="What I do"
      heading="Services"
      subheading="From idea to production — I cover the full spectrum of custom software development."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{
                y: -5,
                borderColor: "rgba(34, 211, 238, 0.3)",
                boxShadow: "0 0 32px rgba(34, 211, 238, 0.07)",
              }}
              className="group relative flex flex-col gap-5 rounded-2xl
                         border border-black/[0.07] bg-white
                         dark:border-white/[0.07] dark:bg-white/[0.02]
                         p-8 transition-colors shadow-sm dark:shadow-none"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl
                              bg-accent/10 border border-accent/20 text-accent
                              group-hover:bg-accent/15 transition-colors">
                {Icon && <Icon size={22} strokeWidth={1.75} />}
              </div>

              <h3 className="font-heading text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {service.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed">
                {service.description}
              </p>

              {/* Animated bottom border on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-b-2xl
                              bg-gradient-to-r from-accent/60 to-transparent
                              transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
