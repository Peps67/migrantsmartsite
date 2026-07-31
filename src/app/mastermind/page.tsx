import type { Metadata } from "next";
import {
  UsersThree,
  Star,
  ChatCircleDots,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import TiltedCard from "@/components/reactbits/TiltedCard";
import BlurText from "@/components/reactbits/BlurText";
import Prism from "@/components/reactbits/Prism";
import { GrainOverlay } from "@/components/GrainOverlay";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Mastermind Community — Migrant Smart",
  description:
    "A driven peer community of newcomers sharing goals, accountability and wins on the journey to thriving in Canada.",
};

const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const EXPECTATIONS = [
  {
    icon: UsersThree,
    title: "Accountability circles",
    text: "Small groups that check in on your goals and keep the momentum honest.",
  },
  {
    icon: Star,
    title: "Mentor access",
    text: "Guidance from people who've built careers and lives in Canada.",
  },
  {
    icon: ChatCircleDots,
    title: "Live discussions",
    text: "Regular meetups and threads to swap leads, resources and encouragement.",
  },
  {
    icon: CheckCircle,
    title: "Wins worth sharing",
    text: "A place to celebrate offers, milestones and first steps, together.",
  },
];

const TIMING = [
  { label: "Community check-ins", value: "Weekly" },
  { label: "Live mastermind call", value: "Monthly" },
  { label: "Where", value: "WhatsApp + Zoom" },
];

export default function MastermindPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#0b0a12] px-5 py-20 sm:rounded-t-[3rem] sm:px-8">
        <div className="absolute inset-0 opacity-90">
          <Prism
            animationType="rotate"
            timeScale={0.35}
            scale={3.4}
            hueShift={0.9}
            colorFrequency={1.1}
            noise={0.35}
            glow={1.1}
          />
        </div>
        <GrainOverlay />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--aurora-3)]">
              Mastermind Community
            </span>
            <BlurText
              text="You don't have to do this alone"
              className="mt-4 max-w-[15ch] font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.06] tracking-tight text-white [&>span:nth-child(7)]:text-[var(--aurora-3)] [&>span:nth-child(7)]:italic"
            />
            <p className="mt-6 max-w-[48ch] text-[16.5px] leading-relaxed text-white/70 md:text-[18.5px]">
              A driven peer community sharing goals, accountability and wins,
              the people, mentors and momentum that make thriving in Canada feel
              possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a
                  href="https://chat.whatsapp.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Join on WhatsApp
                </a>
              </Button>
              <span className="text-[14px] font-medium text-white/60">
                Free to join &middot; 3,000+ members
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <span className="pointer-events-none absolute -top-6 -right-6 hidden h-32 w-32 rounded-full bg-white/10 sm:block" />
            <div className="relative aspect-[9/10] rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]">
              <TiltedCard
                imageSrc={picsum("migrant-smart-mastermind-group", 900, 1000)}
                altText="Mastermind community group meetup"
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

      {/* WHAT IT IS */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
            What it is
          </span>
          <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
            A room full of people rooting for you
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground">
            The Mastermind is where members set goals out loud, share
            what&rsquo;s working, and get honest support when things get hard.
            Whether you&rsquo;re job hunting, upskilling, switching fields or
            starting a business, you&rsquo;ll find peers a few steps ahead,
            mentors who&rsquo;ve been there, and a rhythm of accountability that
            keeps you moving.
          </p>
        </Reveal>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-secondary/60 px-5 py-16 sm:px-8 md:py-24 dark:bg-surface-tint">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <h3 className="text-center font-serif text-2xl font-medium text-foreground">
              What members can expect
            </h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPECTATIONS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <SpotlightCard
                  spotlightColor="rgba(84, 72, 240, 0.3)"
                  className="h-full p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <item.icon size={22} />
                  </span>
                  <h4 className="mt-5 text-[16px] font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEETING + WHO */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-6 md:grid-cols-2">
          <Reveal>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="h-full p-7 md:p-9"
            >
              <h3 className="text-[17px] font-bold text-foreground">
                Meeting frequency &amp; timing
              </h3>
              <div className="mt-5 flex flex-col gap-4">
                {TIMING.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-t border-border pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="text-[14.5px] text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="text-[14.5px] font-bold text-foreground">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="h-full p-7 md:p-9"
            >
              <h3 className="text-[17px] font-bold text-foreground">
                Who it&rsquo;s for
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Ambitious newcomers and international students who want more
                than tips, a community that pushes them, celebrates them and
                keeps them accountable while they build their Canadian future.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Find your people"
        lede="Join the Mastermind community free and get the support the journey really takes."
        ctaLabel="Join on WhatsApp"
      />
    </div>
  );
}
