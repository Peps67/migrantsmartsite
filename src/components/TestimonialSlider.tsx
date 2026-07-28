"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TestimonialSlider.module.css";

const TESTIMONIALS = [
  {
    quote:
      "Migrant Smart gave me the roadmap I was missing. Within three months of joining the Career Clinic, I landed my first role in Toronto.",
    name: "Chidi Okonkwo",
    role: "Data Analyst · Toronto, ON",
  },
  {
    quote:
      "The community is everything. Moving to a new country is lonely, here I found mentors, friends and people who genuinely wanted me to win.",
    name: "Amara Bello",
    role: "UX Designer · Vancouver, BC",
  },
  {
    quote:
      "The workshops broke down exactly what I needed to know as a newcomer. Practical, honest and zero fluff. I recommend it to everyone arriving.",
    name: "Samuel Mensah",
    role: "Software Engineer · Calgary, AB",
  },
].map((t) => ({
  ...t,
  initials: t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join(""),
}));

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const setT = (i: number) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <div className="eyebrow eyebrow--center">
          <span className="eyebrow-line eyebrow-line--light"></span>
          <span className="eyebrow-label eyebrow-label--light">Testimonials</span>
        </div>
        <h2 className={styles.heading}>
          Real people, <em style={{ fontStyle: "italic", color: "var(--purple-lighter)" }}>real</em> results
        </h2>

        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.quoteMark}>&ldquo;</div>
                  <p className={styles.quote}>{t.quote}</p>
                  <div className={styles.person}>
                    <span className={styles.avatar}>{t.initials}</span>
                    <div className={styles.personText}>
                      <div className={styles.personName}>{t.name}</div>
                      <div className={styles.personRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button aria-label="Previous" className={styles.arrowBtn} onClick={() => setT(index - 1)}>←</button>
          <div className={styles.dots}>
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                aria-label={String(i + 1)}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
                onClick={() => setT(i)}
              ></button>
            ))}
          </div>
          <button aria-label="Next" className={styles.arrowBtn} onClick={() => setT(index + 1)}>→</button>
        </div>
      </div>
    </section>
  );
}
