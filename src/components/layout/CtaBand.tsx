import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

export function CtaBand({
  title = "Start your treatment with a proper consultation",
  text = "Talk to an experienced Ayurvedic doctor in Prayagraj. Call, WhatsApp or request a call-back and we will confirm your appointment.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-cream shadow-lift sm:px-12 lg:px-20 lg:py-20 grain">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl animate-float"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-moss/40 blur-3xl"
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute right-6 top-6 h-40 w-40 text-gold/15 lg:h-64 lg:w-64"
            viewBox="0 0 48 48"
            fill="currentColor"
          >
            <path d="M24 40c-9 0-16-5-16-12 5 0 9 2 11 5 0-7 2-14 5-19 3 5 5 12 5 19 2-3 6-5 11-5 0 7-7 12-16 12Z" />
          </svg>
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow !text-gold">Book an appointment</p>
              <h2 className="mt-3 max-w-xl text-3xl font-medium leading-[1.08] text-balance sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-lg text-cream/75">{text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="gold">
                  Request Appointment
                </Button>
                <Button href={site.whatsapp} external variant="light" icon={false}>
                  <span className="flex items-center gap-2">
                    <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
                  </span>
                </Button>
              </div>
            </div>
            <div className="min-w-0 rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur [overflow-wrap:anywhere]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Call us
              </p>
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className="mt-2 block font-display text-2xl hover:text-gold sm:text-3xl"
              >
                {site.phonePrimary}
              </a>
              <a
                href={`tel:${site.phoneSecondaryRaw}`}
                className="block font-display text-2xl text-cream/80 hover:text-gold sm:text-3xl"
              >
                {site.phoneSecondary}
              </a>
              <p className="mt-4 flex items-start gap-2 text-sm text-cream/70">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.address.full}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-cream/70">
                <Icon name="clock" className="h-4 w-4 text-gold" />
                {site.hours}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
