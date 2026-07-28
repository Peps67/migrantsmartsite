"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { CalendarIcon, CircleTargetIcon, PeopleIcon, WorkshopIcon } from "./Icons";

const OFFERING_PATHS = ["/career-clinic", "/mastermind", "/events", "/webinars"];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const offerGroupActive = OFFERING_PATHS.includes(pathname);
  const link = (href: string) => (pathname === href ? styles.active : "");

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/logo-default.png" alt="Migrant Smart" width={84} height={34} priority />
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${link("/")}`}>
            Home
          </Link>
          <Link href="/about" className={`${styles.navLink} ${link("/about")}`}>
            About
          </Link>
          <div className={styles.offeringWrap}>
            <Link href="/career-clinic" className={`${styles.offerBtn} ${offerGroupActive ? styles.active : ""}`}>
              Our Offering <span className={styles.caret}>⌄</span>
            </Link>
            <div className={styles.dropdown}>
              <Link href="/career-clinic" className={styles.dropdownItem}>
                <span className={styles.dropdownIcon}>
                  <CircleTargetIcon size={21} />
                </span>
                <span>
                  <span className={styles.dropdownTitle}>Career Clinic</span>
                  <span className={styles.dropdownDesc}>Get Canada-ready &amp; hired</span>
                </span>
              </Link>
              <Link href="/mastermind" className={styles.dropdownItem}>
                <span className={styles.dropdownIcon}>
                  <PeopleIcon size={21} />
                </span>
                <span>
                  <span className={styles.dropdownTitle}>Mastermind Community</span>
                  <span className={styles.dropdownDesc}>Grow with driven peers</span>
                </span>
              </Link>
              <Link href="/events" className={styles.dropdownItem}>
                <span className={styles.dropdownIcon}>
                  <CalendarIcon size={21} />
                </span>
                <span>
                  <span className={styles.dropdownTitle}>Community Events</span>
                  <span className={styles.dropdownDesc}>Next Gen, sports &amp; podcast</span>
                </span>
              </Link>
              <Link href="/webinars" className={styles.dropdownItem}>
                <span className={styles.dropdownIcon}>
                  <WorkshopIcon size={21} />
                </span>
                <span>
                  <span className={styles.dropdownTitle}>Webinars &amp; Workshops</span>
                  <span className={styles.dropdownDesc}>Orientation &amp; masterclasses</span>
                </span>
              </Link>
            </div>
          </div>
          <Link href="/blog" className={`${styles.navLink} ${link("/blog")}`}>
            Blog
          </Link>
        </nav>

        <div className={styles.actions}>
          <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className={styles.ctaBtn}>
            Join Community
          </a>
          <button
            aria-label="Menu"
            className={styles.burger}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <Link href="/" className={styles.mobileLink} onClick={closeMobile}>Home</Link>
        <Link href="/about" className={styles.mobileLink} onClick={closeMobile}>About</Link>
        <Link href="/career-clinic" className={styles.mobileLink} onClick={closeMobile}>Career Clinic</Link>
        <Link href="/mastermind" className={styles.mobileLink} onClick={closeMobile}>Mastermind Community</Link>
        <Link href="/events" className={styles.mobileLink} onClick={closeMobile}>Community Events</Link>
        <Link href="/webinars" className={styles.mobileLink} onClick={closeMobile}>Webinars &amp; Workshops</Link>
        <Link href="/blog" className={styles.mobileLink} onClick={closeMobile}>Blog</Link>
        <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener" className={styles.mobileCta} onClick={closeMobile}>
          Join Community
        </a>
      </div>
    </header>
  );
}
