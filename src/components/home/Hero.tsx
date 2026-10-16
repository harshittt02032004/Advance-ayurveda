"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WordReveal } from "@/components/motion/WordReveal";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-forest-deep text-cream"
    >
      {/* background */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: imgY }}>
        <motion.div
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.06, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
          className="absolute inset-0"
        >
          <Image
            src="/images/treatments/hero.jpg"
            alt="Fresh Ayurvedic herbs, turmeric and warm medicated oil on a wooden table"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(8_37_25_/_0.92)_0%,rgb(8_37_25_/_0.75)_45%,rgb(8_37_25_/_0.25)_100%),linear-gradient(to_top,rgb(8_37_25_/_0.95),transparent_45%)]"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl animate-float"
      />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="container-x relative flex min-h-[100svh] flex-col justify-end pb-32 pt-40 lg:justify-center lg:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Tagore Town · Prayagraj
        </motion.div>

        <WordReveal
          text="Ayurveda that looks at the cause, not only the symptom."
          highlight={["cause"]}
          delay={0.45}
          className="mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.02] text-balance sm:text-6xl lg:text-7xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.15 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          Personal, doctor-led Ayurvedic treatment and Panchakarma for chronic
          and lifestyle conditions — under Dr Sanjay Verma, MD (Ayurved), with
          over {site.experienceYears} years of practice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.35 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <Button href="/contact" variant="gold">
              Book an Appointment
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href={site.whatsapp} external variant="light" icon={false}>
              <span className="flex items-center gap-2">
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Us
              </span>
            </Button>
          </Magnetic>
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            className="ml-1 flex items-center gap-2 text-sm font-semibold text-cream/85 link-underline"
          >
            <Icon name="phone" className="h-4 w-4 text-gold" />
            {site.phonePrimary}
          </a>
        </motion.div>

        {/* floating glass card */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.5 }}
          className="absolute bottom-24 right-8 hidden w-72 rounded-3xl border border-cream/15 bg-cream/10 p-5 shadow-lift backdrop-blur-xl xl:block"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold text-forest-deep">
              <Icon name="stethoscope" />
            </span>
            <div>
              <p className="font-display text-lg leading-tight">Dr Sanjay Verma</p>
              <p className="text-xs text-cream/70">MD (Ayurved) · Director</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              ["15+", "Years"],
              ["14+", "Conditions"],
              ["1", "Roof"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-forest-deep/40 py-2">
                <p className="font-display text-xl text-gold">{v}</p>
                <p className="text-[0.65rem] uppercase tracking-wider text-cream/60">
                  {l}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-4 h-10 overflow-hidden">
            <span className="absolute left-1/2 top-0 h-6 w-1 -translate-x-1/2 rounded-full bg-gold animate-drip" />
            <p className="absolute bottom-0 w-full text-center text-[0.65rem] uppercase tracking-[0.2em] text-cream/50">
              Panchakarma · Shirodhara · Basti
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-cream/50 lg:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-gold"
            animate={{ y: [0, 40] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
