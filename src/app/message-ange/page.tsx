import type { Metadata } from "next";
import MessageAngeClient from "./MessageAngeClient";

export const metadata: Metadata = {
  title: "Message de votre Ange Gardien — Selene Voyance",
  description: "Recevez un message personnalise de votre ange gardien. Guidance angelique gratuite et instantanee.",
};

export default function MessageAngePage() {
  return <MessageAngeClient />;
}
