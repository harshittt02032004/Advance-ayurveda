import { reviewsFor, googleRating } from "@/lib/reviews";
import { site } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ReviewCard, Stars } from "./ReviewCard";

/** Up to three genuine reviews relevant to the page (by tag), with a link to all reviews. */
export function ReviewStrip({
  tags,
  title = "What patients say",
  limit = 3,
}: {
  tags: string[];
  title?: string;
  limit?: number;
}) {
  const list = reviewsFor(tags, limit);
  if (!list.length) return null;
  return (
    <section className="bg-sage-light py-16 lg:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="eyebrow">Patient stories</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] text-forest sm:text-4xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-forest/10 bg-white/70 px-4 py-2.5 text-sm font-semibold text-forest"
            >
              <Stars className="h-3.5 w-3.5" />
              {googleRating.value} · {googleRating.count}+ Google reviews
            </a>
          </Reveal>
        </div>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3" amount={0.1}>
          {list.map((r) => (
            <StaggerItem key={r.name + r.text.slice(0, 12)}>
              <ReviewCard review={r} compact />
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-xs text-ink-3">
          Reviews are reproduced verbatim from Google. Individual results vary; a review is not a
          promise of outcome.
        </p>
      </div>
    </section>
  );
}
