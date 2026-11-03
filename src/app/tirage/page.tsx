import type { Metadata } from "next";
import TirageClient from "./TirageClient";

export const metadata: Metadata = {
  title: "Tirage de cartes gratuit : 1, 3 ou 5 cartes | Sélène",
  alternates: { canonical: "/tirage" },
  description: "Choisissez un tirage gratuit de 1, 3 ou 5 cartes symboliques. Révélez les cartes à votre rythme pour nourrir votre réflexion, sans inscription.",
};

export default function TiragePage() {
  return <TirageClient />;
}
