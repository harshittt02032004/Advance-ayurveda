import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTherapy, therapies } from "@/lib/treatments";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return therapies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTherapy(slug);
  if (!t) return {};
  return { title: { absolute: t.metaTitle }, description: t.metaDescription, alternates: { canonical: `/panchakarma/${t.slug}` } };
}

export default async function TherapyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTherapy(slug);
  if (!t) notFound();
  const others = therapies.filter((x) => x.slug !== t.slug);

  return (
    <>
      <PageHero
        eyebrow="Panchakarma therapy"
        title={t.h1}
        text={t.intro}
        image={t.image}
        crumbs={[{ href: "/panchakarma", label: "Panchakarma" }, { href: `/panchakarma/${t.slug}`, label: t.name }]}
      />
      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl text-forest sm:text-3xl">Often advised for</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.advisedFor.map((a) => (
                  <li key={a} className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/60 px-5 py-4 text-forest">
                    <Icon name="check" className="h-4 w-4 text-gold" /> {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-10">
              <h2 className="font-display text-2xl text-forest sm:text-3xl">What to expect</h2>
              <p className="mt-4 leading-relaxed text-ink-2 sm:text-lg">{t.expect}</p>
            </Reveal>
            <Reveal className="mt-10">
              <h2 className="font-display text-2xl text-forest sm:text-3xl">Sittings</h2>
              <p className="mt-4 leading-relaxed text-ink-2 sm:text-lg">{t.sittings} Duration and fee are confirmed at your consultation.</p>
            </Reveal>
            {t.note && (
              <Reveal className="mt-10">
                <div className="rounded-3xl border border-terracotta/30 bg-terracotta/5 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Please note</p>
                  <p className="mt-3 text-ink-2">{t.note}</p>
                </div>
              </Reveal>
            )}
          </div>
          <aside className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                <Image src={t.image} alt={t.name} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="mt-6 rounded-[2rem] bg-forest p-6 text-cream">
                <p className="eyebrow !text-gold">Book this therapy</p>
                <p className="mt-2 font-display text-2xl">Prescribed after a short consultation</p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button href="/contact" variant="gold">Request appointment</Button>
                  <a href={`tel:${site.phonePrimaryRaw}`} className="text-center text-sm font-semibold">Call {site.phonePrimary}</a>
                </div>
              </div>
              <div className="mt-6">
                <p className="eyebrow">Other therapies</p>
                <ul className="mt-3 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/panchakarma/${o.slug}`} className="group flex items-center justify-between rounded-2xl border border-forest/10 bg-white/60 px-4 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream">
                        {o.name} <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
      <CtaBand title={`Book ${t.name} at Advance Ayurved Centre`} />
    </>
  );
}
