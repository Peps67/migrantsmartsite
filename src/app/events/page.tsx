import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import BlurText from "@/components/reactbits/BlurText";
import Plasma from "@/components/reactbits/Plasma";
import Grainient from "@/components/reactbits/Grainient";
import { GRAINIENT_PROPS } from "@/lib/grainient-theme";
import { GrainOverlay } from "@/components/GrainOverlay";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Community Events — Migrant Smart",
  description:
    "From our flagship Next Gen to summer sports and the podcast, our events turn online introductions into a real network.",
};

const FEATURED = [
  {
    seed: "migrant-smart-nextgen-flagship",
    badge: "Flagship",
    title: "Next Gen",
    text: "Our signature gathering bringing together ambitious newcomers, mentors and employers for a day of connection, learning and inspiration.",
  },
  {
    seed: "migrant-smart-sports-social",
    badge: "Seasonal",
    title: "MS Sports",
    text: "Summer sports socials that get the community off the screen and onto the field, friendly games, food and easy first friendships.",
  },
  {
    seed: "migrant-smart-podcast-recording",
    badge: "Podcast",
    title: "Young, Skilled & Smart",
    text: "Honest conversations with newcomers who've made it work, the setbacks, the strategies and the moments that turned things around.",
  },
  {
    seed: "migrant-smart-documentary-premiere",
    badge: "Documentary",
    title: "The Keys We Carry",
    text: "The premiere of our documentary following real migrant journeys in Canada, stories of resilience, reinvention and hope.",
  },
];

const UPCOMING = [
  { title: "Next Gen", desc: "Flagship community gathering, Toronto" },
  {
    title: "MS Sports Summer Social",
    desc: "Friendly games & community picnic",
  },
  {
    title: "Young, Skilled & Smart, Live taping",
    desc: "Podcast recording with a live audience",
  },
];

const GALLERY_SEEDS = [
  "migrant-smart-gallery-1",
  "migrant-smart-gallery-2",
  "migrant-smart-gallery-3",
  "migrant-smart-gallery-4",
  "migrant-smart-gallery-5",
  "migrant-smart-gallery-6",
];

export default function EventsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#0b0a12] px-5 py-16 text-center sm:rounded-t-[3rem] sm:px-8">
        <div className="absolute inset-0 opacity-90">
          <Plasma
            color="#8f84ff"
            speed={0.5}
            scale={1.2}
            opacity={0.9}
            mouseInteractive
          />
        </div>
        <GrainOverlay />
        <Reveal className="relative mx-auto max-w-[760px]">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--aurora-3)]">
            Community Events
          </span>
          <BlurText
            text="Where connections become community"
            className="mx-auto mt-4 justify-center font-serif text-[clamp(34px,4.6vw,64px)] font-medium leading-[1.14] tracking-tight text-white [&>span:nth-child(4)]:pb-1 [&>span:nth-child(4)]:text-[var(--aurora-3)] [&>span:nth-child(4)]:italic"
          />
          <p className="mx-auto mt-5 max-w-[58ch] text-[16.5px] leading-relaxed text-white/70 md:text-[18.5px]">
            From our flagship Next Gen to summer sports and the podcast, our
            events turn online introductions into a real network, and belonging
            into a habit.
          </p>
        </Reveal>
      </section>

      {/* FEATURED EVENTS */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURED.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.06}>
              <SpotlightCard
                spotlightColor="rgba(84, 72, 240, 0.25)"
                className="overflow-hidden p-0"
              >
                <div className="relative h-56">
                  <PlaceholderPhoto
                    seed={event.seed}
                    alt={`${event.title} event photo`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="soft">{event.badge}</Badge>
                  <h3 className="mt-4 text-[19px] font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                    {event.text}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-5 py-16 sm:px-8 md:py-20">
          <div className="absolute inset-0 opacity-35">
            <Grainient {...GRAINIENT_PROPS} />
          </div>
          <GrainOverlay />
          <div className="relative mx-auto max-w-[860px]">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-lighter">
                Upcoming
              </span>
              <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-white">
                On the calendar
              </h2>
            </Reveal>
            <div className="mt-8 flex flex-col gap-3">
              {UPCOMING.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-white/10">
                        <span className="text-[13px] font-bold text-white">
                          TBA
                        </span>
                        <span className="text-[10px] text-white/50">
                          Add date
                        </span>
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-white">
                          {item.title}
                        </div>
                        <div className="text-[13.5px] text-white/60">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/15 text-white hover:border-brand-light hover:text-brand-light"
                    >
                      <a href="https://lu.ma/" target="_blank" rel="noopener">
                        Register
                      </a>
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAST GALLERY */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <h2 className="font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              From past events
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {GALLERY_SEEDS.map((seed, i) => (
              <Reveal
                key={seed}
                delay={i * 0.04}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <PlaceholderPhoto
                  seed={seed}
                  alt="Past Migrant Smart event photo"
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Don't miss the next one"
        lede="Join the community to get event invites, dates and early-bird registration first."
      />
    </div>
  );
}
