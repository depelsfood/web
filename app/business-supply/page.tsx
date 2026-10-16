import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "Business & Bulk Supply", description: "Contact Depel's Food Enterprise about food product supply for retailers, food vendors, caterers, hospitality businesses and distributors in Nigeria." };

const audiences = [
  ["Retail shops", "Stock food products customers can add to their everyday shopping."],
  ["Food vendors & caterers", "Discuss product needs for food preparation and service."],
  ["Distributors & resellers", "Start a conversation about repeat supply and business quantities."],
  ["Institutions & hospitality", "Tell us what products you need and the supply pattern you have in mind."],
];

export default function BusinessSupplyPage() {
  return <main><section className="bg-[var(--green-dark)] pb-20 pt-36 text-white"><SiteHeader /><div className="container"><p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold)]">For retailers &amp; businesses</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">A food supply partner for your next step.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">Whether you run a retail shop, sell prepared foods or manage a growing business, tell us about your product and quantity needs so we can discuss the right next step.</p><a href="https://wa.me/2348162007086?text=Hello%20Depel%27s%20Food%20Enterprise%2C%20I%20would%20like%20to%20discuss%20business%20or%20bulk%20supply." target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-white">Discuss Business Supply on WhatsApp →</a></div></section><section className="bg-white py-20"><div className="container"><h2 className="max-w-2xl text-3xl font-extrabold text-[var(--green-dark)] sm:text-4xl">Who we can work with</h2><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{audiences.map(([title,body])=><article key={title} className="rounded-3xl border border-black/5 bg-[var(--cream)] p-6"><h3 className="font-extrabold text-[var(--green-dark)]">{title}</h3><p className="mt-3 text-sm leading-7 text-black/60">{body}</p></article>)}</div></div></section><section className="bg-[var(--cream)] py-16"><div className="container grid gap-7 md:grid-cols-2 md:items-center"><div><h2 className="text-3xl font-extrabold text-[var(--green-dark)]">Help us understand your needs</h2><p className="mt-4 text-sm leading-7 text-black/60">When you contact us, please share your business name, the products you are interested in, estimated quantities and location. We can then discuss availability, pricing and delivery options.</p></div><a href="/products" className="inline-flex w-fit rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-bold text-white">View Products →</a></div></section><SiteFooter /></main>;
}
