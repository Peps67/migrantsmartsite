import Link from "next/link";
import Image from "next/image";
import { LinkedinLogo, InstagramLogo, YoutubeLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { GrainOverlay } from "@/components/GrainOverlay";

const SOCIALS = [
  { href: "https://www.linkedin.com/company/migrant-smart/", label: "LinkedIn", icon: LinkedinLogo },
  { href: "https://www.instagram.com/migrantsmart", label: "Instagram", icon: InstagramLogo },
  { href: "https://www.youtube.com/@MigrantSmart", label: "YouTube", icon: YoutubeLogo },
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
            <div className="mt-2 flex flex-col">
              <Link href="/" className="flex min-h-11 items-center text-[14.5px] text-white/70 hover:text-white">Home</Link>
              <Link href="/about" className="flex min-h-11 items-center text-[14.5px] text-white/70 hover:text-white">About Us</Link>
              <span className="flex min-h-11 items-center gap-2 text-[14.5px] text-white/40">
                Blog
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10.5px] font-bold tracking-[0.06em] uppercase">Soon</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">Programs</h4>
            <div className="mt-2 flex flex-col">
              <Link href="/career-clinic" className="flex min-h-11 items-center text-[14.5px] text-white/70 hover:text-white">Career Clinic</Link>
              <Link href="/mastermind" className="flex min-h-11 items-center text-[14.5px] text-white/70 hover:text-white">Mastermind</Link>
              <Link href="/events" className="flex min-h-11 items-center text-[14.5px] text-white/70 hover:text-white">Community Events</Link>
              <span className="flex min-h-11 items-center gap-2 text-[14.5px] text-white/40">
                Webinars
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10.5px] font-bold tracking-[0.06em] uppercase">Soon</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">Get in touch</h4>
            <div className="mt-2 flex flex-col">
              <a href="mailto:migrantsmart@gmail.com" className="flex min-h-11 items-center text-[14.5px] text-white/70 hover:text-white">
                Migrantsmart@gmail.com
              </a>
              <a href="https://chat.whatsapp.com/FnDcDFhwB2jBt3PwQOMC20" target="_blank" rel="noopener" className="flex min-h-11 items-center text-[14.5px] text-white/70 hover:text-white">
                WhatsApp Community
              </a>
            </div>
            <Button asChild variant="white" size="sm" className="mt-5">
              <a href="https://chat.whatsapp.com/FnDcDFhwB2jBt3PwQOMC20" target="_blank" rel="noopener">
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
