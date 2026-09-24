"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@/app/components/icons";
import { navItems, profile } from "@/app/data/portfolio";

type Theme = "light" | "dark";

const themeStorageKey = "portfolio-theme";
const visibleNavItems = navItems.filter(({ id }) => id !== "parcours");

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
  } catch {
    return null;
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const isDark = theme === "dark";

  useEffect(() => {
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (nextTheme: Theme) => {
      setTheme(nextTheme);
      document.documentElement.dataset.theme = nextTheme;
    };

    applyTheme(getStoredTheme() ?? (colorScheme.matches ? "dark" : "light"));

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (!getStoredTheme()) applyTheme(event.matches ? "dark" : "light");
    };

    const handleStoredThemeChange = (event: StorageEvent) => {
      if (event.key !== themeStorageKey) return;
      applyTheme(event.newValue === "dark" ? "dark" : "light");
    };

    colorScheme.addEventListener("change", handleSystemThemeChange);
    window.addEventListener("storage", handleStoredThemeChange);

    return () => {
      colorScheme.removeEventListener("change", handleSystemThemeChange);
      window.removeEventListener("storage", handleStoredThemeChange);
    };
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // The selected theme still applies for the current page when storage is unavailable.
    }
  }

  return (
    <button
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      aria-pressed={isDark}
      className={`theme-toggle ${isDark ? "is-dark" : ""}`}
      onClick={toggleTheme}
      title={isDark ? "Mode clair" : "Mode sombre"}
      type="button"
    >
      <span aria-hidden="true" className="theme-toggle-icon">
        <MoonIcon className="theme-icon-moon" size={17} />
        <SunIcon className="theme-icon-sun" size={17} />
      </span>
    </button>
  );
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const sections = visibleNavItems
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
          {visibleNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                aria-current={isActive ? "location" : undefined}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                href={`#${item.id}`}
                key={item.id}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
        </div>

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
            {visibleNavItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  aria-current={isActive ? "location" : undefined}
                  className={`mobile-nav-link ${isActive ? "is-active" : ""}`}
                  href={`#${item.id}`}
                  key={item.id}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mobile-nav-index">0{index + 1}</span>
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
