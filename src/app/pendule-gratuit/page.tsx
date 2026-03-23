import type { Metadata } from "next";
import PenduleClient from "./PenduleClient";

export const metadata: Metadata = {
  title: "Pendule Gratuit Oui/Non — Selene Voyance",
  description: "Posez votre question au pendule et recevez une reponse Oui ou Non instantanee. Pendule de voyance gratuit en ligne.",
};

export default function PenduleGratuitPage() {
  return <PenduleClient />;
}
