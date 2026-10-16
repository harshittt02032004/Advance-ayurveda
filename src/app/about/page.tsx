import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/motion/Counter";
import Doctors from "@/components/home/Doctors";

export const metadata: Metadata = {
  title: "About Us — Ayurvedic & Panchakarma Centre in Prayagraj",
  description:
    "A Prayagraj Ayurvedic and Panchakarma centre led by Dr Sanjay Verma (MD Ayurved), with 15+ years of experience in chronic and lifestyle conditions.",
  alternates: { canonical: "/about" },
};

const approach = [
  { t: "Classical Ayurvedic medicines", d: "from quality-checked sources" },
  { t: "Panchakarma therapies", d: "done under a doctor's supervision" },
  { t: "Diet and routine (Ahara–Vihara)", d: "written for your condition" },
  { t: "Yoga and counselling", d: "to help the results last" },
];

const promises = [
  "We listen first.",
  "We explain your condition and your treatment in simple language.",
  "We do not promise overnight results or miracle cures.",
  "We ask for modern tests when they are needed, and refer you when another specialist should be involved.",
];

const facilities = [
  { icon: "stethoscope", t: "Doctor consultation rooms" },
  { icon: "lotus", t: "Panchakarma therapy rooms with male & female therapists" },
  { icon: "sun", t: "Yoga guidance" },
  { icon: "heart", t: "Patient counselling" },
  { icon: "leaf", t: "Ayurvedic pharmacy" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A doctor-led Ayurvedic centre in the heart of Prayagraj"
        text="For more than 15 years, our doctors have treated patients from Prayagraj and nearby districts for chronic and lifestyle conditions such as piles, liver disorders, joint and spine problems, diabetes and infertility."
        image="/images/treatments/reception.jpg"
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="container-x py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our approach"
              title="Health is balance — of the body, the mind and daily habits"
              text="We do not believe in one medicine for everyone. Each plan starts with a detailed consultation and combines four things."
            />
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {approach.map((a, i) => (
                <StaggerItem
                  key={a.t}
                  className="rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-soft"
                >
                  <p className="font-display text-3xl text-gold">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-lg text-forest">{a.t}</h3>
                  <p className="mt-1 text-sm text-ink-3">{a.d}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="relative lg:col-span-6">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/images/treatments/pharmacy.jpg"
                alt="Ayurvedic pharmacy at Advance Ayurved Centre Prayagraj"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              delay={0.2}
              className="absolute -bottom-8 left-6 flex items-center gap-5 rounded-3xl bg-forest p-6 text-cream shadow-lift"
            >
              <p className="font-display text-5xl text-gold">
                <Counter to={15} suffix="+" />
              </p>
              <p className="max-w-[9rem] text-sm leading-snug text-cream/80">
                years treating patients across Prayagraj
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-20 text-cream lg:py-28 grain">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading light eyebrow="Our promise to patients" title="Four things you can hold us to" />
          </div>
          <Stagger className="space-y-4 lg:col-span-7">
            {promises.map((p, i) => (
              <StaggerItem
                key={p}
                className="flex gap-5 rounded-3xl border border-cream/10 bg-cream/5 p-6 backdrop-blur"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-display text-forest-deep">
                  {i + 1}
                </span>
                <p className="font-display text-xl leading-snug">{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Facilities"
          title="Everything your treatment needs, under one roof"
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map((f) => (
            <StaggerItem
              key={f.t}
              className="group rounded-3xl border border-forest/10 bg-white/70 p-6 text-center shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sage-light text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-gold">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <p className="mt-4 text-sm font-semibold text-forest">{f.t}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-sage-light py-20 lg:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-white/80 p-10 shadow-soft">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 font-display text-2xl leading-snug text-forest sm:text-3xl">
              To make authentic, doctor-led Ayurvedic care accessible to every family in Prayagraj.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-[2rem] bg-forest p-10 text-cream shadow-soft">
            <p className="eyebrow !text-gold">Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
              To be the Ayurvedic centre people in Prayagraj trust first for long-term health.
            </p>
          </Reveal>
        </div>
      </section>

      <Doctors />
      <CtaBand />
    </>
  );
}
