import { NewsletterForm } from "@/components/home/newsletter-form";

export function NewsletterCta() {
  return (
    <section className="bg-paper pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-forest px-6 py-11 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-80 rounded-full bg-emerald/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-teal/30 blur-3xl"
          />

          <div className="relative grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow text-amber-soft">
                <span className="h-px w-6 bg-amber-soft/60" aria-hidden="true" />
                Stay in the loop
              </p>
              <h2 className="mt-4 font-display text-[1.95rem] font-normal leading-[1.08] tracking-[-0.015em] text-paper sm:text-[2.4rem]">
                Know before you go
              </h2>
              <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-paper/65">
                Join visitors, teachers, and researchers who get the park&rsquo;s advisories and
                seasonal wildlife notes by email.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
