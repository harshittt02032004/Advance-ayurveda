"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Brand } from "./Brand";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
  }, [open]);

  // Dark glass over the hero at the top of the page; cream glass once scrolled or when the menu is open.
  const light = scrolled || open;
  const links = nav.filter((n) => n.href !== "/");

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border px-2 shadow-lift backdrop-blur-xl transition-all duration-500 [transition-timing-function:var(--ease-spring)] ${
            light
              ? "border-forest/10 bg-cream/85 text-forest"
              : "border-cream/15 bg-forest-deep/45 text-cream"
          } ${scrolled ? "h-14" : "h-16"}`}
        >
          {/* Brand */}
          <Link
            href="/"
            aria-label={site.name}
            className="flex min-w-0 items-center rounded-full py-1 pl-1.5 pr-3 lg:shrink-0"
          >
            <Brand tone={light ? "light" : "dark"} size={scrolled ? "sm" : "md"} />
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center lg:flex" aria-label="Primary">
            <ul
              className={`flex items-center gap-0.5 rounded-full p-1 ${
                light ? "bg-forest/[0.04]" : "bg-cream/5"
              }`}
            >
              {links.map((n) => {
                const active = pathname.startsWith(n.href);
                return (
                  <li key={n.href} className="relative">
                    <Link
                      href={n.href}
                      className={`relative z-10 block rounded-full px-3 py-2 text-[0.82rem] font-medium transition-colors duration-300 xl:px-4 xl:text-[0.84rem] ${
                        active
                          ? light
                            ? "text-cream"
                            : "text-forest-deep"
                          : light
                            ? "text-ink-2 hover:text-forest"
                            : "text-cream/80 hover:text-cream"
                      }`}
                    >
                      {n.label}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-full ${light ? "bg-forest" : "bg-gold"}`}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={`tel:${site.phonePrimaryRaw}`}
              aria-label={`Call ${site.phonePrimary}`}
              className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 lg:hidden xl:grid ${
                light
                  ? "border-forest/10 text-forest hover:bg-forest hover:text-cream"
                  : "border-cream/15 text-cream hover:bg-cream hover:text-forest"
              }`}
            >
              <Icon name="phone" className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              data-press
              className={`hidden items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[0.84rem] font-semibold transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-0.5 md:inline-flex ${
                light ? "bg-forest text-cream" : "bg-gold text-forest-deep"
              }`}
            >
              <span className="lg:hidden xl:inline">Book Appointment</span>
              <span className="hidden lg:inline xl:hidden">Book</span>
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
            <button
              aria-label={open ? "Close menu" : "Menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`relative grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
                light ? "bg-forest text-cream" : "bg-cream/15 text-cream"
              }`}
            >
              <span
                className={`absolute h-[2px] w-4 rounded-full bg-current transition-all duration-500 [transition-timing-function:var(--ease-spring)] ${
                  open ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute h-[2px] w-4 rounded-full bg-current transition-all duration-500 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute h-[2px] w-4 rounded-full bg-current transition-all duration-500 [transition-timing-function:var(--ease-spring)] ${
                  open ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile capsule menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="scrim"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-forest-deep/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.5, ease }}
              className="fixed inset-x-3 top-[5.25rem] z-40 max-h-[calc(100svh-6.5rem)] overflow-y-auto rounded-[2rem] border border-forest/10 bg-cream p-3 shadow-lift sm:inset-x-5 sm:top-24 lg:hidden"
              data-lenis-prevent
            >
              <nav aria-label="Mobile">
                <ul className="space-y-1">
                  {nav.map((n, i) => {
                    const active =
                      n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                    return (
                      <motion.li
                        key={n.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.04, duration: 0.5, ease }}
                      >
                        <Link
                          href={n.href}
                          className={`flex items-center justify-between rounded-full px-5 py-3.5 font-display text-xl transition-colors ${
                            active ? "bg-forest text-cream" : "text-forest hover:bg-forest/5"
                          }`}
                        >
                          {n.label}
                          <Icon name="arrow" className="h-4 w-4 opacity-60" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3.5 text-sm font-semibold text-forest-deep"
                >
                  <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={`tel:${site.phonePrimaryRaw}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-forest/15 px-4 py-3.5 text-sm font-semibold text-forest"
                >
                  <Icon name="phone" className="h-4 w-4" /> Call now
                </a>
              </div>
              <p className="mt-3 px-2 text-center text-[0.68rem] uppercase tracking-[0.18em] text-ink-3">
                {site.hours}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
