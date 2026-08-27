import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import BlurText from "@/components/reactbits/BlurText";
import { GrainOverlay } from "@/components/GrainOverlay";
import NewsletterForm from "./NewsletterForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog - Migrant Smart",
  description:
    "Practical playbooks and real experiences to help you navigate life, work and community in Canada.",
};

const CATEGORIES = [
  "All",
  "Careers",
  "Settling In",
  "Community",
  "Success Stories",
];

const POSTS = [
  {
    seed: "migrant-smart-blog-1",
    category: "Settling In",
    title: "Your first 30 days in Canada: a checklist",
    desc: "SIN, banking, health card and the small wins that make week one feel manageable.",
    meta: "5 min read",
  },
  {
    seed: "migrant-smart-blog-2",
    category: "Careers",
    title: "How to network in Canada without feeling awkward",
    desc: "The mindset shift and simple scripts that open doors to the hidden job market.",
    meta: "7 min read",
  },
  {
    seed: "migrant-smart-blog-3",
    category: "Success Stories",
    title: "From newcomer to hired in 90 days: Chidi's story",
    desc: "How one member turned a stalled search into a first Canadian role.",
    meta: "4 min read",
  },
  {
    seed: "migrant-smart-blog-4",
    category: "Community",
    title: "Beating the loneliness of moving abroad",
    desc: "Practical ways to build a real circle when you're starting from zero.",
    meta: "6 min read",
  },
  {
    seed: "migrant-smart-blog-5",
    category: "Careers",
    title: "Getting your credentials recognised in Canada",
    desc: "Where to start, who to contact, and how to keep momentum while you wait.",
    meta: "8 min read",
  },
  {
    seed: "migrant-smart-blog-6",
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
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden rounded-t-[2.25rem] bg-[#f8f7fd] px-5 py-10 text-center sm:rounded-t-[3rem] sm:px-8">
        <GrainOverlay />
        <Reveal className="relative mx-auto max-w-[820px]">
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
            The Migrant Smart Blog
          </span>
          <BlurText
            text="Guides, stories & honest advice"
            className="mx-auto mt-4 justify-center font-serif text-[clamp(32px,4.4vw,60px)] font-medium leading-[1.08] tracking-tight text-[#17171f] [&>span:nth-child(n+4)]:text-primary [&>span:nth-child(n+4)]:italic"
          />
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-relaxed text-[#17171f]/70 md:text-[18px]">
            Practical playbooks and real experiences to help you navigate life,
            work and community in Canada.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat}
                variant={cat === "All" ? "brand" : "outline"}
                className={
                  cat === "All"
                    ? "px-4 py-2 text-[13px]"
                    : "border-black/15 px-4 py-2 text-[13px] text-foreground"
                }
              >
                {cat}
              </Badge>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FEATURED */}
      <section className="px-5 py-12 sm:px-8 md:py-16">
        <Reveal className="mx-auto max-w-[1240px]">
          <Link
            href="/blog"
            className="group grid gap-8 rounded-[28px] border border-border bg-card p-4 sm:p-5 lg:grid-cols-2 lg:items-center"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-[20px]">
              <PlaceholderPhoto
                seed="migrant-smart-featured-post"
                alt="The Canadian résumé, featured blog post"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-2 sm:p-6">
              <span className="text-[13px] font-bold text-primary">
                Careers &middot; Featured
              </span>
              <h2 className="mt-3 font-serif text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.2] text-foreground">
                The Canadian résumé: what recruiters here actually look for
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
                The format, the length, the phrasing, a practical breakdown of
                how to rework the résumé that worked back home for the market
                you&rsquo;re in now.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[13.5px] text-foreground/70">
                <span>Abigail Akpan</span>
                <span aria-hidden>&middot;</span>
                <span>6 min read</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-link">
                Read article
                <ArrowRight size={15} weight="bold" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* POST GRID */}
      <section className="px-5 py-8 sm:px-8 md:pb-16">
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.05}>
              <Link href="/blog" className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <PlaceholderPhoto
                    seed={post.seed}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-[12.5px] font-bold uppercase tracking-wide text-primary">
                  {post.category}
                </div>
                <h3 className="mt-2 text-[17px] font-bold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground/70">
                  {post.desc}
                </p>
                <div className="mt-3 text-[12.5px] text-foreground/70">
                  {post.meta}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA (fixed-dark accent, inset floating card) */}
      <section className="px-5 pt-2 pb-12 sm:px-8 md:pb-16">
        <Reveal
          blur
          className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[40px] bg-[#0b0a12] px-6 py-14 text-center sm:px-10 md:py-20"
        >
          <GrainOverlay />
          <div className="relative mx-auto max-w-[560px]">
            <h2 className="font-serif text-[clamp(26px,3.4vw,38px)] font-medium text-white">
              Get the next guide in your inbox
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/90">
              New playbooks and stories for newcomers, roughly twice a month. No
              spam.
            </p>
            <NewsletterForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
