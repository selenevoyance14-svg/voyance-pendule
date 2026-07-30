import type { Metadata } from "next";
import PenduleClient from "./PenduleClient";

export const metadata: Metadata = {
  title: "Pendule gratuit Oui/Non en ligne, sans inscription | Sélène",
  description: "Posez votre question au pendule gratuit et recevez une réponse Oui, Non ou Incertain instantanément. Sans inscription, à utiliser librement.",
  alternates: { canonical: "/pendule-gratuit" },
};

export default function PenduleGratuitPage() {
  return <PenduleClient />;
}
