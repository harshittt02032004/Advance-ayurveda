import Link from "next/link";
import { treatments } from "@/lib/treatments";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { Button } from "@/components/ui/Button";

export default function Conditions({ limit }: { limit?: number }) {
  const list = limit ? treatments.slice(0, limit) : treatments;
  return (
    <section className="relative overflow-hidden bg-sage-light py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Conditions we treat"
            title="Chronic and lifestyle conditions, treated at the root"
            text="Choose a condition to read how Ayurveda understands it, how we approach it, and when it also needs modern care."
          />
          <Reveal delay={0.2} className="shrink-0">
            <Button href="/treatments" variant="outline">
              View all treatments
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" amount={0.1}>
          {list.map((t) => (
            <StaggerItem key={t.slug}>
              <TiltCard className="h-full rounded-3xl">
                <Link
                  href={`/treatments/${t.slug}`}
                  className="group/card flex h-full flex-col rounded-3xl border border-forest/10 bg-white/80 p-6 shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-light text-forest transition-colors duration-500 group-hover/card:bg-forest group-hover/card:text-gold">
                      <Icon name={t.icon} className="h-6 w-6" />
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-forest/10 text-forest opacity-0 transition-all duration-500 [transition-timing-function:var(--ease-spring)] group-hover/card:opacity-100 group-hover/card:translate-x-0 -translate-x-2">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-forest">
                    {t.name}
                  </h3>
                  {t.sanskrit && (
                    <p className="mt-1 text-xs italic text-ink-3">{t.sanskrit}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    {t.short}
                  </p>
                  <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-[0.18em] text-moss">
                    {t.group}
                  </span>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
