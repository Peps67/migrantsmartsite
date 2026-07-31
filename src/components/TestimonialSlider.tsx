"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quotes } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Migrant Smart gave me the roadmap I was missing. Within three months of joining the Career Clinic, I landed my first role in Toronto.",
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

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[i];
    if (!track || !card) return;
    const target = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const i = cardRefs.current.findIndex((el) => el === entry.target);
            if (i !== -1) setIndex(i);
          }
        });
      },
      { root: track, threshold: [0.6] },
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % TESTIMONIALS.length;
        scrollToIndex(next);
        return next;
      });
    }, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [scrollToIndex]);

  const goTo = (i: number) => {
    const next = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    scrollToIndex(next);
  };

  return (
    <section
      id="testimonials"
      className="bg-secondary/60 py-16 sm:py-24 dark:bg-surface-tint"
    >
      <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">
        <Reveal>
          <ScrollFloat
            containerClassName="!my-0 justify-center flex"
            textClassName="font-serif font-medium text-foreground"
          >
            Real people, real results
          </ScrollFloat>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-10">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[8vw] py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:px-[16vw]"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="w-[82%] shrink-0 snap-center sm:w-[60%] lg:w-[42%]"
            >
              <div className="rounded-[24px] border border-border bg-card p-8 sm:p-10">
                <Quotes
                  size={32}
                  weight="fill"
                  className="mx-auto text-primary/25"
                />
                <p className="mt-4 font-serif text-[19px] leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Avatar>
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-[14.5px] font-bold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-[13px] text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => goTo(index - 1)}
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowLeft size={16} weight="bold" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              type="button"
              key={t.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-primary" : "w-2 bg-border",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => goTo(index + 1)}
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowRight size={16} weight="bold" />
        </button>
      </div>
    </section>
  );
}
