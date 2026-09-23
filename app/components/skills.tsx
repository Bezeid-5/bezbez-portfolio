"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { CodeIcon, LayersIcon, WrenchIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { skillCategories, type SkillCategory } from "@/app/data/portfolio";

const categoryIcons = {
  code: CodeIcon,
  layers: LayersIcon,
  wrench: WrenchIcon,
};

function SkillCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const [selectedSkill, setSelectedSkill] = useState(category.items[0].name);
  const shouldReduceMotion = useReducedMotion();
  const Icon = categoryIcons[category.icon];
  const selected = category.items.find((skill) => skill.name === selectedSkill) ?? category.items[0];

  return (
    <Reveal className={`skill-card skill-card--${category.id}`} delay={delay} amount={0.1}>
      <motion.article
        className="skill-card-inner"
        transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      >
        <div aria-hidden="true" className="skill-card-glow" />
        <div className="skill-card-top">
          <span className="skill-index">{category.index}</span>
          <span className="skill-icon">
            <Icon size={22} />
          </span>
        </div>
        <div className="skill-card-heading">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>

        <div className="skill-pills" role="group" aria-label={`Technologies ${category.title}`}>
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
              <span className="skill-detail-label">En pratique · {selected.level}</span>
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
            <span className="section-kicker">02 / Savoir-faire</span>
            <h2>
              Des fondations solides.
              <br />
              <span>Des détails qui comptent.</span>
            </h2>
          </div>
          <p>
            J’aime travailler là où le produit devient technique : une idée floue, un système solide, et beaucoup de soin dans les interactions.
          </p>
        </Reveal>

        <div className="skill-grid">
          {skillCategories.map((category, index) => (
            <SkillCard category={category} delay={index * 0.08} key={category.id} />
          ))}
        </div>

        <Reveal className="stack-ticker" delay={0.1}>
          <div className="stack-ticker-label">
            <span className="stack-ticker-dot" />
            <span>Mon environnement de travail</span>
          </div>
          <div className="stack-ticker-track" aria-hidden="true">
            <div className="stack-ticker-content">
              <span>Curiosité</span><i>✦</i><span>Structure</span><i>✦</i><span>Émotion</span><i>✦</i><span>Performance</span><i>✦</i><span>Curiosité</span><i>✦</i><span>Structure</span><i>✦</i><span>Émotion</span><i>✦</i>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
