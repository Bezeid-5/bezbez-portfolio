"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect } from "react";

import { AlertIcon, Check, XIcon } from "@/app/components/icons";

export type ToastVariant = "success" | "error";

export type ToastMessage = {
  id: number;
  variant: ToastVariant;
  title: string;
  description: string;
};

type ToastProps = {
  message: ToastMessage | null;
  onDismiss: () => void;
  duration?: number;
};

const toastMotion: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 30, mass: 0.9 },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.96,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

export function Toast({ message, onDismiss, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!message) return;

    const timeout = window.setTimeout(onDismiss, duration);
    return () => window.clearTimeout(timeout);
  }, [duration, message, onDismiss]);

  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          animate="visible"
          aria-atomic="true"
          aria-live={message.variant === "error" ? "assertive" : "polite"}
          className={`toast toast--${message.variant}`}
          exit="exit"
          initial="hidden"
          key={message.id}
          role={message.variant === "error" ? "alert" : "status"}
          variants={toastMotion}
        >
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            aria-hidden="true"
            className="toast-icon"
            initial={{ opacity: 0, scale: 0.4 }}
            transition={{ delay: 0.09, type: "spring", stiffness: 520, damping: 22 }}
          >
            {message.variant === "success" ? <Check size={18} /> : <AlertIcon size={17} />}
          </motion.span>
          <span className="toast-copy">
            <strong>{message.title}</strong>
            <span>{message.description}</span>
          </span>
          <button aria-label="Fermer la notification" className="toast-close" onClick={onDismiss} type="button">
            <XIcon size={15} />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}