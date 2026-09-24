"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { Check, XIcon } from "@/app/components/icons";

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
          animate={{ opacity: 1, y: 0, scale: 1 }}
          aria-atomic="true"
          aria-live={message.variant === "error" ? "assertive" : "polite"}
          className={`toast toast--${message.variant}`}
          exit={{ opacity: 0, y: 18, scale: 0.97 }}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          key={message.id}
          role={message.variant === "error" ? "alert" : "status"}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <span aria-hidden="true" className="toast-icon">
            {message.variant === "success" ? <Check size={17} /> : <XIcon size={16} />}
          </span>
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
