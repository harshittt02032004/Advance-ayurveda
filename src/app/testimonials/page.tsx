import type { Metadata } from "next";
import { testimonials } from "@/lib/team";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: "Genuine Google reviews from patients of Advance Ayurved Centre, Tagore Town, Prayagraj.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero compact eyebrow="Patient stories" title="What our patients say" text="Genuine reviews from patients in Prayagraj. We never edit the wording and we never invent reviews." crumbs={[{ href: "/testimonials", label: "Testimonials" }]} />
      <section className="container-x py-16 lg:py-24">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="flex flex-col rounded-[2rem] border border-forest/10 bg-white/70 p-8 shadow-soft">
              <div className="flex gap-1 text-gold">{[...Array(5)].map((_, k) => <Icon key={k} name="star" className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-5 flex-1 font-display text-lg leading-relaxed text-forest">“{t.text}”</p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-forest font-display text-gold">{t.name[0]}</span>
                <div><p className="font-semibold text-forest">{t.name}</p><p className="text-sm text-ink-3">{t.city}</p></div>
              </footer>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <p className="text-ink-2">Have you visited us? Your honest review helps other families in Prayagraj find good care.</p>
          <div className="mt-5"><Button href={site.mapsLink} external variant="outline">Review us on Google</Button></div>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
