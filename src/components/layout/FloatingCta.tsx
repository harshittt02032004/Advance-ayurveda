"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export default function FloatingCta() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
    >
      <a
        href={`tel:${site.phonePrimaryRaw}`}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-forest text-cream shadow-lift transition-transform duration-500 [transition-timing-function:var(--ease-spring)] hover:scale-105 md:hidden"
      >
        <Icon name="phone" className="h-5 w-5" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-500 [transition-timing-function:var(--ease-spring)] hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-soft" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </a>
    </motion.div>
  );
}
