"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  id?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.16,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (shouldReduceMotion || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: amount },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount, shouldReduceMotion]);

  const isVisible = isInView || shouldReduceMotion || typeof window === "undefined" || typeof IntersectionObserver === "undefined";
  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 32, filter: "blur(6px)" };
  const animate = isVisible
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 32, filter: "blur(6px)" };

  return (
    <motion.div
      ref={ref}
      animate={animate}
      className={className}
      id={id}
      initial={initial}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.72,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
