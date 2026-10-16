"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WordReveal } from "@/components/motion/WordReveal";

type Crumb = { href: string; label: string };

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumbs,
  highlight,
  compact,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  image?: string;
  crumbs?: Crumb[];
  highlight?: string[];
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden bg-forest-deep text-cream ${compact ? "pt-32 pb-16" : "pt-36 pb-24 lg:pt-44 lg:pb-32"}`}
    >
      {image && (
        <motion.div className="absolute inset-0 -z-10" style={{ y, scale }}>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </motion.div>
      )}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_20%_20%,rgb(201_162_77_/_0.18),transparent_60%),linear-gradient(to_bottom,rgb(8_37_25_/_0.35),rgb(8_37_25_/_0.9))]"
      />
      <div className="container-x">
        {crumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cream/55"
          >
            <Link href="/" className="hover:text-gold">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-2">
                <span className="text-gold">/</span>
                <Link href={c.href} className="hover:text-gold">{c.label}</Link>
              </span>
            ))}
          </motion.nav>
        )}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="eyebrow !text-gold"
          >
            {eyebrow}
          </motion.p>
        )}
        <WordReveal
          text={title}
          highlight={highlight}
          delay={0.2}
          className="mt-4 max-w-4xl text-4xl font-medium leading-[1.05] text-balance sm:text-5xl lg:text-6xl"
        />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.7 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
