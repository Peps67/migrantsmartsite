"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

type ScrollDrawLineProps = {
  className?: string;
};

// A vertical line that draws itself from top to bottom as the user
// scrolls the tracked element through the viewport.
export default function ScrollDrawLine({ className }: ScrollDrawLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  return (
    <motion.div
      ref={ref}
      style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
      className={cn("bg-white", className)}
    />
  );
}
