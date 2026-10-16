import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy-policy" }, robots: { index: false } };

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Advance Ayurved Centre handles the information you share with us."
      sections={[
        { h: "Information we collect", p: ["When you request an appointment, we collect your name, phone number, city and a brief description of your health concern. The appointment form on this website sends this information to us via WhatsApp; we do not store it on this website."] },
        { h: "How we use it", p: ["We use your details only to confirm your appointment, to contact you about your treatment and, with your consent, to share clinic updates such as Swarnaprashan dates."] },
        { h: "Sharing", p: ["We do not sell or share your personal or health information with third parties, except where required by law."] },
        { h: "Cookies and analytics", p: ["This website may use basic analytics to understand how pages are used. No health information is collected through analytics."] },
        { h: "Contact", p: [`For any privacy request, write to ${site.email} or call ${site.phonePrimary}.`] },
      ]}
    />
  );
}
