"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { BrainIcon, CodeIcon, DatabaseIcon, LayersIcon, WrenchIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { skillCategories, type SkillCategory } from "@/app/data/portfolio";

const categoryIcons = {
  code: CodeIcon,
  layers: LayersIcon,
  database: DatabaseIcon,
  wrench: WrenchIcon,
  brain: BrainIcon,
};

const skillTicker = skillCategories.flatMap((category) => category.items.map((skill) => skill.name));

function SkillCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const [selectedSkill, setSelectedSkill] = useState(category.items[0].name);
  const shouldReduceMotion = useReducedMotion();
  const Icon = categoryIcons[category.icon];
  const selected = category.items.find((skill) => skill.name === selectedSkill) ?? category.items[0];

  return (
    <Reveal className={`skill-card skill-card--${category.id}`} delay={delay} amount={0.08}>
      <motion.article
        className="skill-card-inner"
        transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      >
        <div aria-hidden="true" className="skill-card-glow" />
        <div className="skill-card-top">
          <span className="skill-index">{category.index}</span>
          <span className="skill-icon">
            <Icon size={21} />
          </span>
        </div>
        <div className="skill-card-heading">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>

        <div className="skill-pills" role="group" aria-label={`Compétences ${category.title}`}>
          {category.items.map((skill) => {
            const isSelected = skill.name === selectedSkill;
            return (
              <button
                aria-pressed={isSelected}
                className={`skill-pill ${isSelected ? "is-selected" : ""}`}
                key={skill.name}
                onClick={() => setSelectedSkill(skill.name)}
                type="button"
              >
                <span className="skill-pill-mark">{skill.short}</span>
                <span>{skill.name}</span>
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="skill-detail">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              initial={{ opacity: 0, y: 6 }}
              key={selected.name}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            >
              <span className="skill-detail-label">{selected.focus}</span>
              <p>{selected.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section className="section-block skills-section" id="expertises">
      <div className="section-container">
        <Reveal className="section-heading">
          <div>
            <span className="section-kicker">03 / Savoir-faire</span>
            <h2>
              Des compétences utiles,
              <br />
              <span>des choix assumés.</span>
            </h2>
          </div>
          <p>
            Une polyvalence orientée produit, construite par des projets web, mobiles, IA, données et sécurité.
          </p>
        </Reveal>

        <div className="skill-grid">
          {skillCategories.map((category, index) => (
            <SkillCard category={category} delay={index * 0.07} key={category.id} />
          ))}
        </div>

        <Reveal className="stack-ticker" delay={0.1}>
          <div className="stack-ticker-label">
            <span className="stack-ticker-dot" />
            <span>Technologies du CV</span>
          </div>
          <div className="stack-ticker-track" aria-hidden="true">
            <div className="stack-ticker-content">
              {[...skillTicker, ...skillTicker].map((skill, index) => (
                <span className="ticker-skill" key={`${skill}-${index}`}>
                  <span>{skill}</span><i>✦</i>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
