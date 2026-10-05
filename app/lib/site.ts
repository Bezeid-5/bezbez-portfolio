/**
 * Configuration du site : URL de production et profils sociaux.
 * Utilisée par les metadata, sitemap, robots, JSON-LD et l'image Open Graph,
 * afin d'éviter toute duplication d'URL en dur.
 */
export const siteConfig = {
  url: "https://debagh-portfolio.vercel.app",
  locale: "fr_FR",
  social: {
    github: "https://github.com/Bezeid-5",
    linkedin: "https://www.linkedin.com/in/mohameden-debagh-8591a535a",
  },
} as const;

export const siteUrl = siteConfig.url;