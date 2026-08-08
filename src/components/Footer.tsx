import Link from "next/link";
import Image from "next/image";
import { LinkedinLogo, InstagramLogo, YoutubeLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { GrainOverlay } from "@/components/GrainOverlay";

const SOCIALS = [
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: LinkedinLogo },
  { href: "https://www.instagram.com/migrantsmart?igsh=MTM0MGtiMTkwanZ5Mg==", label: "Instagram", icon: InstagramLogo },
  { href: "https://www.youtube.com/", label: "YouTube", icon: YoutubeLogo },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.25rem] bg-primary sm:rounded-t-[3rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_-20%,rgba(255,255,255,0.16),transparent_60%)]"
      />
      <GrainOverlay />
      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="Migrant Smart, home">
              <Image src="/logo-white.png" alt="Migrant Smart" width={89} height={36} />
            </Link>
            <p className="mt-5 max-w-[280px] text-[14.5px] leading-relaxed text-white/70">
              Your launchpad to success in Canada, coaching, community, events and workshops built to help newcomers land, settle and thrive.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">Explore</h4>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-[14.5px] text-white/70 hover:text-white">Home</Link>
              <Link href="/about" className="text-[14.5px] text-white/70 hover:text-white">About Us</Link>
              <Link href="/blog" className="text-[14.5px] text-white/70 hover:text-white">Blog</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">Programs</h4>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/career-clinic" className="text-[14.5px] text-white/70 hover:text-white">Career Clinic</Link>
              <Link href="/mastermind" className="text-[14.5px] text-white/70 hover:text-white">Mastermind</Link>
              <Link href="/events" className="text-[14.5px] text-white/70 hover:text-white">Community Events</Link>
              <Link href="/webinars" className="text-[14.5px] text-white/70 hover:text-white">Webinars</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">Get in touch</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:hello@migrantsmart.ca" className="text-[14.5px] text-white/70 hover:text-white">
                hello@migrantsmart.ca
              </a>
              <a href="https://chat.whatsapp.com/GZH56TFwU7D61xqFufv6pp?s=sh&p=i&mlu=4" target="_blank" rel="noopener" className="text-[14.5px] text-white/70 hover:text-white">
                WhatsApp Community
              </a>
            </div>
            <Button asChild variant="white" size="sm" className="mt-5">
              <a href="https://chat.whatsapp.com/GZH56TFwU7D61xqFufv6pp?s=sh&p=i&mlu=4" target="_blank" rel="noopener">
                Join Community
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </Button>
          </div>
        </div>

        <div className="my-10 h-px bg-white/15" />

        <div className="flex flex-col items-center gap-2 text-center text-[13px] text-white/60 sm:flex-row sm:justify-between sm:text-left">
          <span>© 2026 Migrant Smart. All rights reserved.</span>
          <span>Privacy Policy &middot; Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
