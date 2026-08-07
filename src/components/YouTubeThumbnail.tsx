"use client";

import { useState } from "react";
import { Play } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

type YouTubeThumbnailProps = {
  videoId: string;
  title: string;
  className?: string;
};

export default function YouTubeThumbnail({
  videoId,
  title,
  className,
}: YouTubeThumbnailProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-[2rem] border border-black/10 bg-black dark:border-white/15",
          className,
        )}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-[16/11] w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className={cn(
        "group relative block aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-black/10 bg-black/5 p-2 dark:border-white/15 dark:bg-white/5",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-0.5rem)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnail, not a local/optimizable asset */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pointer-events-none absolute inset-2 flex items-center justify-center rounded-[calc(2rem-0.5rem)] bg-black/15 transition-colors duration-300 group-hover:bg-black/30">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play size={26} weight="fill" className="ml-1" />
        </span>
      </div>
    </button>
  );
}
