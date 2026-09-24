"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowUpRight, DownloadIcon, GithubIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { profile, projects, type Project } from "@/app/data/portfolio";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.links?.length) return null;

  return (
    <div className="project-links">
      {project.links.map((link) => (
        <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
          {link.type === "github" ? <GithubIcon size={16} /> : null}
          <span>{link.label}</span>
          {link.type === "demo" ? <ArrowUpRight size={15} /> : null}
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal amount={0.08} delay={index * 0.055} className="project-card-wrap">
      <motion.article
        className="project-card"
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      >
        <span aria-hidden="true" className="project-accent-border" />
        <div className="project-card-body">
          <div className="project-card-topline">
            <span className="project-card-index">{project.index}</span>
            <span>{project.context}</span>
          </div>
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div aria-label={`Technologies utilisées pour ${project.name}`} className="project-stack">
            {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <ProjectLinks project={project} />
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section className="section-block projects-section" id="projets">
      <div className="section-container">
        <Reveal className="section-heading projects-heading">
          <div>
            <span className="section-kicker">04 / Projets</span>
            <h2>
              Des cas d’usage concrets,
              <br />
              <span>des solutions utiles.</span>
            </h2>
          </div>
          <div className="projects-heading-aside">
            <p>
              IA, mobilité, gestion métier et sécurité : une sélection de projets issus de mes expériences et projets intégrateurs.
            </p>
            <a className="text-link" href="#contact">
              <span>Échangeons sur votre projet</span><ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => <ProjectCard index={index} key={project.name} project={project} />)}
        </div>

        <Reveal className="projects-note" delay={0.1}>
          <span className="projects-note-mark">↳</span>
          <p>Les liens publics seront ajoutés ici au fur et à mesure que les dépôts et démonstrations seront disponibles.</p>
          <a download href={profile.cvUrl}><DownloadIcon size={15} /> Consulter le CV</a>
        </Reveal>
      </div>
    </section>
  );
}
