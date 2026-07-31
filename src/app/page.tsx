import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  CheckCircle,
  YoutubeLogo,
  Play,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { GrainOverlay } from "@/components/GrainOverlay";
import PixelBlast from "@/components/reactbits/PixelBlast";
import LineWaves from "@/components/reactbits/LineWaves";
import { LINEWAVES_PROPS } from "@/lib/linewaves-theme";
import BlurText from "@/components/reactbits/BlurText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { OfferFan } from "@/components/OfferFan";
import TestimonialSlider from "@/components/TestimonialSlider";
import TiltedCard from "@/components/reactbits/TiltedCard";
import { ParallaxY } from "@/components/ParallaxY";
import HeroReveal from "./HeroReveal";
import Reveal from "@/components/Reveal";

const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const FOUNDER_POINTS = [
  "1:1 career coaching & mentorship",
  "Host of the Career Clinic program",
  "Leads a 3,000+ strong newcomer community",
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-24 sm:rounded-t-[3rem] sm:px-8 md:py-28">
        <div className="absolute inset-0 opacity-80">
          <PixelBlast
            variant="circle"
            color="#5448f0"
            pixelSize={4}
            patternScale={3}
            patternDensity={1.1}
            pixelSizeJitter={0.4}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.2}
            speed={0.4}
            edgeFade={0.35}
            transparent
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />

        <GrainOverlay />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <BlurText
              text="Your launchpad to success in Canada"
              className="max-w-[16ch] font-serif text-[clamp(38px,5.4vw,76px)] font-medium leading-[1.05] tracking-tight text-[#17171f] [&>span:nth-child(4)]:text-primary [&>span:nth-child(4)]:italic"
              delay={90}
              stepDuration={0.3}
            />
            <HeroReveal delay={0.9}>
              <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-[#17171f]/70 sm:text-lg md:text-[19px]">
                Career coaching, a driven community and practical workshops to
                help you land, settle and thrive in Canada.
              </p>
            </HeroReveal>
            <HeroReveal
              delay={1.05}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-3 rounded-full bg-primary py-3.5 pr-3.5 pl-7 text-[15.5px] font-bold text-white shadow-[0_20px_40px_-16px_rgba(84,72,240,0.45)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Join Community
                <span className="flex size-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </a>
              <Button asChild variant="link">
                <Link href="#offer">
                  Explore our programs
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </Button>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.3} className="relative">
            <span className="pointer-events-none absolute -top-8 -right-6 hidden h-40 w-40 rounded-[32px] bg-primary/20 blur-2xl sm:block" />
            <span className="pointer-events-none absolute -bottom-10 -left-8 hidden h-32 w-32 rounded-full bg-[var(--aurora-2)]/20 blur-2xl sm:block" />
            <div className="relative rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_40px_70px_-30px_rgba(23,23,31,0.25)]">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)]">
                <PlaceholderPhoto
                  seed="migrant-smart-hero-newcomers"
                  alt="Diverse newcomers connecting at a Migrant Smart community event"
                  width={900}
                  height={1000}
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="aspect-[9/10]"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-3 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/90 px-5 py-4 shadow-[0_24px_48px_-16px_rgba(23,23,31,0.2)] backdrop-blur-xl sm:left-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target size={20} weight="fill" />
              </span>
              <div>
                <div className="text-[14px] font-bold text-[#17171f]">
                  Career Clinic
                </div>
                <div className="text-[12.5px] text-[#17171f]/60">
                  Land your first Canadian role
                </div>
              </div>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section id="about" className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal blur>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Our Mission
            </span>
            <h2 className="mt-4 max-w-[18ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              To make every migrant&rsquo;s transition{" "}
              <em className="text-primary italic">smart</em>, supported and
              successful.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-muted-foreground">
              We exist to close the gap between arriving in Canada and building
              a life you&rsquo;re proud of, replacing guesswork with guidance,
              and isolation with a community that has your back.
            </p>
            <Button asChild variant="link" className="mt-7">
              <Link href="/about">
                Read our story
                <ArrowRight size={16} weight="bold" />
              </Link>
            </Button>
          </Reveal>

          <Reveal blur delay={0.1}>
            <SpotlightCard
              spotlightColor="rgba(84, 72, 240, 0.3)"
              className="rounded-[2rem] p-7 md:p-9"
            >
              <h3 className="font-serif text-xl font-medium text-foreground">
                About Migrant Smart
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Migrant Smart is a community-first platform helping immigrants
                and international students navigate life in Canada with
                confidence. From career readiness and mentorship to events and
                orientation workshops, we bring the people, tools and know-how
                of settling into one place.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                <div>
                  <div className="font-serif text-2xl font-medium text-foreground">
                    3,000+
                  </div>
                  <div className="mt-1 text-[12.5px] text-muted-foreground">
                    Community members
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-medium text-foreground">
                    50+
                  </div>
                  <div className="mt-1 text-[12.5px] text-muted-foreground">
                    Events hosted
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-medium text-foreground">
                    4
                  </div>
                  <div className="mt-1 text-[12.5px] text-muted-foreground">
                    Core programs
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* OFFERING */}
      <section id="offer" className="px-5 py-16 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal blur className="text-center">
            <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              Four ways we help you{" "}
              <em className="text-primary italic">thrive</em>
            </h2>
          </Reveal>
          <div className="mt-14">
            <OfferFan />
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section
        id="founder"
        className="overflow-hidden px-5 py-16 sm:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <ParallaxY range={28} className="relative order-2 lg:order-1">
            <Reveal blur>
              <span className="pointer-events-none absolute -top-6 -left-6 hidden h-28 w-28 rounded-full bg-[var(--aurora-1)]/15 blur-2xl sm:block" />
              <div className="relative aspect-[4/4.5] rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_30px_60px_-24px_rgba(23,23,31,0.3)] dark:border-white/15 dark:bg-white/5">
                <TiltedCard
                  imageSrc={picsum("migrant-smart-founder-portrait", 800, 900)}
                  altText="Abigail Peterson, founder of Migrant Smart"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={9}
                  scaleOnHover={1.04}
                  showTooltip={false}
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="rounded-[calc(2rem-0.5rem)] [&_img]:rounded-[calc(2rem-0.5rem)]"
                />
              </div>
            </Reveal>
          </ParallaxY>

          <Reveal blur delay={0.1} className="order-1 lg:order-2">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Meet the Founder
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              Abigail Peterson
            </h2>
            <p className="mt-1 text-[15px] font-semibold text-muted-foreground">
              Founder &amp; Lead Coach, Migrant Smart
            </p>
            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              A newcomer turned community builder, Abigail has spent years
              helping migrants translate their skills and experience into
              Canadian opportunity. She started Migrant Smart to give others the
              roadmap she wished she&rsquo;d had, practical, honest and rooted
              in lived experience.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {FOUNDER_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 text-[15px] font-medium text-foreground"
                >
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/career-clinic">
                Book your 1:1
                <ArrowRight size={17} weight="bold" />
              </Link>
            </Button>
            <p className="mt-4 text-[13px] text-muted-foreground">
              Sessions scheduled via Calendly &middot; secure payment via Stripe
            </p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialSlider />

      {/* DOCUMENTARY */}
      <section
        id="documentary"
        className="overflow-hidden px-5 py-16 sm:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal blur>
            <Badge variant="outline" className="border-red-500/30 text-red-500">
              <YoutubeLogo size={16} weight="fill" />
              On YouTube
            </Badge>
            <h2 className="mt-4 max-w-[16ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              Watch{" "}
              <em className="pb-1 text-primary italic">The Keys We Carry</em>
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Go behind the scenes with the real stories of migrants building
              new lives in Canada. Follow the journey, the setbacks and the
              wins, one episode at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="ink" size="sm">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <Play size={16} weight="fill" />
                  Watch Episode 1
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Subscribe on YouTube
                </a>
              </Button>
            </div>
          </Reveal>

          <ParallaxY range={24}>
            <Reveal
              blur
              className="group relative aspect-[16/11] rounded-[2rem] border border-black/10 bg-black/5 p-2 dark:border-white/15 dark:bg-white/5"
            >
              <TiltedCard
                imageSrc={picsum(
                  "migrant-smart-documentary-episode-1",
                  900,
                  620,
                )}
                altText="The Keys We Carry, documentary episode 1 thumbnail"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={7}
                scaleOnHover={1.03}
                showTooltip={false}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="rounded-[calc(2rem-0.5rem)] [&_img]:rounded-[calc(2rem-0.5rem)]"
              />
              <div className="pointer-events-none absolute inset-2 flex items-center justify-center rounded-[calc(2rem-0.5rem)] bg-black/15 transition-colors duration-300 group-hover:bg-black/30">
                <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play size={26} weight="fill" className="ml-1" />
                </span>
              </div>
            </Reveal>
          </ParallaxY>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pt-2 pb-16 sm:px-8 md:pb-24">
        <Reveal
          blur
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-6 py-16 text-center sm:px-10 md:py-24"
        >
          <div className="absolute inset-0 opacity-80">
            <LineWaves {...LINEWAVES_PROPS} />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-[18ch] font-serif text-[clamp(28px,4.2vw,46px)] font-medium leading-[1.08] tracking-tight text-white">
              Ready to start your journey?
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base text-white/90 sm:text-lg">
              Join 3,000+ newcomers building brighter futures in Canada with
              Migrant Smart.
            </p>
            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-3.5 pr-3.5 pl-7 text-[15.5px] font-bold text-[#0b0a12] shadow-[0_24px_50px_-16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Join Community
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} weight="bold" />
              </span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
