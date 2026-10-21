"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Menu, Phone, Search, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";

function ParkMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-xl bg-forest ring-1 ring-forest/20 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="size-6" fill="none">
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
        <path
          d="M5.5 12.5c1.3-2.4 3.6-3.7 6-3.7-1.1 1-1.7 2.3-1.9 3.6"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  // The drawer stores the route it was opened on, so navigating away closes it
  // without an extra effect or state reset.
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const open = openOnPath === pathname;

  const close = () => setOpenOnPath(null);
  const toggle = () => setOpenOnPath(open ? null : pathname);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOnPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-forest-deep text-paper/75 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[11px] tracking-[0.08em]">
          <p className="flex items-center gap-2">
            <MapPin className="size-3.5 text-amber-soft" aria-hidden="true" />
            {site.location}
            <span className="mx-1 text-paper/30">/</span>
            <span className="text-paper/60">{site.ramsar.label}</span>
          </p>
          <p className="flex items-center gap-5">
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-paper"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {site.contact.phone}
            </a>
            <span className="text-paper/30">|</span>
            <span className="text-paper/60">{site.contact.officeHours}</span>
          </p>
        </div>
      </div>

      {/* Primary bar */}
      <div className="border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg"
            aria-label={`${site.name} — home`}
          >
            <ParkMark />
            <span className="leading-none">
              <span className="block font-display text-[19px] font-semibold tracking-tight text-forest">
                Naujan Lake
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-ink-mute">
                National Park
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${
                        active
                          ? "text-forest"
                          : "text-ink-soft hover:bg-paper-2 hover:text-forest"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute inset-x-4 -bottom-0.5 h-px bg-emerald" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-forest"
              aria-label="Search the site"
            >
              <Search className="size-[18px]" aria-hidden="true" />
            </button>

            <Link
              href="/tours"
              className="group hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[13px] font-semibold text-paper transition-colors hover:bg-forest-deep sm:inline-flex"
            >
              Plan a Visit
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <button
              type="button"
              onClick={toggle}
              className="grid size-10 place-items-center rounded-full border border-line text-forest transition-colors hover:bg-paper-2 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-line/70 bg-paper transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
            open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile" className="px-5 pb-6 pt-2 sm:px-6">
            <ul className="divide-y divide-line/70">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between py-3.5 font-display text-xl text-forest"
                  >
                    {item.label}
                    <ArrowUpRight className="size-4 text-ink-mute" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/tours"
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-paper"
            >
              Plan a Visit
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <p className="mt-5 flex items-center gap-2 text-xs text-ink-mute">
              <Phone className="size-3.5" aria-hidden="true" />
              {site.contact.phone}
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}
