import Image from "next/image";
import { Compass, House, ShieldAlert } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { images, lakeZones } from "@/lib/content";

const zoneIcons = {
  shield: ShieldAlert,
  compass: Compass,
  home: House,
} as const;

export function ZoningBand() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep py-20 text-paper sm:py-24 lg:py-28">
      <Image
        src={images.zoning}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/95 via-forest-deep/75 to-forest-deep"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Travel gently"
          title={
            <>
              Three zones. One rule:{" "}
              <em className="italic text-amber-soft">leave it wild</em>
            </>
          }
          description="The lake is zoned for a reason. Knowing which waters are open keeps nesting birds undisturbed and fish stocks recovering."
          action={{ label: "Park guidelines", href: "/guidelines" }}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14">
          {lakeZones.map((zone, index) => {
            const Icon = zoneIcons[zone.icon];
            return (
              <article
                key={zone.name}
                className="group relative overflow-hidden rounded-2xl border border-paper/12 bg-forest-deep/45 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-paper/25 hover:bg-forest-deep/65"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-paper/10 text-amber-soft ring-1 ring-paper/10">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-[13px] text-paper/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[20px] leading-snug text-paper">
                  {zone.name}
                </h3>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-soft/85">
                  <span className="size-1 rounded-full bg-amber-soft" aria-hidden="true" />
                  {zone.access}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-paper/60">
                  {zone.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
