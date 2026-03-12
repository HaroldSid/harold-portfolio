import type { Config } from "tailwindcss";

const config: Config = {
  // Enable class-based dark mode so we can force dark by adding "dark" to <html>
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom accent: cyan-400/500 for CTAs, links, highlights
      colors: {
        accent: {
          DEFAULT: "#22d3ee", // cyan-400
          dark: "#06b6d4",    // cyan-500
        },
        surface: {
          DEFAULT: "#111113", // main card/section bg
          subtle: "#18181b",  // zinc-900
        },
      },
      fontFamily: {
        // Space Grotesk for headings (loaded in layout.tsx)
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        // Geist Sans for body text (loaded in layout.tsx)
        body: ["var(--font-geist-sans)", "sans-serif"],
      },
      // Smooth keyframes for the hero background gradient drift
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
