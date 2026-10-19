const phone = "2348162007086";
const socialLinks = [
  { name: "TikTok", href: "https://www.tiktok.com/@DepelsFood", label: "Open Depel's Food Enterprise on TikTok", mark: "♪" },
  { name: "Instagram", href: "https://www.instagram.com/DepelsFood/", label: "Open Depel's Food Enterprise on Instagram", mark: "◎" },
  { name: "YouTube", href: "https://www.youtube.com/@DepelsFood", label: "Open Depel's Food Enterprise on YouTube", mark: "▶" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#082f18] py-12 text-white">
      <div className="container grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
        <div><a href="/" className="text-xl font-extrabold">Depel&apos;s Food Enterprise</a><p className="mt-3 max-w-xs text-sm leading-6 text-white/60">Quality food products for everyday life, families and growing businesses.</p>
          <h2 className="mt-6 text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Follow us</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.name} className="button-motion inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-lg font-extrabold text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#082f18]">{social.mark}</a>)}
            <span aria-label="Facebook link not yet available" title="Facebook page link coming soon" className="inline-flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-sm font-extrabold text-white/30" aria-disabled="true">f</span>
          </div>
          <p className="mt-3 text-xs text-white/45">Facebook link coming soon.</p>
        </div>
        <div><h2 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Explore</h2><div className="mt-4 grid gap-3 text-sm text-white/75"><a href="/products">Our Products</a><a href="/how-to-order">How to Order</a><a href="/about">About Depel&apos;s</a><a href="/business-supply">Business Supply</a><a href="/contact">Contact</a></div></div>
        <div><h2 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Contact</h2><div className="mt-4 grid gap-3 text-sm text-white/75"><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">+234 816 200 7086 · WhatsApp</a><a href="mailto:executive@depelsfood.com">executive@depelsfood.com</a><p>EC13FA, Oke Itunu, Ilaje, Ilesa, Osun State, Nigeria</p></div></div>
        <div><h2 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">Business details</h2><p className="mt-4 text-sm leading-6 text-white/65">CAC: 9071850<br />TIN: 33788850-0001</p><div className="mt-4 flex gap-4 text-xs text-white/60"><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a></div></div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-5 text-xs text-white/45">© {new Date().getFullYear()} Depel&apos;s Food Enterprise. All rights reserved.</div>
    </footer>
  );
}
