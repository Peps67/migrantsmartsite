"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

import { GrainOverlay } from "@/components/GrainOverlay";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import Reveal from "@/components/Reveal";

type CtaBandProps = {
  heading: string;
  lede: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional seed for a background photo behind the text, instead of the default WebGL waves. */
  backgroundImageSeed?: string;
};

export default function CtaBand({
  heading,
  lede,
  ctaLabel = "Join the community",
  ctaHref = "https://chat.whatsapp.com/GZH56TFwU7D61xqFufv6pp?s=sh&p=i&mlu=4",
  backgroundImageSeed,
}: CtaBandProps) {
  return (
    <section className="px-5 pt-2 pb-12 sm:px-8 md:pb-16">
      <Reveal
        blur
        className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-6 py-14 text-center sm:px-10 md:py-20"
      >
        {backgroundImageSeed && (
          <>
            <PlaceholderPhoto
              seed={backgroundImageSeed}
              alt=""
              fill
              sizes="(min-width: 1024px) 1160px, 100vw"
              className="opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a12] via-[#0b0a12]/70 to-[#0b0a12]/30" />
          </>
        )}
        <GrainOverlay />
        <div className="relative">
          <h2 className="font-serif text-[clamp(28px,4.2vw,46px)] font-medium leading-[1.08] tracking-tight text-white">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base text-white/90 sm:text-lg">
            {lede}
          </p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-3.5 pr-3.5 pl-7 text-[15.5px] font-bold text-[#0b0a12] shadow-[0_24px_50px_-16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            {ctaLabel}
            <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
