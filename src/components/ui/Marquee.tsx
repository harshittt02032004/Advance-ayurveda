export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden mask-fade-x ${className}`}>
      <div className="flex w-max animate-marquee items-center gap-10 py-4">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-lg italic text-forest/80 sm:text-xl">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
