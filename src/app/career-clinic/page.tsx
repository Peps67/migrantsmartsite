import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import { CheckIcon } from "@/components/Icons";
import styles from "./CareerClinic.module.css";

export const metadata: Metadata = {
  title: "Career Clinic — Migrant Smart",
  description:
    "Hands-on coaching that translates your experience into a Canadian-ready career: résumé, LinkedIn, interviews and a job-search strategy that actually works here.",
};

const OUTCOMES = [
  "A Canadian-ready résumé and LinkedIn profile",
  "The confidence to interview and tell your story",
  "A focused, week-by-week job-search plan",
  "A growing professional network in Canada",
  "Support negotiating and starting your offer",
];

const STEPS = [
  {
    number: "01",
    title: "Assess & localize",
    text: "Rebuild your résumé and LinkedIn for Canadian recruiters and applicant systems.",
  },
  {
    number: "02",
    title: "Position yourself",
    text: "Craft your story and practise interviews until they feel natural and confident.",
  },
  {
    number: "03",
    title: "Job-search strategy",
    text: "Target the right roles, tap the hidden market and network the Canadian way.",
  },
  {
    number: "04",
    title: "Land & negotiate",
    text: "Handle offers with confidence and step into your new role well set up.",
  },
];

export default function CareerClinicPage() {
  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroGrid} fadeIn`}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">Career Clinic</span>
            </div>
            <h1 className={styles.heroTitle}>
              Land your first Canadian role, <em style={{ fontStyle: "italic", color: "var(--purple)" }}>faster.</em>
            </h1>
            <p className={styles.heroLede}>
              Hands-on coaching that translates your experience into a Canadian-ready career: résumé, LinkedIn, interviews and a job-search strategy that actually works here.
            </p>
            <div className={styles.priceLine}>
              <span>
                From <strong style={{ fontWeight: 800, color: "var(--ink)" }}>$75</strong> / 1-hour session
              </span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroSquare}></div>
            <ImageSlot label="Career coaching session photo" radius={24} className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className={styles.facts}>
        <div className={styles.factsGrid}>
          <div>
            <div className={styles.factLabel}>Format</div>
            <div className={styles.factValue}>1:1 &amp; group cohorts</div>
          </div>
          <div>
            <div className={styles.factLabel}>Duration</div>
            <div className={styles.factValue}>6-week program</div>
          </div>
          <div>
            <div className={styles.factLabel}>Next cohort</div>
            <div className={styles.factValue}>Add your date</div>
          </div>
          <div>
            <div className={styles.factLabel}>Where</div>
            <div className={styles.factValue}>Online, live</div>
          </div>
        </div>
      </section>

      {/* GOAL + AUDIENCE */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div className="card-tint">
            <h2 className={styles.cardTitle}>The goal</h2>
            <p className={styles.cardText}>
              Get you Canada-ready and hired, with the documents, mindset and strategy to compete confidently for the roles you actually want, not just the ones you settle for.
            </p>
          </div>
          <div className="card-tint">
            <h2 className={styles.cardTitle}>Who it&rsquo;s for</h2>
            <p className={styles.cardText}>
              Newcomers and international students who have skills and experience but need to translate them for the Canadian market, and want a clear, guided path to their first or next role.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section className={styles.darkSection}>
        <div className={styles.darkInner}>
          <div className="eyebrow">
            <span className="eyebrow-line eyebrow-line--light"></span>
            <span className="eyebrow-label eyebrow-label--light">Program structure</span>
          </div>
          <h2 className={styles.darkHeading}>
            Four weeks of momentum, from lost to <em style={{ fontStyle: "italic", color: "var(--purple-lighter)" }}>hired</em>
          </h2>
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.number} className="card-dark">
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES + PRICING */}
      <section className={styles.section}>
        <div className={styles.outcomesGrid}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">What you&rsquo;ll walk away with</span>
            </div>
            <h2 className={styles.outcomesHeading}>Proposed outcomes</h2>
            <div className={styles.outcomesList}>
              {OUTCOMES.map((outcome) => (
                <div key={outcome} className="check-item">
                  <CheckIcon />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.pricingCard}>
            <span className={styles.pricingBlob}></span>
            <div className={styles.pricingBody}>
              <span className={styles.pricingLabel}>1:1 Session</span>
              <div className={styles.priceRow}>
                <span className={styles.priceValue}>$75</span>
                <span className={styles.priceUnit}>/ hour</span>
              </div>
              <p className={styles.pricingDesc}>
                A focused hour with Abigail to unblock exactly what&rsquo;s holding your search back.
              </p>
              <div className={styles.pricingDivider}></div>
              <div className={styles.pricingFeatures}>
                <div className={styles.pricingFeature}><span>✓</span> Personalised résumé &amp; LinkedIn review</div>
                <div className={styles.pricingFeature}><span>✓</span> Interview coaching &amp; mock questions</div>
                <div className={styles.pricingFeature}><span>✓</span> A clear next-step action plan</div>
              </div>
              <a href="https://calendly.com/" target="_blank" rel="noopener" className="btn btn-white" style={{ width: "100%", marginTop: 26 }}>
                Book via Calendly →
              </a>
              <p className={styles.pricingNote}>Secure payment via Stripe</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className={styles.resultSection}>
        <div className={styles.resultInner}>
          <div className={styles.quoteMark}>&ldquo;</div>
          <p className={styles.quoteText}>
            Within three months of the Career Clinic, I landed my first role in Toronto. It gave me the roadmap I was missing.
          </p>
          <div className={styles.quotePerson}>
            <span className={styles.quoteAvatar}>CO</span>
            <div>
              <div className={styles.quoteName}>Chidi Okonkwo</div>
              <div className={styles.quoteRole}>Data Analyst · Toronto, ON</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.darkCta}>
        <div className={styles.darkCtaInner}>
          <h2 className={styles.darkCtaHeading}>Your next role is closer than it feels</h2>
          <p className={styles.darkCtaLede}>Book a session and get a clear, personal plan to move your Canadian career forward.</p>
          <a href="https://calendly.com/" target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 30 }}>
            Book your 1:1 →
          </a>
        </div>
      </section>
    </div>
  );
}
