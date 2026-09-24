import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { profile } from "@/app/data/portfolio";

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
  title: `${profile.name} — ${profile.role}`,
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
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    locale: "fr_FR",
    siteName: profile.name,
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
