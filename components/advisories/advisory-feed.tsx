"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Inbox } from "lucide-react";
import { allAdvisories, severityStyles, type Severity } from "@/lib/content";

const filters = ["ALL", "CRITICAL", "WARNING", "INFO"] as const;
type Filter = (typeof filters)[number];

const labels: Record<Filter, string> = {
  ALL: "All notices",
  CRITICAL: "Critical",
  WARNING: "Warning",
  INFO: "Info",
};

export function AdvisoryFeed() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const counts = useMemo(() => {
    return filters.reduce<Record<Filter, number>>(
      (acc, key) => {
        acc[key] =
          key === "ALL"
            ? allAdvisories.length
            : allAdvisories.filter((item) => item.severity === (key as Severity)).length;
        return acc;
      },
      { ALL: 0, CRITICAL: 0, WARNING: 0, INFO: 0 },
    );
  }, []);

  const visible = useMemo(
    () =>
      filter === "ALL"
        ? allAdvisories
        : allAdvisories.filter((item) => item.severity === filter),
    [filter],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter advisories by severity"
        className="flex flex-wrap items-center gap-2 border-b border-line pb-5"
      >
        {filters.map((key) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12.5px] font-medium transition-colors ${
                active
                  ? "border-forest bg-forest text-paper"
                  : "border-line bg-paper text-ink-soft hover:border-forest/25 hover:text-forest"
              }`}
            >
              {labels[key]}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                  active ? "bg-paper/15 text-paper" : "bg-paper-2 text-ink-mute"
                }`}
              >
                {counts[key]}
              </span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        {visible.length === 0 ? (
          <p className="flex items-center gap-2 py-12 text-[13px] text-ink-mute">
            <Inbox className="size-4" aria-hidden="true" />
            No notices in this category right now.
          </p>
        ) : (
          <ul>
            {visible.map((advisory) => {
              const severity = severityStyles[advisory.severity];
              return (
                <li key={advisory.slug} className="border-b border-line">
                  <Link
                    href={`/advisories/${advisory.slug}`}
                    className="group grid gap-3 py-6 transition-colors hover:bg-paper-2/50 sm:grid-cols-[9.5rem_1fr_auto] sm:items-start sm:gap-6 sm:px-2"
                  >
                    <div className="flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] ${severity.className}`}
                      >
                        <span className={`size-1 rounded-full ${severity.dot}`} aria-hidden="true" />
                        {severity.label}
                      </span>
                      <time className="text-[11px] text-ink-mute">{advisory.publishedAt}</time>
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display text-[18px] leading-snug text-ink transition-colors group-hover:text-emerald">
                        {advisory.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                        {advisory.excerpt}
                      </p>
                    </div>

                    <span className="hidden size-8 shrink-0 place-items-center self-center rounded-full border border-line text-forest transition-colors duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-paper sm:grid">
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
