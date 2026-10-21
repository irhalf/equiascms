import Link from "next/link";
import { ArrowUpRight, Bell } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { recentAdvisories, severityStyles } from "@/lib/content";

export function AdvisoriesFeed() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Park advisories"
          title={
            <>
              What the warden wants you{" "}
              <em className="italic text-emerald">to know</em>
            </>
          }
          description="Closures, water levels, and census results — published by the protected area office as they happen."
          action={{ label: "All advisories", href: "/advisories" }}
        />

        <div className="mt-10 lg:mt-12">
          {recentAdvisories.map((advisory) => {
            const severity = severityStyles[advisory.severity];
            return (
              <Link
                key={advisory.slug}
                href={`/advisories/${advisory.slug}`}
                className="group grid gap-3 border-t border-line py-6 transition-colors last:border-b hover:bg-paper-2/60 sm:grid-cols-[7.5rem_1fr_auto] sm:items-center sm:gap-6 sm:px-2"
              >
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] ${severity.className}`}
                >
                  <span className={`size-1 rounded-full ${severity.dot}`} aria-hidden="true" />
                  {severity.label}
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-[18px] leading-snug text-ink transition-colors group-hover:text-emerald">
                    {advisory.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">
                    {advisory.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-ink-mute">
                  <time>{advisory.publishedAt}</time>
                  <span className="grid size-8 place-items-center rounded-full border border-line text-forest transition-colors duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 flex items-center gap-2 text-[12px] text-ink-mute">
          <Bell className="size-3.5 text-emerald" aria-hidden="true" />
          Critical advisories appear as a banner across every page of this site.
        </p>
      </div>
    </section>
  );
}
