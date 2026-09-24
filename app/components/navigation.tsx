"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems, profile } from "@/app/data/portfolio";
import { MenuIcon, XIcon } from "@/app/components/icons";

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: "-24% 0px -62% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 0.85],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a aria-label={`${profile.name}, retour à l’accueil`} className="brand" href="#accueil">
          <span aria-hidden="true" className="brand-mark">
            {profile.initials}
          </span>
          <span className="brand-name">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <nav aria-label="Navigation principale" className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                aria-current={isActive ? "location" : undefined}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                href={`#${item.id}`}
                key={item.id}
              >
                {isActive ? (
                  <motion.span
                    aria-hidden="true"
                    className="nav-active-indicator"
                    layoutId="active-nav-pill"
                    transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
                  />
                ) : null}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <a className="nav-cta" href="#contact">
          <span>Discutons</span>
          <span aria-hidden="true" className="nav-cta-dot" />
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="nav-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Navigation mobile"
            className="mobile-nav"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  aria-current={isActive ? "location" : undefined}
                  className={`mobile-nav-link ${isActive ? "is-active" : ""}`}
                  href={`#${item.id}`}
                  key={item.id}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mobile-nav-index">0{navItems.indexOf(item) + 1}</span>
                  <span>{item.label}</span>
                  {isActive ? <span aria-hidden="true" className="mobile-nav-active" /> : null}
                </a>
              );
            })}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
