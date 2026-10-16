import type { Metadata } from "next";
import Link from "next/link";
import { groupOrder, treatments, therapies } from "@/lib/treatments";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { TiltCard } from "@/components/motion/TiltCard";

export const metadata: Metadata = {
  title: "Ayurvedic Treatments in Prayagraj",
  description:
    "Ayurvedic care for piles, fatty liver, diabetes, kidney stones, arthritis, sciatica, migraine, paralysis, infertility and more in Prayagraj.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Ayurvedic treatments in Prayagraj"
        text="At Advance Ayurved Centre, treatment begins with a full consultation. Choose a condition below to read how Ayurveda understands it and how we approach it."
        image="/images/treatments/hero.jpg"
        crumbs={[{ href: "/treatments", label: "Treatments" }]}
      />

      <section className="container-x py-16 lg:py-24">
        <Reveal>
          <nav aria-label="Treatment groups" className="flex flex-wrap gap-2">
            {groupOrder.map((g) => (
              <a
                key={g}
                href={`#${g.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="rounded-full border border-forest/15 bg-white/60 px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                {g}
              </a>
            ))}
            <a
              href="#panchakarma"
              className="rounded-full border border-forest/15 bg-white/60 px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              Panchakarma Therapies
            </a>
          </nav>
        </Reveal>

        {groupOrder.map((g) => {
          const list = treatments.filter((t) => t.group === g);
          return (
            <div
              key={g}
              id={g.toLowerCase().replace(/[^a-z]+/g, "-")}
              className="mt-16 scroll-mt-28"
            >
              <Reveal>
                <h2 className="font-display text-2xl text-forest sm:text-3xl">{g}</h2>
              </Reveal>
              <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" amount={0.1}>
                {list.map((t) => (
                  <StaggerItem key={t.slug}>
                    <TiltCard className="h-full rounded-3xl">
                      <Link
                        href={`/treatments/${t.slug}`}
                        className="group/card flex h-full flex-col rounded-3xl border border-forest/10 bg-white/80 p-6 shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift"
                      >
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-light text-forest transition-colors duration-500 group-hover/card:bg-forest group-hover/card:text-gold">
                          <Icon name={t.icon} className="h-6 w-6" />
                        </span>
                        <h3 className="mt-5 font-display text-xl text-forest">{t.name}</h3>
                        {t.sanskrit && <p className="mt-1 text-xs italic text-ink-3">{t.sanskrit}</p>}
                        <p className="mt-3 text-sm leading-relaxed text-ink-2">{t.short}</p>
                        <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-forest">
                          Read more
                          <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover/card:translate-x-1" />
                        </span>
                      </Link>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          );
        })}

        <div id="panchakarma" className="mt-16 scroll-mt-28">
          <Reveal>
            <h2 className="font-display text-2xl text-forest sm:text-3xl">Panchakarma Therapies</h2>
          </Reveal>
          <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" amount={0.1}>
            {therapies.map((t) => (
              <StaggerItem key={t.slug}>
                <Link
                  href={`/panchakarma/${t.slug}`}
                  className="group/card flex h-full flex-col rounded-3xl border border-forest/10 bg-forest p-6 text-cream shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:shadow-lift"
                >
                  <Icon name="lotus" className="h-7 w-7 text-gold" />
                  <h3 className="mt-5 font-display text-xl">{t.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{t.short}</p>
                  <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-gold">
                    Learn more <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover/card:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
