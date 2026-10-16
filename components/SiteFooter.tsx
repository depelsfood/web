const phone = "2348162007086";

export default function SiteFooter() {
  return (
    <footer className="bg-[#082f18] py-12 text-white">
      <div className="container grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
        <div><a href="/" className="text-xl font-extrabold">Depel&apos;s Food Enterprise</a><p className="mt-3 max-w-xs text-sm leading-6 text-white/60">Quality food products for everyday life, families and growing businesses.</p></div>
        <div><h2 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Explore</h2><div className="mt-4 grid gap-3 text-sm text-white/75"><a href="/products">Our Products</a><a href="/about">About Depel&apos;s</a><a href="/business-supply">Business Supply</a></div></div>
        <div><h2 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Contact</h2><div className="mt-4 grid gap-3 text-sm text-white/75"><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">+234 816 200 7086 · WhatsApp</a><a href="mailto:executive@depelsfood.com">executive@depelsfood.com</a><p>EC13FA, Oke Itunu, Ilaje, Ilesa, Osun State, Nigeria</p></div></div>
        <div><h2 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Business details</h2><p className="mt-4 text-sm leading-6 text-white/65">CAC: 9071850<br />TIN: 33788850-0001</p><div className="mt-4 flex gap-4 text-xs text-white/60"><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a></div></div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-5 text-xs text-white/45">© {new Date().getFullYear()} Depel&apos;s Food Enterprise. All rights reserved.</div>
    </footer>
  );
}
