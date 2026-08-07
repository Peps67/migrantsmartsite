import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Buildings,
  Megaphone,
  BookOpen,
  Crown,
  ChartLineDown,
  UsersFour,
  ForkKnife,
  CalendarBlank,
  Clock,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import TiltedCard from "@/components/reactbits/TiltedCard";
import BlurText from "@/components/reactbits/BlurText";
import Beams from "@/components/reactbits/Beams";
import LineWaves from "@/components/reactbits/LineWaves";
import { LINEWAVES_PROPS } from "@/lib/linewaves-theme";
import Grainient from "@/components/reactbits/Grainient";
import { GRAINIENT_PROPS } from "@/lib/grainient-theme";
import { GrainOverlay } from "@/components/GrainOverlay";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Career Clinic — Migrant Smart",
  description:
    "You got the job. Now what? Career Clinic is a 6-week cohort program that teaches immigrant professionals the unwritten rules of credibility, visibility and advancement inside a Canadian organization.",
};

const WAITLIST_HREF =
  "mailto:hello@migrantsmart.ca?subject=Career%20Clinic%20Waitlist";

const FACTS = [
  { label: "Format", value: "6-week live cohort" },
  { label: "Structure", value: "Live sessions + accountability pods" },
  { label: "Who it's for", value: "Employed pros, 2–10 yrs in Canada" },
  { label: "Next cohort", value: "September 12" },
];

const PROBLEM_STATS = [
  {
    value: "44%",
    label:
      "of immigrants who arrived in the past decade work in jobs matching their education, versus 64% of Canadian-born workers aged 25–34.",
  },
  {
    value: "25–27%",
    label:
      "over-education rate among immigrant degree-holders, more than double the ~11% rate for Canadian-born workers with equivalent credentials.",
  },
  {
    value: "$12.7–17B",
    label:
      "lost every year to the Canadian economy from underutilized immigrant skills. A systemic, documented pattern, not a personal failing.",
  },
];

const ICP_CHECKLIST = [
  "Foreign-trained professional in finance, IT, engineering, business or a healthcare-adjacent field, with a degree or equivalent credential",
  "28–45 years old, 2–10 years in Canada",
  "Currently employed, but in a role below your experience level, or plateaued with no visibility or promotion path",
  "Financially stable enough to invest in yourself",
  "Already tried free, entry-level settlement services, resume help and first-job coaching solved getting hired, but nothing since",
];

const COMPARISON = [
  {
    icon: Buildings,
    name: "Free settlement agencies",
    strength: "Free, credible, good for job #1",
    gap: "Nothing for people already employed and stalled",
    highlight: false,
  },
  {
    icon: Megaphone,
    name: "High-ticket “hype” coaches",
    strength: "Bold marketing, fast-hire stories",
    gap: "Transactional, no community, no advancement content",
    highlight: false,
  },
  {
    icon: BookOpen,
    name: "Self-paced courses",
    strength: "Cheap, flexible",
    gap: "No live coaching, no accountability, no network",
    highlight: false,
  },
  {
    icon: Crown,
    name: "Career Clinic",
    strength:
      "Cohort, community, live mentorship and advancement content no one else offers, plus a done-for-you top tier",
    gap: null,
    highlight: true,
  },
];

const CURRICULUM = [
  {
    number: "01",
    title: "Diagnose & Design",
    text: "A career audit and goal mapping, promotion, lateral move or new employer, plus a baseline resume and LinkedIn review.",
  },
  {
    number: "02",
    title: "Personal Brand & Visibility",
    text: "Resume and LinkedIn optimization for advancement, your personal brand narrative, and how to be visible without over-promoting yourself.",
  },
  {
    number: "03",
    title: "Build Credibility & Trust",
    text: "The framework for building trust inside a Canadian organization, communication that wins buy-in, and handling difficult situations.",
  },
  {
    number: "04",
    title: "Network Strategically",
    text: "Find sponsors and allies inside your own organization, master informational interviews and cold outreach, and get matched with your mentor.",
  },
  {
    number: "05",
    title: "Interview & Negotiate",
    text: "Mock interviews, promotion-conversation role-play, the STAR method for reviews, and a full salary and promotion negotiation framework.",
  },
  {
    number: "06",
    title: "Execution & Sustained Growth",
    text: "Your personal 90-day action plan, a long-term visibility strategy, and an ongoing accountability pod after the program ends.",
  },
];

const TIERS = [
  {
    name: "Foundation",
    tagline: "The full accelerator",
    features: [
      "Full 6-week live accelerator program",
      "Community and accountability group access",
    ],
    highlight: false,
  },
  {
    name: "Guided",
    tagline: "Most popular",
    features: [
      "Everything in Foundation",
      "1:1 audit and skills assessment",
      "Resume and LinkedIn optimization",
      "Free headshot and profile review",
      "3 mock interview sessions",
      "Introduction to the Migrant Smart recruiter network",
    ],
    highlight: true,
  },
  {
    name: "Concierge",
    tagline: "Done-for-you",
    features: [
      "Everything in Guided",
      "Branding and positioning for LinkedIn",
      "Priority mentor matching",
      "Job application and placement support",
      "9 mock interview sessions",
      "Priority access to referral-network opportunities",
    ],
    highlight: false,
  },
];

const BUILD_OUTCOMES = [
  "A documented case for advancement you can bring to your manager",
  "A personal brand and visibility strategy that works inside a Canadian organization",
  "A network of sponsors, allies and mentors backing you",
  "Real negotiation skill for reviews, raises and offers",
  "A personal 90-day action plan for what comes next",
];

const FAQS = [
  {
    q: "Will this guarantee me a promotion or raise?",
    a: "No program can, promotion decisions involve factors outside anyone's control, like budget, headcount, manager discretion and timing. What Career Clinic teaches is the skills, systems and support for advancement: a documented case for advancement, visibility, a network and negotiation skill. What you do with them is still up to you, your organization and your timing.",
  },
  {
    q: "I'm not in tech or finance, is this still for me?",
    a: "Yes. Career Clinic is built for foreign-trained professionals across finance, IT, engineering, business and healthcare-adjacent fields. The unwritten rules of credibility, visibility and advancement inside a Canadian workplace apply broadly across industries.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing per tier is announced when early-bird registration opens on August 11. Join the waitlist and you'll be first to know, and first in line for early-bird pricing.",
  },
  {
    q: "Is this online or in-person?",
    a: "Cohort sessions are live and delivered with partner venues (like Bow Valley College) alongside virtual access, so you can join whether you're local or not. Community and accountability pods continue between sessions.",
  },
  {
    q: "What if I've already done resume help or first-job coaching?",
    a: "That's exactly who this is for. Career Clinic picks up where those programs stop. It's built for people who already got the job and are now stuck, underpaid, underleveraged or invisible relative to their real experience.",
  },
];

export default function CareerClinicPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-16 sm:rounded-t-[3rem] sm:px-8">
        <div className="absolute inset-0 opacity-70">
          <Beams
            beamNumber={14}
            lightColor="#5448f0"
            speed={1.6}
            noiseIntensity={1.4}
            scale={0.22}
            rotation={8}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
        <GrainOverlay />
        <div className="relative mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.1em] text-foreground backdrop-blur-sm">
              For employed professionals, not job seekers
            </span>
            <BlurText
              text="You got the job. Now what?"
              className="mt-4 max-w-[16ch] font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.06] tracking-tight text-[#17171f] [&>span:nth-child(6)]:text-primary [&>span:nth-child(6)]:italic"
            />
            <p className="mt-6 max-w-[50ch] text-[16.5px] leading-relaxed text-[#17171f]/70 md:text-[18.5px]">
              Career Clinic is a 6-week cohort program for immigrant
              professionals who are already employed in Canada, but
              underpaid, underleveraged and invisible relative to their real
              experience. We teach what&rsquo;s never written down: how to
              build credibility, get seen, and get promoted.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href={WAITLIST_HREF}>
                  Join the Waitlist
                  <ArrowRight size={17} weight="bold" />
                </a>
              </Button>
              <span className="text-[14px] font-medium text-[#17171f]/60">
                Early-bird registration opens Aug 11 &middot; Cohort launches
                Sep 12
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <span className="pointer-events-none absolute -top-6 -right-6 hidden h-28 w-28 rounded-[24px] bg-primary/15 blur-2xl sm:block" />
            <div className="relative aspect-[9/10] rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_30px_60px_-24px_rgba(23,23,31,0.25)]">
              <TiltedCard
                imageSrc="/career-clinic/hero-clinic-flyer.jpg"
                altText="A Migrant Smart Career Clinic promotional flyer"
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

      {/* THE PROBLEM */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal
            blur
            className="relative order-2 rounded-[2rem] border border-black/10 bg-black/5 p-2 lg:order-1 dark:border-white/15 dark:bg-white/5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src="/career-clinic/stuck-at-desk.jpg"
                alt="A stalled professional at their desk, capable but overlooked"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal blur delay={0.1} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              <ChartLineDown size={15} weight="bold" />
              The problem
            </span>
            <h2 className="mt-4 max-w-[20ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              It&rsquo;s not that you can&rsquo;t get hired. You did.
            </h2>
            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              It&rsquo;s that once inside, nobody taught you the unwritten
              rules of how credibility, visibility and advancement actually
              work in a Canadian workplace, so your career stalls exactly at
              the point everyone assumes the hard part is over. The barriers
              are structural: bias toward &ldquo;Canadian experience,&rdquo;
              referral networks that exclude newcomers, and hiring managers
              who don&rsquo;t know how to evaluate foreign credentials.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-[1240px] gap-5 sm:grid-cols-3">
          {PROBLEM_STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.08}>
              <SpotlightCard
                spotlightColor="rgba(84, 72, 240, 0.3)"
                className="h-full p-7"
              >
                <div className="font-serif text-3xl font-medium text-primary">
                  {stat.value}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {stat.label}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-5 py-12 sm:px-8 md:py-16">
          <Image
            src="/career-clinic/overwhelmed-team.jpg"
            alt="A stressed team buried in work, capable but stretched thin"
            fill
            sizes="(min-width: 1160px) 1160px, 100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a12]/50 via-[#0b0a12]/85 to-[#0b0a12]" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-[900px] text-center">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-lighter">
                <UsersFour size={15} weight="bold" />
                Who it&rsquo;s for
              </span>
              <h2 className="mx-auto mt-4 max-w-[20ch] font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-white">
                This is deliberately not for everyone
              </h2>
              <p className="mx-auto mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-white/60">
                Career Clinic is built for one specific person, and
                that&rsquo;s the point. See if this is you:
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 text-left">
              <div className="mx-auto flex max-w-[640px] flex-col gap-4">
                {ICP_CHECKLIST.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-[15px] font-medium text-white/90 backdrop-blur-sm"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-brand-lighter"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE PROP / COMPARISON */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Why Career Clinic
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Everyone else stops at &ldquo;get hired.&rdquo; We start where
              they stop.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COMPARISON.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[26px] border p-6",
                    item.highlight
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_24px_48px_-20px_rgba(84,72,240,0.5)]"
                      : "border-border bg-background",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-2xl",
                      item.highlight
                        ? "bg-white/15 text-white"
                        : "bg-secondary text-primary",
                    )}
                  >
                    <item.icon size={20} weight="bold" />
                  </span>
                  <h3
                    className={cn(
                      "mt-5 text-[15.5px] font-bold",
                      item.highlight ? "text-white" : "text-foreground",
                    )}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-[13.5px] leading-relaxed",
                      item.highlight ? "text-white/85" : "text-foreground/80",
                    )}
                  >
                    {item.strength}
                  </p>
                  {item.gap && (
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                      Gap: {item.gap}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-5 py-12 sm:px-8 md:py-16">
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
                Six weeks, entirely focused on{" "}
                <em className="text-brand-lighter italic">advancement</em>
              </h2>
              <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-white/60">
                No first-job-search content, since you&rsquo;re already
                employed. Every week earns its place.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CURRICULUM.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.06}>
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

      {/* WHAT YOU'LL BUILD */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal blur>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              What you&rsquo;ll walk away with
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              What you build here is yours to keep
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {BUILD_OUTCOMES.map((outcome) => (
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
          <Reveal blur delay={0.1}>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="p-7 md:p-9"
            >
              <h3 className="text-[17px] font-bold text-foreground">
                A note on expectations
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                We teach the skills, systems and support for advancement. We
                don&rsquo;t guarantee a promotion, raise or new role,
                decisions like that involve factors outside any
                program&rsquo;s control: budget, headcount, manager
                discretion, timing. What we can promise is the case,
                visibility, network and negotiation skill you&rsquo;ll build.
                What you do with them is the next chapter, and it&rsquo;s
                yours.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-secondary/60 px-5 py-12 sm:px-8 md:py-16 dark:bg-surface-tint">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Choose your tier
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              From the full accelerator to a done-for-you experience
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Pricing per tier is revealed when early-bird registration opens
              on August 11. Join the waitlist to lock in early-bird access.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[28px] border p-7 md:p-8",
                    tier.highlight
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_30px_60px_-24px_rgba(84,72,240,0.5)]"
                      : "border-border bg-background",
                  )}
                >
                  <Badge
                    variant={tier.highlight ? "default" : "soft"}
                    className={cn(
                      "w-fit",
                      tier.highlight && "bg-white/15 text-white",
                    )}
                  >
                    {tier.tagline}
                  </Badge>
                  <h3
                    className={cn(
                      "mt-5 font-serif text-2xl font-medium",
                      tier.highlight ? "text-white" : "text-foreground",
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div
                    className={cn(
                      "mt-6 flex flex-col gap-3 border-t pt-6",
                      tier.highlight ? "border-white/20" : "border-border",
                    )}
                  >
                    {tier.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2.5 text-[14px]"
                      >
                        <CheckCircle
                          size={17}
                          weight="fill"
                          className={cn(
                            "mt-0.5 shrink-0",
                            tier.highlight ? "text-white" : "text-primary",
                          )}
                        />
                        <span
                          className={
                            tier.highlight
                              ? "text-white/90"
                              : "text-foreground/85"
                          }
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant={tier.highlight ? "white" : "outline"}
                    size="lg"
                    className="mt-8 w-full"
                  >
                    <a href={WAITLIST_HREF}>
                      Join the Waitlist
                      <ArrowRight size={17} weight="bold" />
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY BBQ */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal
            blur
            className="relative rounded-[2rem] border border-black/10 bg-black/5 p-2 dark:border-white/15 dark:bg-white/5"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src="/career-clinic/team-collaboration.jpg"
                alt="Professionals connecting at a Migrant Smart community event"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal blur delay={0.1}>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              <ForkKnife size={15} weight="bold" />
              Meet us first
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              Community BBQ
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-muted-foreground">
              This is our first cohort, so instead of asking you to take our
              word for it, come meet the mentors and recruiters behind
              Career Clinic in person, ask questions, and decide for
              yourself.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-[14.5px] font-medium text-foreground">
                <CalendarBlank size={18} className="shrink-0 text-primary" />
                Saturday, August 22
              </div>
              <div className="flex items-center gap-2.5 text-[14.5px] font-medium text-foreground">
                <Clock size={18} className="shrink-0 text-primary" />
                90&ndash;120 minutes &middot; food, a short talk, and a
                fireside chat with mentors and recruiters
              </div>
              <div className="flex items-center gap-2.5 text-[14.5px] font-medium text-foreground">
                <MapPin size={18} className="shrink-0 text-primary" />
                A partner venue in Calgary &middot; capped at 30&ndash;50
                guests
              </div>
            </div>
            <Button asChild size="lg" className="mt-8">
              <a href={WAITLIST_HREF}>
                RSVP for the BBQ
                <ArrowUpRight size={17} weight="bold" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 px-5 py-12 sm:px-8 md:py-16 dark:bg-surface-tint">
        <div className="mx-auto max-w-[780px]">
          <Reveal className="text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Questions
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Before you join the waitlist
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pt-2 pb-12 sm:px-8 md:pb-16">
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
              Stop building your Canadian career alone
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-white/90">
              Join the waitlist for early-bird access before Career Clinic
              opens August 11. Cohort launches September 12, spots are
              limited.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={WAITLIST_HREF}>
                Join the Waitlist
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
