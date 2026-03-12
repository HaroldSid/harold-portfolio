"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/contexts/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated dot-grid background — reads the current theme from the DOM
  // so it renders the right dot colour in both dark and light mode
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check live theme so the dots adapt when toggled
      const isDark = document.documentElement.classList.contains("dark");

      const spacing = 36;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.hypot(x - canvas.width / 2, y - canvas.height / 2);
          const pulse = Math.sin(dist / 80 - t * 0.8) * 0.5 + 0.5;

          // Darker dots in light mode, cyan-tinted dots in dark mode
          if (isDark) {
            const alpha = 0.04 + pulse * 0.06;
            ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
          } else {
            const alpha = 0.06 + pulse * 0.08;
            ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
          }

          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-blue-100 dark:bg-[#0a0a0a]">
      {/* Animated dot-grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--tw-bg) 70%, var(--tw-bg) 100%)",
        }}
        aria-hidden
      />
      {/* Separate overlay for light/dark bg fade — light: blue-100 */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(219,234,254,0) 0%, rgba(219,234,254,0.7) 65%, rgba(219,234,254,1) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none dark:block hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,10,10,0) 0%, rgba(10,10,10,0.7) 65%, rgba(10,10,10,1) 100%)",
        }}
        aria-hidden
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl font-bold leading-tight tracking-tight text-slate-800 dark:text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {t.hero.name}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300">
              {t.hero.surname}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 font-heading text-xl font-medium text-slate-600 dark:text-zinc-400 sm:text-2xl md:text-3xl tracking-wide"
          >
            {t.hero.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl mx-auto text-base text-slate-600 dark:text-zinc-500 leading-relaxed sm:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              {t.hero.viewProjects}
              <ArrowDown size={16} />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              {t.hero.contactMe}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("services")}
      >
        <span className="text-xs text-slate-500 dark:text-zinc-600 tracking-widest uppercase">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-slate-500 dark:text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
