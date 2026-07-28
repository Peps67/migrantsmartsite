"use client";

import { useRef } from "react";
import Link from "next/link";
import ImageSlot from "./ImageSlot";
import { CalendarIcon, CircleTargetIcon, PeopleIcon, WorkshopIcon } from "./Icons";
import styles from "./OfferCarousel.module.css";

const OFFERS = [
  {
    href: "/career-clinic",
    image: "Career coaching / resume session photo",
    icon: CircleTargetIcon,
    tag: "Get hired",
    title: "Career Clinic",
    desc: "Hands-on coaching to translate your experience into a Canadian-ready career, resumes, interviews and job strategy.",
  },
  {
    href: "/mastermind",
    image: "Community / networking photo",
    icon: PeopleIcon,
    tag: "Grow together",
    title: "Mastermind Community",
    desc: "A driven peer community sharing goals, accountability and wins on the journey to thriving in Canada.",
  },
  {
    href: "/events",
    image: "Community event / Next Gen photo",
    icon: CalendarIcon,
    tag: "Connect",
    title: "Community Events",
    desc: "Flagship gatherings like Next Gen, socials and sports events that turn online connections into a real network.",
  },
  {
    href: "/webinars",
    image: "Workshop / webinar photo",
    icon: WorkshopIcon,
    tag: "Learn",
    title: "Webinars & Workshops",
    desc: "Newcomer orientation, masterclasses and workshops covering the practical essentials of settling in Canada.",
  },
];

export default function OfferCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 362, behavior: "smooth" });
  };

  return (
    <section id="offer" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">What we offer</span>
          </div>
          <h2 className={styles.heading}>
            Four ways we help you <em style={{ fontStyle: "italic", color: "var(--purple)" }}>thrive</em>
          </h2>
        </div>
        <div className={styles.navButtons}>
          <button aria-label="Previous" className={styles.navBtn} onClick={() => scrollBy(-1)}>←</button>
          <button aria-label="Next" className={styles.navBtn} onClick={() => scrollBy(1)}>→</button>
        </div>
      </div>

      <div ref={trackRef} data-hscroll className={styles.track}>
        {OFFERS.map((offer) => {
          const Icon = offer.icon;
          return (
            <Link key={offer.href} href={offer.href} className={styles.card}>
              <div className={styles.cardImage}>
                <ImageSlot label={offer.image} radius={0} style={{ height: "100%" }} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTag}>
                  <span className={styles.cardTagIcon}><Icon size={22} /></span>
                  <span className={styles.cardTagLabel}>{offer.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{offer.title}</h3>
                <p className={styles.cardDesc}>{offer.desc}</p>
                <span className={styles.cardLink}>Learn more →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
