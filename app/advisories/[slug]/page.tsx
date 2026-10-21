import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, ChevronRight, Mail, ShieldAlert } from "lucide-react";
import { allAdvisories, severityStyles, type Severity } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

const severityNote: Record<Severity, string> = {
  CRITICAL:
    "Lake closure, typhoon warning, or a hazard to life. Critical notices also appear as a banner across every page.",
  WARNING: "A restriction or condition that affects tours. Read it before you travel.",
  INFO: "Seasonal notes, census results, and park updates — no restriction on access.",
};

export function generateStaticParams() {
  return allAdvisories.map((advisory) => ({ slug: advisory.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const advisory = allAdvisories.find((item) => item.slug === slug);

  if (!advisory) return { title: "Advisory not found" };

  return {
    title: advisory.title,
    description: advisory.excerpt,
    openGraph: {
      title: advisory.title,
      description: advisory.excerpt,
      type: "article",
    },
  };
}

export default async function AdvisoryPage({ params }: PageProps) {
  const { slug } = await params;
  const advisory = allAdvisories.find((item) => item.slug === slug);

  if (!advisory) notFound();

  const severity = severityStyles[advisory.severity];
  const related = allAdvisories.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-9 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[11px] text-ink-mute"
          >
            <Link href="/" className="transition-colors hover:text-forest">
              Home
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link href="/advisories" className="transition-colors hover:text-forest">
              Advisories
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span className="max-w-[16rem] truncate text-ink">{advisory.title}</span>
          </nav>

          <header className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.12em] ${severity.className}`}
              >
                <span className={`size-1 rounded-full ${severity.dot}`} aria-hidden="true" />
                {severity.label}
              </span>
              <span className="flex items-center gap-1.5 text-[11.5px] text-ink-mute">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                <time>{advisory.publishedAt}</time>
              </span>
            </div>

            <h1 className="mt-5 font-display text-[2.05rem] font-normal leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.7rem]">
              {advisory.title}
            </h1>

            <p className="mt-5 border-l-2 border-emerald/40 pl-4 text-[15.5px] leading-relaxed text-ink-soft">
              {advisory.excerpt}
            </p>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
            <article className="max-w-2xl">
              <div className="space-y-5 text-[15px] leading-[1.78] text-ink-soft">
                {advisory.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <Link
                  href="/advisories"
                  className="group inline-flex items-center gap-2 text-[13px] font-semibold text-forest"
                >
                  <ArrowLeft
                    className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                  All advisories
                </Link>
                <p className="text-[11px] uppercase tracking-[0.12em] text-ink-mute">
                  Issued by the Protected Area Office
                </p>
              </div>
            </article>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-line bg-paper-2/70 p-5">
                <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald">
                  <ShieldAlert className="size-3.5" aria-hidden="true" />
                  {severity.label}
                </p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-soft">
                  {severityNote[advisory.severity]}
                </p>
              </div>

              <div className="rounded-2xl bg-forest p-5 text-paper">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-soft">
                  Stay updated
                </p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-paper/65">
                  Get closures and water-level notices by email before you travel.
                </p>
                <Link
                  href="/subscribe"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[12px] font-semibold text-forest transition-colors hover:bg-white"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  Subscribe
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-[1.5rem] leading-tight text-ink sm:text-[1.75rem]">
              More notices
            </h2>
            <Link
              href="/advisories"
              className="group inline-flex items-center gap-1.5 text-[12px] font-semibold text-forest"
            >
              View all
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => {
              const itemSeverity = severityStyles[item.severity];
              return (
                <li key={item.slug}>
                  <Link
                    href={`/advisories/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/25 hover:shadow-soft"
                  >
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${itemSeverity.className}`}
                    >
                      <span
                        className={`size-1 rounded-full ${itemSeverity.dot}`}
                        aria-hidden="true"
                      />
                      {itemSeverity.label}
                    </span>
                    <h3 className="mt-3 font-display text-[16px] leading-snug text-ink transition-colors group-hover:text-emerald">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-ink-soft">
                      {item.excerpt}
                    </p>
                    <p className="mt-auto pt-4 text-[10.5px] uppercase tracking-[0.1em] text-ink-mute">
                      {item.publishedAt}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
