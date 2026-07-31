import Image from "next/image";

import { cn } from "@/lib/utils";

type PlaceholderPhotoProps = {
  seed: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Seeded stock photography stand-in until real brand photography exists.
 * Swap the seed for a real asset URL when photos are shot.
 */
export function PlaceholderPhoto({
  seed,
  alt,
  width = 1200,
  height = 900,
  fill = false,
  priority,
  sizes,
  className,
}: PlaceholderPhotoProps) {
  const src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
