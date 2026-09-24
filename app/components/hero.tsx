"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";

import { ArrowRight, ArrowUpRight, DownloadIcon, MapPinIcon } from "@/app/components/icons";
import { contactInfo, experiences, profile, skillCategories } from "@/app/data/portfolio";

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.075,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const [profileUnavailable, setProfileUnavailable] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="accueil">
      <div aria-hidden="true" className="hero-grid" />
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: [0, 24, -10, 0], y: [0, -14, 16, 0] }}
        className="hero-halo hero-halo-one"
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: [0, -16, 18, 0], y: [0, 18, -6, 0] }}
        className="hero-halo hero-halo-two"
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="section-container hero-layout">
        <motion.div
          animate="visible"
          className="hero-copy"
          initial="hidden"
          variants={heroContainer}
        >
          <motion.div className="eyebrow" variants={heroItem}>
            <span aria-hidden="true" className="eyebrow-mark" />
            <span>Web · Mobile · IA · Cloud</span>
          </motion.div>

          <motion.p className="hero-kicker" variants={heroItem}>
            Bonjour, je suis
          </motion.p>
          <motion.h1 className="hero-name" variants={heroItem}>
            <span>{profile.firstName}</span>
            <span className="hero-name-accent">{profile.lastName}<em>.</em></span>
          </motion.h1>
          <motion.p className="hero-role" variants={heroItem}>
            Développeur Full-Stack <span>— IA & Cloud</span>
          </motion.p>
          <motion.p className="hero-description" variants={heroItem}>
            {profile.summary}
          </motion.p>

          <motion.div className="hero-actions" variants={heroItem}>
            <motion.a
              className="button button-primary"
              href="#projets"
              transition={{ duration: 0.2 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Voir mes projets</span>
              <span aria-hidden="true" className="button-icon">
                <ArrowRight size={17} />
              </span>
            </motion.a>
            <motion.a
              className="button button-secondary"
              download
              href={profile.cvUrl}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Télécharger mon CV</span>
              <DownloadIcon size={16} />
            </motion.a>
            <motion.a
              className="button button-secondary"
              href="#contact"
              transition={{ duration: 0.2 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Me contacter</span>
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div className="hero-trust" variants={heroItem}>
            <div className="hero-trust-item">
              <strong>{String(experiences.length).padStart(2, "0")}</strong>
              <span>expériences</span>
            </div>
            <div aria-hidden="true" className="hero-trust-divider" />
            <div className="hero-trust-item">
              <strong>{skillCategories.length}<span>+</span></strong>
              <span>domaines techniques</span>
            </div>
            <div aria-hidden="true" className="hero-trust-divider" />
            <div className="hero-trust-item hero-trust-location">
              <MapPinIcon size={15} />
              <span>{contactInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="portrait-stage"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.25, duration: shouldReduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div aria-hidden="true" className="portrait-halo" />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            aria-hidden="true"
            className="portrait-orbit portrait-orbit-outer"
            transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          >
            <span />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
            className="portrait-frame"
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <div className="portrait-image-wrap">
              {profileUnavailable ? (
                <div aria-label="Portrait de Mohameden Debagh indisponible" className="portrait-fallback" role="img">
                  <span>{profile.initials}</span>
                  <small>Photo à venir</small>
                </div>
              ) : (
                <Image
                  alt={`Portrait de ${profile.name}`}
                  className="portrait-image"
                  height={1104}
                  onError={() => setProfileUnavailable(true)}
                  preload
                  src={profile.image}
                  width={973}
                />
              )}
            </div>
            <div className="portrait-frame-caption">
              <span className="caption-spark" />
              <span>{profile.name}</span>
            </div>
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            className="floating-note floating-note-focus"
            transition={{ delay: 0.7, duration: 5, ease: "easeInOut", repeat: Infinity }}
          >
            <span>
              <small>Focus</small>
              <strong>IA · Cloud · Sécurité</strong>
            </span>
          </motion.div>

          <div aria-hidden="true" className="portrait-label">
            <span>01</span>
            <span className="portrait-label-line" />
            <span>Full-Stack / 2026</span>
          </div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#parcours">
        <span className="scroll-cue-line" />
        <span>Voir mon parcours</span>
        <ArrowRight size={15} />
      </a>
    </section>
  );
}
