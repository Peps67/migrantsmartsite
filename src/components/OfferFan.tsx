"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Target,
  UsersThree,
  CalendarDots,
  ChalkboardTeacher,
  ArrowRight,
} from "@phosphor-icons/react";

import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { cn } from "@/lib/utils";

const OFFERS = [
  {
    href: "/career-clinic",
    image: "/offers/career-clinic.jpg",
    seed: null,
    icon: Target,
    tag: "Get promoted",
    title: "Career Clinic",
    description:
      "The strategies and unwritten systems behind getting seen, hired and ahead in Corporate Canada.",
  },
  {
    href: "/mastermind",
    image: "/offers/mastermind.jpg",
    seed: null,
    icon: UsersThree,
    tag: "Grow together",
    title: "Mastermind Community",
    description:
      "A driven peer network for accountability, connection and support as you build your new life.",
  },
  {
    href: "/events",
    image: "/offers/community-events.jpg",
    seed: null,
    icon: CalendarDots,
    tag: "Connect",
    title: "Community Events",
    description:
      "Next Gen meetups, sports and podcast nights to help you build real connections in Canada.",
  },
  {
    href: "/webinars",
    image: "/offers/webinars.jpg",
    seed: null,
    icon: ChalkboardTeacher,
    tag: "Learn",
    title: "Webinars & Workshops",
    description:
      "Orientation sessions and masterclasses covering everything you need to know as a newcomer.",
    // Page lives in src/app/_webinars and is not routed, so this card shows
    // the offer without pretending there is somewhere to click through to.
    soon: true,
  },
];

export function OfferFan() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {OFFERS.map((offer) => {
        const cardClass = cn(
          "group block overflow-hidden rounded-[26px] border border-black/10 bg-background shadow-[0_20px_45px_-24px_rgba(23,23,31,0.3)] transition-transform duration-300 dark:border-white/10",
          !offer.soon && "hover:-translate-y-1",
        );
        const body = (
          <>
          <div className="relative aspect-[4/3] overflow-hidden">
            {offer.image ? (
              <Image
                src={offer.image}
                alt={`${offer.title} at Migrant Smart`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <PlaceholderPhoto
                seed={offer.seed!}
                alt={`${offer.title} at Migrant Smart`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute top-4 left-4 flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
              <offer.icon size={17} weight="bold" />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-white/70">
                {offer.tag}
              </div>
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-serif text-lg font-medium text-foreground">
              {offer.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/70">
              {offer.description}
            </p>
            {offer.soon ? (
              <span className="mt-4 inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-[11.5px] font-bold tracking-[0.06em] text-foreground/50 uppercase">
                Coming soon
              </span>
            ) : (
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
                See more
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            )}
          </div>
          </>
        );
        return offer.soon ? (
          <div key={offer.href} className={cardClass}>
            {body}
          </div>
        ) : (
          <Link key={offer.href} href={offer.href} className={cardClass}>
            {body}
          </Link>
        );
      })}
    </div>
  );
}
