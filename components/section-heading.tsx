import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className={`eyebrow ${dark ? "text-amber-soft" : "text-emerald"}`}>
          <span
            className={`h-px w-6 ${dark ? "bg-amber-soft/60" : "bg-emerald/50"}`}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
        <h2
          className={`mt-4 font-display text-[1.95rem] font-normal leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem] lg:text-[2.8rem] ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 max-w-xl text-[15px] leading-relaxed ${
              dark ? "text-paper/65" : "text-ink-soft"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-colors sm:self-auto ${
            dark
              ? "border-paper/25 text-paper hover:border-paper/50 hover:bg-paper/10"
              : "border-line text-forest hover:border-forest/30 hover:bg-paper-2"
          }`}
        >
          {action.label}
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
}
