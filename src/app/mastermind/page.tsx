import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";
import { CheckAltIcon, ChatIcon, PeopleIcon, StarIcon } from "@/components/Icons";
import styles from "./Mastermind.module.css";

export const metadata: Metadata = {
  title: "Mastermind Community — Migrant Smart",
  description:
    "A driven peer community of newcomers sharing goals, accountability and wins on the journey to thriving in Canada.",
};

const EXPECTATIONS = [
  {
    icon: PeopleIcon,
    title: "Accountability circles",
    text: "Small groups that check in on your goals and keep the momentum honest.",
  },
  {
    icon: StarIcon,
    title: "Mentor access",
    text: "Guidance from people who've built careers and lives in Canada.",
  },
  {
    icon: ChatIcon,
    title: "Live discussions",
    text: "Regular meetups and threads to swap leads, resources and encouragement.",
  },
  {
    icon: CheckAltIcon,
    title: "Wins worth sharing",
    text: "A place to celebrate offers, milestones and first steps, together.",
  },
];

export default function MastermindPage() {
  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroGrid} fadeIn`}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">Mastermind Community</span>
            </div>
            <h1 className={styles.heroTitle}>
              You don&rsquo;t have to do this <em style={{ fontStyle: "italic", color: "var(--purple)" }}>alone</em>
            </h1>
            <p className={styles.heroLede}>
              A driven peer community of newcomers sharing goals, accountability and wins, the people, mentors and momentum that make thriving in Canada feel possible.
            </p>
            <div className={styles.heroActions}>
              <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className="btn btn-primary">
                Join on WhatsApp
              </a>
              <span className={styles.heroActionsNote}>Free to join · 3,000+ members</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCircle}></div>
            <ImageSlot label="Community / group photo" radius={24} className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className={styles.narrowSection}>
        <div className={styles.narrowInner}>
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">What it is</span>
          </div>
          <h2 className="section-heading">A room full of people rooting for you</h2>
          <p className={styles.lede}>
            The Mastermind is where members set goals out loud, share what&rsquo;s working, and get honest support when things get hard. Whether you&rsquo;re job hunting, upskilling, switching fields or starting a business, you&rsquo;ll find peers a few steps ahead, mentors who&rsquo;ve been there, and a rhythm of accountability that keeps you moving.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className={styles.expectSection}>
        <div className={styles.expectInner}>
          <h3 className={styles.expectHeading}>What members can expect</h3>
          <div className={styles.expectGrid}>
            {EXPECTATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={styles.expectCard}>
                  <span className={styles.expectIcon}>
                    <Icon size={24} />
                  </span>
                  <h4 className={styles.expectTitle}>{item.title}</h4>
                  <p className={styles.expectText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEETING + WHO */}
      <section className={styles.detailsSection}>
        <div className={styles.detailsGrid}>
          <div className="card">
            <h3 className={styles.detailsTitle}>Meeting frequency &amp; timing</h3>
            <div className={styles.timingList}>
              <div className={styles.timingRow}>
                <span className={styles.timingLabel}>Community check-ins</span>
                <span className={styles.timingValue}>Weekly</span>
              </div>
              <div className={styles.timingRow}>
                <span className={styles.timingLabel}>Live mastermind call</span>
                <span className={styles.timingValue}>Monthly</span>
              </div>
              <div className={styles.timingRow}>
                <span className={styles.timingLabel}>Where</span>
                <span className={styles.timingValue}>WhatsApp + Zoom</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className={styles.detailsTitle}>Who it&rsquo;s for</h3>
            <p className={styles.detailsText}>
              Ambitious newcomers and international students who want more than tips, a community that pushes them, celebrates them and keeps them accountable while they build their Canadian future.
            </p>
            <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className="text-link" style={{ marginTop: 22 }}>
              How to join →
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Find your people"
        lede="Join the Mastermind community free and get the support the journey really takes."
        ctaLabel="Join on WhatsApp →"
      />
    </div>
  );
}
