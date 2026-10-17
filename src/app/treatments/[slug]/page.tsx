import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTreatment, treatments } from "@/lib/treatments";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { JsonLd } from "@/components/layout/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ReviewStrip } from "@/components/reviews/ReviewStrip";

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    alternates: { canonical: `/treatments/${t.slug}` },
    openGraph: { title: t.metaTitle, description: t.metaDescription, images: [t.image] },
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();
  const related = t.related.map((s) => getTreatment(s)!).filter(Boolean);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalWebPage",
              name: t.metaTitle,
              description: t.metaDescription,
              url: `${site.url}/treatments/${t.slug}`,
              about: { "@type": "MedicalCondition", name: t.name },
              provider: { "@id": `${site.url}/#clinic` },
            },
            {
              "@type": "FAQPage",
              mainEntity: t.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Treatments", item: `${site.url}/treatments` },
                { "@type": "ListItem", position: 3, name: t.name, item: `${site.url}/treatments/${t.slug}` },
              ],
            },
          ],
        }}
      />
      <PageHero
        eyebrow={t.group}
        title={t.h1}
        text={t.intro}
        image={t.image}
        crumbs={[
          { href: "/treatments", label: "Treatments" },
          { href: `/treatments/${t.slug}`, label: t.name },
        ]}
      />

      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {(t.sanskrit || t.hindi) && (
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  {t.sanskrit && (
                    <span className="rounded-full bg-sage-light px-4 py-1.5 text-sm italic text-forest">
                      Ayurveda: {t.sanskrit}
                    </span>
                  )}
                  {t.hindi && (
                    <span className="rounded-full bg-sand px-4 py-1.5 text-sm text-forest">
                      Hindi: {t.hindi}
                    </span>
                  )}
                </div>
              </Reveal>
            )}

            {t.sections.map((s, i) => (
              <Reveal key={s.heading} delay={0.04 * i} className="mt-10">
                <h2 className="font-display text-2xl text-forest sm:text-3xl">{s.heading}</h2>
                {s.body && <p className="mt-4 leading-relaxed text-ink-2 sm:text-lg">{s.body}</p>}
                {s.bullets && (
                  <ul className="mt-5 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 rounded-2xl border border-forest/10 bg-white/60 px-5 py-4 text-ink-2">
                        <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {t.urgent && (
              <Reveal className="mt-10">
                <div className="rounded-3xl border border-terracotta/30 bg-terracotta/5 p-6">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                    <Icon name="shield" className="h-4 w-4" /> When to seek urgent care
                  </p>
                  <p className="mt-3 leading-relaxed text-ink-2">{t.urgent}</p>
                </div>
              </Reveal>
            )}

            <Reveal className="mt-14">
              <h2 className="font-display text-2xl text-forest sm:text-3xl">Frequently asked questions</h2>
              <div className="mt-6">
                <Accordion items={t.faqs} />
              </div>
            </Reveal>

            <p className="mt-10 text-xs leading-relaxed text-ink-3">
              Medical disclaimer: this page is for general awareness and is not a substitute for a consultation. Results vary from person to person. Do not start or stop any medicine without a doctor&apos;s advice.
            </p>
          </article>

          <aside className="space-y-6 lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white/70 shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={t.image} alt={t.name} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="eyebrow">Book a consultation</p>
                  <p className="mt-2 font-display text-2xl text-forest">Talk to Dr Sanjay Verma, MD (Ayurved)</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <Button href="/contact">Request appointment</Button>
                    <Button href={site.whatsapp} external variant="outline" icon={false}>
                      <span className="flex items-center gap-2"><Icon name="whatsapp" className="h-4 w-4" /> WhatsApp</span>
                    </Button>
                    <a href={`tel:${site.phonePrimaryRaw}`} className="text-center text-sm font-semibold text-forest">Call {site.phonePrimary}</a>
                  </div>
                  <p className="mt-5 text-xs text-ink-3">{site.address.full}</p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-forest/10 bg-sage-light p-6">
                <p className="eyebrow">Related treatments</p>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/treatments/${r.slug}`} className="group flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream">
                        {r.name}
                        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/panchakarma" className="group flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream">
                      Panchakarma therapies
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
      <ReviewStrip tags={[t.slug]} title={`Patients on their ${t.name.toLowerCase()} treatment and care`} />
      <CtaBand title={`Book a consultation for ${t.name.toLowerCase()}`} />
    </>
  );
}
