import Link from "next/link";
import { ArrowUpRight, TriangleAlert } from "lucide-react";

export function AdvisoryStrip() {
  return (
    <div className="border-b border-amber/25 bg-amber/10">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3 sm:px-6">
        <span className="flex shrink-0 items-center gap-2 rounded-full bg-amber/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber">
          <TriangleAlert className="size-3" aria-hidden="true" />
          Advisory
        </span>

        <p className="line-clamp-2 min-w-0 flex-1 text-[12.5px] leading-snug text-ink-soft sm:line-clamp-1">
          <span className="font-medium text-ink">High water levels at the Melgar river mouth.</span>{" "}
          Boat speeds are reduced within 200 m of the nesting marsh until further notice.
        </p>

        <Link
          href="/advisories"
          className="group hidden shrink-0 items-center gap-1.5 text-[12px] font-semibold text-amber transition-colors hover:text-ink sm:inline-flex"
        >
          All advisories
          <ArrowUpRight
            className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
