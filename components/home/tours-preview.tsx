import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, LifeBuoy, ShieldCheck, Ticket, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { featuredTours } from "@/lib/content";

const included = [
  { icon: LifeBuoy, label: "Life vests on every boat" },
  { icon: ShieldCheck, label: "Licensed local guides" },
  { icon: Ticket, label: "Environmental fees included" },
];

export function ToursPreview() {
  return (
    <section className="bg-paper-2 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Eco-tourism"
          title={
            <>
              Guided experiences, run by{" "}
              <em className="italic text-emerald">accredited locals</em>
            </>
          }
          description="Six operator cooperatives are licensed to run tours on the lake. Rates are fixed by the park office — no haggling at the jetty."
          action={{ label: "All packages", href: "/tours" }}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-forest shadow-sm backdrop-blur">
                  {tour.difficulty}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-[11px] text-ink-mute">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {tour.duration}
                  </span>
                  <span className="text-line" aria-hidden="true">
                    /
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="size-3.5" aria-hidden="true" />
                    Up to {tour.capacity}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-[20px] leading-snug text-ink">
                  {tour.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{tour.summary}</p>

                <div className="mt-5 flex items-end justify-between border-t border-line/70 pt-4">
                  <p>
                    <span className="font-display text-xl text-forest">
                      ₱{tour.rate.toLocaleString("en-PH")}
                    </span>
                    <span className="ml-1.5 text-[11px] text-ink-mute">per person</span>
                  </p>
                  <span className="grid size-9 place-items-center rounded-full border border-line text-forest transition-colors duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <ul className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-[12px] text-ink-soft sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          {included.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="size-4 text-emerald" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
