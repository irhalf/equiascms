import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, ChevronRight, ShieldCheck, Users } from "lucide-react";
import { ConservationRules } from "@/components/guidelines/conservation-rules";

export const metadata: Metadata = {
  title: "Park Guidelines",
  description:
    "The conservation rules, lake zoning, and safety requirements every visitor to Naujan Lake National Park must follow.",
};

const meta = [
  { icon: CalendarClock, label: "Effective October 2026" },
  { icon: Users, label: "Applies to all visitors" },
  { icon: ShieldCheck, label: "Enforced by park rangers" },
];

export default function GuidelinesPage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-9 sm:px-6 sm:pb-14 sm:pt-11">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-ink-mute">
            <Link href="/" className="transition-colors hover:text-forest">
              Home
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span className="text-ink">Park guidelines</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-emerald">
                <span className="h-px w-6 bg-emerald/50" aria-hidden="true" />
                Protected area rules
              </p>
              <h1 className="mt-4 font-display text-[2.3rem] font-normal leading-[1.03] tracking-[-0.02em] text-ink sm:text-[3.1rem] lg:text-[3.4rem]">
                The rules that keep the lake <em className="italic text-emerald">wild</em>
              </h1>
            </div>

            <p className="max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
              Naujan Lake is a national park and a Ramsar site, not a resort. These are the
              conditions under which the lake stays habitable — for the birds, the fish, and the
              communities that depend on it.
            </p>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-line pt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-mute">
            {meta.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-3.5 text-emerald" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConservationRules />
    </>
  );
}
