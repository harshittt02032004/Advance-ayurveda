"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 [transition-timing-function:var(--ease-spring)] ${
            scrolled
              ? "bg-cream/85 shadow-[0_1px_0_0_rgb(15_61_46_/_0.08)] backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <div
            className={`container-x flex items-center justify-between transition-[height] duration-500 ${
              scrolled ? "h-[68px]" : "h-[84px]"
            }`}
          >
            <Link href="/" aria-label={site.name} className="shrink-0">
              <Logo compact={scrolled} light={!scrolled} />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.filter((n) => n.href !== "/").map((n) => {
                const active =
                  n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`relative rounded-full px-3 py-2 text-[0.88rem] font-medium transition-colors ${
                      scrolled
                        ? active ? "text-forest" : "text-ink-2 hover:text-forest"
                        : active ? "text-cream" : "text-cream/75 hover:text-cream"
                    }`}
                  >
                    {n.label}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className={`hidden items-center gap-2 whitespace-nowrap text-sm font-semibold 2xl:flex link-underline ${scrolled ? "text-forest" : "text-cream"}`}
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phonePrimary}
              </a>
              <Link
                href="/contact"
                data-press
                className={`hidden whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-0.5 hover:shadow-lift md:inline-flex ${scrolled ? "bg-forest text-cream" : "bg-gold text-forest-deep"}`}
              >
                Book Appointment
              </Link>
              <button
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={`relative grid h-11 w-11 place-items-center rounded-full border backdrop-blur lg:hidden ${scrolled || open ? "border-forest/15 bg-cream/70" : "border-cream/25 bg-cream/10"}`}
              >
                <span
                  className={`absolute h-[2px] w-5 ${scrolled || open ? "bg-forest" : "bg-cream"} transition-all duration-500 [transition-timing-function:var(--ease-spring)] ${open ? "rotate-45" : "-translate-y-1.5"}`}
                />
                <span
                  className={`absolute h-[2px] w-5 ${scrolled || open ? "bg-forest" : "bg-cream"} transition-all duration-500 [transition-timing-function:var(--ease-spring)] ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute h-[2px] w-5 ${scrolled || open ? "bg-forest" : "bg-cream"} transition-all duration-500 [transition-timing-function:var(--ease-spring)] ${open ? "-rotate-45" : "translate-y-1.5"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-forest-deep/95 text-cream backdrop-blur-xl lg:hidden"
            data-lenis-prevent
          >
            <div className="container-x flex h-full flex-col pt-28 pb-10">
              <nav className="flex flex-col gap-1">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.05,
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <Link
                      href={n.href}
                      className="block border-b border-cream/10 py-4 font-display text-3xl"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-semibold text-forest-deep"
                >
                  <Icon name="whatsapp" /> WhatsApp Us
                </a>
                <a
                  href={`tel:${site.phonePrimaryRaw}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-4 font-semibold"
                >
                  <Icon name="phone" /> {site.phonePrimary}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
