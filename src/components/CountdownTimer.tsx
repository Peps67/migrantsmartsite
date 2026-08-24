"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type CountdownTimerProps = {
  targetDate: string;
  className?: string;
  variant?: "dark" | "light";
};

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Zeroed on first paint (server + client match), then ticks live once
// mounted, avoiding a hydration mismatch on the current timestamp.
const INITIAL: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function CountdownTimer({
  targetDate,
  className,
  variant = "dark",
}: CountdownTimerProps) {
  const target = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(INITIAL);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const UNITS: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className={cn("flex items-center justify-center gap-4 sm:gap-6", className)}>
      {UNITS.map((u) => (
        <div
          key={u.label}
          className={cn(
            "flex w-14 flex-col items-center rounded-2xl border py-3 backdrop-blur-sm sm:w-16",
            variant === "light"
              ? "border-white/60 bg-white shadow-[0_10px_24px_-8px_rgba(23,23,31,0.35)]"
              : "border-white/15 bg-white/5",
          )}
        >
          <span
            className={cn(
              "font-serif text-2xl font-medium tabular-nums sm:text-3xl",
              variant === "light" ? "text-primary" : "text-white",
            )}
          >
            {String(u.value).padStart(2, "0")}
          </span>
          <span
            className={cn(
              "mt-1 text-[10px] font-bold uppercase tracking-[0.1em]",
              variant === "light" ? "text-foreground/50" : "text-white/50",
            )}
          >
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
