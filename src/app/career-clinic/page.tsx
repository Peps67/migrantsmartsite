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
  Eye,
  Handshake,
  TrendUp,
  Quotes,
  XCircle,
  Briefcase,
  Scales,
  CalendarCheck,
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
import Grainient from "@/components/reactbits/Grainient";
import { GRAINIENT_PROPS } from "@/lib/grainient-theme";
import { GrainOverlay } from "@/components/GrainOverlay";
import CountdownTimer from "@/components/CountdownTimer";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Career Clinic — Migrant Smart",
  description:
    "You got the job. Now what? Career Clinic is a 6-week cohort program that teaches immigrant professionals the unwritten rules of credibility, visibility and advancement inside a Canadian organization.",
};

const WAITLIST_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyWNIjwd0Dn547yzK4m9D3yCl-168wLghhZHetljF8ZexlyQ/viewform?usp=send_form";

// 9:00 AM MT on Sep 12, 2026 — Cohort 2, Week 1 kicks off.
const COHORT_LAUNCH_ISO = "2026-09-12T15:00:00Z";

const FACTS = [
  { label: "Format", value: "6-week live cohort", icon: Clock },
  {
    label: "Structure",
    value: "Live sessions + accountability pods",
    icon: UsersFour,
  },
  {
    label: "Who it's for",
    value: "Employed pros, 2–10 yrs in Canada",
    icon: Eye,
  },
  { label: "Next cohort", value: "September 12", icon: CalendarBlank },
];

const FACTS_TRACK = [...FACTS, ...FACTS];

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

const LEARN_PILLARS = [
  {
    number: "01",
    tag: "Visibility",
    icon: Eye,
    title: "How to Be Seen Without Overselling Yourself",
    text: "Learn the unwritten norms around visibility in a Canadian workplace, and how to make your work known without it feeling like self-promotion.",
  },
  {
    number: "02",
    tag: "Credibility",
    icon: Handshake,
    title: "The Framework for Building Trust That Actually Works",
    text: "Discover how credibility is really built inside a Canadian organization, and the communication strategy that wins buy-in from the people who decide who moves up.",
  },
  {
    number: "03",
    tag: "Advancement",
    icon: TrendUp,
    title: "A Documented Case You Can Bring to Your Manager",
    text: "Leave with a personal 90-day action plan, real negotiation reps, and a network of sponsors and allies actively backing your next move.",
  },
];

const WHO_ITS_FOR = [
  {
    number: "01",
    title: "Foreign-trained & credentialed",
    text: "You're a foreign-trained professional in finance, IT, engineering, business or a healthcare-adjacent field, with a degree or equivalent credential.",
  },
  {
    number: "02",
    title: "2–10 years into your Canadian career",
    text: "You're 28–45 years old, and you've spent two to ten years building a career here.",
  },
  {
    number: "03",
    title: "Employed, but stalled",
    text: "You're currently employed, but in a role below your experience level, or plateaued with no visibility or promotion path.",
  },
  {
    number: "04",
    title: "Ready to invest in yourself",
    text: "You're financially stable enough to invest in your own advancement.",
  },
  {
    number: "05",
    title: "Already past the “get hired” stage",
    text: "You've already tried the free, entry-level settlement services, resume help and first-job coaching. Those solved getting hired. Nothing since has solved what comes after.",
  },
];

const COMPARISON = [
  {
    icon: Buildings,
    name: "Free settlement agencies",
    gives: "Free, credible help landing your first Canadian job.",
    missing: "Nothing once you're already employed and stuck.",
    highlight: false,
  },
  {
    icon: Megaphone,
    name: "High-ticket “hype” coaches",
    gives: "Bold marketing and fast-hire success stories.",
    missing: "Transactional. No community, no advancement content.",
    highlight: false,
  },
  {
    icon: BookOpen,
    name: "Self-paced courses",
    gives: "Cheap, flexible, learn whenever you have time.",
    missing: "No live coaching, no accountability, no real network.",
    highlight: false,
  },
];

const CAREER_CLINIC_PERKS = [
  "A live cohort, not a login, real people on the same weekly rhythm as you",
  "Mentorship and a recruiter network you can't buy access to anywhere else",
  "The insider playbook for visibility, trust and promotion no one else teaches",
  "A done-for-you tier if you'd rather have it handled than just taught",
];

const HOST_STATS = [
  { value: "8+", label: "Years in finance & accounting" },
  { value: "Age 26", label: "Promoted to Manager at a global firm" },
  { value: "CPA", label: "Chartered Professional Accountant" },
];

const HOST_STORY = [
  "I moved to Canada to become a doctor. I became a Chartered Accountant instead, and navigating that detour is the reason Migrant Smart exists.",
  "Back in Nigeria, I was a first-class medical student at one of the country's top private universities. In my culture, becoming a doctor isn't just a career choice, it's the gold standard, and I was on track for it.",
  "Then an opportunity to study in Canada came up, and I took it. I wasn't desperate to leave. I simply accepted a chance to study abroad, the way anyone would. I was told the transition would be simple: switch my program from Kinesiology to Medicine once I arrived at the University of Regina, and I'd be back on track. I didn't even know what Kinesiology meant at the time.",
  "“Simple” turned out to mean something very different. It meant completing a full four-year undergraduate degree, working to save money, establishing residency, and only then applying to an intensely competitive medical school as a non-permanent resident. My seven-year plan had quietly become a fourteen-year one.",
  "So I pivoted. First to Engineering, where I passed every exam but never felt at home. Then to Business Administration — a decision that meant telling my father, who had sacrificed so much for his future doctor daughter, that the plan had changed.",
  "Today, I'm a Chartered Accountant. I've worked at the Ministry of Finance, Great-West Life, and SaskPower, and became Manager at one of the largest accounting and consulting firms in the world by the age of 26.",
  "None of that was the path I planned. But every detour taught me something I couldn't have learned any other way.",
  "Here's what I've come to understand: the detour itself was never the problem. What cost me years wasn't a lack of ability or ambition. It was not knowing the real rules of the systems I was navigating. No one told me what “simple” actually meant until I'd already lost time finding out the hard way.",
  "That is exactly why Career Clinic exists. It's the guidance I didn't have when I needed it most, real timelines, systemic knowledge, and honest answers about how Canada's professional systems actually work. Not to prevent every detour, but to make sure the ones you take are informed choices, not costly surprises.",
  "If you're standing where I once stood, Career Clinic is here to help you close that gap faster than I did.",
];

const WEEKS = [
  {
    number: "01",
    title: "Diagnose & Design",
    objective:
      "Get a clear, honest picture of where you stand and where you're headed.",
    items: [
      "Pre-work: an online career audit and self-assessment",
      "In-class career audit and goal mapping, promotion vs. lateral move vs. new employer",
      "Baseline resume and LinkedIn review",
    ],
    outcome:
      "A clear diagnosis of where you stand, and a defined target for the six weeks ahead.",
  },
  {
    number: "02",
    title: "Personal Brand & Visibility",
    objective:
      "Package the experience you already have, and start being seen for it.",
    items: [
      "Resume and LinkedIn optimization sprint, positioned for advancement, not just search",
      "Personal brand narrative development with a guest speaker",
      "How to be visible without over-promoting yourself, a Canadian workplace culture briefing",
    ],
    outcome:
      "A resume, LinkedIn profile and personal narrative built to move you forward, not just get you noticed.",
  },
  {
    number: "03",
    title: "Build Credibility & Trust",
    objective:
      "Learn how trust and credibility are actually built inside a Canadian organization.",
    items: [
      "The framework for building trust and credibility at work",
      "Communication strategy that wins buy-in",
      "Handling difficult situations, live Q&A",
    ],
    outcome:
      "A repeatable framework for earning trust and buy-in, wherever you work next.",
  },
  {
    number: "04",
    title: "Network Strategically",
    objective:
      "Build the internal and external relationships that actually open doors.",
    items: [
      "Internal networking: finding sponsors and allies inside your own organization",
      "External networking: informational interviews and cold outreach, templates plus live practice",
      "Mentor matching finalized; accountability pods of 4–6 launched",
    ],
    outcome:
      "A mentor, an accountability pod, and a real networking practice you'll keep using.",
  },
  {
    number: "05",
    title: "Interview & Negotiate",
    objective: "Prepare to make your case out loud, with confidence.",
    items: [
      "Mock interviews and promotion-conversation role-play",
      "The STAR method and storytelling for performance reviews and interviews",
      "Salary and promotion negotiation role-play, plus an offer evaluation framework",
    ],
    outcome: "Interview and negotiation reps under your belt, before it counts.",
  },
  {
    number: "06",
    title: "Execution & Sustained Growth",
    objective: "Leave with a plan, not just a certificate.",
    items: [
      "Your personal 90-day action plan, the capstone",
      "A long-term visibility and advancement strategy for after the program ends",
      "Community transition: your accountability pod and mentor relationship continue",
    ],
    outcome:
      "A documented 90-day action plan, and a community that keeps going after week six.",
  },
];

const BUILD_OUTCOMES = [
  {
    icon: Briefcase,
    title: "Your case for advancement",
    desc: "A documented, manager-ready case you can put on the table the moment the timing's right.",
  },
  {
    icon: Eye,
    title: "A visibility strategy that works here",
    desc: "How to be seen and known inside a Canadian organization, without it feeling like self-promotion.",
  },
  {
    icon: UsersFour,
    title: "A real network backing you",
    desc: "Sponsors, allies and mentors who already know your name before you need them to.",
  },
  {
    icon: Scales,
    title: "Negotiation skill for years, not just this raise",
    desc: "A framework for reviews, raises and offers you'll keep using long after week six.",
  },
  {
    icon: CalendarCheck,
    title: "A 90-day plan, already written",
    desc: "You don't leave wondering what's next. You leave with it mapped out, week by week.",
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

const TESTIMONIAL_VIDEOS = [
  {
    posterSrc: "/career-clinic/hero-professionals.jpg",
    posterAlt: "A Career Clinic cohort 2 participant, video testimonial coming soon",
  },
  {
    posterSrc: "/career-clinic/team-collaboration.jpg",
    posterAlt: "A Career Clinic cohort 2 participant, video testimonial coming soon",
  },
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
    a: "Career Clinic is a paid program, with pricing that varies by tier. Register your interest now to get the full breakdown and next steps.",
  },
  {
    q: "Is this online or in-person?",
    a: "Cohort sessions are live and delivered with partner venues (like Bow Valley College) alongside virtual access, so you can join whether you're local or not. Community and accountability pods continue between sessions.",
  },
  {
    q: "What if I've already done resume help or first-job coaching?",
    a: "That's exactly who this is for. Career Clinic picks up where those programs stop. It's built for people who already got the job and are now stuck, underpaid, underleveraged or invisible relative to their real experience.",
  },
  {
    q: "What happens after I register?",
    a: "You'll get a confirmation email with the full pricing breakdown and next steps.",
  },
];

export default function CareerClinicPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-10 sm:rounded-t-[3rem] sm:px-8">
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
            <p className="mt-4 max-w-[50ch] text-[16.5px] leading-relaxed text-[#17171f]/70 md:text-[18.5px]">
              Career Clinic is a 6-week cohort program for immigrant
              professionals who are already employed in Canada, but
              underpaid, underleveraged and invisible relative to their real
              experience. We teach what&rsquo;s never written down: how to
              build credibility, get seen, and get promoted.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href={WAITLIST_HREF}>
                  Join the Waitlist
                  <ArrowRight size={17} weight="bold" />
                </a>
              </Button>
              <span className="text-[14px] font-medium text-[#17171f]/60">
                Cohort 2 launches Sep 12
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

      {/* COHORT 2 COUNTDOWN */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-5 py-12 text-center sm:px-8 md:py-16">
          <Image
            src="/career-clinic/early-bird-bg.jpg"
            alt="Professionals gathered for a live Career Clinic session"
            fill
            sizes="(min-width: 1160px) 1160px, 100vw"
            className="object-cover opacity-50"
            style={{ objectPosition: "50% 15%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a12]/35 via-[#0b0a12]/62 to-[#0b0a12]/85" />
          <GrainOverlay />
          <div className="relative mx-auto max-w-[720px]">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-lighter">
                Career Clinic launch
              </span>
              <h2 className="mt-4 font-serif text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.14] tracking-tight text-white">
                Countdown to Career Clinic Cohort 2
              </h2>
              <p className="mt-3 text-[15px] font-semibold text-white/80">
                Saturday, September 12, 2026 &middot; 9:00 AM MT / 11:00 AM ET
              </p>
              <p className="mt-1 text-[13.5px] text-white/50">
                Live sessions at a partner venue in Calgary, with virtual
                access
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CountdownTimer targetDate={COHORT_LAUNCH_ISO} className="mt-8" />
            </Reveal>
            <Reveal delay={0.15}>
              <Button asChild size="lg" className="mt-8">
                <a href={WAITLIST_HREF}>
                  Join the Waitlist
                  <ArrowRight size={17} weight="bold" />
                </a>
              </Button>
              <p className="mt-4 text-[12.5px] font-medium text-white/50">
                Spots are limited so every cohort member gets real face time
                with mentors.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[12px] font-bold tracking-[0.08em] text-white/60 uppercase">
                <span>Limited seats</span>
                <span className="text-white/25">&middot;</span>
                <span>Live, in-person experience</span>
                <span className="text-white/25">&middot;</span>
                <span>No replays</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="overflow-hidden border-y border-border py-7">
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="motion-safe:animate-marquee flex w-max gap-4">
            {FACTS_TRACK.map((fact, i) => (
              <div
                key={`${fact.label}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-full border border-primary/15 bg-secondary/60 px-5 py-3 dark:bg-surface-tint"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <fact.icon size={16} weight="bold" />
                </span>
                <div className="text-left whitespace-nowrap">
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-primary/70">
                    {fact.label}
                  </div>
                  <div className="text-[14px] font-bold text-foreground">
                    {fact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal
            blur
            className="relative order-2 rounded-[2rem] border border-black/10 bg-black/5 p-2 lg:order-1 dark:border-white/15 dark:bg-white/5"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src="/career-clinic/stuck-at-desk.jpg"
                alt="A stalled professional at their desk, capable but overlooked"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
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

      {/* WHAT YOU'LL LEARN */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              What you&rsquo;ll learn
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              What you&rsquo;ll walk away with inside the cohort
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
              This isn&rsquo;t another list of tools or templates. You&rsquo;ll
              leave with a clearer sense of what to focus on, how to build
              trust, and how to present the experience you already have.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {LEARN_PILLARS.map((pillar, i) => (
              <Reveal key={pillar.number} delay={i * 0.08}>
                <div className="h-full rounded-[26px] border border-border bg-background p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-medium text-primary/40">
                      {pillar.number}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <pillar.icon size={19} weight="bold" />
                    </span>
                  </div>
                  <span className="mt-4 block text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                    {pillar.tag}
                  </span>
                  <h3 className="mt-2 text-[17px] font-bold leading-snug text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <a href={WAITLIST_HREF}>
                Join the Waitlist
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </Reveal>
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
                Who it&rsquo;s built for
              </span>
              <h2 className="mx-auto mt-4 max-w-[22ch] font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-white">
                Built for professionals ready to make a deliberate move
              </h2>
              <p className="mx-auto mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-white/60">
                Career Clinic is built for one specific person, and
                that&rsquo;s the point. See if this is you:
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 text-left">
              <div className="mx-auto flex max-w-[720px] flex-col gap-4">
                {WHO_ITS_FOR.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <span className="font-serif text-xl font-medium text-brand-lighter">
                      {item.number}
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-white">
                        {item.title}
                      </div>
                      <p className="mt-1 text-[14px] leading-relaxed text-white/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-[14.5px] font-medium text-white/70">
                You don&rsquo;t need a mentor, a sponsor or a plan already in
                place. You just need to be ready to stop guessing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE PROP / COMPARISON */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[700px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Why Career Clinic
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Everyone else stops at &ldquo;get hired.&rdquo; We start where
              they stop.
            </h2>
            <p className="mx-auto mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Free settlement agencies get you your first job. Hype coaches
              sell you a fast-hire story. Self-paced courses hand you a
              login and disappear. None of them teach what happens{" "}
              <em className="text-foreground not-italic font-semibold">
                after
              </em>{" "}
              you&rsquo;re in the room. Career Clinic is the only program
              built for exactly that.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-4">
            {COMPARISON.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[26px] border border-border bg-background p-6">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <item.icon size={20} weight="bold" />
                  </span>
                  <h3 className="mt-5 text-[15.5px] font-bold text-foreground">
                    {item.name}
                  </h3>
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-primary/70"
                      />
                      <p className="text-[13px] leading-relaxed text-foreground/80">
                        {item.gives}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle
                        size={16}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-muted-foreground/40"
                      />
                      <p className="text-[13px] leading-relaxed text-muted-foreground">
                        {item.missing}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24} className="lg:row-span-1">
              <div className="flex h-full flex-col rounded-[26px] border border-primary bg-primary p-6 text-primary-foreground shadow-[0_24px_48px_-20px_rgba(84,72,240,0.5)]">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Crown size={20} weight="bold" />
                </span>
                <h3 className="mt-5 text-[15.5px] font-bold text-white">
                  Career Clinic
                </h3>
                <p className="mt-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-white/70">
                  Built for exactly this moment
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  {CAREER_CLINIC_PERKS.map((perk) => (
                    <div key={perk} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-white"
                      />
                      <p className="text-[13px] leading-relaxed text-white/90">
                        {perk}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="mx-auto mt-12 max-w-[640px] text-center">
            <p className="text-[16px] font-semibold text-foreground">
              If you&rsquo;ve outgrown the free resources and you&rsquo;re
              done with courses that go nowhere, this is built for you.
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href={WAITLIST_HREF}>
                Join the Waitlist
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* MEET YOUR HOST */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Meet your host
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              The detour that built Career Clinic
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <Reveal blur>
              <div className="lg:sticky lg:top-24">
                <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_30px_60px_-24px_rgba(23,23,31,0.25)] dark:border-white/15 dark:bg-white/5">
                  <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-0.5rem)]">
                    <Image
                      src="/team/abigail-peterson-founder.jpg"
                      alt="Abigail Akpan, CPA and founder of Migrant Smart"
                      fill
                      sizes="(min-width: 1024px) 35vw, 90vw"
                      className="object-cover object-[50%_15%]"
                    />
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                  Abigail Akpan
                </h3>
                <p className="mt-1 text-[14px] font-semibold text-muted-foreground">
                  CPA, Founder, Migrant Smart
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {HOST_STATS.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-serif text-xl font-medium text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[11.5px] leading-snug text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal blur delay={0.1}>
              <div className="flex flex-col gap-4">
                {HOST_STORY.map((paragraph, i) => (
                  <p
                    key={i}
                    className={cn(
                      "text-[15.5px] leading-relaxed text-muted-foreground",
                      (i === 0 || i === HOST_STORY.length - 1) &&
                        "font-serif text-[17px] text-foreground italic",
                    )}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8">
                <a href={WAITLIST_HREF}>
                  Join the Waitlist
                  <ArrowRight size={17} weight="bold" />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#5343EB] px-5 py-12 sm:px-8 md:py-16">
          <div className="absolute inset-0 opacity-40">
            <Grainient {...GRAINIENT_PROPS} color3="#5343EB" />
          </div>
          <GrainOverlay />
          <div className="relative">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                Program structure
              </span>
              <h2 className="mt-4 max-w-[22ch] font-serif text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.12] tracking-tight text-white">
                Six weeks, entirely focused on{" "}
                <em className="text-white italic">advancement</em>
              </h2>
              <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-white">
                No first-job-search content, since you&rsquo;re already
                employed. Every week earns its place.
              </p>
            </Reveal>
            <div className="relative mt-12">
              <div className="absolute top-2 bottom-2 left-[15px] w-px bg-white/15 sm:left-[19px]" />
              <div className="flex flex-col gap-6">
                {WEEKS.map((week, i) => (
                  <Reveal
                    key={week.number}
                    delay={i * 0.05}
                    className="relative flex gap-5 sm:gap-7"
                  >
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-lighter bg-[#5343EB] sm:size-10">
                      <span className="size-2.5 rounded-full bg-brand-lighter sm:size-3" />
                    </span>
                    <div className="flex-1 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-7">
                      <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                        Week {week.number}
                      </span>
                      <h3 className="mt-2 text-[17px] font-bold tracking-tight text-white uppercase sm:text-[19px]">
                        {week.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white">
                        <strong className="text-white">Objective:</strong>{" "}
                        {week.objective}
                      </p>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {week.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white"
                          >
                            <span className="mt-[9px] size-1 shrink-0 rounded-full bg-white/40" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-[14px] leading-relaxed text-white">
                        <strong className="text-white">Outcome:</strong>{" "}
                        {week.outcome}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL BUILD */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal blur className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              What you&rsquo;ll walk away with
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Not just a certificate, but also a toolkit for the next ten
              years of your career.
            </h2>
            <p className="mx-auto mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Six weeks end. What you build here doesn&rsquo;t. Every
              deliverable below is yours to keep, use and build on long
              after the cohort wraps.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {BUILD_OUTCOMES.map((outcome, i) => (
              <Reveal key={outcome.title} blur delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <outcome.icon size={16} weight="bold" />
                  </span>
                  <h3 className="mt-3 text-[13px] leading-snug font-bold text-foreground">
                    {outcome.title}
                  </h3>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground">
                    {outcome.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <div className="mx-auto max-w-[900px] rounded-[28px] border border-dashed border-primary/25 bg-secondary/40 p-7 text-center md:p-9 dark:bg-surface-tint">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                What we won&rsquo;t promise you
              </span>
              <p className="mx-auto mt-3 max-w-[62ch] text-[14.5px] leading-relaxed text-muted-foreground">
                We teach the skills, systems and support for advancement. We
                don&rsquo;t guarantee a promotion, raise or new role,
                decisions like that involve factors outside any
                program&rsquo;s control: budget, headcount, manager
                discretion, timing. What we can promise is everything
                above. What you do with it is the next chapter, and
                it&rsquo;s yours.
              </p>
            </div>
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
              Register your interest now to see full pricing per tier and
              secure your spot in Cohort 2.
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
                      "mt-6 flex flex-1 flex-col gap-3 border-t pt-6",
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

      {/* CAREER CLINIC TESTIMONIALS (video) */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Career Clinic testimonials
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Hear it from our graduates
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Real stories from professionals who went through Career
              Clinic, in their own words.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <Reveal key={video.posterSrc} blur>
                <VideoPlaceholder
                  posterSrc={video.posterSrc}
                  posterAlt={video.posterAlt}
                  label="[Add participant name — role]"
                  aspectClassName="aspect-[16/11]"
                  className="rounded-[2rem]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WRITTEN TESTIMONIALS */}
      <section className="relative overflow-hidden bg-[#5343EB] py-12 sm:py-16">
        <div className="absolute inset-0 opacity-40">
          <Grainient {...GRAINIENT_PROPS} color3="#5343EB" />
        </div>
        <GrainOverlay />
        <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-lighter">
              Real advancement stories
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-white">
              What changed for our graduates
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
                <div className="mt-4 flex flex-col gap-3 text-[13.5px] leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Before: </span>
                    <span className="text-white/70">
                      [Insert their before state]
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-white">After: </span>
                    <span className="text-white/70">
                      [Insert their after result]
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-[13.5px] leading-relaxed text-white italic">
                  &ldquo;[Insert quote from the graduate]&rdquo;
                </p>
                <p className="mt-3 text-[12.5px] font-semibold text-white/60">
                  &mdash; [Name], [Role]
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[780px]">
          <Reveal className="text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Questions
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Before you register
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
              Come meet the mentors and recruiters behind Career Clinic in
              person, ask questions, and decide for yourself.
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

      {/* CTA */}
      <section className="px-5 pt-2 pb-12 sm:px-8 md:pb-16">
        <Reveal
          blur
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-6 py-14 text-center sm:px-10 md:py-20"
        >
          <GrainOverlay />
          <div className="relative">
            <h2 className="font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-white">
              Stop building your Canadian career alone
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-white/90">
              Cohort 2 launches September 12, spots are limited.
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
