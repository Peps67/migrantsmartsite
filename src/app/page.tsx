import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  YoutubeLogo,
  Play,
  Sparkle,
  CalendarBlank,
  Clock,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlobeConnections } from "@/components/GlobeConnections";
import { GrainOverlay } from "@/components/GrainOverlay";
import BlurText from "@/components/reactbits/BlurText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { OfferFan } from "@/components/OfferFan";
import TestimonialSlider from "@/components/TestimonialSlider";
import TiltedCard from "@/components/reactbits/TiltedCard";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";
import { ParallaxY } from "@/components/ParallaxY";
import CountdownTimer from "@/components/CountdownTimer";
import HeroReveal from "./HeroReveal";
import Reveal from "@/components/Reveal";

const FOUNDER_POINTS = [
  "Host of the Career Clinic program",
  "Leads a 3,000+ strong newcomer community",
];

// 9:00 AM MT on Sep 19, 2026 — Career Clinic Cohort 2 kicks off.
const CAREER_CLINIC_LAUNCH_ISO = "2026-09-19T15:00:00Z";

const CAREER_CLINIC_DETAILS = [
  { icon: CalendarBlank, label: "Date", value: "Sep 19 – Oct 3, 2026" },
  { icon: Clock, label: "Time", value: "11:00AM – 2:00PM" },
  { icon: MapPin, label: "Location", value: "The Platform Calgary" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-10 sm:rounded-t-[3rem] sm:px-8 md:py-14">
        <GrainOverlay />
        <div className="relative mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-[0.8fr_1fr] lg:gap-8">
          <div className="lg:-mt-11">
            <BlurText
              text="Your launchpad to success in Canada"
              className="max-w-[16ch] font-serif text-[clamp(38px,5.4vw,76px)] font-medium leading-[1.05] tracking-tight text-[#17171f] [&>span:nth-child(4)]:text-primary [&>span:nth-child(4)]:italic"
              delay={90}
              stepDuration={0.3}
            />
            <HeroReveal delay={0.9}>
              <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-[#17171f]/70 sm:text-lg md:text-[19px]">
                Career coaching, a driven community and practical workshops to
                help you land, settle and thrive in Canada.
              </p>
            </HeroReveal>
            <HeroReveal
              delay={1.05}
              className="mt-7 flex flex-wrap items-center gap-5"
            >
              <a
                href="https://chat.whatsapp.com/GZH56TFwU7D61xqFufv6pp?s=sh&p=i&mlu=4"
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

          <HeroReveal delay={0.3}>
            <GlobeConnections className="mx-auto w-full max-w-[500px]" />
          </HeroReveal>
        </div>
      </section>

      {/* CAREER CLINIC COUNTDOWN STRIP */}
      <section className="relative z-10 px-5 sm:px-8">
        <Reveal
          blur
          className="relative mx-auto -mt-10 max-w-[1040px] overflow-hidden rounded-[2rem] bg-[#5343EB] px-6 py-6 shadow-[0_30px_70px_-24px_rgba(84,72,240,0.55)] sm:-mt-12 sm:rounded-[2.5rem] sm:px-9 sm:py-7"
        >
          <GrainOverlay />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-primary uppercase shadow-[0_8px_20px_-8px_rgba(23,23,31,0.35)]">
                <Sparkle size={12} weight="fill" />
                Countdown to Career Clinic Cohort 2
              </span>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <CountdownTimer
                  targetDate={CAREER_CLINIC_LAUNCH_ISO}
                  variant="light"
                  className="justify-center lg:justify-start"
                />
              </div>
            </div>

            <div className="hidden h-16 w-px shrink-0 bg-white/15 lg:block" />
            <div className="block h-px w-full bg-white/15 lg:hidden" />

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:shrink-0 lg:items-start">
              {CAREER_CLINIC_DETAILS.map((detail, i) => (
                <div key={detail.label} className="flex items-center gap-x-6">
                  {i > 0 && (
                    <span className="hidden h-9 w-px shrink-0 bg-white/15 sm:block" />
                  )}
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                        <detail.icon size={16} weight="bold" />
                      </span>
                      <div className="text-left">
                        <div className="text-[10px] font-bold tracking-[0.1em] text-white/55 uppercase">
                          {detail.label}
                        </div>
                        <div className="text-[13px] font-bold whitespace-nowrap text-white">
                          {detail.value}
                        </div>
                      </div>
                    </div>
                    {i === 2 && (
                      <Button
                        asChild
                        variant="white"
                        size="sm"
                        className="w-full"
                      >
                        <Link href="/career-clinic">
                          Register Here
                          <ArrowRight size={16} weight="bold" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT / MISSION */}
      <section id="about" className="px-5 py-9 sm:px-8 md:py-12">
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
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
                    20+
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
      <section id="offer" className="px-5 py-9 sm:px-8 md:py-14">
        <div className="mx-auto max-w-[1240px]">
          <Reveal blur className="text-center">
            <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.12] tracking-tight text-foreground">
              Four ways we help you{" "}
              <em className="text-primary italic">thrive</em>
            </h2>
          </Reveal>
          <div className="mt-10">
            <OfferFan />
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section
        id="founder"
        className="overflow-hidden px-5 py-9 sm:px-8 md:py-12"
      >
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <ParallaxY range={28} className="relative order-2 lg:order-1">
            <Reveal blur>
              <span className="pointer-events-none absolute -top-6 -left-6 hidden h-28 w-28 rounded-full bg-[var(--aurora-1)]/15 blur-2xl sm:block" />
              <div className="relative aspect-[4/5] rounded-[2rem] border border-black/10 bg-black/5 p-2 shadow-[0_30px_60px_-24px_rgba(23,23,31,0.3)] dark:border-white/15 dark:bg-white/5">
                <TiltedCard
                  imageSrc="/team/abigail-peterson-founder.jpg"
                  altText="Abigail Akpan, founder of Migrant Smart"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={9}
                  scaleOnHover={1.04}
                  showTooltip={false}
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="rounded-[calc(2rem-0.5rem)] [&_img]:rounded-[calc(2rem-0.5rem)] [&_img]:object-[50%_15%]"
                />
              </div>
            </Reveal>
          </ParallaxY>

          <Reveal blur delay={0.1} className="order-1 lg:order-2">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
              Meet the Founder
            </span>
            <h2 className="mt-4 font-serif text-[clamp(26px,3.2vw,36px)] font-medium text-foreground">
              Abigail Akpan
            </h2>
            <p className="mt-1 text-[15px] font-semibold text-muted-foreground">
              CPA, Founder, Migrant Smart
            </p>
            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Formerly a Manager at one of the world&rsquo;s largest
              consulting firms, Abigail is a Chartered Professional Accountant
              who audited and advised large multinational organizations
              across sectors including SaaS, Oil &amp; Gas, Construction,
              Consumer Services, Manufacturing, and Non-Profits.
            </p>
            <p className="mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              With 8 years of experience, Abigail now provides strategic
              coaching and guidance to CPA firms across Eastern and Western
              Canada, helping them build profitable wealth management units,
              5X their valuation, and grow their revenue and client base.
            </p>
            <p className="mt-4 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Alongside her industry and leadership experience, Abigail
              founded Migrant Smart, an organization built to help career and
              business professionals who&rsquo;ve relocated to Canada
              navigate the systems, relationships, and opportunities that
              determine long-term success.
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
              <Link href="/book-1-1">Book your 1:1</Link>
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
        className="overflow-hidden px-5 py-9 sm:px-8 md:py-12"
      >
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
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
                  href="https://youtu.be/R1cHXhJNiag?si=xbBAmiM_QkOBbA-c"
                  target="_blank"
                  rel="noopener"
                >
                  <Play size={16} weight="fill" />
                  Watch Episode 1
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://www.youtube.com/@MigrantSmart"
                  target="_blank"
                  rel="noopener"
                >
                  Subscribe on YouTube
                </a>
              </Button>
            </div>
          </Reveal>

          <ParallaxY range={24}>
            <Reveal blur>
              <YouTubeThumbnail
                videoId="R1cHXhJNiag"
                title="The Keys We Carry, Episode 1"
              />
            </Reveal>
          </ParallaxY>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pt-2 pb-9 sm:px-8 md:pb-12">
        <Reveal
          blur
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-6 py-16 text-center sm:px-10 md:py-24"
        >
          <div className="relative">
            <h2 className="mx-auto max-w-[18ch] font-serif text-[clamp(28px,4.2vw,46px)] font-medium leading-[1.08] tracking-tight text-white">
              Ready to start your journey?
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base text-white/90 sm:text-lg">
              Join 3,000+ newcomers building brighter futures in Canada with
              Migrant Smart.
            </p>
            <a
              href="https://chat.whatsapp.com/GZH56TFwU7D61xqFufv6pp?s=sh&p=i&mlu=4"
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
