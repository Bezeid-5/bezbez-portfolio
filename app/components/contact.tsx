"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";

import { Check, CopyIcon, GithubIcon, LinkedinIcon, MailIcon, SendIcon, SparklesIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { socialLinks } from "@/app/data/portfolio";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formAction = formspreeId ? `https://formspree.io/f/${formspreeId}` : "https://formspree.io/f/your-form-id";

type FormStatus = "idle" | "sending" | "success" | "error";

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  if (name === "github") return <GithubIcon size={18} />;
  if (name === "linkedin") return <LinkedinIcon size={18} />;
  return <MailIcon size={18} />;
}

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formspreeId) {
      setFormStatus("error");
      setFormMessage("Ajoutez votre identifiant Formspree dans NEXT_PUBLIC_FORMSPREE_FORM_ID pour activer l’envoi.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Nouveau message depuis le portfolio BezBez");
    setFormStatus("sending");
    setFormMessage("");

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree request failed");

      form.reset();
      setFormStatus("success");
      setFormMessage("Message envoyé. Je vous réponds rapidement, promis.");
    } catch {
      setFormStatus("error");
      setFormMessage("L’envoi a été interrompu. Vous pouvez aussi m’écrire directement à hello@bezbez.dev.");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("hello@bezbez.dev");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="section-block contact-section" id="contact">
      <div className="section-container contact-layout">
        <div className="contact-intro">
          <Reveal>
            <span className="section-kicker">04 / On commence ?</span>
            <h2>
              Une idée en tête ?
              <br />
              <span>Faisons-la toucher terre.</span>
            </h2>
            <p className="contact-copy">
              Racontez-moi ce que vous êtes en train de construire, où vous voulez aller et ce qui vous empêche d’avancer. Le premier échange est toujours gratuit.
            </p>
          </Reveal>

          <Reveal className="contact-details" delay={0.1}>
            <div className="contact-availability">
              <span className="availability-dot" />
              <span><strong> Disponible</strong> pour une mission dès octobre 2026</span>
            </div>
            <div className="contact-email-row">
              <a className="contact-email" href="mailto:hello@bezbez.dev">hello@bezbez.dev</a>
              <button aria-label="Copier l’adresse email" className="copy-button" onClick={copyEmail} type="button">
                {copied ? <Check size={16} /> : <CopyIcon size={16} />}
                <span className="copy-tooltip">{copied ? "Copié" : "Copier"}</span>
              </button>
            </div>
            <div className="contact-location"><span className="location-pulse" />Basé en France · Disponible partout</div>
          </Reveal>

          <Reveal className="social-block" delay={0.16}>
            <span className="social-label">_elsewhere</span>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a className="social-link" href={link.href} key={link.label} rel={link.href.startsWith("http") ? "noreferrer" : undefined} target={link.href.startsWith("http") ? "_blank" : undefined}>
                  <span className="social-link-icon"><SocialIcon name={link.icon} /></span>
                  <span className="social-link-content"><small>{link.label}</small><strong>{link.handle}</strong></span>
                  <span aria-hidden="true" className="social-link-arrow">↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="contact-form-wrap" delay={0.12} amount={0.08}>
          <div className="contact-form-card">
            <div className="form-card-topline">
              <span><SparklesIcon size={15} /> Nouveau message</span>
              <span className="form-card-id">BB / 001</span>
            </div>
            <h3>Parlons de votre projet<span>.</span></h3>
            <p className="form-intro">Quelques lignes suffisent pour commencer la conversation.</p>
            <form action={formAction} aria-busy={formStatus === "sending"} className="contact-form" method="POST" onSubmit={handleSubmit}>
              <input name="_gotcha" tabIndex={-1} type="text" autoComplete="off" />
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Votre nom</label>
                  <input autoComplete="name" id="name" name="name" placeholder="Camille Martin" required type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Votre email</label>
                  <input autoComplete="email" id="email" name="email" placeholder="camille@entreprise.fr" required type="email" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" placeholder="Dites-moi quelques mots sur votre idée…" required rows={5} />
              </div>
              <input name="_subject" type="hidden" value="Nouveau message depuis le portfolio BezBez" />
              <div className="form-submit-row">
                <button className="button button-primary form-submit" disabled={formStatus === "sending"} type="submit">
                  {formStatus === "sending" ? <><span className="button-spinner" /> Envoi en cours</> : formStatus === "success" ? <><Check size={17} /> Message envoyé</> : <><span>Envoyer le message</span><span className="button-icon"><SendIcon size={16} /></span></>}
                </button>
                <span className="form-privacy">Pas de spam. Juste une réponse.</span>
              </div>
              <AnimatePresence>
                {formMessage ? (
                  <motion.p animate={{ opacity: 1, y: 0 }} aria-live="polite" className={`form-status ${formStatus === "success" ? "is-success" : "is-error"}`} initial={{ opacity: 0, y: 5 }} transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}>
                    {formMessage}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </div>
          <div aria-hidden="true" className="form-orb form-orb-one" />
          <div aria-hidden="true" className="form-orb form-orb-two" />
        </Reveal>
      </div>
    </section>
  );
}
