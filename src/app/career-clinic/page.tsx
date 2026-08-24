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
  VideoCamera,
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
import ScrollDrawLine from "@/components/ScrollDrawLine";

export const metadata: Metadata = {
  title: "Career Clinic — Migrant Smart",
  description:
    "Career Clinic helps immigrant professionals understand the strategies, expectations and unwritten systems that influence career success in Canada, so they can position their experience, convert opportunities into offers, and build long-term career momentum.",
};

const WAITLIST_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyWNIjwd0Dn547yzK4m9D3yCl-168wLghhZHetljF8ZexlyQ/viewform?usp=send_form";

// 9:00 AM MT on Sep 19, 2026 — Cohort 2, Week 1 kicks off.
const COHORT_LAUNCH_ISO = "2026-09-19T15:00:00Z";

const PROGRAM_BUNDLE_URL = "https://buy.stripe.com/9B6bJ01Qtcas9Qrd091sQ00";
const SESSION_1_URL = "https://buy.stripe.com/00w5kCamZfmE5Ab3pz1sQ01";
const SESSION_2_URL = "https://buy.stripe.com/cNi4gydzb4I0e6H8JT1sQ02";
const SESSION_3_URL = "https://buy.stripe.com/9B6bJ07aN2zSbYzf8h1sQ03";

const FACTS = [
  { label: "Format", value: "Live phase-based sessions", icon: Clock },
  {
    label: "Structure",
    value: "3 phases: Position, Convert, Advance",
    icon: UsersFour,
  },
  {
    label: "Who it's for",
    value: "Immigrant professionals ready to move",
    icon: Eye,
  },
  { label: "Next cohort", value: "September 19", icon: CalendarBlank },
];

const FACTS_TRACK = [...FACTS, ...FACTS];

const TAGLINE_TRACK = Array.from({ length: 12 }, () => "Get Seen. Get Hired. Get Ahead.");

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
    tag: "Position — Get Seen",
    icon: Eye,
    title: "How Do I Make Employers Understand My Value?",
    text: "We start with a career audit, translate your experience into language Canadian employers instantly understand, and rebuild your resume and LinkedIn around outcomes, not tasks.",
  },
  {
    number: "02",
    tag: "Convert — Get Hired",
    icon: Handshake,
    title: "How Do I Turn Interest Into an Offer?",
    text: "You'll learn to articulate your value with evidence, prepare for interviews that assess more than your resume, and handle salary conversations, plus live mock interviews with real feedback.",
  },
  {
    number: "03",
    tag: "Advance — Get Ahead",
    icon: TrendUp,
    title: "How Do I Build Career Capital and Keep Growing?",
    text: "Design your next move, build workplace fluency, earn sponsorship and relationships that speak for you, and put together the case for your next promotion.",
  },
];

const WHO_ITS_FOR = [
  {
    number: "01",
    title: "Not getting enough interviews",
    text: "You're a qualified professional, but the interview requests just aren't coming in.",
  },
  {
    number: "02",
    title: "Interviews, but no offers",
    text: "You're getting interviews, you're just not converting them into offers.",
  },
  {
    number: "03",
    title: "Ready to re-enter your profession",
    text: "You're a newcomer working a survival or transitional job, and you want back into your actual profession.",
  },
  {
    number: "04",
    title: "Experience that doesn't translate",
    text: "You've struggled to translate your international experience into language Canadian employers quickly understand.",
  },
  {
    number: "05",
    title: "Employed, but underpaid or overlooked",
    text: "You're working, but you feel underpaid, overlooked or stuck exactly where you started.",
  },
  {
    number: "06",
    title: "Ready for the next level",
    text: "You want to move into a higher-responsibility, management or leadership role.",
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
  "A live, structured framework, not a login, real sessions built around Position, Convert and Advance",
  "Direct access to recruiters and employers through live conversations, not just theory",
  "The insider playbook for visibility, trust and promotion no one else teaches",
  "Buy the full 3-session bundle, or just the session that matches where you're stuck",
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

const PHASES = [
  {
    number: "01",
    title: "Position: Get Seen",
    objective: "How do I make employers understand my value?",
    items: [
      "Career audit and gap analysis, a clear picture of where you stand and what's missing",
      "Experience translation, reframing your background around business impact so employers understand it fast",
      "A results-oriented resume built on outcomes and evidence, not just tasks",
      "A professional brand and visibility strategy, LinkedIn, portfolio and networking, built to be seen",
    ],
    outcome:
      "A career gap analysis, a positioning statement, a rebuilt resume and a 90-day visibility strategy, all yours to keep.",
  },
  {
    number: "02",
    title: "Convert: Get Hired",
    objective: "How do I turn interest, and interviews, into an offer?",
    items: [
      "Interview preparation, a repeatable process for both virtual and in-person rounds",
      "Value articulation, communicating outcomes and evidence with confidence, not defensiveness",
      "Offer conversion, handling experience-gap questions and negotiating salary with a clear framework",
      "Live mock interviews with real facilitator and peer feedback",
      "A fireside conversation with recruiters and employers, straight from the source",
    ],
    outcome:
      "An interview readiness score, a value articulation framework, mock interview feedback and a salary negotiation framework.",
  },
  {
    number: "03",
    title: "Advance: Get Ahead",
    objective:
      "How do I build career capital and keep progressing after I get the job?",
    items: [
      "Designing your career path, the capabilities and exposure the next level actually requires",
      "Workplace fluency, reading Canadian norms, priorities and decision-making structures",
      "Building career capital, becoming the credible, go-to person for important work",
      "Relationships and sponsorship, the people who speak for you when you're not in the room",
      "Positioning for advancement, building the case for your next promotion",
    ],
    outcome:
      "A 12-month career advancement roadmap, a stakeholder and sponsor map, and a promotion readiness assessment.",
  },
];

const OUTCOME_GROUPS = [
  {
    phase: "Position",
    items: [
      {
        icon: Eye,
        title: "Career Positioning Statement",
        desc: "A clear, reusable statement of the value you bring, built from your career audit.",
      },
      {
        icon: Briefcase,
        title: "Resume Improvement Framework",
        desc: "A results-oriented resume structure built on outcomes and evidence, not just tasks.",
      },
      {
        icon: Megaphone,
        title: "LinkedIn Optimization Plan",
        desc: "A profile and visibility strategy built to get you seen by the right people.",
      },
    ],
  },
  {
    phase: "Convert",
    items: [
      {
        icon: Handshake,
        title: "Value Articulation Framework",
        desc: "A repeatable way to communicate your experience through outcomes, not defensiveness.",
      },
      {
        icon: Quotes,
        title: "Mock Interview Feedback",
        desc: "Live facilitator and peer feedback on your strengths and where to sharpen up.",
      },
      {
        icon: Scales,
        title: "Salary Negotiation Framework",
        desc: "A clear framework for salary and offer conversations you'll keep using for years.",
      },
    ],
  },
  {
    phase: "Advance",
    items: [
      {
        icon: CalendarCheck,
        title: "12-Month Advancement Roadmap",
        desc: "You don't leave wondering what's next. You leave with it mapped out, month by month.",
      },
      {
        icon: Crown,
        title: "Internal Brand Strategy",
        desc: "A plan for becoming the credible, go-to person for important work inside your org.",
      },
      {
        icon: TrendUp,
        title: "Promotion Readiness Assessment",
        desc: "An honest read on where you stand, and what's left to build your case for advancement.",
      },
    ],
  },
];

const SESSION_OFFERS = [
  {
    name: "Program Bundle",
    tagline: "Best value",
    price: "$250 CAD",
    features: [
      "All 3 sessions: Get Seen + Get Hired + Get Ahead",
      "Free LinkedIn headshot",
      "The full Position → Convert → Advance framework",
    ],
    highlight: true,
    href: PROGRAM_BUNDLE_URL,
  },
  {
    name: "Session 1",
    tagline: "Position",
    price: "$87 CAD",
    features: [
      "Get seen for the right opportunities",
      "Career audit, experience translation and resume strategy",
      "Professional brand and visibility plan",
    ],
    highlight: false,
    href: SESSION_1_URL,
  },
  {
    name: "Session 2",
    tagline: "Convert",
    price: "$98 CAD",
    features: [
      "Turn employer interest and interviews into offers",
      "Interview prep, value articulation and offer conversion",
      "Live mock interviews with real feedback",
    ],
    highlight: false,
    href: SESSION_2_URL,
  },
  {
    name: "Session 3",
    tagline: "Advance",
    price: "$98 CAD",
    features: [
      "Build career capital and get ahead in your career",
      "Workplace fluency, relationships and sponsorship",
      "Position yourself for your next promotion",
    ],
    highlight: false,
    href: SESSION_3_URL,
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
    a: "Individual sessions are $87–$98 CAD each. The Program Bundle, all three sessions plus a free LinkedIn headshot, is $250 CAD. You can register for any of these directly from the pricing section above.",
  },
  {
    q: "Can I just register for one session instead of the whole program?",
    a: "Yes. Each phase, Get Seen, Get Hired and Get Ahead, is sold as a standalone session so you can start with whichever one matches where you're stuck. The Program Bundle is there if you want all three, plus a free LinkedIn headshot, at a lower combined price.",
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
    a: "For the free webinar, you'll get a confirmation email with the joining link. If you register for a session or the bundle, you'll get an email confirming your purchase along with next steps and scheduling details.",
  },
];

export default function CareerClinicPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 pt-14 pb-2 sm:rounded-t-[3rem] sm:px-8">
        <GrainOverlay />
        <div className="relative mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <Reveal>
            <BlurText
              text="You have the experience. Why isn't it showing?"
              className="max-w-[16ch] font-serif text-[clamp(30px,4vw,52px)] font-medium leading-[1.08] tracking-tight text-[#17171f] [&>span:nth-child(8)]:text-primary [&>span:nth-child(8)]:italic"
            />
            <p className="mt-2.5 max-w-[50ch] text-[16.5px] leading-relaxed text-[#17171f]/70">
              Career Clinic teaches immigrant professionals the strategies,
              expectations and unwritten systems that actually influence
              career success in Canada, so you can position what
              you&rsquo;ve already built, convert opportunities into real
              offers, and keep building momentum long after you&rsquo;re
              hired.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Clock size={16} weight="bold" />
                </span>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#17171f]/50">
                    Time
                  </div>
                  <div className="text-[13.5px] font-bold text-[#17171f]">
                    11:00AM &ndash; 2:00PM
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <CalendarBlank size={16} weight="bold" />
                </span>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#17171f]/50">
                    Date
                  </div>
                  <div className="text-[13.5px] font-bold text-[#17171f]">
                    September 19th &ndash; October 3rd
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <MapPin size={16} weight="bold" />
                </span>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#17171f]/50">
                    Location
                  </div>
                  <div className="text-[13.5px] font-bold text-[#17171f]">
                    The Platform Calgary
                  </div>
                </div>
              </div>
              <Button asChild size="sm">
                <a href="#sessions">
                  Register Here
                  <ArrowRight size={16} weight="bold" />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <span className="pointer-events-none absolute -top-6 -right-6 hidden h-28 w-28 rounded-[24px] bg-primary/15 blur-2xl sm:block" />
            <div className="relative aspect-[1/1] rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_30px_60px_-24px_rgba(23,23,31,0.25)]">
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

      {/* ROLLING TAGLINE */}
      <section className="overflow-hidden bg-[#5343EB] py-3">
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="motion-safe:animate-marquee flex w-max items-center gap-8">
            {[...TAGLINE_TRACK, ...TAGLINE_TRACK].map((line, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-8 text-[15px] font-bold tracking-[0.08em] text-white uppercase sm:text-[18px]"
              >
                {line}
                <span className="text-white/40">&bull;</span>
              </span>
            ))}
          </div>
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
                Saturday, September 19, 2026 &middot; 9:00 AM MT / 11:00 AM ET
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
                <a href="#sessions">
                  Register Here
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
              The tension
            </span>
            <h2 className="mt-4 max-w-[20ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              It&rsquo;s not that you can&rsquo;t get hired. You did.
            </h2>
            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-foreground/70">
              It&rsquo;s that once you&rsquo;re inside, nobody taught you the
              unwritten systems, how credibility, visibility and advancement
              actually work in a Canadian workplace, so your career stalls
              exactly where everyone assumes the hard part is over. Talent
              alone was never going to be enough. Information, positioning,
              relationships, workplace fluency and strategy are what create
              leverage, and immigrant professionals shouldn&rsquo;t have to
              diminish the experience they already have to build it.
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
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/70">
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
              The framework
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Position. Convert. Advance.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-foreground/70">
              Every part of Career Clinic runs through the same three-stage
              framework, three phases that mirror exactly how careers
              actually move forward in Canada.
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
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground/70">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <a href="#sessions">
                Register Here
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
            <p className="mx-auto mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-foreground/70">
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
                      <p className="text-[13px] leading-relaxed text-foreground/70">
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
              <a href="#sessions">
                Register Here
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
                <p className="mt-1 text-[14px] font-semibold text-foreground/70">
                  CPA, Founder, Migrant Smart
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {HOST_STATS.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-serif text-xl font-medium text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[11.5px] leading-snug text-foreground/70">
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
                      "text-[15.5px] leading-relaxed text-foreground/70",
                      (i === 0 || i === HOST_STORY.length - 1) &&
                        "font-serif text-[17px] text-foreground italic",
                    )}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8">
                <a href="#sessions">
                  Register Here
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
                The curriculum
              </span>
              <h2 className="mt-4 max-w-[22ch] font-serif text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.12] tracking-tight text-white">
                Three phases, each solving a{" "}
                <em className="text-white italic">different problem</em>
              </h2>
              <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-white">
                This isn&rsquo;t lecture content. Every phase is built around
                a specific problem professionals hit in their Canadian
                career, and ends with something concrete in your hands.
              </p>
            </Reveal>
            <div className="relative mt-12">
              <div className="absolute top-2 bottom-2 left-[15px] w-px bg-white/15 sm:left-[19px]" />
              <ScrollDrawLine className="absolute top-2 bottom-2 left-[15px] w-px sm:left-[19px]" />
              <div className="flex flex-col gap-6">
                {PHASES.map((phase, i) => (
                  <Reveal
                    key={phase.number}
                    delay={i * 0.05}
                    className="relative flex gap-5 sm:gap-7"
                  >
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-lighter bg-[#5343EB] sm:size-10">
                      <span className="size-2.5 rounded-full bg-brand-lighter sm:size-3" />
                    </span>
                    <div className="flex-1 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-7">
                      <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                        Session {phase.number}
                      </span>
                      <h3 className="mt-2 text-[17px] font-bold tracking-tight text-white uppercase sm:text-[19px]">
                        {phase.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white">
                        <strong className="text-white">Core question:</strong>{" "}
                        {phase.objective}
                      </p>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {phase.items.map((item) => (
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
                        {phase.outcome}
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
              Tangible outputs
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Not just a certificate, but also a toolkit for the next ten
              years of your career.
            </h2>
            <p className="mx-auto mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-foreground/70">
              The program ends. What you build here doesn&rsquo;t. Every
              deliverable below is yours to keep, use and build on long
              after your last session.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-10">
            {OUTCOME_GROUPS.map((group, gi) => (
              <div key={group.phase}>
                <Reveal className="flex items-center gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-primary-foreground">
                    {gi + 1}
                  </span>
                  <span className="text-[13px] font-bold tracking-tight text-foreground">
                    {group.phase}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </Reveal>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {group.items.map((outcome, i) => (
                    <Reveal key={outcome.title} blur delay={i * 0.08}>
                      <SpotlightCard
                        spotlightColor="rgba(84, 72, 240, 0.3)"
                        className="h-full p-6"
                      >
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                          <outcome.icon size={22} weight="bold" />
                        </span>
                        <h3 className="mt-4 text-[16px] leading-snug font-bold text-foreground">
                          {outcome.title}
                        </h3>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/70">
                          {outcome.desc}
                        </p>
                      </SpotlightCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <div className="mx-auto max-w-[900px] rounded-[28px] border border-dashed border-primary/25 bg-secondary/40 p-7 text-center md:p-9 dark:bg-surface-tint">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                What we won&rsquo;t promise you
              </span>
              <p className="mx-auto mt-3 max-w-[62ch] text-[14.5px] leading-relaxed text-foreground/70">
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
      <section
        id="sessions"
        className="bg-secondary/60 px-5 py-12 sm:px-8 md:py-16 dark:bg-surface-tint"
      >
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Choose your session
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              Buy the full framework, or just the phase you need
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">
              Get all three phases and a free LinkedIn headshot with the
              Program Bundle, or register for the single session that
              matches exactly where you&rsquo;re stuck.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SESSION_OFFERS.map((offer, i) => (
              <Reveal key={offer.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[28px] border p-7 md:p-8",
                    offer.highlight
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_30px_60px_-24px_rgba(84,72,240,0.5)]"
                      : "border-border bg-background",
                  )}
                >
                  <Badge
                    variant={offer.highlight ? "default" : "soft"}
                    className={cn(
                      "w-fit text-[15px]",
                      offer.highlight && "bg-white/15 text-white",
                    )}
                  >
                    {offer.tagline}
                  </Badge>
                  <h3
                    className={cn(
                      "mt-5 font-serif text-2xl font-medium",
                      offer.highlight ? "text-white" : "text-foreground",
                    )}
                  >
                    {offer.name}
                  </h3>
                  <div
                    className={cn(
                      "mt-2 text-2xl font-bold",
                      offer.highlight ? "text-white" : "text-primary",
                    )}
                  >
                    {offer.price}
                  </div>
                  <div
                    className={cn(
                      "mt-6 flex flex-1 flex-col gap-3 border-t pt-6",
                      offer.highlight ? "border-white/20" : "border-border",
                    )}
                  >
                    {offer.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2.5 text-[14px]"
                      >
                        <CheckCircle
                          size={17}
                          weight="fill"
                          className={cn(
                            "mt-0.5 shrink-0",
                            offer.highlight ? "text-white" : "text-primary",
                          )}
                        />
                        <span
                          className={
                            offer.highlight
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
                    variant={offer.highlight ? "white" : "outline"}
                    size="lg"
                    className="mt-8 w-full"
                  >
                    <a href={offer.href} target="_blank" rel="noopener">
                      Register Here
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
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">
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

      {/* WEBINAR */}
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
              <VideoCamera size={15} weight="bold" />
              See it before you buy
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              Free Career Clinic Webinar
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-foreground/70">
              Before you invest, come see exactly what Career Clinic
              teaches. We&rsquo;ll pressure-test the framework live, answer
              your specific questions, and walk through a real demo of
              what you&rsquo;d be buying, so you can decide for yourself.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-[14.5px] font-medium text-foreground">
                <CalendarBlank size={18} className="shrink-0 text-primary" />
                September 5 &amp; September 12, 2026
              </div>
              <div className="flex items-center gap-2.5 text-[14.5px] font-medium text-foreground">
                <Clock size={18} className="shrink-0 text-primary" />
                60 minutes &middot; program walkthrough, live demo and Q&amp;A
              </div>
              <div className="flex items-center gap-2.5 text-[14.5px] font-medium text-foreground">
                <MapPin size={18} className="shrink-0 text-primary" />
                Hosted online &middot; the link is emailed after you
                register
              </div>
            </div>
            <Button asChild size="lg" className="mt-8">
              <a href={WAITLIST_HREF}>
                Register for the Webinar
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
              Cohort 2 launches September 19, spots are limited.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#sessions">
                Register Here
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
