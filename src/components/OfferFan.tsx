"use client";

import Link from "next/link";
import {
  Target,
  UsersThree,
  CalendarDots,
  ChalkboardTeacher,
} from "@phosphor-icons/react";

import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import BounceCards from "@/components/reactbits/BounceCards";

const OFFERS = [
  {
    href: "/career-clinic",
    seed: "migrant-smart-career-coaching",
    icon: Target,
    tag: "Get hired",
    title: "Career Clinic",
  },
  {
    href: "/mastermind",
    seed: "migrant-smart-community-networking",
    icon: UsersThree,
    tag: "Grow together",
    title: "Mastermind Community",
  },
  {
    href: "/events",
    seed: "migrant-smart-nextgen-event",
    icon: CalendarDots,
    tag: "Connect",
    title: "Community Events",
  },
  {
    href: "/webinars",
    seed: "migrant-smart-workshop-session",
    icon: ChalkboardTeacher,
    tag: "Learn",
    title: "Webinars & Workshops",
  },
];

const TRANSFORM_STYLES = [
  "rotate(-9deg) translate(-190px)",
  "rotate(-3deg) translate(-63px)",
  "rotate(3deg) translate(63px)",
  "rotate(9deg) translate(190px)",
];

export function OfferFan() {
  const cards = OFFERS.map((offer) => (
    <Link
      key={offer.href}
      href={offer.href}
      className="block h-[300px] w-[220px] overflow-hidden rounded-[24px] border-4 border-white shadow-[0_20px_45px_-12px_rgba(23,23,31,0.35)] dark:border-white/90"
    >
      <div className="relative h-full w-full">
        <PlaceholderPhoto
          seed={offer.seed}
          alt={`${offer.title} at Migrant Smart`}
          fill
          sizes="220px"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="flex size-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
            <offer.icon size={16} weight="bold" />
          </span>
          <div className="mt-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white/70">
            {offer.tag}
          </div>
          <h3 className="mt-0.5 text-[15px] font-bold text-white">
            {offer.title}
          </h3>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="hidden justify-center md:flex">
        <BounceCards
          cards={cards}
          containerWidth={760}
          containerHeight={340}
          transformStyles={TRANSFORM_STYLES}
          enableHover
          animationDelay={0.2}
          animationStagger={0.08}
        />
      </div>

      {/* Mobile: plain stack, no rotation/overlap per the layout's mobile-collapse rule */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:hidden">
        {OFFERS.map((offer) => (
          <Link
            key={offer.href}
            href={offer.href}
            className="block h-[260px] overflow-hidden rounded-[22px] border border-border shadow-sm"
          >
            <div className="relative h-full w-full">
              <PlaceholderPhoto
                seed={offer.seed}
                alt={`${offer.title} at Migrant Smart`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                  <offer.icon size={17} weight="bold" />
                </span>
                <div className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
                  {offer.tag}
                </div>
                <h3 className="mt-1 text-[17px] font-bold text-white">
                  {offer.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
