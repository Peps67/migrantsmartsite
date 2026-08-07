import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Sparkle } from "@phosphor-icons/react/dist/ssr";

import SpotlightCard from "@/components/reactbits/SpotlightCard";
import BlurText from "@/components/reactbits/BlurText";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import Beams from "@/components/reactbits/Beams";
import { GrainOverlay } from "@/components/GrainOverlay";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Migrant Smart",
  description:
    "Migrant Smart is a community-first platform built to help immigrants and international students land, settle and thrive in Canada.",
};

const TEAM = [
  {
    name: "Abigail Peterson",
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
    name: "Iyinoluwa",
    role: "Social Media Manager",
    image: "/team/iyinoluwa.jpg",
    objectFit: "cover" as const,
    objectPosition: "50% 8%",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* PAGE HERO — rounded-top "cutout" card, same light language as Home. */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-24 text-center sm:rounded-t-[3rem] sm:px-8">
        <div className="absolute inset-0 opacity-70">
          <Beams
            beamNumber={12}
            lightColor="#5448f0"
            speed={1.1}
            noiseIntensity={1.5}
            scale={0.24}
            rotation={-6}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60" />
        <GrainOverlay />
        <Reveal className="relative mx-auto max-w-[760px]">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
            Who we are
          </span>
          <BlurText
            text="Building your bridge to a Canadian future"
            className="mx-auto mt-4 justify-center font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.06] tracking-tight text-[#17171f] [&>span:nth-child(6)]:pb-1 [&>span:nth-child(6)]:text-primary [&>span:nth-child(6)]:italic"
          />
          <p className="mx-auto mt-5 max-w-[58ch] text-[16.5px] leading-relaxed text-[#17171f]/70 md:text-[18.5px]">
            A community-first platform built to help immigrants and
            international students land, settle and thrive in Canada, with the
            guidance, tools and people the journey really takes.
          </p>
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
            <p className="mt-6 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Arriving in a new country means starting over, credentials,
              career, community, confidence, all at once. Migrant Smart brings
              the essentials of settling into one place: career readiness,
              mentorship, live events and practical orientation, backed by a
              community that genuinely wants you to win.
            </p>
            <p className="mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
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
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
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
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
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
          <ScrollFloat
            containerClassName="!my-0 justify-center flex"
            textClassName="font-serif font-medium text-foreground"
          >
            {"It started with a question\nevery newcomer asks"}
          </ScrollFloat>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-foreground">
              &ldquo;Why is starting over this hard, and does it have to
              be?&rdquo;
            </p>
            <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground">
              Migrant Smart began with the lived experience of arriving in
              Canada full of ambition but short on direction, sending out
              résumés that went nowhere, missing the unwritten rules, and
              feeling the distance from home. Out of that came a simple
              conviction: the roadmap shouldn&rsquo;t be a secret.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
              What started as informal help for friends grew into programs,
              events and a community thousands strong. Today, Migrant Smart is
              where newcomers find the practical guidance and genuine support to
              turn a fresh start into a future they&rsquo;re proud of.
            </p>
          </Reveal>
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
                <p className="mt-1 text-[15px] font-semibold text-muted-foreground">
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
