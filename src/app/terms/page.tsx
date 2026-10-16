import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions", alternates: { canonical: "/terms" }, robots: { index: false } };

export default function Page() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Terms governing the use of this website."
      sections={[
        { h: "Use of this website", p: ["The content on this website is provided for general information about Advance Ayurved Centre and its services. It may be updated at any time without notice."] },
        { h: "Appointments", p: ["Submitting an appointment request does not guarantee a slot until our team confirms it by phone or WhatsApp. Consultation and therapy fees are confirmed at the centre."] },
        { h: "No medical advice", p: ["Nothing on this website constitutes medical advice or a doctor–patient relationship. Treatment decisions are made only after an in-person or arranged consultation."] },
        { h: "Intellectual property", p: ["All text, images and graphics on this website belong to Advance Ayurved Centre unless stated otherwise and may not be reproduced without permission."] },
        { h: "Governing law", p: ["These terms are governed by the laws of India, with courts in Prayagraj, Uttar Pradesh having jurisdiction."] },
      ]}
    />
  );
}
