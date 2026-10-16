"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    n: "01",
    title: "Book",
    text: "Call, WhatsApp or fill in the form. We confirm a time that suits you.",
  },
  {
    n: "02",
    title: "Consult",
    text: "The doctor reviews your history, reports and pulse (nadi pariksha), and examines you.",
  },
  {
    n: "03",
    title: "Plan",
    text: "You receive medicines, a diet chart and, if required, a Panchakarma schedule.",
  },
  {
    n: "04",
    title: "Follow up",
    text: "We review your progress and adjust the plan. Bring your previous reports and current medicines.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-cream-deep py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Your first visit"
          title="Four simple steps from first call to follow-up"
        />
        <div ref={ref} className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-forest/10 lg:block" />
          <motion.div
            style={{ scaleX }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-gold lg:block"
          />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12} className="relative">
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-gold/60 bg-cream font-display text-xl text-forest shadow-soft">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-2xl text-forest">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-2">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
