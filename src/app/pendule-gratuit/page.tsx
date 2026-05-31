import type { Metadata } from "next";
import PenduleClient from "./PenduleClient";

export const metadata: Metadata = {
  title: "Pendule Oui/Non en ligne — Selene Voyance",
  description: "Posez votre question au pendule et recevez une reponse Oui ou Non instantanee. Pendule de voyance en ligne.",
};

export default function PenduleGratuitPage() {
  return <PenduleClient />;
}
