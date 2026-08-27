"use client";

import { Quotes, Star } from "@phosphor-icons/react";

import ScrollFloat from "@/components/reactbits/ScrollFloat";
import Grainient from "@/components/reactbits/Grainient";
import { GRAINIENT_PROPS } from "@/lib/grainient-theme";
import { GrainOverlay } from "@/components/GrainOverlay";
import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Migrant Smart gave me the roadmap I was missing. The coaching and the community made settling into my career here less stressful.",
    name: "Chidi Okonkwo",
    role: "Data Analyst, Toronto, ON",
  },
  {
    quote:
      "The community is everything. Moving to a new country is lonely, here I found mentors, friends and people who genuinely wanted me to win.",
    name: "Amara Bello",
    role: "UX Designer, Vancouver, BC",
  },
  {
    quote:
      "The workshops broke down exactly what I needed to know as a newcomer. Practical, honest and zero fluff. I recommend it to everyone arriving.",
    name: "Samuel Mensah",
    role: "Software Engineer, Calgary, AB",
  },
].map((t) => ({
  ...t,
  initials: t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join(""),
}));

const TRACK = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialSlider() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#5343EB] py-12 sm:py-16"
    >
      <div className="absolute inset-0 opacity-40">
        <Grainient {...GRAINIENT_PROPS} color3="#5343EB" />
      </div>
      <GrainOverlay />

      <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-lighter">
            Client testimonials
          </span>
          <ScrollFloat
            containerClassName="!my-0 justify-center flex"
            textClassName="font-serif font-medium text-white"
          >
            Real people, real results
          </ScrollFloat>
        </Reveal>
      </div>

      <Reveal
        delay={0.1}
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="motion-safe:animate-marquee flex w-max gap-5 hover:[animation-play-state:paused]">
          {TRACK.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[300px] shrink-0 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:w-[340px]"
            >
              <Quotes size={28} weight="fill" className="text-white/25" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={12}
                    weight="fill"
                    className="text-brand-lighter"
                  />
                ))}
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-[12px] font-bold text-white">
                  {t.initials}
                </span>
                <div className="text-left">
                  <div className="text-[13.5px] font-bold text-white">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-white/70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
