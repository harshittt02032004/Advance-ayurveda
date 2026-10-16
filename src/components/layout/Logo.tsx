export function Logo({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  const text = light ? "text-cream" : "text-forest";
  const sub = light ? "text-cream/60" : "text-ink-3";
  return (
    <span className="flex items-center gap-3">
      <span
        className={`grid place-items-center rounded-2xl bg-forest text-gold shadow-soft transition-all duration-500 ${compact ? "h-10 w-10" : "h-12 w-12"}`}
      >
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
          <path
            d="M24 40c-9 0-16-5-16-12 5 0 9 2 11 5 0-7 2-14 5-19 3 5 5 12 5 19 2-3 6-5 11-5 0 7-7 12-16 12Z"
            fill="currentColor"
          />
          <circle cx="24" cy="10" r="2.2" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.1rem] font-semibold tracking-tight ${text}`}
        >
          Advance Ayurved Centre
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${sub} ${compact ? "hidden sm:block" : ""}`}
        >
          Prayagraj · Est. by Dr Sanjay Verma
        </span>
      </span>
    </span>
  );
}
