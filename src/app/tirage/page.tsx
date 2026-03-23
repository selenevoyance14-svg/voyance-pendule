import type { Metadata } from "next";
import TirageClient from "./TirageClient";

export const metadata: Metadata = {
  title: "Tirage de Cartes Gratuit — Selene Voyance",
  description: "Tirez vos cartes gratuitement et decouvrez les messages de l'univers. 1, 3 ou 5 cartes pour eclairer votre chemin.",
};

export default function TiragePage() {
  return <TirageClient />;
}
