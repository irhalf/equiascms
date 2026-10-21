import { Check, Phone, ShieldCheck, TriangleAlert } from "lucide-react";

const checklist = [
  "Life jacket fitted, fastened, and worn for the whole crossing",
  "Weather and water-level briefing from your guide",
  "Boat registration number visible on the hull",
  "Drinking water, sun protection, and a dry bag",
];

const contacts = [
  { label: "Park hotline", value: "+63 917 000 0000" },
  { label: "National emergency", value: "911" },
  { label: "Naujan MDRRMO", value: "(043) 000 0000" },
];

export function SafetyPanel() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="eyebrow text-emerald">
            <span className="h-px w-6 bg-emerald/50" aria-hidden="true" />
            Safety
          </p>
          <h2 className="mt-4 font-display text-[1.8rem] leading-[1.1] tracking-[-0.015em] text-ink sm:text-[2.2rem]">
            Before you <em className="italic text-emerald">board</em>
          </h2>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink-soft">
            Guides run this checklist at the jetty. If any item is skipped, you are entitled to
            ask why before the boat leaves.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-line bg-paper p-4 text-[13px] leading-snug text-ink-soft"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald/10 text-emerald">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 flex gap-2 text-[12px] leading-relaxed text-ink-mute">
            <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-amber" aria-hidden="true" />
            Cell signal is weak on the western shore. Save this page and the current advisory
            before you leave the jetty.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-forest p-6 text-paper sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 size-52 rounded-full bg-emerald/40 blur-3xl"
          />

          <div className="relative">
            <div className="flex items-center gap-2 text-amber-soft">
              <ShieldCheck className="size-4" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Emergency contacts
              </p>
            </div>

            <dl className="mt-5 divide-y divide-paper/10">
              {contacts.map((contact) => (
                <div key={contact.label} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-[12.5px] text-paper/60">{contact.label}</dt>
                  <dd>
                    <a
                      href={`tel:${contact.value.replace(/[^\d+]/g, "")}`}
                      className="inline-flex items-center gap-1.5 font-display text-[15px] text-paper transition-colors hover:text-amber-soft"
                    >
                      <Phone className="size-3.5 text-paper/40" aria-hidden="true" />
                      {contact.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 rounded-xl border border-amber-soft/25 bg-amber-soft/10 px-3.5 py-3 text-[11.5px] leading-relaxed text-paper/70">
              Boat tours are suspended at typhoon signal no. 1 and above. Confirm departures with
              your operator the night before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
