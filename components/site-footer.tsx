import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerNav, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-paper/70">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-paper/10 ring-1 ring-paper/15">
                <svg viewBox="0 0 32 32" className="size-6" fill="none" aria-hidden="true">
                  <circle cx="21.5" cy="9" r="3.8" fill="var(--color-amber-soft)" />
                  <path
                    d="M5 20c2.4 0 2.4-1.6 4.8-1.6s2.4 1.6 4.8 1.6 2.4-1.6 4.8-1.6 2.4 1.6 4.8 1.6 2.4-1.6 4.8-1.6"
                    stroke="#ffffff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 25c2.4 0 2.4-1.6 4.8-1.6s2.4 1.6 4.8 1.6 2.4-1.6 4.8-1.6 2.4 1.6 4.8 1.6 2.4-1.6 4.8-1.6"
                    stroke="#ffffff"
                    strokeOpacity="0.45"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-paper">Naujan Lake</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-paper/45">
                  National Park
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              A Ramsar Wetland of International Importance in Oriental Mindoro. Managed for
              conservation, science, and sustainable eco-tourism.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: FacebookIcon, label: "Facebook", href: "#" },
                { icon: InstagramIcon, label: "Instagram", href: "#" },
                { icon: Mail, label: "Email", href: `mailto:${site.contact.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-paper/40 hover:bg-paper/10 hover:text-paper"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerNav.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/45">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-paper/75 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/45">
              Protected Area Office
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-amber-soft" aria-hidden="true" />
                <span className="leading-relaxed">{site.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-amber-soft" aria-hidden="true" />
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-paper"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-amber-soft" aria-hidden="true" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-paper">
                  {site.contact.email}
                </a>
              </li>
            </ul>

            <Link
              href="/inquire"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paper"
            >
              Send an inquiry
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{site.ramsar.label}</span>
            <span className="hidden text-paper/20 sm:inline">/</span>
            <span>DENR – PENRO Oriental Mindoro</span>
          </p>
        </div>
      </div>

      {/* Editorial watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[19vw] font-semibold leading-[0.75] tracking-tight text-paper/[0.04]"
      >
        Naujan Lake
      </p>
    </footer>
  );
}
