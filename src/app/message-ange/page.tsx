import type { Metadata } from "next";
import MessageAngeClient from "./MessageAngeClient";

export const metadata: Metadata = {
  title: "Message des anges gratuit : une pensée symbolique | Sélène",
  alternates: { canonical: "/message-ange" },
  description: "Découvrez gratuitement une pensée inspirée de la tradition des anges. Un message symbolique tiré au hasard pour nourrir votre réflexion, sans inscription.",
};

export default function MessageAngePage() {
  return <MessageAngeClient />;
}
