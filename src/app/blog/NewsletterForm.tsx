"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("submitted");
      }}
      className="mx-auto mt-8 flex max-w-[480px] flex-col gap-3 sm:flex-row"
    >
      <div className="flex-1 text-left">
        <Label htmlFor="newsletter-email" className="sr-only">
          Email address
        </Label>
        <Input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@email.com"
          disabled={status === "submitted"}
          className="border-[#2e2b42] bg-[#1e1c2e] text-white placeholder:text-[#7c7994] focus-visible:border-brand-light"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "submitted"}
        className="shrink-0"
      >
        {status === "submitted" ? (
          <>
            Subscribed
            <CheckCircle size={17} weight="fill" />
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight size={16} weight="bold" />
          </>
        )}
      </Button>
    </form>
  );
}
