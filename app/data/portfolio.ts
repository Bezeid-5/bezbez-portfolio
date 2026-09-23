export type Skill = {
  name: string;
  short: string;
  detail: string;
  level: string;
};

export type SkillCategory = {
  id: "langages" | "frameworks" | "outils";
  index: string;
  title: string;
  description: string;
  icon: "code" | "layers" | "wrench";
  items: Skill[];
};

export type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  metric: string;
  accent: string;
  visual: "asteria" | "mello" | "kanso" | "tide";
  wide?: boolean;
};

export const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "expertises", label: "Expertises" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const;

export const skillCategories: SkillCategory[] = [
  {
    id: "langages",
    index: "01",
    title: "Langages",
    description:
      "Des bases solides pour des expériences rapides, accessibles et faciles à maintenir.",
    icon: "code",
    items: [
      {
        name: "TypeScript",
        short: "TS",
        detail: "Typage strict, generics et architecture qui reste lisible quand le projet grandit.",
        level: "Avancé",
      },
      {
        name: "JavaScript",
        short: "JS",
        detail: "Des interfaces vivantes, du prototypage à l’optimisation des détails d’interaction.",
        level: "Avancé",
      },
      {
        name: "Python",
        short: "PY",
        detail: "Des scripts utiles, des APIs pragmatiques et des outils qui automatisent le travail répétitif.",
        level: "Intermédiaire",
      },
      {
        name: "SQL",
        short: "SQL",
        detail: "Des données bien modélisées et des requêtes qui restent compréhensibles à l’échelle.",
        level: "Intermédiaire",
      },
    ],
  },
  {
    id: "frameworks",
    index: "02",
    title: "Frameworks",
    description:
      "Je compose la bonne combinaison pour livrer vite sans sacrifier la qualité du produit.",
    icon: "layers",
    items: [
      {
        name: "Next.js",
        short: "N",
        detail: "Des applications App Router rapides, un rendu progressif et un score Lighthouse qui reste au vert.",
        level: "Expert",
      },
      {
        name: "React",
        short: "R",
        detail: "Des composants réutilisables, des états prévisibles et des interfaces qui donnent envie d’être utilisées.",
        level: "Expert",
      },
      {
        name: "Node.js",
        short: "N",
        detail: "Des APIs robustes, une logique métier claire et des flux de données maîtrisés.",
        level: "Avancé",
      },
      {
        name: "Tailwind CSS",
        short: "T",
        detail: "Des systèmes visuels cohérents, des tokens partagés et moins de dette CSS.",
        level: "Avancé",
      },
    ],
  },
  {
    id: "outils",
    index: "03",
    title: "Outils",
    description:
      "Un workflow pragmatique pour passer de la première maquette au déploiement en production.",
    icon: "wrench",
    items: [
      {
        name: "Git",
        short: "G",
        detail: "Des branches lisibles, des commits utiles et une collaboration qui ne bloque personne.",
        level: "Avancé",
      },
      {
        name: "Docker",
        short: "D",
        detail: "Des environnements reproductibles, du développement jusqu’à la mise en production.",
        level: "Intermédiaire",
      },
      {
        name: "PostgreSQL",
        short: "PG",
        detail: "Des schémas pragmatiques, des indexes ciblés et des données qui restent fiables.",
        level: "Avancé",
      },
      {
        name: "Vercel",
        short: "V",
        detail: "Des déploiements simples, des previews utiles et un feedback rapide après chaque merge.",
        level: "Avancé",
      },
      {
        name: "GitHub Actions",
        short: "CI",
        detail: "Des checks automatiques pour garder la qualité même quand le calendrier s’accélère.",
        level: "Intermédiaire",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    name: "Asteria",
    category: "SaaS · Product design",
    year: "2025",
    description:
      "Un cockpit de pilotage qui transforme les données dispersées en décisions lisibles, en temps réel.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "https://github.com/bezbez/asteria",
    demo: "https://asteria.example.com",
    metric: "+38% d’adoption",
    accent: "#B1EDF8",
    visual: "asteria",
    wide: true,
  },
  {
    index: "02",
    name: "Mello",
    category: "Marketplace · Mobile first",
    year: "2024",
    description:
      "Une expérience de découvertefluid pour les talents indépendants, de la première recherche au premier brief.",
    stack: ["React", "Node.js", "Stripe", "Figma"],
    github: "https://github.com/bezbez/mello",
    demo: "https://mello.example.com",
    metric: "4,9/5 de satisfaction",
    accent: "#83DDEB",
    visual: "mello",
  },
  {
    index: "03",
    name: "Kanso",
    category: "Collaboration · B2B SaaS",
    year: "2024",
    description:
      "Un espace de travail calme pour les équipes créatives : moins de bruit, plus de décisions partagées.",
    stack: ["Next.js", "TypeScript", "WebSocket", "Redis"],
    github: "https://github.com/bezbez/kanso",
    demo: "https://kanso.example.com",
    metric: "2× plus rapide",
    accent: "#D8F8F5",
    visual: "kanso",
  },
  {
    index: "04",
    name: "TideOps",
    category: "Observabilité · Dashboard",
    year: "2023",
    description:
      "Un tableau de bord qui donne aux équipes techniques le signal dont elles ont besoin, sans le bruit.",
    stack: ["React", "GraphQL", "Python", "Docker"],
    github: "https://github.com/bezbez/tideops",
    demo: "https://tideops.example.com",
    metric: "99,98% de disponibilité",
    accent: "#A7F0E6",
    visual: "tide",
    wide: true,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    handle: "@bezbez",
    href: "https://github.com/bezbez",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    handle: "BezBez",
    href: "https://www.linkedin.com/in/bezbez",
    icon: "linkedin" as const,
  },
  {
    label: "Email",
    handle: "hello@bezbez.dev",
    href: "mailto:hello@bezbez.dev",
    icon: "mail" as const,
  },
];
