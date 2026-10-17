import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import CartClient from "../../components/CartClient";

export const metadata: Metadata = { title: "Your Cart", description: "Review your Depel's Food Enterprise products and continue to WhatsApp checkout." };
export default function CartPage() { return <><SiteHeader /><div className="pt-20"><CartClient /></div><SiteFooter /></>; }
