import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/lib/utils";

type VideoPlaceholderProps = {
  posterSrc: string;
  posterAlt: string;
  label?: string;
  aspectClassName?: string;
  className?: string;
};

// A static "video coming soon" frame: a poster photo with a play affordance
// on top, standing in until a real video file is uploaded.
export default function VideoPlaceholder({
  posterSrc,
  posterAlt,
  label,
  aspectClassName = "aspect-video",
  className,
}: VideoPlaceholderProps) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-[calc(2rem-0.5rem)]",
        aspectClassName,
        className,
      )}
    >
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        sizes="(min-width: 1024px) 45vw, 90vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-foreground shadow-lg">
          <Play size={26} weight="fill" className="ml-1" />
        </span>
        {label && (
          <span className="rounded-full bg-black/50 px-3.5 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
