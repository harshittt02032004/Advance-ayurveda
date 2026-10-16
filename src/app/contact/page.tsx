import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact & Book Appointment — Prayagraj",
  description: `${site.address.full}. Call or WhatsApp 9532650556 / 9116222369 to book.`,
  alternates: { canonical: "/contact" },
};

const cards = [
  { icon: "pin", t: "Address", lines: [site.address.full], href: site.mapsLink, cta: "Get directions" },
  { icon: "phone", t: "Phone", lines: [site.phonePrimary, site.phoneSecondary], href: `tel:${site.phonePrimaryRaw}`, cta: "Call now" },
  { icon: "whatsapp", t: "WhatsApp", lines: [site.phonePrimary], href: site.whatsapp, cta: "Chat on WhatsApp" },
  { icon: "mail", t: "Email", lines: [site.email, site.emailAlt], href: `mailto:${site.email}`, cta: "Send email" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact us"
        title="Contact Advance Ayurved Centre, Prayagraj"
        text="Call, WhatsApp or send us a message. Our team will confirm your appointment time."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl text-forest">Request an appointment</h2>
              <p className="mt-2 text-ink-2">Fill in the details and we will call you back to confirm.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <ContactForm />
            </Reveal>
          </div>
          <div className="space-y-4 lg:col-span-5">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage-light text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-gold">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-moss">{c.t}</span>
                    {c.lines.map((l) => (
                      <span key={l} className="block text-forest">{l}</span>
                    ))}
                    <span className="mt-2 flex items-center gap-2 text-sm font-semibold text-forest">
                      {c.cta} <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="rounded-3xl bg-forest p-6 text-cream">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold"><Icon name="clock" className="h-4 w-4" /> Timings</p>
                <p className="mt-2 font-display text-2xl">{site.hours}</p>
                <p className="mt-1 text-sm text-cream/70">Please call ahead on public holidays.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-forest/10 shadow-lift">
            <iframe
              title="Advance Ayurved Centre on Google Maps"
              src={site.mapEmbed}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button href={site.mapsLink} external variant="outline">Open in Google Maps</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
