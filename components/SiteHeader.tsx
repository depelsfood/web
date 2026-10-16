"use client";

import { useState } from "react";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/business-supply", label: "For Business" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <a href="/" aria-label="Depel's Food Enterprise home" className="max-w-[48vw] text-base font-extrabold tracking-tight text-white sm:max-w-none sm:text-xl">
          Depel&apos;s <span className="text-[var(--gold)]">Food Enterprise</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-semibold text-white/90 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="transition hover:text-[var(--gold)]">{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/products" className="whitespace-nowrap rounded-full bg-white px-3 py-2.5 text-[11px] font-bold text-[var(--green-dark)] shadow-lg sm:px-5 sm:text-sm">Explore Products</a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl text-white md:hidden">{open ? "×" : "☰"}</button>
        </div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="mx-4 rounded-2xl border border-white/10 bg-[#082f18]/95 p-3 text-white shadow-xl backdrop-blur md:hidden">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/10">{link.label}</a>)}
        <a href="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-[var(--gold)] px-4 py-3 text-sm font-bold text-white">Talk to Depel&apos;s</a>
      </nav>}
    </header>
  );
}
