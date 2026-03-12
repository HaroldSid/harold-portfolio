"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  delay?: number;
}

export function Card({
  children,
  className = "",
  interactive = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={
        interactive
          ? {
              y: -4,
              borderColor: "rgba(34, 211, 238, 0.35)",
              boxShadow: "0 0 28px rgba(34, 211, 238, 0.08)",
            }
          : {}
      }
      className={`rounded-xl border border-black/[0.07] bg-white dark:border-white/[0.07] dark:bg-white/[0.03] p-6 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
