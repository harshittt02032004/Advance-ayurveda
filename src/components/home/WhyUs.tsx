import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const reasons = [
  {
    icon: "stethoscope",
    title: "Experienced, qualified doctors",
    text: "Consultations are led by Dr Sanjay Verma, MD (Ayurved), with over 15 years of practice.",
  },
  {
    icon: "sparkle",
    title: "A plan made for you",
    text: "Medicines, therapies and diet are chosen for your condition and constitution, not from a fixed package.",
  },
  {
    icon: "home",
    title: "Everything in one place",
    text: "Consultation, Panchakarma, yoga guidance, counselling and pharmacy under one roof.",
  },
  {
    icon: "shield",
    title: "Honest guidance",
    text: "We explain what Ayurveda can and cannot do for your condition, and coordinate with your other doctors.",
  },
  {
    icon: "lotus",
    title: "A calm, clean space",
    text: "Private therapy rooms and separate therapists for men and women.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 text-cream lg:py-32 grain">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-moss/30 blur-3xl"
      />
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            light
            eyebrow="Why patients choose us"
            title="Care that is personal, honest and under one roof"
          />
          <Reveal delay={0.2} className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift lg:aspect-[4/4.4]">
            <Image
              src="/images/clinic/exterior-front.jpg"
              alt="Advance Ayurved Centre building near Inter College, Tagore Town, Prayagraj"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover object-[center_35%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 to-transparent p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Tagore Town, Prayagraj
              </p>
              <p className="font-display text-xl">Near Inter College, Balson Chauraha</p>
            </div>
          </Reveal>
        </div>
        <Stagger className="grid gap-4 self-center sm:grid-cols-2 lg:col-span-7">
          {reasons.map((r, i) => (
            <StaggerItem
              key={r.title}
              className={`group rounded-3xl border border-cream/10 bg-cream/5 p-6 backdrop-blur transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/10 ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold text-forest-deep transition-transform duration-500 group-hover:rotate-6">
                <Icon name={r.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{r.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
