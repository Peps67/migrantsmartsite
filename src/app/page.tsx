import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import OfferCarousel from "@/components/OfferCarousel";
import TestimonialSlider from "@/components/TestimonialSlider";
import { CheckIcon, CircleTargetIcon } from "@/components/Icons";
import styles from "./page.module.css";

const RIBBON_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='9' stroke-linecap='round' stroke-opacity='0.13'%3E%3Cpath d='M-40 40 q37 -52 75 0 t75 0 t75 0'/%3E%3Cpath d='M-40 110 q37 -52 75 0 t75 0 t75 0'/%3E%3C/g%3E%3C/svg%3E\")";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroGrid} fadeIn`}>
          <div>
            <h1 className={styles.heroHeadline}>
              Your launchpad to <em style={{ fontStyle: "italic", color: "var(--purple)" }}>success</em> in Canada
            </h1>
            <p className={styles.heroLede}>
              Migrant Smart helps you land, settle and thrive, through career coaching, a driven community, live events and practical workshops built for your Canadian journey.
            </p>
            <div className={styles.heroActions}>
              <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className="btn btn-ink">
                Join Community
              </a>
              <Link href="#offer" className={styles.exploreLink}>
                Explore our programs
                <span className={styles.exploreArrow}>→</span>
              </Link>
            </div>
            <div className={styles.heroSocialProof}>
              <div className={styles.avatarStack}>
                <span className={styles.avatarDot} style={{ background: "var(--purple-light)" }}></span>
                <span className={styles.avatarDot} style={{ background: "var(--purple)" }}></span>
                <span className={styles.avatarDot} style={{ background: "#211F33" }}></span>
                <span className={styles.avatarPlus}>+</span>
              </div>
              <div>
                <div className={styles.socialProofTitle}>
                  Join <strong style={{ fontWeight: 800 }}>3,000+</strong> Immigrants
                </div>
                <div className={styles.socialProofSub}>building futures across Canada</div>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroVisualSquare}></div>
            <div className={styles.heroVisualCircle}></div>
            <ImageSlot label="Hero image, diverse newcomers thriving in Canada" radius={26} className={styles.heroImage} />
            <div className={styles.heroFloatCard}>
              <span className={styles.heroFloatIcon}>
                <CircleTargetIcon size={24} />
              </span>
              <div>
                <div className={styles.heroFloatTitle}>Career Clinic</div>
                <div className={styles.heroFloatSub}>Land your first Canadian role</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutGrid}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">Our Mission</span>
            </div>
            <h2 className={styles.aboutHeading}>
              To make every migrant&rsquo;s transition <em style={{ fontStyle: "italic", color: "var(--purple)" }}>smart</em>, supported and successful.
            </h2>
            <p className={styles.aboutLede}>
              We exist to close the gap between arriving in Canada and building a life you&rsquo;re proud of, replacing guesswork with guidance, and isolation with a community that has your back.
            </p>
            <Link href="/about" className="text-link" style={{ marginTop: 26 }}>
              Read our story →
            </Link>
          </div>
          <div className="card-tint">
            <h3 className={styles.aboutCardTitle}>About Migrant Smart</h3>
            <p className={styles.aboutCardText}>
              Migrant Smart is a community-first platform helping immigrants and international students navigate life in Canada with confidence. From career readiness and mentorship to events and orientation workshops, we bring the people, tools and know-how of settling into one place, so you spend less time lost and more time moving forward.
            </p>
            <div className={styles.statsRow}>
              <div>
                <div className={styles.statValue}>3,000+</div>
                <div className={styles.statLabel}>Community members</div>
              </div>
              <div>
                <div className={styles.statValue}>50+</div>
                <div className={styles.statLabel}>Events hosted</div>
              </div>
              <div>
                <div className={styles.statValue}>4</div>
                <div className={styles.statLabel}>Core programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERING */}
      <OfferCarousel />

      {/* FOUNDER */}
      <section id="founder" className={styles.founder}>
        <div className={styles.founderGrid}>
          <div className={styles.founderVisual}>
            <div className={styles.founderSquare}></div>
            <ImageSlot label="Abigail Peterson, professional portrait" radius={24} className={styles.founderImage} />
          </div>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-label">Meet the Founder</span>
            </div>
            <h2 className={styles.founderName}>Abigail Peterson</h2>
            <p className={styles.founderRole}>Founder &amp; Lead Coach, Migrant Smart</p>
            <p className={styles.founderBio}>
              A newcomer turned community builder, Abigail has spent years helping migrants translate their skills and experience into Canadian opportunity. With a background spanning career coaching, talent and community leadership, she started Migrant Smart to give others the roadmap she wished she&rsquo;d had, practical, honest and rooted in lived experience.
            </p>
            <div className={styles.founderChecklist}>
              <div className="check-item">
                <CheckIcon />
                <span>1:1 career coaching &amp; mentorship</span>
              </div>
              <div className="check-item">
                <CheckIcon />
                <span>Host of the Career Clinic program</span>
              </div>
              <div className="check-item">
                <CheckIcon />
                <span>Leads a 3,000+ strong newcomer community</span>
              </div>
            </div>
            <Link href="/career-clinic" className="btn btn-primary" style={{ marginTop: 30 }}>
              Book your 1:1 →
            </Link>
            <p className={styles.founderNote}>Sessions scheduled via Calendly · secure payment via Stripe</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialSlider />

      {/* DOCUMENTARY */}
      <section id="documentary" className={styles.documentary}>
        <div className={styles.documentaryGrid}>
          <div>
            <div className={styles.documentaryTag}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--red)">
                <path d="M22 8.2a2.8 2.8 0 0 0-2-2C18.2 5.7 12 5.7 12 5.7s-6.2 0-8 .5a2.8 2.8 0 0 0-2 2C1.5 10 1.5 12 1.5 12s0 2 .5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8zM10 15.2V8.8l5.2 3.2z"></path>
              </svg>
              <span className={styles.documentaryTagLabel}>On YouTube</span>
            </div>
            <h2 className={styles.documentaryHeading}>
              Watch <em style={{ fontStyle: "italic", color: "var(--purple)" }}>The Keys We Carry</em>
            </h2>
            <p className={styles.documentaryLede}>
              Go behind the scenes with the real stories of migrants building new lives in Canada. Follow the journey, the setbacks and the wins, one episode at a time.
            </p>
            <div className={styles.documentaryActions}>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener" className="btn btn-ink btn-sm">
                ▶ Watch Episode 1
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                Subscribe on YouTube
              </a>
            </div>
          </div>
          <div className={styles.documentaryVisual}>
            <ImageSlot label="Documentary Episode 1 thumbnail" radius={20} className={styles.documentaryThumb} />
            <div className={styles.playOverlay}>
              <span className={styles.playButton}>▶</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="cta-band">
          <div className={styles.ctaRibbon} style={{ background: RIBBON_BG }}></div>
          <div className="cta-band-content">
            <h2 className={styles.ctaHeading}>Ready to start your journey?</h2>
            <p className={styles.ctaLede}>Join 3,000+ newcomers building brighter futures in Canada with Migrant Smart.</p>
            <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className="btn btn-white" style={{ marginTop: 32 }}>
              Join the community →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
