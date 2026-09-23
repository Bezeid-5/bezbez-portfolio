"use client";

import { motion, MotionConfig, useScroll } from "framer-motion";

import { Contact } from "@/app/components/contact";
import { ArrowUpRight } from "@/app/components/icons";
import { Hero } from "@/app/components/hero";
import { Navigation } from "@/app/components/navigation";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/skills";

export function PortfolioPage() {
  const { scrollYProgress } = useScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Aller au contenu</a>
        <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: scrollYProgress }} />
        <div aria-hidden="true" className="site-texture" />
        <Navigation />
        <main id="main-content">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="site-footer">
          <div className="section-container footer-inner">
            <a aria-label="BezBez, retour à l’accueil" className="footer-brand" href="#accueil">
              <span className="footer-brand-mark">B</span>
              <span>BezBez<span className="brand-dot">.</span></span>
            </a>
            <span className="footer-copy">Conçu avec intention. Codé avec curiosité.</span>
            <a className="footer-top" href="#accueil"><span>Retour en haut</span><ArrowUpRight size={15} /></a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
