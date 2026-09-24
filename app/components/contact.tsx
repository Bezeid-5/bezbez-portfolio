"use client";

import { useCallback, useState, type FormEvent } from "react";

import { Check, CopyIcon, MapPinIcon, PhoneIcon, SendIcon, SparklesIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { Toast, type ToastMessage, type ToastVariant } from "@/app/components/toast";
import { contactInfo, profile } from "@/app/data/portfolio";

function getFormspreeId(value: string | undefined): string | null {
  const normalizedValue = value?.trim();
  if (!normalizedValue) return null;

  try {
    const endpoint = new URL(normalizedValue);
    const formPrefix = "/f/";
    const prefixIndex = endpoint.pathname.indexOf(formPrefix);

    if (endpoint.hostname === "formspree.io" && prefixIndex !== -1) {
      return endpoint.pathname.slice(prefixIndex + formPrefix.length).split("/")[0] || null;
    }
  } catch {
    // The environment variable can also contain the Formspree ID directly.
  }

  return normalizedValue;
}

const formspreeId = getFormspreeId(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);
const formAction = formspreeId ? `https://formspree.io/f/${encodeURIComponent(formspreeId)}` : undefined;
const phoneHref = `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [copied, setCopied] = useState(false);
  const dismissToast = useCallback(() => setToast(null), []);

  function showToast(variant: ToastVariant, title: string, description: string) {
    setToast({ id: Date.now(), variant, title, description });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formspreeId || !formAction) {
      showToast("error", "Envoi indisponible", "Ajoutez l’identifiant Formspree dans la configuration du site.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `Nouveau message depuis le portfolio ${profile.name}`);
    setIsSubmitting(true);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree request failed");

      form.reset();
      showToast("success", "Message envoyé", "Je vous réponds rapidement.");
    } catch {
      showToast("error", "L’envoi a échoué", `Vous pouvez aussi m’écrire directement à ${contactInfo.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
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
            <span className="section-kicker">04 / Contact</span>
            <h2>
              Un projet ou une question ?
              <br />
              <span>Parlons-en.</span>
            </h2>
            <p className="contact-copy">
              Présentez-moi votre contexte, vos objectifs et les contraintes techniques. Nous pourrons ensuite définir la meilleure façon d’avancer.
            </p>
          </Reveal>

          <Reveal className="contact-details" delay={0.1}>
            <div className="contact-role">{profile.role}</div>
            <div className="contact-email-row">
              <a className="contact-email" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <button aria-label="Copier l’adresse email" className="copy-button" onClick={copyEmail} type="button">
                {copied ? <Check size={16} /> : <CopyIcon size={16} />}
                <span className="copy-tooltip">{copied ? "Copié" : "Copier"}</span>
              </button>
            </div>
            <a className="contact-phone" href={phoneHref}><PhoneIcon size={15} />{contactInfo.phone}</a>
            <div className="contact-location"><MapPinIcon size={15} />{contactInfo.location}</div>
          </Reveal>
        </div>

        <Reveal className="contact-form-wrap" delay={0.12} amount={0.08}>
          <div className="contact-form-card">
            <div className="form-card-topline">
              <span><SparklesIcon size={15} /> Nouveau message</span>
              <span className="form-card-id">MD / 001</span>
            </div>
            <h3>Parlons de votre projet<span>.</span></h3>
            <p className="form-intro">Quelques lignes suffisent pour commencer la conversation.</p>
            <form action={formAction} aria-busy={isSubmitting} className="contact-form" method="POST" onSubmit={handleSubmit}>
              <input name="_gotcha" tabIndex={-1} type="text" autoComplete="off" />
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Votre nom</label>
                  <input autoComplete="name" id="name" name="name" placeholder="Votre nom" required type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Votre email</label>
                  <input autoComplete="email" id="email" name="email" placeholder="vous@entreprise.com" required type="email" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" placeholder="Décrivez votre besoin…" required rows={5} />
              </div>
              <input name="_subject" type="hidden" value={`Nouveau message depuis le portfolio ${profile.name}`} />
              <div className="form-submit-row">
                <button className="button button-primary form-submit" disabled={isSubmitting} type="submit">
                  <span>Envoyer le message</span>
                  <span className="button-icon"><SendIcon size={16} /></span>
                </button>
                <span className="form-privacy">Pas de spam. Juste une réponse.</span>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
      <Toast message={toast} onDismiss={dismissToast} />
    </section>
  );
}
