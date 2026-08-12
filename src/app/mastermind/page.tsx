import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  UsersThree,
  Buildings,
  ChartLineUp,
  Crown,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import TiltedCard from "@/components/reactbits/TiltedCard";
import BlurText from "@/components/reactbits/BlurText";
import { GrainOverlay } from "@/components/GrainOverlay";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import HeroReveal from "../HeroReveal";

export const metadata: Metadata = {
  title: "Mastermind — Migrant Smart",
  description:
    "A private, invitation-only community for professionals and entrepreneurs across Canada building wealth and legacy, with access to vetted experts, private investment opportunities and a room full of peers who think bigger.",
};

const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const BENEFITS = [
  {
    icon: UsersThree,
    title: "Vetted Professionals",
    text: "Connect with trusted experts who can help you execute across the areas that matter — idea validation, plan development, mergers and acquisitions, digital products, marketing, sales, communications, and more — so you know who to trust while you build.",
  },
  {
    icon: Buildings,
    title: "Funding & Resources",
    text: "Get access to information from the top 5 banks on funding pathways, and tap into the resources and connections that fuel real growth.",
  },
  {
    icon: ChartLineUp,
    title: "Private Wealth-Building Opportunities",
    text: "Gain access to privately sourced initiatives: private REITs, off-market real estate deals, and other Canadian investment vehicles usually reserved for the well-connected.",
  },
  {
    icon: Crown,
    title: "A Room Worth Being In",
    text: "Surround yourself with a selected group of peers who challenge you, back you, and think on the same level.",
  },
];

export default function MastermindPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-10 sm:rounded-t-[3rem] sm:px-8 md:py-12">
        <GrainOverlay />
        <div className="relative mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            <HeroReveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.1em] text-foreground backdrop-blur-sm">
                Coming 2027
              </span>
            </HeroReveal>
            <BlurText
              text="An Exclusive Circle for Those Building Wealth and Legacy"
              className="mt-4 max-w-[18ch] font-serif text-[clamp(32px,4.6vw,60px)] font-medium leading-[1.08] tracking-tight text-[#17171f]"
              delay={90}
              stepDuration={0.3}
            />
            <HeroReveal delay={0.9}>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-[#17171f]/70 sm:text-lg md:text-[19px]">
                A private community of seriously minded professionals and
                entrepreneurs across Canada, where ambitious people gain
                access to vetted experts, private investment opportunities,
                and a room full of peers who think bigger.
              </p>
            </HeroReveal>
            <HeroReveal
              delay={1.05}
              className="mt-6 flex flex-wrap items-center gap-5"
            >
              <a
                href="mailto:hello@migrantsmart.ca?subject=Mastermind%20Waitlist"
                className="group flex items-center gap-3 rounded-full bg-primary py-3.5 pr-3.5 pl-7 text-[15.5px] font-bold text-white shadow-[0_20px_40px_-16px_rgba(84,72,240,0.45)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Join the Waitlist
                <span className="flex size-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </a>
              <Button asChild variant="link">
                <Link href="#benefits">
                  See what&rsquo;s included
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </Button>
            </HeroReveal>
            <HeroReveal delay={1.2}>
              <p className="mt-3 text-[14px] font-medium text-[#17171f]/50">
                Membership is by application only. Join the waitlist to be
                considered when doors open.
              </p>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.3} className="relative">
            <span className="pointer-events-none absolute -top-8 -right-6 hidden h-40 w-40 rounded-[32px] bg-primary/20 blur-2xl sm:block" />
            <span className="pointer-events-none absolute -bottom-10 -left-8 hidden h-32 w-32 rounded-full bg-brand-lighter/20 blur-2xl sm:block" />
            <div className="relative aspect-[9/10] rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_40px_70px_-30px_rgba(23,23,31,0.25)]">
              <TiltedCard
                imageSrc={picsum("migrant-smart-mastermind-inner-circle", 900, 1000)}
                altText="Professionals and entrepreneurs in the Mastermind inner circle"
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
            <div className="absolute -bottom-6 left-3 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/90 px-5 py-4 shadow-[0_24px_48px_-16px_rgba(23,23,31,0.2)] backdrop-blur-xl sm:left-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Star size={20} weight="fill" />
              </span>
              <div>
                <div className="text-[14px] font-bold text-[#17171f]">
                  Founding Member
                </div>
                <div className="text-[12.5px] text-[#17171f]/60">
                  Early access, before public launch
                </div>
              </div>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
            What it is
          </span>
          <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
            Not a Network. An Inner Circle.
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground">
            Mastermind is a private, invitation-only membership for
            professionals and entrepreneurs in Canada who are serious about
            building wealth and leaving a legacy. Every member is selected
            through an application process, because the value of the room
            depends on who&rsquo;s in it. This is a trusted circle of driven
            people who raise your standards, sharpen your thinking, and open
            doors you couldn&rsquo;t open alone.
          </p>
        </Reveal>
      </section>

      {/* WHAT YOU GET */}
      <section
        id="benefits"
        className="bg-secondary/60 px-5 py-12 sm:px-8 md:py-16 dark:bg-surface-tint"
      >
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <h3 className="text-center font-serif text-2xl font-medium text-foreground">
              Access That Moves You Forward
            </h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((item, i) => (
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

      {/* HOW IT WORKS */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
            How it works
          </span>
          <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
            Wealth Is Built in the Right Rooms
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground">
            Membership begins with an application, we review each one to keep
            the community sharp, trusted, and genuinely valuable. Selected
            members meet monthly over dinner: an evening to hear from guest
            speakers, trade ideas, and build real relationships. Between the
            conversation and the connections, this is where opportunities
            surface, deals get made, and partnerships begin.
          </p>
        </Reveal>
      </section>

      <CtaBand
        heading="Doors Open in 2027. Applications Start With the Waitlist."
        lede="Mastermind is being built for a select group of Canada's most driven professionals and entrepreneurs, and every place is earned through application. Join the waitlist now to be among the first considered, with founding-member standing for those selected before we open."
        ctaLabel="Join the Waitlist"
        ctaHref="mailto:hello@migrantsmart.ca?subject=Mastermind%20Waitlist"
        backgroundImageSeed="migrant-smart-mastermind-waitlist"
      />
    </div>
  );
}
