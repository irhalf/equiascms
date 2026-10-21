import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Mail } from "lucide-react";
import { AdvisoryFeed } from "@/components/advisories/advisory-feed";

export const metadata: Metadata = {
  title: "Park Advisories",
  description:
    "Closures, water-level warnings, and conservation announcements from the Naujan Lake National Park protected area office.",
};

export default function AdvisoriesPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-9 sm:px-6 sm:pb-14 sm:pt-11">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-ink-mute">
            <Link href="/" className="transition-colors hover:text-forest">
              Home
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span className="text-ink">Advisories</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-emerald">
                <span className="h-px w-6 bg-emerald/50" aria-hidden="true" />
                Park advisories
              </p>
              <h1 className="mt-4 font-display text-[2.3rem] font-normal leading-[1.03] tracking-[-0.02em] text-ink sm:text-[3.1rem] lg:text-[3.4rem]">
                Notices from the <em className="italic text-emerald">lake</em>
              </h1>
            </div>

            <p className="max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
              Everything the protected area office publishes — closures, water levels, census
              results — in one place. Critical notices also appear as a banner across the site.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-mute">
              Updated by the Protected Area Office
            </p>
            <Link
              href="/subscribe"
              className="group inline-flex items-center gap-2 text-[12px] font-semibold text-forest"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              <span className="link-underline">Get alerts by email</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AdvisoryFeed />
        </div>
      </section>
    </>
  );
}
