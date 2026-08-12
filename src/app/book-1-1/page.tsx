import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Wallet,
  Briefcase,
  CalendarBlank,
  ChatCircleText,
  VideoCamera,
  ClipboardText,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurText from "@/components/reactbits/BlurText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import Grainient from "@/components/reactbits/Grainient";
import { GRAINIENT_PROPS } from "@/lib/grainient-theme";
import { GrainOverlay } from "@/components/GrainOverlay";
import CalendlyBookButton from "@/components/CalendlyBookButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book Your 1:1 — Migrant Smart",
  description:
    "Book a private 1:1 session with Abigail Akpan, CPA and founder of Migrant Smart. Finance & settlement advice or career advice, tailored to you.",
};

const HOST_STATS = [
  { value: "8+", label: "Years in finance & accounting" },
  { value: "CPA", label: "Chartered Professional Accountant" },
  { value: "3,000+", label: "Community members" },
];

// NOTE: placeholder Calendly event links — swap these for Abigail's real
// Calendly event URLs once the two paid event types are set up. Pricing
// shown on this page is informational; the actual charge only happens if
// each Calendly event type has Calendly's own paid-event add-on turned on
// (Calendly's native Stripe connection, configured inside the Calendly
// account settings — not something this website handles directly).
const SESSIONS = [
  {
    tag: "Finance & Settlement",
    icon: Wallet,
    title: "Finance & Settlement Advice",
    price: "$120 CAD",
    text: "For newcomers navigating banking, credit, taxes and the financial systems nobody explains when you arrive. Get a clear picture of where you stand and what to do next.",
    calendlyUrl: "https://calendly.com/migrantsmart/finance-settlement-advice",
  },
  {
    tag: "Career",
    icon: Briefcase,
    title: "Career Advice",
    price: "$250 CAD",
    text: "For professionals ready to build their case for advancement, sharpen their resume and LinkedIn, or map out their next move in the Canadian job market.",
    calendlyUrl: "https://calendly.com/migrantsmart/career-advice",
  },
];

const STEPS = [
  {
    icon: CalendarBlank,
    title: "Book online",
    text: "Choose your session type and pick a time that works for you via Calendly.",
  },
  {
    icon: ChatCircleText,
    title: "Share your goals",
    text: "Tell Abigail what you want to work on, so she can prepare a session built around you.",
  },
  {
    icon: VideoCamera,
    title: "Your 1:1 session",
    text: "A focused, honest conversation, real answers, no jargon, no judgement.",
  },
  {
    icon: ClipboardText,
    title: "Your action plan",
    text: "Walk away with clear next steps you can actually act on.",
  },
];

export default function Book1On1Page() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-10 text-center sm:rounded-t-[3rem] sm:px-8">
        <GrainOverlay />
        <Reveal className="relative mx-auto max-w-[720px]">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
            Work With Us
          </span>
          <BlurText
            text="Personal 1-1 Sessions"
            className="mx-auto mt-4 justify-center font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.06] tracking-tight text-[#17171f] [&>span:nth-child(2)]:pb-1 [&>span:nth-child(2)]:text-primary [&>span:nth-child(2)]:italic"
          />
          <p className="mx-auto mt-4 max-w-[56ch] text-[16.5px] leading-relaxed text-[#17171f]/70 md:text-[18.5px]">
            Stop piecing together advice from forums and group chats. Sit
            down with someone who&rsquo;s actually built a career and a
            financial life in Canada, and leave with real answers, not more
            homework.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="#sessions">
                Explore session options
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </div>
          <div className="mx-auto mt-8 flex max-w-[460px] items-center justify-center gap-6 rounded-2xl border border-black/10 bg-white/70 px-6 py-4 backdrop-blur-sm sm:gap-10">
            {HOST_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                {i > 0 && <div className="h-10 w-px bg-black/10" />}
                <div>
                  <div className="font-serif text-2xl font-medium text-[#17171f] sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[12px] text-[#17171f]/60">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WHAT WE OFFER */}
      <section className="px-5 py-9 sm:px-8 md:py-12">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal
            blur
            className="relative rounded-[2rem] border border-black/10 bg-black/5 p-2 dark:border-white/15 dark:bg-white/5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src="/team/abigail-peterson-founder.jpg"
                alt="Abigail Akpan, CPA and founder of Migrant Smart"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-[50%_15%]"
              />
            </div>
          </Reveal>
          <Reveal blur delay={0.1}>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              What we offer
            </span>
            <h2 className="mt-4 max-w-[18ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              A safe space to talk about money and{" "}
              <em className="text-primary italic">career</em>
            </h2>
            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Every month you spend guessing costs you money, momentum and
              confidence you can&rsquo;t get back. In one focused session
              with Abigail Akpan, a Chartered Professional Accountant who
              built her own financial life and career in Canada from the
              ground up, you get straight answers to the exact problem
              that&rsquo;s keeping you stuck.
            </p>
            <p className="mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              No generic advice. No jargon. No judgement. Just an honest
              conversation about your specific situation, and a plan you can
              start using the moment you walk out.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                "Ask the questions you've been afraid to ask",
                "Walk away with a clear, practical action plan",
                "Built specifically for immigrants and newcomers navigating Canada",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] font-medium text-foreground"
                >
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8">
              <a href="#sessions">
                Explore session options
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* SESSION OPTIONS */}
      <section id="sessions" className="px-5 py-9 sm:px-8 md:py-12">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Session options
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Find the right session for you
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Two focused ways to work with Abigail directly. Pick the one
              that matches where you&rsquo;re stuck.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SESSIONS.map((session, i) => (
              <Reveal key={session.title} delay={i * 0.08}>
                <SpotlightCard
                  spotlightColor="rgba(84, 72, 240, 0.3)"
                  className="flex h-full flex-col p-7 md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <session.icon size={22} weight="bold" />
                    </span>
                    <Badge variant="soft">{session.tag}</Badge>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">
                    {session.title}
                  </h3>
                  <div className="mt-2 font-serif text-xl font-medium text-primary">
                    {session.price}
                  </div>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                    {session.text}
                  </p>
                  <CalendlyBookButton
                    url={session.calendlyUrl}
                    className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-primary py-3.5 pr-3.5 pl-7 text-[15.5px] font-bold text-white shadow-[0_20px_40px_-16px_rgba(84,72,240,0.45)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
                  >
                    Book Now
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/20">
                      <ArrowRight size={16} weight="bold" />
                    </span>
                  </CalendlyBookButton>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-9 sm:px-8 md:py-12">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              How it works
            </span>
            <h2 className="mt-4 max-w-[16ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              Simple, honest and{" "}
              <em className="text-primary italic">judgement-free</em>
            </h2>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-border sm:block" />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
              {STEPS.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 0.06}
                  className="relative text-center"
                >
                  <span className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-[15px] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[16px] font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-[#5343EB] py-12 sm:py-16">
        <div className="absolute inset-0 opacity-40">
          <Grainient {...GRAINIENT_PROPS} color3="#5343EB" />
        </div>
        <GrainOverlay />
        <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-lighter">
              What clients say
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-white">
              Real people, real results
            </h2>
          </Reveal>
        </div>
        <Reveal
          delay={0.1}
          className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="motion-safe:animate-marquee flex w-max gap-5 hover:[animation-play-state:paused]">
            {[0, 1, 2, 0, 1, 2].map((_, i) => (
              <div
                key={i}
                className="w-[300px] shrink-0 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:w-[340px]"
              >
                <Quotes size={26} weight="fill" className="text-white/25" />
                <p className="mt-4 text-[14.5px] leading-relaxed text-white italic">
                  &ldquo;[Insert quote from a 1:1 client]&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-[12px] font-bold text-white">
                    [N]
                  </span>
                  <div className="text-left">
                    <div className="text-[13.5px] font-bold text-white">
                      [Name]
                    </div>
                    <div className="text-[12px] text-white/70">[Role]</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pt-2 pb-9 sm:px-8 md:pb-12">
        <Reveal
          blur
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-6 py-14 text-center sm:px-10 md:py-20"
        >
          <GrainOverlay />
          <div className="relative">
            <h2 className="mx-auto max-w-[18ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-white">
              Ready to take the next step?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15.5px] leading-relaxed text-white/90">
              Book your 1:1 session today. Abigail&rsquo;s calendar fills up
              fast.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#sessions">
                Book your 1:1
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
