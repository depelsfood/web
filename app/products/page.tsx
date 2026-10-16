import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ProductOrderSection from "../../components/ProductOrderSection";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore Depel's Mix Grain Pap, Baby Special Pap, Beans Powder, Natural Honey and Soya Mix Powder. Choose quantities and send your order through WhatsApp.",
};

export default function ProductsPage() {
  return <main><section className="relative overflow-hidden bg-[var(--green-dark)] pb-16 pt-36 text-white sm:pb-20"><SiteHeader /><div className="container"><p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold)]">The Depel&apos;s range</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">Good food for more of life.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">Explore our growing range of food products for breakfasts, everyday cooking, family kitchens and business supply. Select the products and quantities you need below.</p></div></section><ProductOrderSection /><section className="bg-white py-14"><div className="container rounded-3xl bg-[var(--cream)] p-7 sm:p-10"><h2 className="text-2xl font-extrabold text-[var(--green-dark)]">Buying for a shop or business?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-black/60">Talk to us about your product needs, supply quantities and business requirements.</p><a href="/business-supply" className="mt-5 inline-flex rounded-full bg-[var(--green)] px-6 py-3 text-sm font-bold text-white">Explore Business Supply →</a></div></section><SiteFooter /></main>;
}
