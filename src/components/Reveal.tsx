"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  blur?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 22,
  blur = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={
        reduce
          ? false
          : { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: blur ? 0.9 : 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
