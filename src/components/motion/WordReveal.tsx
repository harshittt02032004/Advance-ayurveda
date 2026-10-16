"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spring } from "./Reveal";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
  highlight?: string[];
};

export function WordReveal({
  text,
  className,
  delay = 0,
  as = "h1",
  highlight = [],
}: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Comp = motion[as];
  return (
    <Comp className={className} aria-label={text}>
      {words.map((w, i) => {
        const clean = w.replace(/[.,]/g, "");
        const hl = highlight.includes(clean);
        return (
          <span
            key={i}
            className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
          >
            <motion.span
              className={`inline-block ${hl ? "text-gold-gradient" : ""}`}
              initial={reduce ? false : { y: "110%", rotate: 4, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: spring,
                delay: delay + i * 0.07,
              }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </Comp>
  );
}
