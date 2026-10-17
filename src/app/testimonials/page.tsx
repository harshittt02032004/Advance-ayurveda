import type { Metadata } from "next";
import { reviews, googleRating } from "@/lib/reviews";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ReviewCard, Stars } from "@/components/reviews/ReviewCard";
import { QuoteRibbon } from "@/components/reviews/QuoteRibbon";
import { Counter } from "@/components/motion/Counter";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: `Rated ${googleRating.value} on Google by ${googleRating.count}+ patients. Genuine reviews of Advance Ayurved Centre, Tagore Town, Prayagraj.`,
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Patient stories"
        title="What our patients say"
        text="Genuine reviews from patients in Prayagraj, reproduced verbatim from Google and our previous website. We never edit the wording and we never invent reviews."
        crumbs={[{ href: "/testimonials", label: "Testimonials" }]}
      />

      <section className="container-x relative z-10 -mt-10">
        <Reveal>
          <div className="grid gap-4 rounded-[2rem] border border-forest/10 bg-cream/95 p-5 shadow-lift backdrop-blur sm:grid-cols-3 sm:p-6">
            <div className="rounded-3xl bg-white/70 p-5 text-center">
              <p className="font-display text-5xl text-forest">{googleRating.value}</p>
              <div className="mt-2 flex justify-center">
                <Stars />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
                Google rating
              </p>
            </div>
            <div className="rounded-3xl bg-white/70 p-5 text-center">
              <p className="font-display text-5xl text-forest">
                <Counter to={googleRating.count} suffix="+" />
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
                Google reviews
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-forest p-5 text-center text-cream">
              <p className="text-sm text-cream/80">
                Have you visited us? Your honest review helps other families in Prayagraj.
              </p>
              <div className="mt-4">
                <Button href={site.mapsLink} external variant="gold">
                  Review us on Google
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <QuoteRibbon className="mt-12" />

      <section className="container-x py-12 lg:py-16">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {reviews.map((r, i) => (
            <Reveal key={r.name + i} delay={(i % 3) * 0.06} amount={0.1}>
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-3">
          Reviews are reproduced as written by patients on Google and our previous website.
          Individual results vary, and a review is not a promise of outcome.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
