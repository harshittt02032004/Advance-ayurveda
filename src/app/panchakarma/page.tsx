import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { panchakarmaFive, therapies } from "@/lib/treatments";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/layout/JsonLd";

export const metadata: Metadata = {
  title: "Panchakarma Centre in Prayagraj",
  description:
    "Doctor-supervised Panchakarma in Prayagraj: Vamana, Virechana, Basti, Nasya, Shirodhara, Abhyanga and more, by trained therapists.",
  alternates: { canonical: "/panchakarma" },
};

const supporting = [
  "Abhyanga (full-body oil massage)",
  "Swedana (herbal steam)",
  "Shirodhara",
  "Padabhyanga",
  "Kati Basti",
  "Janu Basti",
  "Greeva Basti",
  "Patra Pinda Sweda (herbal bolus)",
];

const faqs = [
  { q: "Is Panchakarma only for sick people?", a: "No. Healthy people also take seasonal Panchakarma for upkeep, after a doctor's advice." },
  { q: "How many days does it take?", a: "From a single sitting for therapies like Shirodhara to 7–21 days for a full course." },
  { q: "Are there separate therapists for women?", a: "Yes, female patients are treated by a female therapist." },
  { q: "Who should avoid Panchakarma?", a: "Some procedures are not suitable in pregnancy, during fever or acute illness, for very weak or very elderly patients, or with certain heart conditions. The doctor will decide what is safe for you." },
];

const stages = [
  { n: "01", t: "Consultation", d: "Doctor's consultation and fitness check." },
  { n: "02", t: "Purvakarma", d: "Preparation: oiling and steam." },
  { n: "03", t: "Pradhanakarma", d: "The main procedure." },
  { n: "04", t: "Paschatkarma", d: "After-care: a graded diet and rest." },
];

export default function PanchakarmaPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHero
        eyebrow="Panchakarma"
        title="Panchakarma centre in Prayagraj"
        text="Panchakarma means “five actions” — five classical procedures that cleanse the body and restore balance. Every therapy here is prescribed by the doctor after a consultation and performed by trained therapists."
        image="/images/treatments/room.jpg"
        crumbs={[{ href: "/panchakarma", label: "Panchakarma" }]}
      />

      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="The five main procedures" title="Five classical actions, each with a purpose" />
        <Reveal className="mt-10 overflow-hidden rounded-[2rem] border border-forest/10 bg-white/70 shadow-soft">
          <table className="w-full text-left text-sm">
            <thead className="bg-sage-light text-xs uppercase tracking-[0.18em] text-forest">
              <tr>
                <th className="px-6 py-4">Procedure</th>
                <th className="px-6 py-4">What it is</th>
                <th className="px-6 py-4">Commonly advised in</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {panchakarmaFive.map((p) => (
                <tr key={p.name} className="transition-colors hover:bg-sage-light/50">
                  <td className="px-6 py-4 font-display text-lg text-forest">{p.name}</td>
                  <td className="px-6 py-4 text-ink-2">{p.what}</td>
                  <td className="px-6 py-4 text-ink-2">{p.advised}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      <section className="bg-sage-light py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Signature therapies" title="Therapies you can book at the centre" />
            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {supporting.map((s) => (
                  <li key={s} className="rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-sm text-forest">{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {therapies.map((t) => (
              <StaggerItem key={t.slug}>
                <Link href={`/panchakarma/${t.slug}`} className="group block overflow-hidden rounded-[2rem] border border-forest/10 bg-white/80 shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={t.image} alt={t.name} fill sizes="(min-width:1024px) 30vw, 50vw" className="object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-spring)] group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-forest">{t.name}</h3>
                    <p className="mt-2 text-sm text-ink-2">{t.short}</p>
                    <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-forest">Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <SectionHeading align="center" eyebrow="What to expect" title="A course of Panchakarma, step by step" />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-4">
          {stages.map((s) => (
            <StaggerItem key={s.n} className="rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-soft">
              <p className="font-display text-3xl text-gold">{s.n}</p>
              <h3 className="mt-3 font-display text-xl text-forest">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-2">{s.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-cream-deep py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title="Common questions about Panchakarma" /></div>
          <Reveal className="lg:col-span-8"><Accordion items={faqs} /></Reveal>
        </div>
      </section>
      <CtaBand title="Ask the doctor if Panchakarma is right for you" />
    </>
  );
}
