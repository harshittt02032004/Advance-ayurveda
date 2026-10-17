import Image from "next/image";

export function Mark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden>
      <path d="M24 40c-9 0-16-5-16-12 5 0 9 2 11 5 0-7 2-14 5-19 3 5 5 12 5 19 2-3 6-5 11-5 0 7-7 12-16 12Z" />
      <circle cx="24" cy="10" r="2.2" />
    </svg>
  );
}

/** The client's logo artwork. It ships with its own light background, so it is
 *  always rendered inside a clipped chip that keeps that background visible. */
export function LogoChip({
  className = "h-11 w-11 rounded-xl",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden bg-[#f6f6f2] ring-1 ring-black/5 ${className}`}
    >
      <Image
        src="/images/brand/logo.png"
        alt="Advance Ayurveda Centre, Prayagraj — logo"
        fill
        priority={priority}
        sizes="160px"
        className="scale-[1.18] object-cover"
      />
    </span>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-4">
      <LogoChip className="h-20 w-20 rounded-2xl" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.1rem] font-semibold tracking-tight ${light ? "text-cream" : "text-forest"}`}
        >
          Advance Ayurved Centre
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${light ? "text-cream/60" : "text-ink-3"}`}
        >
          Prayagraj · Est. by Dr Sanjay Verma
        </span>
      </span>
    </span>
  );
}
