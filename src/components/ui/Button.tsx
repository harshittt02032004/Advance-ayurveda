import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost" | "light";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 [transition-timing-function:var(--ease-spring)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream overflow-hidden";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-cream shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  gold: "bg-gold text-forest-deep shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-cream",
  ghost: "text-forest hover:bg-forest/5",
  light:
    "bg-cream text-forest shadow-soft hover:shadow-lift hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  icon = true,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: boolean;
  type?: "button" | "submit";
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <svg
          className="relative z-10 h-4 w-4 transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover/btn:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-white/15 skew-x-12 transition-transform duration-700 [transition-timing-function:var(--ease-spring)] group-hover/btn:translate-x-full"
      />
    </>
  );
  if (!href) {
    return (
      <button type={type ?? "button"} className={cls} data-press>
        {inner}
      </button>
    );
  }
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        data-press
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} data-press>
      {inner}
    </Link>
  );
}
