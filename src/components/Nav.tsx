"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
  ArrowUpRight,
  CaretDown,
  Target,
  UsersThree,
  ChalkboardTeacher,
  X,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

// `soon` entries keep their place in the nav but are not links: their pages
// live in private folders (src/app/_blog, src/app/_webinars) and are not
// routed, so linking to them would only ever produce a 404.
const OFFERING = [
  {
    href: "/career-clinic",
    icon: Target,
    title: "Career Clinic",
    desc: "Build your case for advancement",
  },
  {
    href: "/mastermind",
    icon: UsersThree,
    title: "Mastermind Community",
    desc: "Grow with driven peers",
  },
  {
    href: "/webinars",
    icon: ChalkboardTeacher,
    title: "Webinars & Workshops",
    desc: "Orientation & masterclasses",
    soon: true,
  },
];

const OFFERING_PATHS = OFFERING.map((o) => o.href);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog", soon: true },
];

const menuStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const menuItem: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const offerActive = OFFERING_PATHS.includes(pathname);

  return (
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full border border-black/10 bg-background/70 py-1.5 pr-1.5 pl-4 shadow-[0_20px_50px_-20px_rgba(23,23,31,0.35)] backdrop-blur-xl dark:border-white/10">
        <Link
          href="/"
          className="mr-2 shrink-0"
          aria-label="Migrant Smart, home"
        >
          <Image
            src="/logo-default.png"
            alt="Migrant Smart"
            width={72}
            height={29}
            priority
            className="dark:invert"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={cn(
              "rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-foreground/70 transition-colors hover:text-foreground",
              isActive("/") && "bg-accent text-foreground",
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-foreground/70 transition-colors hover:text-foreground",
              isActive("/about") && "bg-accent text-foreground",
            )}
          >
            About
          </Link>

          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-foreground/70 transition-colors hover:text-foreground",
                offerActive && "bg-accent text-foreground",
              )}
            >
              Our Offering
              <CaretDown
                size={12}
                weight="bold"
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>
            <div className="invisible absolute top-full left-1/2 z-50 w-[300px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:visible group-hover:opacity-100">
              <div className="rounded-[22px] border border-black/10 bg-background/90 p-2 shadow-[0_30px_60px_-20px_rgba(23,23,31,0.4)] backdrop-blur-xl dark:border-white/10">
                {OFFERING.map((item) => {
                  const rowClass = cn(
                    "flex items-start gap-3 rounded-2xl p-3 transition-colors",
                    item.soon ? "cursor-default" : "hover:bg-accent",
                  );
                  const body = (
                    <>
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary",
                          item.soon ? "text-foreground/35" : "text-primary",
                        )}
                      >
                        <item.icon size={19} weight="regular" />
                      </span>
                      <span>
                        <span
                          className={cn(
                            "flex items-center gap-2 text-[14px] font-bold",
                            item.soon
                              ? "text-foreground/45"
                              : "text-foreground",
                          )}
                        >
                          {item.title}
                          {item.soon && (
                            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10.5px] font-bold tracking-[0.06em] text-foreground/50 uppercase">
                              Soon
                            </span>
                          )}
                        </span>
                        <span
                          className={cn(
                            "block text-[12.5px]",
                            item.soon
                              ? "text-foreground/40"
                              : "text-foreground/70",
                          )}
                        >
                          {item.desc}
                        </span>
                      </span>
                    </>
                  );
                  return item.soon ? (
                    <div key={item.href} className={rowClass}>
                      {body}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={rowClass}
                    >
                      {body}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href="/events"
            className={cn(
              "rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-foreground/70 transition-colors hover:text-foreground",
              isActive("/events") && "bg-accent text-foreground",
            )}
          >
            Events
          </Link>

          <span className="flex cursor-default items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-foreground/40">
            Blog
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10.5px] font-bold tracking-[0.06em] text-foreground/50 uppercase">
              Soon
            </span>
          </span>
        </nav>

        <div className="ml-1 hidden items-center gap-2 lg:flex">
          <a
            href="https://chat.whatsapp.com/FnDcDFhwB2jBt3PwQOMC20"
            target="_blank"
            rel="noopener"
            className="group flex items-center gap-2 rounded-full bg-primary py-2 pr-2 pl-4 text-[13.5px] font-bold text-primary-foreground shadow-[0_10px_24px_-8px_rgba(84,72,240,0.55)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Join Community
            <span className="flex size-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={13} weight="bold" />
            </span>
          </a>
        </div>

        {/* Hamburger / close morph */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="relative ml-1 flex size-10 shrink-0 items-center justify-center rounded-full lg:hidden"
          type="button"
        >
          <span
            className={cn(
              "absolute h-[1.5px] w-4.5 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              mobileOpen
                ? "translate-y-0 rotate-45"
                : "-translate-y-1 rotate-0",
            )}
          />
          <span
            className={cn(
              "absolute h-[1.5px] w-4.5 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              mobileOpen
                ? "translate-y-0 -rotate-45"
                : "translate-y-[4px] rotate-0",
            )}
          />
        </button>
      </div>

      <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
        <Dialog.Portal forceMount>
          <AnimatePresence>
            {mobileOpen && (
              <>
                <Dialog.Overlay asChild forceMount>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-2xl"
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild forceMount aria-describedby={undefined}>
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={menuStagger}
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 px-6"
                  >
                    <Dialog.Title className="sr-only">
                      Navigation menu
                    </Dialog.Title>
                    <button
                      type="button"
                      aria-label="Close menu"
                      onClick={() => setMobileOpen(false)}
                      className="fixed top-6 right-6 flex size-11 items-center justify-center rounded-full border border-black/10 bg-background/70 text-foreground shadow-[0_20px_50px_-20px_rgba(23,23,31,0.35)] backdrop-blur-xl dark:border-white/10"
                    >
                      <X size={20} weight="bold" />
                    </button>
                    {NAV_LINKS.map((link) => (
                      <motion.div key={link.href} variants={menuItem}>
                        {link.soon ? (
                          <span className="flex min-h-11 items-center gap-3 font-serif text-4xl font-medium text-foreground/35">
                            {link.label}
                            <span className="rounded-full bg-secondary px-2.5 py-1 font-sans text-[11.5px] font-bold tracking-[0.06em] text-foreground/50 uppercase">
                              Soon
                            </span>
                          </span>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex min-h-11 items-center font-serif text-4xl font-medium text-foreground"
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                    {OFFERING.map((item) => (
                      <motion.div key={item.href} variants={menuItem}>
                        {item.soon ? (
                          <span className="flex min-h-11 items-center gap-3 font-serif text-2xl font-medium text-foreground/35">
                            {item.title}
                            <span className="rounded-full bg-secondary px-2.5 py-1 font-sans text-[11.5px] font-bold tracking-[0.06em] text-foreground/50 uppercase">
                              Soon
                            </span>
                          </span>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex min-h-11 items-center font-serif text-2xl font-medium text-muted-foreground"
                          >
                            {item.title}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                    <motion.div
                      variants={menuItem}
                      className="mt-8 flex items-center gap-4"
                    >
                      <a
                        href="https://chat.whatsapp.com/FnDcDFhwB2jBt3PwQOMC20"
                        target="_blank"
                        rel="noopener"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 rounded-full bg-primary py-3 pr-3 pl-6 text-[15px] font-bold text-primary-foreground"
                      >
                        Join Community
                        <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                          <ArrowUpRight size={14} weight="bold" />
                        </span>
                      </a>
                    </motion.div>
                  </motion.div>
                </Dialog.Content>
              </>
            )}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
