export interface Skill {
  name: string;
  short: string;
  focus: string;
  detail: string;
}

export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "bases-de-donnees"
  | "outils"
  | "ia-ml";

export interface SkillCategory {
  id: SkillCategoryId;
  index: string;
  title: string;
  description: string;
  icon: "code" | "layers" | "database" | "wrench" | "brain";
  items: Skill[];
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "demo";
}

export interface Project {
  index: string;
  name: string;
  category: string;
  year: string;
  context: string;
  description: string;
  stack: string[];
  links?: ProjectLink[];
}

export interface Experience {
  index: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export const profile = {
  name: "Mohameden Debagh",
  firstName: "Mohameden",
  lastName: "Debagh",
  initials: "MD",
  role: "Développeur Full-Stack — IA & Cloud",
  cvTitle: "Développeur Full-Stack — Web & Mobile",
  summary:
    "Développeur Full-Stack spécialisé dans les applications web et mobiles, l’intelligence artificielle appliquée et la sécurité des systèmes. Je conçois des solutions robustes et évolutives, avec un intérêt particulier pour les problèmes techniques complexes.",
  image: "/profile.jpg",
  cvUrl: "/cv.pdf",
} as const;

export const contactInfo: ContactInfo = {
  email: "bezeidsb23@gmail.com",
  phone: "+222 36212585",
  location: "Nouakchott, Mauritanie",
};

export const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "parcours", label: "Parcours" },
  { id: "expertises", label: "Expertises" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const;

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    description:
      "Des interfaces web et mobiles accessibles, rapides et centrées sur l’usage.",
    icon: "code",
    items: [
      {
        name: "HTML",
        short: "HT",
        focus: "Structure",
        detail: "Construction de structures sémantiques et accessibles pour les interfaces web.",
      },
      {
        name: "CSS",
        short: "CSS",
        focus: "Interface",
        detail: "Mise en page responsive, animations et adaptation aux différents écrans.",
      },
      {
        name: "JavaScript",
        short: "JS",
        focus: "Logique",
        detail: "Interactions, état client et logique d’interface dans le navigateur.",
      },
      {
        name: "React.js",
        short: "R",
        focus: "Interfaces",
        detail: "Composants réutilisables et applications web structurées autour d’états prévisibles.",
      },
      {
        name: "Next.js",
        short: "N",
        focus: "Applications",
        detail: "Développement d’applications modernes avec le rendu côté serveur et des parcours optimisés.",
      },
      {
        name: "Angular",
        short: "A",
        focus: "Applications",
        detail: "Création d’interfaces structurées et maintenables avec Angular.",
      },
    ],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend",
    description:
      "Des API et services conçus pour porter des règles métier claires et fiables.",
    icon: "layers",
    items: [
      {
        name: "Python",
        short: "PY",
        focus: "Services",
        detail: "Développement d’APIs, d’outils et de traitements côté serveur avec Python.",
      },
      {
        name: "Django",
        short: "DJ",
        focus: "Applications",
        detail: "Applications web structurées, avec gestion des données et des fonctionnalités serveur.",
      },
      {
        name: "Flask",
        short: "FL",
        focus: "API",
        detail: "Services web légers et contrôlés pour des besoins ciblés.",
      },
      {
        name: "FastAPI",
        short: "FA",
        focus: "API",
        detail: "APIs asynchrones et documentées pour connecter applications et modèles IA.",
      },
      {
        name: "PHP",
        short: "PHP",
        focus: "Backend",
        detail: "Développement de fonctionnalités serveur et maintenance d’applications web.",
      },
      {
        name: "Node.js",
        short: "ND",
        focus: "Services",
        detail: "Services JavaScript côté serveur et intégration entre web et APIs.",
      },
      {
        name: "Spring Boot",
        short: "SB",
        focus: "Applications",
        detail: "Services Java structurés pour des applications tueuses d’échelle.",
      },
      {
        name: "Firebase",
        short: "FB",
        focus: "Services",
        detail: "Authentification, stockage et services managés pour accélérer le développement.",
      },
    ],
  },
  {
    id: "bases-de-donnees",
    index: "03",
    title: "Bases de données",
    description:
      "Des modèles de données explicites et des requêtes adaptées aux usages réels.",
    icon: "database",
    items: [
      {
        name: "SQL",
        short: "SQL",
        focus: "Requêtes",
        detail: "Écriture et optimisation de requêtes relationnelles pour des données fiables.",
      },
      {
        name: "MongoDB",
        short: "MDB",
        focus: "Documentaire",
        detail: "Modélisation de données documentaires pour des structures de données flexibles.",
      },
      {
        name: "PostgreSQL",
        short: "PG",
        focus: "Relationnel",
        detail: "Schémas relationnels robustes pour des applications transactionnelles.",
      },
      {
        name: "Firebase Firestore",
        short: "FS",
        focus: "Temps réel",
        detail: "Données synchronisées et requêtes adaptées aux applications temps réel.",
      },
    ],
  },
  {
    id: "outils",
    index: "04",
    title: "Outils",
    description:
      "Un workflow versionné, reproductible et compatible avec les chaînes CI/CD.",
    icon: "wrench",
    items: [
      {
        name: "Git",
        short: "G",
        focus: "Versionnement",
        detail: "Suivi des changements et organisation lisible du travail avec des branches.",
      },
      {
        name: "GitHub",
        short: "GH",
        focus: "Collaboration",
        detail: "Gestion du code, des revues et des workflows de collaboration.",
      },
      {
        name: "GitLab",
        short: "GL",
        focus: "CI/CD",
        detail: "Gestion de dépôts et automatisation des pipelines d’intégration et livraison.",
      },
      {
        name: "Docker",
        short: "D",
        focus: "Environnements",
        detail: "Conteneurisation des dépendances et reproductibilité des environnements.",
      },
      {
        name: "CI/CD",
        short: "CI",
        focus: "Déploiement",
        detail: "Automatisation des tests, de la construction et du déploiement des applications.",
      },
    ],
  },
  {
    id: "ia-ml",
    index: "05",
    title: "IA/ML",
    description:
      "Des modèles et agents appliqués à des cas d’usage concrets, avec supervision.",
    icon: "brain",
    items: [
      {
        name: "LLM / Fine-Tuning",
        short: "LLM",
        focus: "IA générative",
        detail: "Intégration et adaptation de grands modèles de langage à des besoins métier.",
      },
      {
        name: "Whisper",
        short: "WSP",
        focus: "Transcription",
        detail: "Transcription et traitement de la parole dans des applications IA.",
      },
      {
        name: "TensorFlow",
        short: "TF",
        focus: "Machine learning",
        detail: "Conception et intégration de modèles de machine learning et de deep learning.",
      },
      {
        name: "Agents autonomes",
        short: "AI",
        focus: "Automatisation",
        detail: "Systèmes autonomes pour l’homologation, la détection et l’auto-supervision de systèmes IA.",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    index: "01",
    organization: "SelamPay",
    role: "Infrastructure, IA & Sécurité",
    period: "2025 — présent",
    summary:
      "Projet de fin d’études et projets intégrateurs autour de l’infrastructure, de l’intelligence artificielle et de la supervision.",
    highlights: [
      "Conception et développement d’un agent autonome pour l’homologation automatisée et l’auto-supervision des systèmes IA, intégré à OpenClaw.",
      "Mise en place, avec l’équipe technique, d’une infrastructure locale sur un cluster de VMs Proxmox.",
      "Développement d’une application mobile de collecte de données et de validation d’objets par IA.",
      "Participation aux projets Sécurité & Supervision : SOC/SIEM, plateforme OSINT multi-domaines et outil d’audit réseau interne.",
    ],
    stack: ["OpenClaw", "Proxmox", "Flutter", "TensorFlow Lite", "FastAPI", "SOC/SIEM"],
  },
  {
    index: "02",
    organization: "Startup Main",
    role: "Stagiaire en Développement / IA",
    period: "2025",
    summary:
      "Développement de produits éducatifs et sportifs avec des fonctionnalités d’intelligence artificielle intégrées.",
    highlights: [
      "Développement d’une plateforme éducative Edutech avec des fonctions d’IA.",
      "Création d’un système Autocorrect pour la correction automatisée.",
      "Développement d’une application de gestion de tournois sportifs de pétanque.",
    ],
    stack: ["Django", "React", "Next.js", "Whisper", "LLM"],
  },
  {
    index: "03",
    organization: "Ministère de la Transformation Numérique",
    role: "Stagiaire Développeur",
    period: "2024",
    summary:
      "Participation à la conception d’un système de gestion des plaintes pour les citoyens, clients et employés.",
    highlights: [
      "Création d’un parcours de réception, de suivi et de résolution des plaintes formulées par les utilisateurs.",
    ],
    stack: [],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    name: "Agent autonome pour l’homologation et l’auto-supervision de systèmes IA",
    category: "IA appliquée & supervision",
    year: "2025",
    context: "Projet de fin d’études",
    description:
      "Agent autonome pour l’homologation automatisée et l’auto-supervision de systèmes IA. Conçu pour s’intégrer au pipeline OpenClaw pour la détection, les tests, le déploiement, le rollback et la supervision.",
    stack: ["IA générative", "Agents autonomes", "Intégration OpenClaw"],
  },
  {
    index: "02",
    name: "Application de gestion des rendez-vous médicaux",
    category: "Système de planification",
    year: "2025",
    context: "Projet intégrateur",
    description:
      "Application de gestion des rendez-vous médicaux avec planification et suivi des consultations entre patients et médecins.",
    stack: ["Développement web", "Gestion métier"],
  },
  {
    index: "03",
    name: "Système de gestion des plaintes citoyennes",
    category: "Système de gestion",
    year: "2024",
    context: "Projet institutionnel",
    description:
      "Système de gestion des plaintes citoyennes avec réception, suivi et résolution des demandes des citoyens, clients et employés.",
    stack: ["Développement web", "Gestion métier"],
  },
  {
    index: "04",
    name: "Application de gestion des revenus immobiliers",
    category: "Application métier",
    year: "2025",
    context: "Projet intégrateur",
    description:
      "Application de gestion des revenus immobiliers avec suivi des loyers et génération de rapports financiers.",
    stack: ["Développement web", "Gestion des données"],
  },
  {
    index: "05",
    name: "Système Autocorrect",
    category: "Correction automatisée",
    year: "2025",
    context: "Projet startup",
    description:
      "Système de correction automatisée développé dans le cadre d’un stage en développement et IA.",
    stack: ["IA", "Django", "React"],
  },
];
