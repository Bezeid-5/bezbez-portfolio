"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { ArrowRight, ArrowUpRight, MapPinIcon, TerminalIcon } from "@/app/components/icons";

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.09,
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="accueil">
      <div aria-hidden="true" className="hero-grid" />
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: [0, 32, -12, 0], y: [0, -18, 20, 0] }}
        className="hero-halo hero-halo-one"
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: [0, -22, 26, 0], y: [0, 24, -8, 0] }}
        className="hero-halo hero-halo-two"
        transition={{ duration: 17, ease: "easeInOut", repeat: Infinity }}
      />
      <div aria-hidden="true" className="hero-cross hero-cross-one" />
      <div aria-hidden="true" className="hero-cross hero-cross-two" />

      <div className="section-container hero-layout">
        <motion.div
          animate="visible"
          className="hero-copy"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          variants={heroContainer}
        >
          <motion.div className="eyebrow" variants={heroItem}>
            <span className="availability-dot" />
            <span>Disponible pour de nouveaux projets</span>
          </motion.div>

          <motion.p className="hero-kicker" variants={heroItem}>
            Bonjour, je suis
          </motion.p>
          <motion.h1 className="hero-name" variants={heroItem}>
            <span>Bez</span><span className="hero-name-accent">Bez</span><em>.</em>
          </motion.h1>
          <motion.p className="hero-role" variants={heroItem}>
            Développeur <span>Full-Stack</span>
          </motion.p>
          <motion.p className="hero-description" variants={heroItem}>
            Je transforme des idées complexes en produits numériques clairs, rapides et agréables à utiliser. Du premier pixel jusqu’aux APIs qui tournent en production.
          </motion.p>

          <motion.div className="hero-actions" variants={heroItem}>
            <motion.a
              className="button button-primary"
              href="#projets"
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <span>Voir mes projets</span>
              <span aria-hidden="true" className="button-icon">
                <ArrowRight size={17} />
              </span>
            </motion.a>
            <motion.a
              className="button button-secondary"
              href="#contact"
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <span>Me contacter</span>
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div className="hero-trust" variants={heroItem}>
            <div className="hero-trust-item">
              <strong>04<span>+</span></strong>
              <span>ans à construire</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <strong>12<span>+</span></strong>
              <span>projets lancés</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item hero-trust-location">
              <MapPinIcon size={15} />
              <span>France · à distance</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          className="portrait-stage"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 26 }}
          transition={{ delay: 0.32, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <div aria-hidden="true" className="portrait-halo" />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            aria-hidden="true"
            className="portrait-orbit portrait-orbit-outer"
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            <span />
          </motion.div>
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            aria-hidden="true"
            className="portrait-orbit portrait-orbit-inner"
            transition={{ duration: 19, ease: "linear", repeat: Infinity }}
          >
            <span />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -9, 0] }}
            className="portrait-frame"
            transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
          >
            <div className="portrait-image-wrap">
              <Image
                alt="Portrait illustré de BezBez"
                className="portrait-image"
                height={760}
                priority
                src="/avatar.svg"
                width={700}
              />
            </div>
            <div className="portrait-frame-caption">
              <span>Built with curiosity</span>
              <span className="caption-spark" />
            </div>
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
            className="floating-note floating-note-code"
            transition={{ delay: 0.7, duration: 4.8, ease: "easeInOut", repeat: Infinity }}
          >
            <span className="floating-note-icon">
              <TerminalIcon size={16} />
            </span>
            <span>
              <small>Currently building</small>
              <strong>useful things</strong>
            </span>
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            className="floating-note floating-note-location"
            transition={{ delay: 0.9, duration: 5.2, ease: "easeInOut", repeat: Infinity }}
          >
            <span className="location-pulse" />
            <span>
              <small>Open to work</small>
              <strong>Europe · Remote</strong>
            </span>
          </motion.div>

          <div aria-hidden="true" className="portrait-label">
            <span>01</span>
            <span className="portrait-label-line" />
            <span>Hello, world</span>
          </div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#expertises">
        <span className="scroll-cue-line" />
        <span>Défiler pour explorer</span>
        <ArrowRight size={15} />
      </a>
    </section>
  );
}
