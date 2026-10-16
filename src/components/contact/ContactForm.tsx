"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { treatments } from "@/lib/treatments";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const field =
  "w-full min-w-0 max-w-full appearance-none rounded-2xl border border-forest/15 bg-white/80 px-5 py-3.5 text-forest placeholder:text-ink-3 outline-none transition-all duration-300 focus:border-gold focus:ring-4 focus:ring-gold/15";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `Appointment request — ${site.name}`,
      `Name: ${fd.get("name")}`,
      `Phone: ${fd.get("phone")}`,
      `Area: ${fd.get("city")}`,
      `Concern: ${fd.get("concern")}`,
      `Preferred date: ${fd.get("date") || "Any"}`,
      `Message: ${fd.get("message") || "-"}`,
    ].join("\n");
    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <div className="rounded-[2rem] border border-forest/10 bg-white/70 p-6 shadow-soft sm:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center"
          >
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sage-light text-forest">
              <Icon name="check" className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl text-forest">Thank you</h3>
            <p className="mt-2 text-ink-2">
              Your request has been prepared on WhatsApp. Press send there and
              we will call you shortly to confirm your appointment.
            </p>
            <p className="mt-4 text-sm text-ink-3">
              If WhatsApp did not open, call us on{" "}
              <a href={`tel:${site.phonePrimaryRaw}`} className="font-semibold text-forest">
                {site.phonePrimary}
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid min-w-0 gap-4 sm:grid-cols-2 [&>label]:min-w-0"
          >
            <label className="min-w-0 sm:col-span-1">
              <span className="sr-only">Full name</span>
              <input name="name" required placeholder="Full name" className={field} />
            </label>
            <label>
              <span className="sr-only">Mobile number</span>
              <input name="phone" required type="tel" inputMode="tel" placeholder="Mobile number" className={field} />
            </label>
            <label>
              <span className="sr-only">City / area</span>
              <input name="city" placeholder="City / area" className={field} />
            </label>
            <label>
              <span className="sr-only">Preferred date</span>
              <input name="date" type="date" className={field} />
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Health concern</span>
              <select name="concern" required defaultValue="" className={field}>
                <option value="" disabled>
                  Health concern
                </option>
                {treatments.map((t) => (
                  <option key={t.slug} value={t.name}>
                    {t.name}
                  </option>
                ))}
                <option value="Panchakarma">Panchakarma therapy</option>
                <option value="Swarnaprashan">Swarnaprashan</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Message</span>
              <textarea name="message" rows={4} placeholder="Tell us briefly about your problem (optional)" className={field} />
            </label>
            <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="primary">
                Request appointment
              </Button>
              <p className="text-xs text-ink-3">
                Prefer not to fill in a form?{" "}
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest">
                  Message us on WhatsApp
                </a>
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
