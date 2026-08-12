"use client";

import { useEffect, type ReactNode } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let calendlyLoad: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (calendlyLoad) return calendlyLoad;

  calendlyLoad = new Promise((resolve) => {
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
  return calendlyLoad;
}

type CalendlyBookButtonProps = {
  url: string;
  children: ReactNode;
  className?: string;
};

// Opens Abigail's Calendly booking flow in Calendly's own popup widget.
// Pricing shown on this site is informational — the actual charge only
// happens if the corresponding Calendly event type has a paid add-on
// (Calendly's own Stripe connection, configured in the Calendly account
// settings, not something this website handles directly).
export default function CalendlyBookButton({
  url,
  children,
  className,
}: CalendlyBookButtonProps) {
  useEffect(() => {
    loadCalendly();
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        loadCalendly().then(() => {
          window.Calendly?.initPopupWidget({ url });
        });
      }}
      className={className}
    >
      {children}
    </button>
  );
}
