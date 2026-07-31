"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

interface BounceCardsProps {
  className?: string;
  cards: ReactNode[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  cards,
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = false,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  const CENTER_ANCHOR = "translate(-50%, -50%) ";

  const getLiftedTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    const noRotate = hasRotate
      ? transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)")
      : transformStr === "none"
        ? "rotate(0deg)"
        : `${transformStr} rotate(0deg)`;
    return `${CENTER_ANCHOR}${noRotate} translateY(-22px) scale(1.06)`;
  };

  const getPushedTransform = (
    baseTransform: string,
    offsetX: number,
  ): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return `${CENTER_ANCHOR}${baseTransform.replace(translateRegex, `translate(${newX}px)`)}`;
    }
    return baseTransform === "none"
      ? `${CENTER_ANCHOR}translate(${offsetX}px)`
      : `${CENTER_ANCHOR}${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx: number) => {
    const q = gsap.utils.selector(containerRef);
    if (!enableHover || !containerRef.current) return;

    cards.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        gsap.to(selector, {
          transform: getLiftedTransform(baseTransform),
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
          zIndex: 50,
        });
      } else {
        const offsetX = i < hoveredIdx ? -140 : 140;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    cards.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: `${CENTER_ANCHOR}${baseTransform}`,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
        zIndex: 1,
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      ref={containerRef}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {cards.map((content, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute top-1/2 left-1/2 overflow-hidden`}
          style={{
            transform: `${CENTER_ANCHOR}${transformStyles[idx] || "none"}`,
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          {content}
        </div>
      ))}
    </div>
  );
}
