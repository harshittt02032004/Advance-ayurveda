"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WordReveal } from "@/components/motion/WordReveal";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { googleRating } from "@/lib/reviews";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-forest-deep text-cream"
    >
      {/* textured background */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <Image
          src="/images/treatments/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(8_37_25_/_0.97)_0%,rgb(8_37_25_/_0.86)_50%,rgb(8_37_25_/_0.55)_100%),linear-gradient(to_top,rgb(8_37_25_/_1),transparent_40%)]"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-moss/40 blur-3xl"
      />

      <div className="container-x grid min-h-[100svh] items-center gap-10 pt-28 pb-24 lg:grid-cols-12 lg:gap-8 lg:pt-32 lg:pb-28">
        {/* copy */}
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="order-2 lg:order-1 lg:col-span-7"
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
            className="mt-6 max-w-3xl text-[2.5rem] font-medium leading-[1.02] text-balance sm:text-6xl lg:text-[4.2rem] xl:text-7xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            Personal, doctor-led Ayurvedic treatment and Panchakarma for chronic
            and lifestyle conditions — under{" "}
            <span className="text-cream">Dr Sanjay Verma, MD (Ayurved)</span>,
            with over {site.experienceYears} years of practice.
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
              className="ml-1 flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-cream/85 link-underline"
            >
              <Icon name="phone" className="h-4 w-4 text-gold" />
              {site.phonePrimary}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.6 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream/70"
          >
            {[
              "Piles · Fistula · Fissure",
              "Liver & metabolic care",
              "Joint, spine & nerve pain",
              "Panchakarma",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-gold" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* doctor photo */}
        <motion.div
          style={{ y: photoY }}
          className="order-1 lg:order-2 lg:col-span-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* gold ring + photo */}
            <div className="relative aspect-[10/11] overflow-hidden rounded-[2.5rem] border border-gold/30 bg-forest shadow-lift sm:rounded-[3rem]">
              <Image
                src="/images/clinic/dr-sanjay-verma-portrait.webp"
                alt="Dr Sanjay Verma, MD (Ayurved), Director of Advance Ayurved Centre, Prayagraj"
                fill
                priority
                sizes="(min-width:1024px) 40vw, (min-width:640px) 520px, 100vw"
                className="object-cover object-[center_20%]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent"
              />
              <span className="absolute right-5 top-5 rounded-full border border-cream/20 bg-forest-deep/50 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur">
                {site.experienceYears}+ years
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 pb-14 sm:p-6 sm:pb-16">
                <div>
                  <p className="font-display text-2xl leading-tight sm:text-3xl">
                    Dr Sanjay Verma
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    MD (Ayurved) · Director
                  </p>
                </div>
                
              </div>
            </div>

            {/* floating: Google rating */}
            <motion.a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease, delay: 1.2 }}
              className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/95 p-3 pr-4 text-forest shadow-lift backdrop-blur sm:-left-8"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest font-display text-lg text-gold">
                {googleRating.value}
              </span>
              <span className="leading-tight">
                <span className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, k) => (
                    <Icon key={k} name="star" className="h-3 w-3 fill-current" />
                  ))}
                </span>
                <span className="mt-0.5 block text-[0.68rem] font-semibold text-ink-2">
                  {googleRating.count}+ Google reviews
                </span>
              </span>
            </motion.a>

            {/* floating: consultation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1.45 }}
              className="absolute -bottom-6 right-2 hidden items-center gap-3 rounded-2xl border border-cream/15 bg-forest/90 p-3 pr-5 shadow-lift backdrop-blur sm:flex lg:-right-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-forest-deep">
                <Icon name="stethoscope" className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold">Consulting now</span>
                <span className="block text-[0.68rem] text-cream/65">{site.hours}</span>
              </span>
              <span className="relative ml-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold animate-ping-soft" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              </span>
            </motion.div>

            {/* oil drop accent */}
            <div
              aria-hidden
              className="absolute -right-10 top-1/3 hidden h-40 w-40 rounded-full bg-gold/20 blur-3xl lg:block"
            />
          </motion.div>
        </motion.div>
      </div>

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
