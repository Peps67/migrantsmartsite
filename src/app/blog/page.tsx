import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import NewsletterForm from "./NewsletterForm";
import styles from "./Blog.module.css";

export const metadata: Metadata = {
  title: "Blog — Migrant Smart",
  description:
    "Practical playbooks and real experiences to help you navigate life, work and community in Canada.",
};

const POSTS = [
  {
    category: "Settling In",
    title: "Your first 30 days in Canada: a checklist",
    desc: "SIN, banking, health card and the small wins that make week one feel manageable.",
    meta: "5 min read",
  },
  {
    category: "Careers",
    title: "How to network in Canada without feeling awkward",
    desc: "The mindset shift and simple scripts that open doors to the hidden job market.",
    meta: "7 min read",
  },
  {
    category: "Success Stories",
    title: "From newcomer to hired in 90 days: Chidi's story",
    desc: "How one member turned a stalled search into a first Canadian role.",
    meta: "4 min read",
  },
  {
    category: "Community",
    title: "Beating the loneliness of moving abroad",
    desc: "Practical ways to build a real circle when you're starting from zero.",
    meta: "6 min read",
  },
  {
    category: "Careers",
    title: "Getting your credentials recognised in Canada",
    desc: "Where to start, who to contact, and how to keep momentum while you wait.",
    meta: "8 min read",
  },
  {
    category: "Settling In",
    title: "Renting your first place: what to know",
    desc: "Leases, credit checks and avoiding the traps newcomers fall into.",
    meta: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* HERO */}
      <section className="page-hero" style={{ padding: "clamp(52px,6.5vw,84px) 32px" }}>
        <div className="page-hero-inner fadeIn" style={{ maxWidth: 1000 }}>
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-label">The Migrant Smart Blog</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="page-hero-title">
            Guides, stories &amp; <em style={{ fontStyle: "italic", color: "var(--purple)" }}>honest advice</em>
          </h1>
          <p className="page-hero-lede" style={{ maxWidth: 600 }}>
            Practical playbooks and real experiences to help you navigate life, work and community in Canada.
          </p>
          <div className={styles.categories}>
            <span className={styles.categoryActive}>All</span>
            <span className={styles.category}>Careers</span>
            <span className={styles.category}>Settling In</span>
            <span className={styles.category}>Community</span>
            <span className={styles.category}>Success Stories</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredInner}>
          <Link href="/blog" className={styles.featuredLink}>
            <ImageSlot label="Featured post image" radius={22} className={styles.featuredImage} />
            <div>
              <span className={styles.featuredTag}>Careers · Featured</span>
              <h2 className={styles.featuredTitle}>The Canadian résumé: what recruiters here actually look for</h2>
              <p className={styles.featuredDesc}>
                The format, the length, the phrasing, a practical breakdown of how to rework the résumé that worked back home for the market you&rsquo;re in now.
              </p>
              <div className={styles.featuredMeta}>
                <span className={styles.metaText}>Abigail Peterson</span>
                <span className={styles.metaDot}></span>
                <span className={styles.metaText}>6 min read</span>
              </div>
              <span className="text-link" style={{ marginTop: 22 }}>Read article →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* POST GRID */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.divider}></div>
          <div className={styles.postGrid}>
            {POSTS.map((post) => (
              <Link key={post.title} href="/blog" className={styles.postCard}>
                <ImageSlot label="Post image" radius={18} className={styles.postImage} />
                <div className={styles.postCategory}>{post.category}</div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postDesc}>{post.desc}</p>
                <div className={styles.postMeta}>{post.meta}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterInner}>
          <h2 className={styles.newsletterHeading}>Get the next guide in your inbox</h2>
          <p className={styles.newsletterLede}>New playbooks and stories for newcomers, roughly twice a month. No spam.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
