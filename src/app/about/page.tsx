import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";
import { MissionIcon, VisionIcon } from "@/components/Icons";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About — Migrant Smart",
  description:
    "Migrant Smart is a community-first platform built to help immigrants and international students land, settle and thrive in Canada.",
};

export default function AboutPage() {
  return (
    <div>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className={`page-hero-inner fadeIn`}>
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">Who we are</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="page-hero-title">
            Building your bridge to a <em style={{ fontStyle: "italic", color: "var(--purple)" }}>Canadian</em> future
          </h1>
          <p className="page-hero-lede">
            Migrant Smart is a community-first platform built to help immigrants and international students land, settle and thrive in Canada, with the guidance, tools and people the journey really takes.
          </p>
        </div>
      </section>

      {/* WHAT WE'RE ABOUT */}
      <section className={styles.aboutSection}>
        <div className={styles.splitGrid}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">What we&rsquo;re about</span>
            </div>
            <h2 className="section-heading">
              Less time lost. More time <em style={{ fontStyle: "italic", color: "var(--purple)" }}>moving forward.</em>
            </h2>
            <p className={styles.lede}>
              Arriving in a new country means starting over, credentials, career, community, confidence, all at once. Migrant Smart brings the essentials of settling into one place: career readiness, mentorship, live events and practical orientation, backed by a community that genuinely wants you to win.
            </p>
            <p className={styles.lede}>
              We replace guesswork with guidance, and isolation with belonging, so your transition is smart, supported and successful.
            </p>
          </div>
          <ImageSlot label="Team / community photo" radius={24} className={styles.aboutImage} />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className={`${styles.aboutSection} ${styles["aboutSection--tint"]}`}>
        <div className={styles.cardGrid}>
          <div className="card">
            <span className="icon-badge">
              <MissionIcon />
            </span>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              To make every migrant&rsquo;s transition into Canada smart, supported and successful, equipping newcomers with the coaching, community and confidence to build a life they&rsquo;re proud of.
            </p>
          </div>
          <div className="card">
            <span className="icon-badge">
              <VisionIcon />
            </span>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              A Canada where every newcomer can reach their full potential, where arriving is the start of thriving, not just surviving, and no one has to navigate the journey alone.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className={styles.aboutSection}>
        <div className={styles.storyWrap}>
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">Our story</span>
          </div>
          <h2 className="section-heading">It started with a question every newcomer asks</h2>
          <p className={styles.storyQuote}>&ldquo;Why is starting over this hard, and does it have to be?&rdquo;</p>
          <p className={styles.storyText}>
            Migrant Smart began with the lived experience of arriving in Canada full of ambition but short on direction, sending out résumés that went nowhere, missing the unwritten rules, and feeling the distance from home. Out of that came a simple conviction: the roadmap shouldn&rsquo;t be a secret.
          </p>
          <p className={styles.storyText}>
            What started as informal help for friends grew into programs, events and a community thousands strong. Today, Migrant Smart is where newcomers find the practical guidance and genuine support to turn a fresh start into a future they&rsquo;re proud of.
          </p>
        </div>
      </section>

      {/* FOUNDER MINI */}
      <section className={`${styles.aboutSection} ${styles["aboutSection--tint"]}`}>
        <div className={styles.splitGrid}>
          <ImageSlot label="Abigail Peterson, portrait" radius={24} className={styles.founderImage} />
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">Meet the Founder</span>
            </div>
            <h2 className={styles.founderName}>Abigail Peterson</h2>
            <p className={styles.founderRole}>Founder &amp; Lead Coach</p>
            <p className={styles.founderBio}>
              A newcomer turned community builder, Abigail has spent years helping migrants translate their skills into Canadian opportunity. She started Migrant Smart to give others the roadmap she wished she&rsquo;d had, practical, honest and rooted in lived experience.
            </p>
            <Link href="/career-clinic" className="btn btn-primary" style={{ marginTop: 26 }}>
              Book a 1:1 with Abigail →
            </Link>
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
