"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const navLinks = [["Calculator", "/#calculator"], ["Chaldean Chart", "/chaldean-numerology-chart/"], ["Number Meanings", "/numerology-number-meanings/"], ["Chaldean vs Pythagorean", "/chaldean-vs-pythagorean-numerology/"], ["Blog", "/blog/"], ["About", "/about/"]] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false); const button = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (!open) return; const close = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); button.current?.focus(); } }; document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, [open]);
  return <><button ref={button} className="menu-button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span aria-hidden="true">☰</span><span>Menu</span></button><nav id="main-nav" aria-label="Primary" className={open ? "nav open" : "nav"}>{navLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-contact" href="/contact/" onClick={() => setOpen(false)}>Contact</Link></nav></>;
}
