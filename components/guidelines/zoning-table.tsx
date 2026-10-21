import { Check, Compass, House, ShieldAlert, X } from "lucide-react";
import { zoneMatrix } from "@/lib/content";

const zoneIcons = {
  shield: ShieldAlert,
  compass: Compass,
  home: House,
} as const;

export function ZoningTable() {
  return (
    <section className="border-y border-line bg-paper-2 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-emerald">
              <span className="h-px w-6 bg-emerald/50" aria-hidden="true" />
              Lake zoning
            </p>
            <h2 className="mt-4 font-display text-[1.8rem] leading-[1.1] tracking-[-0.015em] text-ink sm:text-[2.2rem]">
              Which waters you may <em className="italic text-emerald">enter</em>
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-ink-soft">
            Zone boundaries are marked by buoys and explained by your guide before departure.
            When in doubt, stay outside.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-paper">
          <div className="hidden grid-cols-[1.15fr_1fr_1fr] gap-6 border-b border-line bg-paper px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-mute md:grid">
            <span>Zone</span>
            <span>Permitted</span>
            <span>Not permitted</span>
          </div>

          <div className="divide-y divide-line">
            {zoneMatrix.map((zone) => {
              const Icon = zoneIcons[zone.icon];
              return (
                <div
                  key={zone.name}
                  className="grid gap-5 px-5 py-6 md:grid-cols-[1.15fr_1fr_1fr] md:gap-6 md:px-6"
                >
                  <div>
                    <span className="grid size-9 place-items-center rounded-lg bg-emerald/10 text-emerald ring-1 ring-emerald/15">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 font-display text-[17px] leading-snug text-ink">
                      {zone.name}
                    </h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber">
                      {zone.access}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-mute md:hidden">
                      Permitted
                    </p>
                    <ul className="space-y-1.5">
                      {zone.permitted.map((item) => (
                        <li key={item} className="flex gap-2 text-[12.5px] leading-snug text-ink-soft">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-emerald" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-mute md:hidden">
                      Not permitted
                    </p>
                    <ul className="space-y-1.5">
                      {zone.prohibited.map((item) => (
                        <li key={item} className="flex gap-2 text-[12.5px] leading-snug text-ink-soft">
                          <X className="mt-0.5 size-3.5 shrink-0 text-clay" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
