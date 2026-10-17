"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { featuredReviews as testimonials, googleRating } from "@/lib/reviews";
import { QuoteRibbon } from "@/components/reviews/QuoteRibbon";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section className="py-20 lg:py-28">
      <QuoteRibbon className="mb-14" />
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Patient stories"
            title="What our patients say"
            text={`Rated ${googleRating.value} on Google by ${googleRating.count}+ patients. Genuine reviews, never edited.`}
          />
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, k) => (
                <Icon key={k} name="star" className="h-5 w-5 fill-current" />
              ))}
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm font-semibold text-forest link-underline">
                {googleRating.value} · {googleRating.count}+ Google reviews
              </a>
            </div>
            <div className="mt-6">
              <Button href="/testimonials" variant="outline">
                Read more reviews
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-8">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-forest p-8 text-cream shadow-lift sm:p-12 grain">
            <Icon name="quote" className="absolute right-8 top-8 h-20 w-20 text-gold/20" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                <p className="font-display text-xl leading-relaxed text-balance sm:text-2xl">
                  “{t.text}”
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold font-display text-lg text-forest-deep">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-cream/60">Prayagraj · {t.source === "website" ? "Patient review" : "Google review"}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <div className="relative mt-8 flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Show review ${k + 1}`}
                  onClick={() => setI(k)}
                  className="h-1.5 overflow-hidden rounded-full bg-cream/20"
                  style={{ width: k === i ? 40 : 16 }}
                >
                  {k === i && (
                    <motion.span
                      key={i}
                      className="block h-full bg-gold"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6.5, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
