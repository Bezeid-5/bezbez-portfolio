"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { XIcon } from "@/app/components/icons";

export type FormNoticeVariant = "success" | "error";

export type FormNoticeMessage = {
  id: number;
  variant: FormNoticeVariant;
  title: string;
  description: string;
};

type FormModalProps = {
  message: FormNoticeMessage | null;
  onDismiss: () => void;
  duration?: number;
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 24, mass: 0.9 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 12,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

function SuccessIcon() {
  return (
    <svg aria-hidden="true" className="notice-icon-svg" viewBox="0 0 52 52">
      <motion.circle
        animate={{ pathLength: 1 }}
        cx="26"
        cy="26"
        fill="none"
        initial={{ pathLength: 0 }}
        r="23"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
      />
      <motion.path
        animate={{ pathLength: 1, opacity: 1 }}
        d="m18 27.5 5.5 5.5L35 20.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.2"
        transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg aria-hidden="true" className="notice-icon-svg" viewBox="0 0 52 52">
      <motion.circle
        animate={{ pathLength: 1 }}
        cx="26"
        cy="26"
        fill="none"
        initial={{ pathLength: 0 }}
        r="23"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
      />
      <motion.path
        animate={{ pathLength: 1, opacity: 1 }}
        d="M20.5 20.5l11 11M31.5 20.5l-11 11"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.2"
        transition={{ duration: 0.35, delay: 0.5, ease: "easeOut" }}
      />
    </svg>
  );
}

export function FormModal({ message, onDismiss, duration }: FormModalProps) {
  const hasHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const autoCloseMs = duration ?? (message?.variant === "error" ? 5200 : 3600);

  useEffect(() => {
    if (!message) return;

    const timeout = window.setTimeout(onDismiss, autoCloseMs);
    return () => window.clearTimeout(timeout);
  }, [autoCloseMs, message, onDismiss]);

  useEffect(() => {
    if (!message) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [message, onDismiss]);

  useEffect(() => {
    if (!message) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [message]);

  if (!hasHydrated || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {message ? (
        <motion.div
          animate="visible"
          className={`notice-backdrop notice-backdrop--${message.variant}`}
          exit="exit"
          initial="hidden"
          key={message.id}
          onClick={onDismiss}
          variants={backdropVariants}
        >
          <motion.div
            animate="visible"
            aria-labelledby="notice-title"
            aria-modal="true"
            autoFocus
            className="notice-card"
            exit="exit"
            initial="hidden"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            tabIndex={-1}
            variants={cardVariants}
          >
            <button
              aria-label="Fermer la notification"
              className="notice-close"
              onClick={onDismiss}
              type="button"
            >
              <XIcon size={16} />
            </button>
            <span aria-hidden="true" className={`notice-icon notice-icon--${message.variant}`}>
              {message.variant === "success" ? <SuccessIcon /> : <ErrorIcon />}
            </span>
            <h3 className="notice-title" id="notice-title">{message.title}</h3>
            <p className="notice-message">{message.description}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}