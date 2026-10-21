import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Droplets } from "lucide-react";
import { images } from "@/lib/content";

const facts = [
  { value: "8,125", unit: "ha", label: "Water surface" },
  { value: "2,586", unit: "m", label: "Mt. Halcon summit" },
  { value: "3", unit: "", label: "Management zones" },
];

export function LakeOverview() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1.02fr] lg:gap-20">
        <div>
          <p className="eyebrow text-emerald">
            <span className="h-px w-6 bg-emerald/50" aria-hidden="true" />
            The protected area
          </p>

          <h2 className="mt-4 font-display text-[2rem] font-normal leading-[1.06] tracking-[-0.015em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            A freshwater world beneath{" "}
            <em className="italic text-emerald">Mt. Halcon</em>
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>
              Naujan Lake fills a shallow tectonic basin on the eastern coast of Mindoro, fed by
              rivers that drain the Halcon range. Its margins turn to reed marsh each dry season —
              the reason thousands of waterbirds stop here between October and March.
            </p>
            <p>
              The park is co-managed with the municipalities that surround it. Boat operators are
              accredited, guides are trained locally, and every tour fee returns to patrols, nest
              monitoring, and shoreline reforestation.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="font-display text-2xl text-forest sm:text-[1.75rem]">
                    {fact.value}
                  </span>
                  {fact.unit && (
                    <span className="ml-1 text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
                      {fact.unit}
                    </span>
                  )}
                  <span className="mt-1 block text-[10.5px] font-medium uppercase leading-snug tracking-[0.12em] text-ink-mute">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/guidelines"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            <span className="link-underline">Read the park guidelines</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Image composition */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 hidden h-full w-full rounded-[28px] border border-line sm:block"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-paper-2 shadow-soft sm:aspect-[5/6]">
            <Image
              src={images.overview}
              alt="Sunlight filtering through the canopy of a lakeside banyan tree"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 via-transparent to-transparent"
            />
          </div>

          <figcaption className="relative -mt-8 ml-4 mr-4 rounded-2xl border border-line bg-paper p-4 shadow-soft sm:absolute sm:-bottom-6 sm:left-6 sm:ml-0 sm:mr-0 sm:w-[15.5rem]">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald">
              <Droplets className="size-3.5" aria-hidden="true" />
              Ramsar Site 1008
            </div>
            <p className="mt-2 font-display text-[15px] leading-snug text-ink">
              Naujan Lake, Oriental Mindoro
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-[11px] text-ink-mute">
              <Compass className="size-3" aria-hidden="true" />
              13°21′N 121°18′E · 20 m elevation
            </p>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
