import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import TiltedCard from "@/components/reactbits/TiltedCard";
import BlurText from "@/components/reactbits/BlurText";
import Beams from "@/components/reactbits/Beams";
import LineWaves from "@/components/reactbits/LineWaves";
import { LINEWAVES_PROPS } from "@/lib/linewaves-theme";
import Grainient from "@/components/reactbits/Grainient";
import { GRAINIENT_PROPS } from "@/lib/grainient-theme";
import { GrainOverlay } from "@/components/GrainOverlay";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Career Clinic — Migrant Smart",
  description:
    "Hands-on coaching that translates your experience into a Canadian-ready career: résumé, LinkedIn, interviews and a job-search strategy that actually works here.",
};

const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const OUTCOMES = [
  "A Canadian-ready résumé and LinkedIn profile",
  "The confidence to interview and tell your story",
  "A focused, week-by-week job-search plan",
  "A growing professional network in Canada",
  "Support negotiating and starting your offer",
];

const STEPS = [
  {
    number: "01",
    title: "Assess & localize",
    text: "Rebuild your résumé and LinkedIn for Canadian recruiters and applicant systems.",
  },
  {
    number: "02",
    title: "Position yourself",
    text: "Craft your story and practise interviews until they feel natural and confident.",
  },
  {
    number: "03",
    title: "Job-search strategy",
    text: "Target the right roles, tap the hidden market and network the Canadian way.",
  },
  {
    number: "04",
    title: "Land & negotiate",
    text: "Handle offers with confidence and step into your new role well set up.",
  },
];

const FACTS = [
  { label: "Format", value: "1:1 & group cohorts" },
  { label: "Duration", value: "6-week program" },
  { label: "Next cohort", value: "Add your date" },
  { label: "Where", value: "Online, live" },
];

const PRICING_FEATURES = [
  "Personalised résumé & LinkedIn review",
  "Interview coaching & mock questions",
  "A clear next-step action plan",
];

export default function CareerClinicPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#0b0a12] px-5 py-16 sm:rounded-t-[3rem] sm:px-8">
        <div className="absolute inset-0 opacity-80">
          <Beams
            beamNumber={14}
            lightColor="#8f84ff"
            speed={1.6}
            noiseIntensity={1.4}
            scale={0.22}
            rotation={8}
          />
        </div>
        <GrainOverlay />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--aurora-3)]">
              Career Clinic
            </span>
            <BlurText
              text="Land your first Canadian role, faster."
              className="mt-4 max-w-[16ch] font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.06] tracking-tight text-white [&>span:nth-child(6)]:text-[var(--aurora-3)] [&>span:nth-child(6)]:italic"
            />
            <p className="mt-6 max-w-[48ch] text-[16.5px] leading-relaxed text-white/70 md:text-[18.5px]">
              Hands-on coaching that translates your experience into a
              Canadian-ready career: résumé, interviews and a job-search
              strategy that works here.
            </p>
            <p className="mt-6 text-[15px] text-white/85">
              From <span className="font-extrabold">$75</span> / 1-hour session
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href="https://calendly.com/" target="_blank" rel="noopener">
                Book via Calendly
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <span className="pointer-events-none absolute -top-6 -right-6 hidden h-28 w-28 rounded-[24px] bg-white/10 sm:block" />
            <div className="relative aspect-[9/10] rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]">
              <TiltedCard
                imageSrc={picsum(
                  "migrant-smart-career-coaching-session",
                  900,
                  1000,
                )}
                altText="Career coaching session in progress"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.03}
                showTooltip={false}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="rounded-[calc(2rem-0.5rem)] [&_img]:rounded-[calc(2rem-0.5rem)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="border-y border-border px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 md:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <div className="text-[12.5px] font-semibold uppercase tracking-wide text-muted-foreground">
                {fact.label}
              </div>
              <div className="mt-1 text-[15.5px] font-bold text-foreground">
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOAL + AUDIENCE */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-6 md:grid-cols-2">
          <Reveal blur>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="h-full p-7 md:p-9"
            >
              <h2 className="font-serif text-xl font-medium text-foreground">
                The goal
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Get you Canada-ready and hired, with the documents, mindset and
                strategy to compete confidently for the roles you actually want,
                not just the ones you settle for.
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal blur delay={0.1}>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="h-full p-7 md:p-9"
            >
              <h2 className="font-serif text-xl font-medium text-foreground">
                Who it&rsquo;s for
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Newcomers and international students who have skills and
                experience but need to translate them for the Canadian market,
                and want a clear, guided path to their first or next role.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-5 py-16 sm:px-8 md:py-20">
          <div className="absolute inset-0 opacity-40">
            <Grainient {...GRAINIENT_PROPS} />
          </div>
          <GrainOverlay />
          <div className="relative">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-lighter">
                Program structure
              </span>
              <h2 className="mt-4 max-w-[22ch] font-serif text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.12] tracking-tight text-white">
                Four weeks of momentum, from lost to{" "}
                <em className="text-brand-lighter italic">hired</em>
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                    <div className="font-serif text-2xl font-medium text-brand-light">
                      {step.number}
                    </div>
                    <h3 className="mt-3 text-[16px] font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES + PRICING */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1240px] items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              What you&rsquo;ll walk away with
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              Proposed outcomes
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {OUTCOMES.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-2.5 text-[15px] font-medium text-foreground"
                >
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-[24px] bg-primary p-8 text-white sm:p-10"
          >
            <span className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="relative">
              <span className="text-[13px] font-bold uppercase tracking-wide text-white/75">
                1:1 Session
              </span>
              <div className="mt-2 flex items-end gap-1.5">
                <span className="font-serif text-5xl font-medium">$75</span>
                <span className="pb-1.5 text-white/75">/ hour</span>
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/85">
                A focused hour with Abigail to unblock exactly what&rsquo;s
                holding your search back.
              </p>
              <div className="mt-6 flex flex-col gap-3 border-t border-white/20 pt-6">
                {PRICING_FEATURES.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 text-[14.5px]"
                  >
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-white"
                    />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="white" size="lg" className="mt-7 w-full">
                <a href="https://calendly.com/" target="_blank" rel="noopener">
                  Book via Calendly
                  <ArrowRight size={17} weight="bold" />
                </a>
              </Button>
              <p className="mt-4 text-center text-[12.5px] text-white/70">
                Secure payment via Stripe
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULT */}
      <section className="bg-secondary/60 px-5 py-16 sm:px-8 md:py-24 dark:bg-surface-tint">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <Quotes size={32} weight="fill" className="mx-auto text-primary/25" />
          <p className="mt-4 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
            &ldquo;Within three months of the Career Clinic, I landed my first
            role in Toronto. It gave me the roadmap I was missing.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Avatar>
              <AvatarFallback>CO</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="text-[14.5px] font-bold text-foreground">
                Chidi Okonkwo
              </div>
              <div className="text-[13px] text-muted-foreground">
                Data Analyst, Toronto, ON
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-5 pt-2 pb-16 sm:px-8 md:pb-24">
        <Reveal
          blur
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-6 py-14 text-center sm:px-10 md:py-20"
        >
          <div className="absolute inset-0 opacity-80">
            <LineWaves {...LINEWAVES_PROPS} />
          </div>
          <GrainOverlay />
          <div className="relative">
            <h2 className="font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-white">
              Your next role is closer than it feels
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-white/90">
              Book a session and get a clear, personal plan to move your
              Canadian career forward.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="https://calendly.com/" target="_blank" rel="noopener">
                Book via Calendly
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
