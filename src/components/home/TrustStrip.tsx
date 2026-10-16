import { Icon } from "@/components/ui/Icon";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const items = [
  { icon: "shield", value: 15, suffix: "+", label: "Years of clinical experience" },
  { icon: "stethoscope", text: "MD (Ayurved)", label: "Doctor-led consultations" },
  { icon: "lotus", text: "In-house", label: "Panchakarma unit & trained therapists" },
  { icon: "leaf", text: "Pharmacy", label: "Classical medicines under one roof" },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10 pb-6">
      <div className="container-x">
        <Stagger className="grid gap-4 rounded-[2rem] border border-forest/10 bg-cream/90 p-4 shadow-lift backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {items.map((it) => (
            <StaggerItem
              key={it.label}
              className="flex items-center gap-4 rounded-3xl bg-white/70 p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage-light text-forest">
                <Icon name={it.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl leading-none text-forest">
                  {it.value ? (
                    <Counter to={it.value} suffix={it.suffix} />
                  ) : (
                    it.text
                  )}
                </p>
                <p className="mt-1 text-xs font-medium text-ink-3">{it.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
