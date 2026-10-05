import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { contactInfo, profile } from "@/app/data/portfolio";
import { siteConfig, siteUrl } from "@/app/lib/site";

import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const themeInitScript = `
(function () {
  try {
    var storedTheme = localStorage.getItem("portfolio-theme");
    var theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (error) {}
})();
`;

const documentTitle = `${profile.name} — ${profile.role}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.summary,
  url: siteUrl,
  image: `${siteUrl}${profile.image}`,
  email: contactInfo.email,
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nouakchott",
    addressCountry: "MR",
  },
  knowsAbout: [
    "Développement web",
    "Développement mobile",
    "Architecture applicative",
    "Intelligence artificielle appliquée",
    "Cloud",
    "Sécurité des systèmes",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: documentTitle,
  description: profile.summary,
  keywords: [
    profile.name,
    "développeur full-stack",
    "développement web",
    "développement mobile",
    "intelligence artificielle",
    "cloud",
    "sécurité",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: documentTitle,
    description: profile.summary,
    locale: siteConfig.locale,
    siteName: profile.name,
    type: "website",
    url: siteUrl,
    // og:image est injecté automatiquement par app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: documentTitle,
    description: profile.summary,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#031f2d" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable}`} lang="fr" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{themeInitScript}</Script>
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
