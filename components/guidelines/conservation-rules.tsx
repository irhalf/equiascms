import { Ban, CameraOff, Fish, Footprints, Leaf, LifeBuoy, Users } from "lucide-react";
import { parkRules } from "@/lib/content";

const ruleIcons = {
  leaf: Leaf,
  ban: Ban,
  camera: CameraOff,
  lifebuoy: LifeBuoy,
  fish: Fish,
  footprints: Footprints,
  users: Users,
} as const;

export function ConservationRules() {
  return (
    <section className="bg-paper pb-20 pt-10 sm:pb-24 sm:pt-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
          <h2 className="font-display text-[1.6rem] leading-tight text-ink sm:text-[1.9rem]">
            Six rules, no exceptions
          </h2>
          <p className="text-[11.5px] uppercase tracking-[0.12em] text-ink-mute">
            Printed at every jetty and trailhead
          </p>
        </div>

        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {parkRules.map((rule, index) => {
            const Icon = ruleIcons[rule.icon];
            return (
              <li
                key={rule.title}
                className="group relative flex flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/25 hover:shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-emerald/10 text-emerald ring-1 ring-emerald/15">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <span className="font-display text-[12px] text-ink-mute/50">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[19px] leading-snug text-ink">
                  {rule.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  {rule.description}
                </p>

                <p className="mt-auto border-t border-line/70 pt-3 text-[11.5px] italic leading-relaxed text-ink-mute">
                  {rule.why}
                </p>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 rounded-xl border border-line bg-paper-2/70 px-4 py-3 text-[12px] leading-relaxed text-ink-soft">
          <span className="font-semibold text-ink">Enforcement.</span> These rules are enforced
          under RA 7586 (NIPAS Act) and municipal ordinances. Violations are settled at the
          Protected Area Office.
        </p>
      </div>
    </section>
  );
}
