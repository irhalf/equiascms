import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Compass, Feather, ShieldCheck, Ship } from "lucide-react";
import { parkStats, site } from "@/lib/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80";

export default function HomePage() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-70px)] flex-col justify-end overflow-hidden bg-forest-deep md:min-h-[calc(100svh-106px)]">
      <Image
        src={HERO_IMAGE}
        alt="A wooden boat resting on the clear turquoise water of a mountain lake"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="object-cover object-center"
      />

      {/* Tonal overlays keep copy legible over any photograph */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/75 to-forest-deep/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/10 to-forest-deep/40"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-9 pt-24 sm:px-6 sm:pb-12">
        <div className="max-w-4xl animate-rise">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/85 backdrop-blur-sm">
            <span className="relative flex size-1.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ripple rounded-full bg-amber-soft" />
              <span className="relative inline-flex size-1.5 rounded-full bg-amber-soft" />
            </span>
            {site.ramsar.label} · {site.ramsar.designated}
          </span>

          <h1 className="mt-6 font-display text-[2.8rem] font-normal leading-[0.95] tracking-[-0.02em] text-paper sm:text-[3.6rem] lg:text-[4rem] xl:text-[4.25rem]">
            Where thousands of wings
            <br className="hidden lg:block" />{" "}
            <em className="italic text-amber-soft">return</em> each year.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/75 sm:text-base">
            Naujan Lake is the fifth-largest lake in the Philippines and a Ramsar Wetland of
            International Importance. Wander its marshes, meet the communities that guard it, and
            travel in a way that leaves the water quieter than you found it.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/wildlife"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-white"
            >
              Explore the wildlife
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/tours"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/30 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/50 hover:bg-paper/10"
            >
              Plan your visit
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.14em] text-paper/55">
            <li className="flex items-center gap-2">
              <Ship className="size-3.5 text-amber-soft/80" aria-hidden="true" />
              Guided boat tours
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-amber-soft/80" aria-hidden="true" />
              Accredited operators
            </li>
            <li className="flex items-center gap-2">
              <Feather className="size-3.5 text-amber-soft/80" aria-hidden="true" />
              Leave no trace
            </li>
          </ul>
        </div>

        {/* At-a-glance card */}
        <aside className="absolute right-6 top-28 hidden w-60 rounded-2xl border border-paper/15 bg-forest-deep/45 p-5 text-paper shadow-lift backdrop-blur-md xl:block">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50">
              Park status
            </p>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Open
            </span>
          </div>
          <dl className="mt-4 space-y-3 text-[12.5px]">
            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-3.5 shrink-0 text-amber-soft" aria-hidden="true" />
              <div>
                <dt className="text-paper/50">Gate hours</dt>
                <dd className="text-paper/90">6:00 AM – 5:30 PM</dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Ship className="mt-0.5 size-3.5 shrink-0 text-amber-soft" aria-hidden="true" />
              <div>
                <dt className="text-paper/50">Boat tours</dt>
                <dd className="text-paper/90">Available · 6 operators</dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Compass className="mt-0.5 size-3.5 shrink-0 text-amber-soft" aria-hidden="true" />
              <div>
                <dt className="text-paper/50">Waterbird season</dt>
                <dd className="text-paper/90">October – March</dd>
              </div>
            </div>
          </dl>
        </aside>

        {/* Headline figures */}
        <dl className="mt-11 grid grid-cols-2 gap-y-7 border-t border-paper/15 pt-6 sm:grid-cols-4 sm:gap-x-6">
          {parkStats.map((stat) => (
            <div key={stat.label} className="sm:border-l sm:border-paper/10 sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-3xl font-normal tracking-tight text-paper sm:text-[2.1rem]">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="ml-1 text-xs font-medium uppercase tracking-wider text-paper/50">
                    {stat.unit}
                  </span>
                )}
                <span className="mt-1.5 block text-[10.5px] font-medium uppercase leading-snug tracking-[0.13em] text-paper/55">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
