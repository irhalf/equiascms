import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Binoculars } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { conservationStatus, images, speciesHighlights } from "@/lib/content";

const darkBadge: Record<string, string> = {
  CR: "border-clay/50 bg-clay/25 text-[#f2bfab]",
  EN: "border-clay/45 bg-clay/20 text-[#f2bfab]",
  VU: "border-amber-soft/40 bg-amber-soft/12 text-amber-soft",
  NT: "border-teal-light/40 bg-teal-light/12 text-teal-light",
  LC: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
};

export function WildlifeFeature() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep py-20 text-paper sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 85% 0%, rgb(20 121 90 / 0.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Biodiversity"
          title={
            <>
              The lake keeps a <em className="italic text-amber-soft">guest list</em>
            </>
          }
          description="Waterbirds arrive with the northeast monsoon and leave before the rains. The rest — ducks, gobies, lilies — stay year-round. Every record is catalogued by park staff."
          action={{ label: "Browse the catalog", href: "/wildlife" }}
        />

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-forest ring-1 ring-paper/10">
              <Image
                src={images.kingfisher}
                alt="A common kingfisher perched on a branch above the water"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="font-display text-lg text-paper">Common Kingfisher</p>
                  <p className="text-[11px] italic text-paper/55">Alcedo atthis</p>
                </div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-paper/45">
                  Resident
                </p>
              </figcaption>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-paper/10 bg-paper/[0.04] px-4 py-3 text-[11.5px] text-paper/55">
              <Binoculars className="size-4 shrink-0 text-amber-soft" aria-hidden="true" />
              43 species recorded during the 2026 Asian Waterbird Census.
            </div>
          </figure>

          <div>
            <ul className="border-b border-paper/10">
              {speciesHighlights.map((species) => {
                const status = conservationStatus[species.status];
                return (
                  <li
                    key={species.scientificName}
                    className="flex items-center justify-between gap-4 border-t border-paper/10 py-3.5"
                  >
                    <div className="min-w-0">
                      <p className="font-display text-[17px] leading-snug text-paper">
                        {species.commonName}
                      </p>
                      <p className="mt-0.5 truncate text-[11.5px] text-paper/45">
                        {species.localName}
                        <span className="mx-1.5 text-paper/25">·</span>
                        <em className="italic">{species.scientificName}</em>
                        <span className="mx-1.5 text-paper/25">·</span>
                        {species.seasonality}
                      </p>
                    </div>

                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] ${
                        darkBadge[species.status]
                      }`}
                    >
                      <span
                        className={`size-1 rounded-full ${status.dot}`}
                        aria-hidden="true"
                      />
                      {status.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/wildlife"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-paper"
            >
              <span className="link-underline">See all catalogued species</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
