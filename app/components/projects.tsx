"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { ArrowUpRight, ExternalLinkIcon, GithubIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { projects, type Project } from "@/app/data/portfolio";

function PreviewChrome({ label }: { label: string }) {
  return (
    <div className="preview-chrome">
      <div aria-hidden="true" className="preview-dots">
        <span />
        <span />
        <span />
      </div>
      <span>{label}</span>
      <span className="preview-live" />
    </div>
  );
}

function AsteriaPreview() {
  return (
    <div aria-hidden="true" className="project-preview preview-asteria">
      <PreviewChrome label="asteria / overview" />
      <div className="asteria-app">
        <aside className="asteria-sidebar">
          <span className="asteria-logo">a</span>
          <span className="asteria-side-line is-active" />
          <span className="asteria-side-line" />
          <span className="asteria-side-line is-short" />
          <span className="asteria-side-line" />
          <span className="asteria-side-spacer" />
          <span className="asteria-side-line is-short" />
        </aside>
        <div className="asteria-main">
          <div className="asteria-heading">
            <div>
              <span className="preview-overline">Monday, 14 October</span>
              <strong>Bonjour, Camille <span>✦</span></strong>
            </div>
            <span className="asteria-avatar">C</span>
          </div>
          <div className="asteria-stats">
            <div className="asteria-stat">
              <span>Revenue</span>
              <strong>€84.2k</strong>
              <small className="is-up">↗ 12.8%</small>
            </div>
            <div className="asteria-stat">
              <span>Active users</span>
              <strong>2,846</strong>
              <small className="is-up">↗ 8.4%</small>
            </div>
          </div>
          <div className="asteria-chart-card">
            <div className="asteria-chart-header">
              <span>Revenue overview</span>
              <span>Last 30 days⌄</span>
            </div>
            <svg className="asteria-chart" viewBox="0 0 420 110" preserveAspectRatio="none">
              <defs>
                <linearGradient id="asteria-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#B1EDF8" stopOpacity=".3" />
                  <stop offset="1" stopColor="#B1EDF8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 92 C32 84 35 75 62 80 S94 61 121 69 S152 51 178 58 S211 45 235 52 S267 25 295 37 S327 28 350 33 S385 13 420 19 V110 H0Z" fill="url(#asteria-fill)" />
              <path d="M0 92 C32 84 35 75 62 80 S94 61 121 69 S152 51 178 58 S211 45 235 52 S267 25 295 37 S327 28 350 33 S385 13 420 19" fill="none" stroke="#B1EDF8" strokeLinecap="round" strokeWidth="2" />
              <circle cx="350" cy="33" fill="#B1EDF8" r="4" />
            </svg>
            <div className="asteria-chart-labels"><span>01 Oct</span><span>08 Oct</span><span>15 Oct</span><span>22 Oct</span><span>30 Oct</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MelloPreview() {
  return (
    <div aria-hidden="true" className="project-preview preview-mello">
      <div className="mello-sun" />
      <div className="mello-copy-preview">
        <span className="preview-overline">Independent talent</span>
        <strong>Make room<br />for good work.</strong>
        <span className="mello-mini-link">Explore the collective <ArrowUpRight size={13} /></span>
      </div>
      <div className="mello-phone">
        <div className="mello-phone-notch" />
        <div className="mello-phone-screen">
          <div className="mello-phone-top"><span>mello</span><span>⌕</span></div>
          <span className="mello-greeting">Hi, Camille <span>☼</span></span>
          <div className="mello-search">What are you looking for?</div>
          <div className="mello-feature-image"><span>CREATIVE<br /><b>MINDS</b></span></div>
          <div className="mello-feature-meta"><span>Featured this week</span><span>↗</span></div>
        </div>
      </div>
      <div className="mello-floating mello-floating-one">+24h</div>
      <div className="mello-floating mello-floating-two">✦</div>
    </div>
  );
}

function KansoPreview() {
  return (
    <div aria-hidden="true" className="project-preview preview-kanso">
      <PreviewChrome label="kanso / workspace" />
      <div className="kanso-workspace">
        <div className="kanso-toolbar">
          <div><span className="kanso-workspace-mark">K</span><strong>Spring launch</strong></div>
          <span className="kanso-toolbar-people"><i>AM</i><i>JD</i><i>+3</i></span>
        </div>
        <div className="kanso-columns">
          <div className="kanso-column">
            <span className="kanso-column-title"><i className="is-teal" />In progress <b>3</b></span>
            <div className="kanso-task"><span>UX audit</span><small>Tomorrow</small><i>02</i></div>
            <div className="kanso-task is-light"><span>Landing page</span><small>Oct 18</small><i>06</i></div>
          </div>
          <div className="kanso-column">
            <span className="kanso-column-title"><i className="is-mint" />In review <b>2</b></span>
            <div className="kanso-task is-mint-task"><span>Design system</span><small>Today</small><i>03</i></div>
            <div className="kanso-task is-light"><span>Email flow</span><small>Oct 19</small><i>04</i></div>
          </div>
          <div className="kanso-column">
            <span className="kanso-column-title"><i className="is-yellow" />Done <b>8</b></span>
            <div className="kanso-task is-done"><span>Brand direction</span><small>Completed</small><span>✓</span></div>
            <div className="kanso-task is-done"><span>Content audit</span><small>Completed</small><span>✓</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TidePreview() {
  return (
    <div aria-hidden="true" className="project-preview preview-tide">
      <div className="tide-topbar">
        <span className="tide-brand"><i />tideops</span>
        <span className="tide-topbar-links"><b>Overview</b><span>Incidents</span><span>Reports</span></span>
        <span className="tide-topbar-avatar">B</span>
      </div>
      <div className="tide-content">
        <div className="tide-heading"><span><small>Workspace / production</small><strong>Everything is calm.</strong></span><span className="tide-filter">Last 24 hours⌄</span></div>
        <div className="tide-metrics">
          <div><span>Uptime</span><strong>99.98%</strong><small className="is-up">+0.04%</small></div>
          <div><span>Avg. response</span><strong>184<span>ms</span></strong><small>−12ms</small></div>
          <div><span>Incidents</span><strong>02</strong><small className="is-warm">1 resolved</small></div>
        </div>
        <div className="tide-chart">
          <div className="tide-chart-label"><span>Response time</span><span>184ms avg.</span></div>
          <svg viewBox="0 0 520 95" preserveAspectRatio="none">
            <path d="M0 67H520M0 38H520M0 9H520" stroke="rgba(177,237,248,.12)" strokeWidth="1" />
            <path d="M0 70 C18 66 28 72 44 59 S75 65 92 53 S125 55 142 58 S175 40 193 47 S222 31 243 42 S276 26 294 35 S323 48 343 37 S372 49 393 25 S427 42 446 31 S477 34 495 18 S510 28 520 13" fill="none" stroke="#A7F0E6" strokeLinecap="round" strokeWidth="2.4" />
          </svg>
        </div>
        <div className="tide-events"><span><i className="is-green" />API latency <b>Normal</b></span><span><i className="is-mint" />Deploy #241 <b>12m ago</b></span><span><i className="is-mist" />Database <b>Healthy</b></span></div>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  switch (project.visual) {
    case "asteria":
      return <AsteriaPreview />;
    case "mello":
      return <MelloPreview />;
    case "kanso":
      return <KansoPreview />;
    case "tide":
      return <TidePreview />;
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const style = { "--project-accent": project.accent } as CSSProperties;

  return (
    <Reveal className={`project-card-wrap ${project.wide ? "project-card-wrap--wide" : ""}`} delay={index * 0.08} amount={0.08}>
      <motion.article
        className="project-card"
        style={style}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        whileHover={shouldReduceMotion ? undefined : { y: -7 }}
      >
        <span aria-hidden="true" className="project-accent-border" />
        <div className="project-preview-wrap">
          <ProjectPreview project={project} />
        </div>
        <div className="project-card-body">
          <div className="project-meta">
            <span>{project.index} / {project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-stack" aria-label={`Stack technique de ${project.name}`}>
            {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="project-footer">
            <span className="project-metric"><span className="metric-dot" />{project.metric}</span>
            <div className="project-links">
              <a aria-label={`Voir le dépôt GitHub de ${project.name}`} href={project.github} rel="noreferrer" target="_blank">
                <GithubIcon size={17} />
              </a>
              <a aria-label={`Visiter la démo de ${project.name}`} href={project.demo} rel="noreferrer" target="_blank">
                <span>Voir la démo</span><ArrowUpRight size={16} />
              </a>
            </div>
          </div>
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
            <span className="section-kicker">03 / Sélection</span>
            <h2>
              Des produits qui
              <br />
              <span>ont une vraie raison d’exister.</span>
            </h2>
          </div>
          <div className="projects-heading-aside">
            <p>Une sélection de produits imaginés, construits et affinés avec soin. Chaque projet commence par une question, pas par une pile de technologies.</p>
            <a className="text-link" href="#contact">
              <span> Parlons de votre idée</span><ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => <ProjectCard index={index} key={project.name} project={project} />)}
        </div>

        <Reveal className="projects-note" delay={0.15}>
          <span className="projects-note-mark">↳</span>
          <p>Les liens pointent vers des espaces de démonstration fictifs — ils sont prêts à être remplacés par vos projets.</p>
          <a href="https://github.com/bezbez" rel="noreferrer" target="_blank"><ExternalLinkIcon size={15} /> Voir GitHub</a>
        </Reveal>
      </div>
    </section>
  );
}
