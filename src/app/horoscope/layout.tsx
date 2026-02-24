import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Horoscope Gratuit du Jour — Tous les signes | Voyance Pendule",
    description: "Consultez votre horoscope gratuit du jour pour les 12 signes du zodiaque. Amour, travail, santé, finances. Prédictions mises à jour quotidiennement.",
};

export default function HoroscopeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
