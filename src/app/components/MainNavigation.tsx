"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LINKS = [
  { href: "/pendule-gratuit", label: "Pendule" },
  { href: "/tirage", label: "Cartes" },
  { href: "/horoscope", label: "Horoscope" },
  { href: "/message-ange", label: "Message des anges" },
  { href: "/blog", label: "Guides" },
];
export default function MainNavigation() {
  const pathname = usePathname();
  return <nav className="sv-nav-links" aria-label="Navigation principale">{LINKS.map((item) => <Link key={item.href} href={item.href} className="sv-nav-link" aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}><span className="sv-nav-label-long">{item.label}</span><span className="sv-nav-label-short">{item.href === "/message-ange" ? "Anges" : item.label}</span></Link>)}</nav>;
}
