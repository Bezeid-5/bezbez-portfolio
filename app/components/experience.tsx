"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/app/components/reveal";
import { experiences, type Experience as ExperienceEntry } from "@/app/data/portfolio";

function ExperienceCard({ experience, index }: { experience: ExperienceEntry; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal delay={index * 0.08} amount={0.1}>
      <motion.article
        className="experience-card"
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        whileHover={shouldReduceMotion ? undefined : { x: 5 }}
      >
        <div className="experience-card-topline">
          <span>{experience.index}</span>
          <span>{experience.period}</span>
        </div>
        <div className="experience-card-heading">
          <div>
            <h3>{experience.organization}</h3>
            <p className="experience-role">{experience.role}</p>
          </div>
          <span aria-hidden="true" className="experience-card-mark" />
        </div>
        <p className="experience-summary">{experience.summary}</p>
        <ul className="experience-highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {experience.stack.length ? (
          <div aria-label={`Technologies utilisées chez ${experience.organization}`} className="experience-stack">
            {experience.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        ) : null}
      </motion.article>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section className="section-block experience-section" id="parcours">
      <div aria-hidden="true" className="experience-glow" />
      <div className="section-container experience-layout">
        <Reveal className="experience-intro">
          <span className="section-kicker">02 / Parcours</span>
          <h2>
            Des projets concrets,
            <br />
            <span>du web à l’IA.</span>
          </h2>
          <p>
            Des expériences qui mobilisent le développement full-stack, l’intelligence artificielle appliquée et la sécurité des systèmes.
          </p>
        </Reveal>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} index={index} key={`${experience.organization}-${experience.period}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
