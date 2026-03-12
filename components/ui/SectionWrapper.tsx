"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
  heading?: string;
  subheading?: string;
  centered?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  label,
  heading,
  subheading,
  centered = true,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(label || heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
          >
            {label && <p className="section-label">{label}</p>}
            {heading && (
              <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl md:text-5xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-4 max-w-2xl text-zinc-500 dark:text-zinc-400 text-base sm:text-lg leading-relaxed mx-auto">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
