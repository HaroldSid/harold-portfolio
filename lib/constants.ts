// ─────────────────────────────────────────────────────────────────────────────
// Site-wide data constants
// Edit this file to update content without touching component files.
// ─────────────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "web-apps",
    icon: "Monitor",
    title: "Web Applications",
    description:
      "Full-stack web apps built for real workflows — fast, reliable, and tailored to your exact needs.",
  },
  {
    id: "business-software",
    icon: "BarChart2",
    title: "Business Software",
    description:
      "Custom internal tools, ERP modules, dashboards, and automation systems that save your team time.",
  },
  {
    id: "websites",
    icon: "Globe",
    title: "Websites",
    description:
      "Clean, responsive, and performant websites and landing pages that represent your brand professionally.",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
// Add or remove projects here — each will render as a card in the Projects section.

export const PROJECTS = [
  {
    id: "one-piece-tcg",
    title: "One Piece TCG Deck Builder",
    description:
      "A full-featured web app to build, manage, and battle with One Piece trading card game decks. Supports real-time multiplayer play.",
    features: ["Deck builder", "Card search & filter", "Multiplayer play"],
    tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    image: "/images/projects/project-1.svg",
    url: "#",
  },
  {
    id: "inventory-erp",
    title: "Inventory ERP Module",
    description:
      "A stock management system built for SMBs. Tracks inventory in real time, provides reporting dashboards, and integrates with existing infrastructure via REST.",
    features: ["Inventory tracking", "Admin dashboard", "Reporting & export"],
    tech: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    image: "/images/projects/project-2.svg",
    url: "#",
  },
  {
    id: "python-mini-games",
    title: "Python Mini Games",
    description:
      "A collection of small games built as part of teaching Python programming — Tic-Tac-Toe, Snake, and more, each reinforcing core language concepts.",
    features: ["Tic-Tac-Toe", "Snake", "Number guessing game"],
    tech: ["Python", "pygame", "CLI"],
    image: "/images/projects/project-3.svg",
    url: "#",
  },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────

export const TECH_STACK = [
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "Node.js", icon: "⬡" },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Prisma", icon: "◆" },
    ],
  },
];

// ─── Social links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  github: "https://github.com/harolddelacroix",
  linkedin: "https://linkedin.com/in/harolddelacroix",
  email: "mailto:hello@harolddelacroix.dev",
};
