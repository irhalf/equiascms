"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-paper/20 bg-paper/10 p-5 text-paper"
      >
        <p className="flex items-center gap-2 font-display text-lg">
          <CircleCheck className="size-5 text-amber-soft" aria-hidden="true" />
          You&rsquo;re on the list
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-paper/60">
          We&rsquo;ll send the next advisory digest to{" "}
          <span className="font-medium text-paper/85">{email}</span>. No spam, ever.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setEmail("");
          }}
          className="mt-3 text-[12px] font-semibold text-amber-soft underline-offset-4 hover:underline"
        >
          Use another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (email.trim().length > 0) setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-12 w-full rounded-full border border-paper/20 bg-paper/[0.07] px-5 text-sm text-paper placeholder:text-paper/35 transition-colors focus:border-paper/45 focus-visible:ring-2 focus-visible:ring-paper/40 focus:outline-none"
        />
        <button
          type="submit"
          className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-paper px-6 text-sm font-semibold text-forest transition-colors hover:bg-white"
        >
          Subscribe
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-paper/45">
        Monthly digest, park advisories, and migration peaks. Unsubscribe anytime.
      </p>
    </form>
  );
}
