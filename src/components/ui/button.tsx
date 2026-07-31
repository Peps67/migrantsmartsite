import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[15px] font-bold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_12px_28px_-8px_rgba(84,72,240,0.45)] hover:bg-brand-dark hover:-translate-y-0.5",
        ink: "bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
        white:
          "bg-white text-link shadow-[0_16px_36px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
        ghost: "bg-transparent text-foreground hover:bg-accent",
        link: "bg-transparent text-link p-0 h-auto rounded-none font-bold gap-2 hover:gap-3",
      },
      size: {
        default: "h-[54px] px-7",
        sm: "h-[46px] px-5.5 text-sm",
        lg: "h-[60px] px-9 text-base",
        icon: "h-11 w-11 shrink-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
