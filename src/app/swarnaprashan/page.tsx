import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/layout/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Swarnaprashan in Prayagraj | Pushya Nakshatra Dates",
  description:
    "Swarnaprashan for children at Advance Ayurved Centre, Prayagraj, on every Pushya Nakshatra. See upcoming dates and register.",
  alternates: { canonical: "/swarnaprashan" },
};

const benefits = [
  { icon: "shield", t: "Immunity", d: "Traditionally described as supporting the body's natural defences." },
  { icon: "leaf", t: "Digestion", d: "Classical texts link it to better appetite and digestion." },
  { icon: "sparkle", t: "Memory & focus", d: "Described as supporting intellect (medha) and concentration." },
  { icon: "sun", t: "Strength", d: "Part of a healthy growth routine alongside good food and sleep." },
];

const faqs = [
  { q: "Is prior registration needed?", a: "Yes, please call or WhatsApp us before the date so that we can prepare the dose for your child." },
  { q: "What is the fee?", a: "The fee is confirmed when you register. Please call 9532650556." },
  { q: "Can a child with a fever or cold take it?", a: "Please tell the doctor; the dose may be postponed to the next date." },
  { q: "Does Swarnaprashan replace vaccination?", a: "No. Swarnaprashan is a traditional immunity-support practice. Children must receive all vaccines in the national immunisation schedule on time." },
];

export default function SwarnaprashanPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHero
        eyebrow="For children"
        title="Swarnaprashan for children in Prayagraj"
        text="Swarnaprashan (Suvarnaprashan) is a traditional Ayurvedic practice described in the Kashyapa Samhita. A preparation of purified gold (Swarna Bhasma), medicated ghee, honey and herbs is given to children in a few drops."
        image="/images/treatments/swarnaprashan.jpg"
        crumbs={[{ href: "/swarnaprashan", label: "Swarnaprashan" }]}
      />

      <section className="container-x py-16 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift lg:col-span-6">
            <Image src="/images/treatments/swarnaprashan.jpg" alt="Swarnaprashan drops being given to a child at Advance Ayurved Centre" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Traditionally believed benefits" title="What the classical texts describe" />
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <StaggerItem key={b.t} className="rounded-3xl border border-forest/10 bg-white/70 p-5 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage-light text-forest"><Icon name={b.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-display text-lg text-forest">{b.t}</h3>
                  <p className="mt-1 text-sm text-ink-2">{b.d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-16 text-cream lg:py-24 grain">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <Reveal className="rounded-[2rem] border border-cream/10 bg-cream/5 p-8 backdrop-blur">
            <p className="eyebrow !text-gold">Who can take it</p>
            <p className="mt-3 font-display text-2xl">Children from birth to 16 years</p>
            <p className="mt-2 text-sm text-cream/70">Age range confirmed by the doctor at registration.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-cream/10 bg-cream/5 p-8 backdrop-blur">
            <p className="eyebrow !text-gold">When it is given</p>
            <p className="mt-3 font-display text-2xl">On Pushya Nakshatra</p>
            <p className="mt-2 text-sm text-cream/70">Which comes once every 27 days.</p>
          </Reveal>
          <Reveal delay={0.2} className="rounded-[2rem] bg-gold p-8 text-forest-deep">
            <p className="eyebrow !text-forest-deep">Next date</p>
            <p className="mt-3 font-display text-2xl">To be announced</p>
            <p className="mt-2 text-sm text-forest-deep/80">Call or WhatsApp us to be notified of the next Pushya Nakshatra date.</p>
            <div className="mt-5"><Button href="/contact" variant="primary">Register interest</Button></div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <Reveal>
          <div className="rounded-[2rem] border border-terracotta/30 bg-terracotta/5 p-8">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta"><Icon name="shield" className="h-4 w-4" /> Please note</p>
            <p className="mt-3 leading-relaxed text-ink-2">
              Swarnaprashan is a traditional immunity-support practice. <strong>It does not replace the vaccines in the national immunisation schedule.</strong> Children should receive all routine vaccinations on time. Honey is not recommended for infants under one year by paediatric guidelines; discuss this with the doctor.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title="Questions parents ask us" /></div>
          <Reveal className="lg:col-span-8"><Accordion items={faqs} /></Reveal>
        </div>
      </section>
      <CtaBand title="Register your child for the next Swarnaprashan date" />
    </>
  );
}
