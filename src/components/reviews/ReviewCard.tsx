import { Icon } from "@/components/ui/Icon";
import type { Review } from "@/lib/reviews";

export function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, k) => (
        <Icon key={k} name="star" className={`${className} fill-current`} />
      ))}
    </span>
  );
}

export function ReviewCard({
  review,
  compact = false,
  tone = "light",
}: {
  review: Review;
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure
      className={`flex h-full flex-col rounded-3xl border p-6 shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:shadow-lift ${
        dark
          ? "border-cream/10 bg-cream/5 text-cream backdrop-blur"
          : "border-forest/10 bg-white/75 text-forest"
      }`}
    >
      <div className="flex items-center justify-between">
        <Stars />
        <span
          className={`text-[0.62rem] font-bold uppercase tracking-[0.18em] ${dark ? "text-cream/50" : "text-ink-3"}`}
        >
          {review.source === "website" ? "Patient review" : "Google review"}
        </span>
      </div>
      <blockquote
        className={`mt-4 flex-1 leading-relaxed ${compact ? "text-sm" : "font-display text-[1.05rem]"} ${dark ? "text-cream/85" : "text-ink-2"}`}
      >
        “{review.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-base ${
            dark ? "bg-gold text-forest-deep" : "bg-forest text-gold"
          }`}
        >
          {review.name.replace(/^Dr\.?\s+/i, "")[0]}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold">{review.name}</span>
          <span className={`block text-xs ${dark ? "text-cream/55" : "text-ink-3"}`}>
            Prayagraj
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
