"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { therapies } from "@/lib/treatments";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function PanchakarmaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Panchakarma in Prayagraj"
            title="Cleansing therapies, prescribed by a doctor and performed by trained hands"
            text="Panchakarma is Ayurveda's method of cleansing and restoring the body. At our centre every therapy is prescribed after a consultation and carried out by trained male and female therapists in clean, private rooms."
          />
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {therapies.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/panchakarma/${t.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-forest/10 bg-white/60 px-5 py-4 transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:border-gold/60 hover:bg-white hover:shadow-soft"
                  >
                    <span>
                      <span className="font-display text-lg text-forest">
                        {t.name}
                      </span>
                      <span className="block text-sm text-ink-3">{t.short}</span>
                    </span>
                    <Icon
                      name="arrow"
                      className="h-5 w-5 shrink-0 text-forest transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <Button href="/panchakarma">Explore Panchakarma</Button>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            <motion.div
              style={{ y: y1 }}
              className="col-span-7 overflow-hidden rounded-[2rem] shadow-lift"
            >
              <Reveal className="relative aspect-[3/4]">
                <Image
                  src="/images/treatments/shirodhara.jpg"
                  alt="Shirodhara therapy — warm oil poured on the forehead"
                  fill
                  sizes="(min-width:1024px) 35vw, 60vw"
                  className="object-cover"
                />
              </Reveal>
            </motion.div>
            <motion.div style={{ y: y2 }} className="col-span-5 space-y-3 pt-10 sm:space-y-4 sm:pt-16">
              <Reveal delay={0.1} className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src="/images/treatments/knee.jpg"
                  alt="Janu Basti knee therapy with warm medicated oil"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal
                delay={0.2}
                className="rounded-[1.5rem] bg-forest p-4 text-cream shadow-lift sm:rounded-[2rem] sm:p-6"
              >
                <p className="font-display text-3xl text-gold sm:text-4xl">5</p>
                <p className="mt-1 text-xs leading-snug text-cream/80 [overflow-wrap:anywhere] sm:text-sm">
                  classical procedures — Vamana, Virechana, Basti, Nasya,
                  Raktamokshana — plus supporting therapies.
                </p>
              </Reveal>
            </motion.div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-16 -left-10 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
