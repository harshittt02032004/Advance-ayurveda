import Link from "next/link";
import { disclaimer, site } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

const popular = [
  "piles-fistula-fissure",
  "fatty-liver",
  "arthritis",
  "sciatica",
  "diabetes",
  "infertility",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              A doctor-led Ayurvedic and Panchakarma centre in Tagore Town,
              Prayagraj, directed by Dr Sanjay Verma, MD (Ayurved).
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.social.facebook, label: "Facebook", d: "M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1Z" },
                { href: site.social.instagram, label: "Instagram", d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6.5h.01" },
                { href: site.social.linkedin, label: "LinkedIn", d: "M6 9v12M6 4v.5M10 21v-7a3 3 0 0 1 6 0v7M10 9v12" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {[
                ["/about", "About"],
                ["/doctors", "Doctors"],
                ["/treatments", "Treatments"],
                ["/panchakarma", "Panchakarma"],
                ["/swarnaprashan", "Swarnaprashan"],
                ["/gallery", "Gallery"],
                ["/testimonials", "Testimonials"],
                ["/blog", "Blog"],
                ["/contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}>
                  <Link href={h} className="link-underline hover:text-cream">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Popular Treatments
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {popular.map((slug) => {
                const t = treatments.find((x) => x.slug === slug)!;
                return (
                  <li key={slug}>
                    <Link
                      href={`/treatments/${slug}`}
                      className="link-underline hover:text-cream"
                    >
                      {t.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Visit Us
            </h3>
            <address className="mt-5 space-y-4 text-sm not-italic text-cream/75">
              <p className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.address.full}
              </p>
              <p className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <a href={`tel:${site.phonePrimaryRaw}`} className="hover:text-cream">
                    {site.phonePrimary}
                  </a>
                  <br />
                  <a href={`tel:${site.phoneSecondaryRaw}`} className="hover:text-cream">
                    {site.phoneSecondary}
                  </a>
                </span>
              </p>
              <p className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="min-w-0 hover:text-cream [overflow-wrap:anywhere]">
                  {site.email}
                </a>
              </p>
              <p className="flex gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.hours}
              </p>
            </address>
          </div>
        </div>

        <p className="mt-14 max-w-4xl text-xs leading-relaxed text-cream/45">
          <strong className="text-cream/60">Medical disclaimer: </strong>
          {disclaimer}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-cream">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream">Terms</Link>
            <Link href="/disclaimer" className="hover:text-cream">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
