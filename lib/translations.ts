// ─────────────────────────────────────────────────────────────────────────────
// Translations for EN / FR. Used by LanguageContext and useLanguage().
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = "en" | "fr";

export const translations = {
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      tech: "Tech Stack",
      about: "About",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    hero: {
      badge: "Available for freelance work",
      name: "Harold",
      surname: "Delacroix",
      title: "Freelance Developer",
      tagline: "I build web applications, business tools, and custom software.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      scroll: "Scroll",
    },
    services: {
      label: "What I do",
      heading: "Services",
      subheading:
        "From idea to production — I cover the full spectrum of custom software development.",
      items: [
        {
          title: "Web Applications",
          description:
            "Full-stack web apps built for real workflows — fast, reliable, and tailored to your exact needs.",
        },
        {
          title: "Business Software",
          description:
            "Custom internal tools, ERP modules, dashboards, and automation systems that save your team time.",
        },
        {
          title: "Websites",
          description:
            "Clean, responsive, and performant websites and landing pages that represent your brand professionally.",
        },
      ],
    },
    projects: {
      label: "My Work",
      heading: "Projects",
      subheading: "A selection of things I've built — real tools, real use-cases.",
      viewProject: "View Project",
      items: [
        {
          title: "One Piece TCG Deck Builder",
          description:
            "A full-featured web app to build, manage, and battle with One Piece trading card game decks. Supports real-time multiplayer play.",
          features: ["Deck builder", "Card search & filter", "Multiplayer play"],
        },
        {
          title: "Inventory ERP Module",
          description:
            "A stock management system built for SMBs. Tracks inventory in real time, provides reporting dashboards, and integrates with existing infrastructure via REST.",
          features: ["Inventory tracking", "Admin dashboard", "Reporting & export"],
        },
        {
          title: "Python Mini Games",
          description:
            "A collection of small games built as part of teaching Python programming — Tic-Tac-Toe, Snake, and more, each reinforcing core language concepts.",
          features: ["Tic-Tac-Toe", "Snake", "Number guessing game"],
        },
      ],
    },
    techStack: {
      label: "Toolbox",
      heading: "Tech Stack",
      subheading: "The technologies I use to build reliable, modern software.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
      },
    },
    about: {
      label: "About",
      heading: "Who I am",
      p1: "I'm Harold Delacroix, a Brussels-based developer with a background in industrial engineering and automation. After several years delivering and validating monitoring systems on client sites, I moved into software development and now focus on building backend services, internal tools, and web applications for teams and businesses.",
      p2: "I've worked on Java backends, geographic and banking applications, HR tools, and public-sector projects, collaborating closely with DevOps, support, and non-technical stakeholders. My stack spans Java / Spring Boot, Python, and Node.js on the server side, through to React, Next.js, and modern front-end tooling — usually with PostgreSQL or SQL databases underneath.",
      p3: "I enjoy understanding real-world constraints, translating them into clear requirements, and turning those into robust features that are easy to maintain. If you need someone who can talk to users, reason about systems, and ship code, I'd love to hear about your project.",
      cta: "Let's work together",
      highlights: [
        { value: "3+", label: "Years in software" },
        { value: "5+", label: "Years with clients & industry" },
        { value: "2", label: "Languages (FR / EN)" },
      ],
    },
    contact: {
      label: "Get in touch",
      heading: "Contact Me",
      subheading:
        "Have a project in mind? Let's talk. I typically reply within 24 hours.",
      form: {
        name: "Your name",
        email: "Email address",
        message: "Message",
        placeholderName: "John Smith",
        placeholderEmail: "you@example.com",
        placeholderMessage: "Tell me about your project…",
        send: "Send Message",
        sending: "Sending…",
        successTitle: "Message sent!",
        successMessage: "Thanks for reaching out. I'll get back to you soon.",
        sendAnother: "Send another",
        error: "Something went wrong. Please try again or email me directly.",
      },
      sidebarTitle: "Or reach out directly",
      fastResponse:
        "Fast response. I typically reply within 24 hours. For urgent work, mention it in your message.",
    },
    footer: {
      tagline: "Freelance Developer · harolddelacroix.dev",
      copyright: "Built with Next.js & Tailwind CSS.",
    },
  },
  fr: {
    nav: {
      services: "Services",
      projects: "Projets",
      tech: "Tech Stack",
      about: "À propos",
      contact: "Contact",
      hireMe: "Me contacter",
    },
    hero: {
      badge: "Disponible en freelance",
      name: "Harold",
      surname: "Delacroix",
      title: "Développeur freelance",
      tagline:
        "Je conçois des applications web, des outils métier et des logiciels sur mesure.",
      viewProjects: "Voir les projets",
      contactMe: "Me contacter",
      scroll: "Défiler",
    },
    services: {
      label: "Ce que je fais",
      heading: "Services",
      subheading:
        "De l’idée à la mise en production — je couvre tout le spectre du développement logiciel sur mesure.",
      items: [
        {
          title: "Applications web",
          description:
            "Applications web full-stack conçues pour de vrais flux de travail — rapides, fiables et adaptées à vos besoins.",
        },
        {
          title: "Logiciels métier",
          description:
            "Outils internes, modules ERP, tableaux de bord et systèmes d’automatisation qui font gagner du temps à vos équipes.",
        },
        {
          title: "Sites web",
          description:
            "Sites et landing pages propres, responsives et performants qui représentent votre marque avec professionnalisme.",
        },
      ],
    },
    projects: {
      label: "Réalisations",
      heading: "Projets",
      subheading: "Une sélection de ce que j’ai construit — de vrais outils, de vrais cas d’usage.",
      viewProject: "Voir le projet",
      items: [
        {
          title: "One Piece TCG Deck Builder",
          description:
            "Une application web complète pour créer, gérer et jouer avec des decks du jeu de cartes One Piece. Prise en charge du multijoueur en temps réel.",
          features: ["Construction de decks", "Recherche et filtres de cartes", "Multijoueur"],
        },
        {
          title: "Module ERP inventaire",
          description:
            "Système de gestion des stocks pour PME. Suivi en temps réel, tableaux de bord et rapports, intégration via REST.",
          features: ["Suivi des stocks", "Tableau de bord admin", "Rapports et export"],
        },
        {
          title: "Mini-jeux Python",
          description:
            "Collection de petits jeux réalisés dans le cadre de l’enseignement de la programmation Python — morpion, serpent, etc.",
          features: ["Morpion", "Serpent", "Jeu du nombre"],
        },
      ],
    },
    techStack: {
      label: "Boîte à outils",
      heading: "Tech Stack",
      subheading: "Les technologies que j’utilise pour construire des logiciels fiables et modernes.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Base de données",
      },
    },
    about: {
      label: "À propos",
      heading: "Qui je suis",
      p1: "Je suis Harold Delacroix, développeur basé à Bruxelles, avec un passé en ingénierie industrielle et en automatisation. Après plusieurs années à déployer et valider des systèmes de monitoring chez des clients, je me suis orienté vers le développement logiciel. Aujourd’hui je conçois des backends, des outils internes et des applications web pour les équipes et les entreprises.",
      p2: "J’ai travaillé sur des backends Java, des applications géographiques et bancaires, des outils RH et des projets pour le secteur public, en collaboration avec les équipes DevOps, support et les parties prenantes non techniques. Ma stack va de Java / Spring Boot, Python et Node.js côté serveur à React, Next.js et les outils front modernes, avec le plus souvent PostgreSQL ou d’autres bases SQL.",
      p3: "J’aime comprendre les contraintes du terrain, les transformer en exigences claires et en fonctionnalités robustes et maintenables. Si vous cherchez quelqu’un qui sait parler aux utilisateurs, raisonner sur les systèmes et livrer du code, j’aimerais entendre parler de votre projet.",
      cta: "Travaillons ensemble",
      highlights: [
        { value: "3+", label: "Années en développement" },
        { value: "5+", label: "Années avec clients et industrie" },
        { value: "2", label: "Langues (FR / EN)" },
      ],
    },
    contact: {
      label: "Me contacter",
      heading: "Contact",
      subheading:
        "Un projet en tête ? Parlons-en. Je réponds en général sous 24 h.",
      form: {
        name: "Votre nom",
        email: "Adresse e-mail",
        message: "Message",
        placeholderName: "Jean Dupont",
        placeholderEmail: "vous@exemple.com",
        placeholderMessage: "Parlez-moi de votre projet…",
        send: "Envoyer",
        sending: "Envoi…",
        successTitle: "Message envoyé !",
        successMessage: "Merci pour votre message. Je vous répondrai bientôt.",
        sendAnother: "Envoyer un autre",
        error: "Une erreur s’est produite. Réessayez ou écrivez-moi directement.",
      },
      sidebarTitle: "Ou me joindre directement",
      fastResponse:
        "Réponse rapide. Je réponds en général sous 24 h. Pour une demande urgente, indiquez-le dans votre message.",
    },
    footer: {
      tagline: "Développeur freelance · harolddelacroix.dev",
      copyright: "Construit avec Next.js et Tailwind CSS.",
    },
  },
};

export type Translations = (typeof translations)["en"];
