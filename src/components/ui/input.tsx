import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-13 w-full min-w-0 rounded-full border border-input bg-card px-5.5 text-[15px] text-foreground placeholder:text-muted-foreground outline-none transition-colors selection:bg-primary selection:text-primary-foreground",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
