import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";
import styles from "./Events.module.css";

export const metadata: Metadata = {
  title: "Community Events — Migrant Smart",
  description:
    "From our flagship Next Gen to summer sports and the podcast, our events turn online introductions into a real network.",
};

const FEATURED = [
  {
    image: "Next Gen event photo",
    badge: "Flagship",
    title: "Next Gen",
    text: "Our signature gathering bringing together ambitious newcomers, mentors and employers for a day of connection, learning and inspiration.",
  },
  {
    image: "MS Sports event photo",
    badge: "Seasonal",
    title: "MS Sports",
    text: "Summer sports socials that get the community off the screen and onto the field, friendly games, food and easy first friendships.",
  },
  {
    image: "Young, Skilled & Smart podcast photo",
    badge: "Podcast",
    title: "Young, Skilled & Smart",
    text: "Honest conversations with newcomers who've made it work, the setbacks, the strategies and the moments that turned things around.",
  },
  {
    image: "The Keys We Carry premiere photo",
    badge: "Documentary",
    title: "The Keys We Carry",
    text: "The premiere of our documentary following real migrant journeys in Canada, stories of resilience, reinvention and hope.",
  },
];

const UPCOMING = [
  { title: "Next Gen", desc: "Flagship community gathering · Toronto" },
  { title: "MS Sports Summer Social", desc: "Friendly games & community picnic" },
  { title: "Young, Skilled & Smart, Live taping", desc: "Podcast recording with a live audience" },
];

export default function EventsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner fadeIn">
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">Community Events</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="page-hero-title">
            Where connections become <em style={{ fontStyle: "italic", color: "var(--purple)" }}>community</em>
          </h1>
          <p className="page-hero-lede">
            From our flagship Next Gen to summer sports and the podcast, our events turn online introductions into a real network, and belonging into a habit.
          </p>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.featuredGrid}>
            {FEATURED.map((event) => (
              <div key={event.title} className={styles.featuredCard}>
                <ImageSlot label={event.image} radius={0} className={styles.featuredImage} />
                <div className={styles.featuredBody}>
                  <span className={styles.badge}>{event.badge}</span>
                  <h3 className={styles.featuredTitle}>{event.title}</h3>
                  <p className={styles.featuredText}>{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className={styles.darkSection}>
        <div className={styles.darkInner}>
          <div className="eyebrow">
            <span className="eyebrow-line eyebrow-line--light"></span>
            <span className="eyebrow-label eyebrow-label--light">Upcoming</span>
          </div>
          <h2 className={styles.darkHeading}>On the calendar</h2>
          <div className={styles.calendarList}>
            {UPCOMING.map((item) => (
              <div key={item.title} className={styles.calendarRow}>
                <div className={styles.calendarDate}>
                  <div className={styles.calendarDateValue}>TBA</div>
                  <div className={styles.calendarDateLabel}>Add date</div>
                </div>
                <div className={styles.calendarInfo}>
                  <div className={styles.calendarTitle}>{item.title}</div>
                  <div className={styles.calendarDesc}>{item.desc}</div>
                </div>
                <a href="https://lu.ma/" target="_blank" rel="noopener" className={styles.registerBtn}>
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST GALLERY */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">Moments</span>
          </div>
          <h2 className={styles.galleryHeading}>From past events</h2>
          <div className={styles.galleryGrid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <ImageSlot key={i} label="Event photo" radius={18} style={{ height: 240 }} />
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
