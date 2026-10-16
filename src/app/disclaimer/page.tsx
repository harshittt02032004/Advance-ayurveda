import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { disclaimer } from "@/lib/site";

export const metadata: Metadata = { title: "Medical Disclaimer", alternates: { canonical: "/disclaimer" }, robots: { index: false } };

export default function Page() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      intro={disclaimer}
      sections={[
        { h: "Individual results vary", p: ["Ayurvedic treatment outcomes depend on the condition, its duration, your constitution and how closely diet and lifestyle advice is followed. We do not promise cures or guaranteed results for any condition."] },
        { h: "Continue prescribed medicines", p: ["Never stop or change any medicine prescribed by another doctor without medical advice. Tell our doctor about every medicine and supplement you take."] },
        { h: "Emergencies", p: ["Chest pain, sudden weakness, severe bleeding, high fever with confusion, or any emergency needs immediate hospital care. Ayurvedic treatment is not a substitute for emergency medicine."] },
        { h: "Swarnaprashan", p: ["Swarnaprashan is a traditional immunity-support practice and does not replace the national immunisation schedule."] },
      ]}
    />
  );
}
