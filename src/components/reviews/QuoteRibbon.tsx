import { shortQuotes } from "@/lib/reviews";
import { Icon } from "@/components/ui/Icon";

/** Slow-scrolling ribbon of one-line Google reviews. */
export function QuoteRibbon({ className = "" }: { className?: string }) {
  const row = [...shortQuotes, ...shortQuotes];
  return (
    <div className={`overflow-hidden mask-fade-x ${className}`}>
      <div className="flex w-max animate-marquee items-center gap-4 py-2 [animation-duration:70s]">
        {row.map((q, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-forest/10 bg-white/70 py-2 pl-3 pr-4 text-sm text-forest"
          >
            <span className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, k) => (
                <Icon key={k} name="star" className="h-3 w-3 fill-current" />
              ))}
            </span>
            <span className="font-medium">“{q.q}”</span>
            <span className="text-xs text-ink-3">— {q.by}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
