import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import GridDistortion from "@/components/reactbits/GridDistortion";
import BlurText from "@/components/reactbits/BlurText";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Webinars & Workshops — Migrant Smart",
  description:
    "Live and recorded sessions on the things no one tells you when you arrive: housing, credentials, banking, taxes and more.",
};

const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const WORKSHOPS = [
  {
    type: "Workshop",
    title: "Credentials & Recognition",
    text: "How to get your qualifications recognised and where to start if they aren't.",
  },
  {
    type: "Masterclass",
    title: "Money & Credit in Canada",
    text: "Banking, building credit, taxes and budgeting for your first year.",
  },
  {
    type: "Workshop",
    title: "The Canadian Workplace",
    text: "Culture, communication and the unwritten rules of working here.",
  },
  {
    type: "Masterclass",
    title: "Housing & Settling In",
    text: "Finding a place, leases, and making a new city feel like home.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Pick a session",
    text: "Browse upcoming workshops and choose what fits your stage.",
  },
  {
    number: "2",
    title: "Reserve your spot",
    text: "Register in a couple of clicks and get a calendar invite.",
  },
  {
    number: "3",
    title: "Show up & grow",
    text: "Join live, ask questions, and keep the recording afterwards.",
  },
];

export default function WebinarsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="flex min-h-[100dvh] flex-col justify-center px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Webinars &amp; Workshops
            </span>
            <BlurText
              text="The practical essentials, explained"
              className="mt-4 max-w-[16ch] font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.14] tracking-tight text-foreground [&>span:nth-child(4)]:pb-1 [&>span:nth-child(4)]:text-primary [&>span:nth-child(4)]:italic"
            />
            <p className="mt-6 max-w-[48ch] text-[16.5px] leading-relaxed text-muted-foreground md:text-[18.5px]">
              Live and recorded sessions on the things no one tells you when you
              arrive, housing, credentials, banking and taxes, led by anchors
              who&rsquo;ve been there.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="https://lu.ma/" target="_blank" rel="noopener">
                See upcoming sessions
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <span className="pointer-events-none absolute -top-6 -right-6 hidden h-28 w-28 rounded-[24px] bg-primary/15 sm:block" />
            <div className="relative aspect-[9/10] overflow-hidden rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_30px_60px_-24px_rgba(23,23,31,0.28)] dark:border-white/15 dark:bg-white/5">
              <GridDistortion
                imageSrc={picsum("migrant-smart-workshop-webinar", 900, 1000)}
                grid={12}
                mouse={0.15}
                strength={0.12}
                relaxation={0.9}
                className="rounded-[calc(2rem-0.5rem)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ORIENTATION FEATURE */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <Reveal className="mx-auto max-w-[1240px]">
          <div className="grid items-center gap-10 rounded-[28px] border border-border bg-secondary/60 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] dark:bg-surface-tint">
            <div>
              <Badge variant="brand">Start here</Badge>
              <h2 className="mt-5 font-serif text-[clamp(24px,3vw,32px)] font-medium text-foreground">
                Newcomers Orientation
              </h2>
              <p className="mt-4 max-w-[50ch] text-[15px] leading-relaxed text-muted-foreground">
                Our free flagship workshop covering the first 90 days in Canada,
                settling in, credentials, banking, healthcare, housing and how
                to plug into the community from day one.
              </p>
              <Button asChild className="mt-6">
                <a href="https://lu.ma/" target="_blank" rel="noopener">
                  Reserve your spot
                  <ArrowRight size={16} weight="bold" />
                </a>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <PlaceholderPhoto
                seed="migrant-smart-orientation-session"
                alt="Newcomers orientation session"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* WORKSHOP LIST */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              The series
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              Workshops &amp; masterclasses
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WORKSHOPS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <SpotlightCard
                  spotlightColor="rgba(84, 72, 240, 0.3)"
                  className="h-full p-7"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="soft">{item.type}</Badge>
                    <span className="text-[12.5px] font-medium text-muted-foreground">
                      Add date
                    </span>
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                  <p className="mt-4 text-[12.5px] font-semibold text-muted-foreground">
                    Anchor: TBA
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO REGISTER */}
      <section className="bg-secondary/60 px-5 py-16 sm:px-8 md:py-24 dark:bg-surface-tint">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <h2 className="text-center font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              How to register
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.number}
                delay={i * 0.08}
                className="text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary font-serif text-lg font-medium text-primary-foreground">
                  {step.number}
                </div>
                <h4 className="mt-4 text-[16px] font-bold text-foreground">
                  {step.title}
                </h4>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Learn what you need, when you need it"
        lede="Join the community to get workshop dates and registration links first."
      />
    </div>
  );
}
