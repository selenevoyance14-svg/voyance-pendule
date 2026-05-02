import type { Metadata } from "next";
import MerciClient from "@/app/components/MerciClient";

export const metadata: Metadata = {
  title: "Merci — Votre tirage arrive | Sélène Voyance",
  description: "Votre paiement a été confirmé. Votre tirage du pendule personnalisé arrive par email sous 30 minutes.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://voyance-pendule.fr/merci" },
};

export default function MerciPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <MerciClient />
      </div>
    </div>
  );
}
