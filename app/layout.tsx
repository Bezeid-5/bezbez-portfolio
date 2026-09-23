import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

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

export const metadata: Metadata = {
  title: "BezBez — Développeur Full-Stack",
  description:
    "BezBez transforme des idées complexes en produits numériques clairs, rapides et agréables à utiliser.",
  keywords: ["BezBez", "développeur full-stack", "Next.js", "TypeScript", "React", "portfolio"],
  authors: [{ name: "BezBez" }],
  creator: "BezBez",
  openGraph: {
    title: "BezBez — Développeur Full-Stack",
    description: "Des produits numériques clairs, rapides et agréables à utiliser.",
    locale: "fr_FR",
    siteName: "BezBez",
    type: "website",
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
    <html className={`${inter.variable} ${spaceGrotesk.variable}`} lang="fr">
      <body>{children}</body>
    </html>
  );
}
