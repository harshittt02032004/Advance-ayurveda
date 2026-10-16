import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/layout/JsonLd";
import { site } from "@/lib/site";

export const homeFaqs = [
  {
    q: "Where is Advance Ayurved Centre located?",
    a: `We are at ${site.address.full}.`,
  },
  {
    q: "How do I book an appointment?",
    a: "Call or WhatsApp 9532650556 or 9116222369, or use the appointment form on this website.",
  },
  {
    q: "What are the consultation timings?",
    a: `${site.hours}. Please call ahead to confirm on public holidays.`,
  },
  {
    q: "Do I need to stop my current allopathic medicines?",
    a: "No. Do not stop any prescribed medicine on your own. Tell the doctor everything you are taking; any change is made gradually and only with medical advice.",
  },
  {
    q: "How long does Ayurvedic treatment take?",
    a: "It depends on the condition, how long you have had it and how closely you follow the diet and routine. The doctor will give you a realistic timeline at your first visit.",
  },
  {
    q: "Do you offer online consultation?",
    a: "Phone and video consultations can be arranged for patients outside Prayagraj. Please call us to check availability.",
  },
];

export default function HomeFaq() {
  return (
    <section className="bg-sage-light py-20 lg:py-28">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            text="Still unsure? Call us — a real person answers."
          />
        </div>
        <Reveal className="lg:col-span-8">
          <Accordion items={homeFaqs} />
        </Reveal>
      </div>
    </section>
  );
}
