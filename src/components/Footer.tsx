import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.logoLink}>
              <Image src="/logo-white.png" alt="Migrant Smart" width={89} height={36} />
            </Link>
            <p className={styles.tagline}>
              Your launchpad to success in Canada, coaching, community, events and workshops built to help newcomers land, settle and thrive.
            </p>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"></circle>
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube" className={styles.socialLink}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 8.2a2.8 2.8 0 0 0-2-2C18.2 5.7 12 5.7 12 5.7s-6.2 0-8 .5a2.8 2.8 0 0 0-2 2C1.5 10 1.5 12 1.5 12s0 2 .5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8zM10 15.2V8.8l5.2 3.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Explore</h4>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/blog" className={styles.link}>Blog</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Programs</h4>
            <div className={styles.links}>
              <Link href="/career-clinic" className={styles.link}>Career Clinic</Link>
              <Link href="/mastermind" className={styles.link}>Mastermind</Link>
              <Link href="/events" className={styles.link}>Community Events</Link>
              <Link href="/webinars" className={styles.link}>Webinars</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Get in touch</h4>
            <div className={styles.links}>
              <a href="mailto:hello@migrantsmart.ca" className={styles.link}>hello@migrantsmart.ca</a>
              <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className={styles.link}>WhatsApp Community</a>
            </div>
            <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className={styles.joinBtn}>
              Join the community
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.bottomText}>© 2026 Migrant Smart. All rights reserved.</span>
          <span className={styles.bottomText}>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
