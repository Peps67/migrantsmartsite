import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold w-fit whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground border-transparent",
        outline: "border-border text-foreground bg-transparent",
        brand: "bg-primary text-primary-foreground border-transparent",
        soft: "bg-secondary text-link border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
