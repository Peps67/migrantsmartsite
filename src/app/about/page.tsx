import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Sparkle } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import BlurText from "@/components/reactbits/BlurText";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { GrainOverlay } from "@/components/GrainOverlay";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About - Migrant Smart",
  description:
    "Migrant Smart is a community-first platform built to help immigrants and international students land, settle and thrive in Canada.",
};

const TEAM = [
  {
    name: "Abigail Akpan",
    role: "Founder, Migrant Smart",
    image: "/team/abigail-peterson.jpg",
    objectFit: "cover" as const,
    objectPosition: "50% 12%",
  },
  {
    name: "Perpetua Muogbo",
    role: "Project Manager",
    image: "/team/perpetua-muogbo.jpg",
    // Source photo has a lot of blank headroom above her head — bias the
    // crop down so the visible headroom matches the other two portraits.
    objectFit: "cover" as const,
    objectPosition: "50% 68%",
  },
  {
    name: "Iyinoluwa Ojo",
    role: "Social Media Manager",
    image: "/team/iyinoluwa.jpg",
    objectFit: "cover" as const,
    objectPosition: "50% 8%",
  },
];


const HOST_STORY = [
  "I moved to Canada to become a doctor. I became a Chartered Accountant instead, and navigating that detour is the reason Migrant Smart exists.",
  "Back in Nigeria, I was a first-class medical student at one of the country's top private universities. In my culture, becoming a doctor isn't just a career choice, it's the gold standard, and I was on track for it.",
  "Then an opportunity to study in Canada came up, and I took it. I wasn't desperate to leave. I simply accepted a chance to study abroad, the way anyone would. I was told the transition would be simple: switch my program from Kinesiology to Medicine once I arrived at the University of Regina, and I'd be back on track. I didn't even know what Kinesiology meant at the time.",
  "“Simple” turned out to mean something very different. It meant completing a full four-year undergraduate degree, working to save money, establishing residency, and only then applying to an intensely competitive medical school as a non-permanent resident. My seven-year plan had quietly become a fourteen-year one.",
  "So I pivoted. First to Engineering, where I passed every exam but never felt at home. Then to Business Administration, a decision that meant telling my father, who had sacrificed so much for his future doctor daughter, that the plan had changed.",
  "Today, I'm a Chartered Accountant. I've worked at the Ministry of Finance, Great-West Life, and SaskPower, and became Manager at one of the largest accounting and consulting firms in the world by the age of 26.",
  "None of that was the path I planned. But every detour taught me something I couldn't have learned any other way.",
  "Here's what I've come to understand: the detour itself was never the problem. What cost me years wasn't a lack of ability or ambition. It was not knowing the real rules of the systems I was navigating. No one told me what “simple” actually meant until I'd already lost time finding out the hard way.",
  "That is exactly why Migrant Smart exists. It's the guidance I didn't have when I needed it most, real timelines, systemic knowledge, and honest answers about how Canada's professional systems actually work. Not to prevent every detour, but to make sure the ones you take are informed choices, not costly surprises.",
  "If you're standing where I once stood, Migrant Smart is here to help you close that gap faster than I did.",
];

export default function AboutPage() {
  return (
    <div>
      {/* PAGE HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#0b0a12] px-5 py-10 text-center sm:rounded-t-[3rem] sm:px-8 md:py-12">
        <Image
          src="/about/hero-community.jpg"
          alt="A Migrant Smart community event, the room raising their hands together"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a12]/40 via-[#0b0a12]/60 to-[#0b0a12]/85" />
        <GrainOverlay />
        <Reveal className="relative mx-auto max-w-[760px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            Who we are
          </span>
          <BlurText
            text="Building your bridge to a Canadian future"
            className="mx-auto mt-5 justify-center font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.06] tracking-tight text-white [&>span:nth-child(6)]:pb-1 [&>span:nth-child(6)]:text-[#c7c2ff] [&>span:nth-child(6)]:italic"
          />
          <p className="mx-auto mt-4 max-w-[58ch] text-[16.5px] leading-relaxed text-white/75 md:text-[18.5px]">
            A community built to give career and business professionals the
            information and connections they need to settle, and build
            sustainable careers and businesses, in Canada.
          </p>
          <div className="mx-auto mt-6 flex max-w-[420px] items-center justify-center gap-6 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm sm:gap-10">
            <div>
              <div className="font-serif text-2xl font-medium text-white sm:text-3xl">
                3,000+
              </div>
              <div className="mt-1 text-[12px] text-white/60">
                Community members
              </div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="font-serif text-2xl font-medium text-white sm:text-3xl">
                20+
              </div>
              <div className="mt-1 text-[12px] text-white/60">
                Events hosted
              </div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="font-serif text-2xl font-medium text-white sm:text-3xl">
                4
              </div>
              <div className="mt-1 text-[12px] text-white/60">
                Core programs
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHAT WE'RE ABOUT */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal
            blur
            className="relative rounded-[2rem] border border-black/10 bg-black/5 p-2 dark:border-white/15 dark:bg-white/5"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src="/about/community-arrival.jpg"
                alt="Newcomers arriving and starting their journey in Canada"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal blur delay={0.1}>
            <h2 className="max-w-[18ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              Less time lost. More time{" "}
              <em className="pb-1 text-primary italic">moving forward.</em>
            </h2>
            <p className="mt-6 max-w-[54ch] text-[15.5px] leading-relaxed text-foreground/70">
              Arriving in a new country means starting over, credentials,
              career, community, confidence, all at once. Migrant Smart brings
              the essentials of settling into one place: career readiness,
              mentorship, live events and practical orientation, backed by a
              community that genuinely wants you to win.
            </p>
            <p className="mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-foreground/70">
              We replace guesswork with guidance, and isolation with belonging,
              so your transition is smart, supported and successful.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-secondary/60 px-5 py-12 sm:px-8 md:py-16 dark:bg-surface-tint">
        <div className="mx-auto grid max-w-[1240px] gap-6 md:grid-cols-2">
          <Reveal blur>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="h-full p-7 md:p-9"
            >
              <span className="flex size-13 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Compass size={26} />
              </span>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                To make every migrant&rsquo;s transition into Canada smart,
                supported and successful, equipping newcomers with the coaching,
                community and confidence to build a life they&rsquo;re proud of.
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal blur delay={0.1}>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="h-full p-7 md:p-9"
            >
              <span className="flex size-13 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Sparkle size={26} />
              </span>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                Our Vision
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                A Canada where every newcomer can reach their full potential,
                where arriving is the start of thriving, not just surviving, and
                no one has to navigate the journey alone.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
            About Migrant Smart
          </span>
          <ScrollFloat
            containerClassName="!mt-4 !mb-0 justify-center flex"
            textClassName="font-serif font-medium text-foreground"
          >
            {"Not just a landing spot.\nA launchpad."}
          </ScrollFloat>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-foreground">
              Why do so many talented professionals still feel like
              outsiders, years after they&rsquo;ve arrived?
            </p>
            <p className="mt-6 text-[15.5px] leading-relaxed text-foreground/70">
              Moving to a new country is never easy. You&rsquo;re figuring
              out a new country while adapting to new systems, new culture
              and new norms, and that becomes a lot harder without knowing
              the right people, having access to the right information, or
              being in the right rooms.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-foreground/70">
              Five to ten years in, many professionals are still underpaid,
              still overlooked for opportunities, still wondering if Canada
              was the right move. We asked why. The answer was simple: a lack
              of opportunity, no understanding of the systemic rules, and not
              being in the right rooms.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-foreground/70">
              That&rsquo;s exactly why Migrant Smart exists. We&rsquo;re
              building a community where professionals like you connect with
              peers who&rsquo;ve navigated the same path, get real answers to
              your burning questions, and find the rooms you didn&rsquo;t
              know existed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT THE FOUNDER */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              About the founder
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium leading-[1.14] tracking-tight text-foreground">
              The detour that built Migrant Smart
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
                <Link href="/book-1-1">
                  Book 1:1
                  <ArrowRight size={17} weight="bold" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="overflow-hidden bg-secondary/60 px-5 py-12 sm:px-8 md:py-16 dark:bg-surface-tint">
        <div className="mx-auto max-w-[1240px] text-center">
          <Reveal blur>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              The People Behind It
            </span>
            <h2 className="mx-auto mt-4 max-w-[24ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              Meet the Team
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal
                key={member.name}
                blur
                delay={i * 0.1}
                className="text-left"
              >
                <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_24px_48px_-20px_rgba(23,23,31,0.22)] dark:border-white/15 dark:bg-white/5">
                  <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-0.5rem)] bg-secondary dark:bg-white/5">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Migrant Smart`}
                      fill
                      sizes="(min-width: 640px) 30vw, 90vw"
                      style={{
                        objectFit: member.objectFit,
                        objectPosition: member.objectPosition,
                      }}
                    />
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-[15px] font-semibold text-foreground/70">
                  {member.role}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Become part of the community"
        lede="Join 3,000+ newcomers building brighter futures across Canada."
      />
    </div>
  );
}
