import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";
import styles from "./Webinars.module.css";

export const metadata: Metadata = {
  title: "Webinars & Workshops — Migrant Smart",
  description:
    "Live and recorded sessions on the things no one tells you when you arrive: housing, credentials, banking, taxes and more.",
};

const WORKSHOPS = [
  {
    type: "Workshop",
    title: "Credentials & Recognition",
    text: "How to get your qualifications recognised and where to start if they aren't.",
  },
  {
    type: "Masterclass",
    title: "Money & Credit in Canada",
    text: "Banking, building credit, taxes and budgeting for your first year.",
  },
  {
    type: "Workshop",
    title: "The Canadian Workplace",
    text: "Culture, communication and the unwritten rules of working here.",
  },
  {
    type: "Masterclass",
    title: "Housing & Settling In",
    text: "Finding a place, leases, and making a new city feel like home.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Pick a session",
    text: "Browse upcoming workshops and choose what fits your stage.",
  },
  {
    number: "2",
    title: "Reserve your spot",
    text: "Register in a couple of clicks and get a calendar invite.",
  },
  {
    number: "3",
    title: "Show up & grow",
    text: "Join live, ask questions, and keep the recording afterwards.",
  },
];

export default function WebinarsPage() {
  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroGrid} fadeIn`}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">Webinars &amp; Workshops</span>
            </div>
            <h1 className={styles.heroTitle}>
              The practical essentials, <em style={{ fontStyle: "italic", color: "var(--purple)" }}>explained</em>
            </h1>
            <p className={styles.heroLede}>
              Live and recorded sessions on the things no one tells you when you arrive, housing, credentials, banking, taxes and more, led by anchors who&rsquo;ve been there.
            </p>
            <a href="https://lu.ma/" target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 30 }}>
              See upcoming sessions
            </a>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroSquare}></div>
            <ImageSlot label="Workshop / webinar photo" radius={24} className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* ORIENTATION FEATURE */}
      <section className={styles.orientationSection}>
        <div className={styles.orientationCard}>
          <div>
            <span className={styles.orientationBadge}>Start here</span>
            <h2 className={styles.orientationTitle}>Newcomers Orientation</h2>
            <p className={styles.orientationText}>
              Our free flagship workshop covering the first 90 days in Canada, settling in, credentials, banking, healthcare, housing and how to plug into the community from day one.
            </p>
            <a href="https://lu.ma/" target="_blank" rel="noopener" className="btn btn-primary btn-sm" style={{ marginTop: 24 }}>
              Reserve your spot →
            </a>
          </div>
          <ImageSlot label="Orientation session photo" radius={20} className={styles.orientationImage} />
        </div>
      </section>

      {/* WORKSHOP LIST */}
      <section className={styles.listSection}>
        <div className={styles.listInner}>
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">The series</span>
          </div>
          <h2 className={styles.listHeading}>Workshops &amp; masterclasses</h2>
          <div className={styles.workshopGrid}>
            {WORKSHOPS.map((item) => (
              <div key={item.title} className={styles.workshopCard}>
                <div className={styles.workshopRow}>
                  <span className={styles.workshopType}>{item.type}</span>
                  <span className={styles.workshopDate}>Add date</span>
                </div>
                <h3 className={styles.workshopTitle}>{item.title}</h3>
                <p className={styles.workshopDesc}>{item.text}</p>
                <p className={styles.workshopAnchor}>Anchor: TBA</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO REGISTER */}
      <section className={styles.registerSection}>
        <div className={styles.registerInner}>
          <h2 className={styles.registerHeading}>How to register</h2>
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Learn what you need, when you need it"
        lede="Join the community to get workshop dates and registration links first."
      />
    </div>
  );
}
