"use client";
import { useEffect, useState } from "react";

type CartLine = { key: string; slug: string; name: string; size: string; price: number; quantity: number; image: string };
const phone = "2348162007086";

export default function CartClient() {
  const [items, setItems] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  function load() { setItems(JSON.parse(localStorage.getItem("depels-cart") || "[]") as CartLine[]); }
  useEffect(() => { load(); setReady(true); const onUpdate = () => load(); window.addEventListener("depels-cart-updated", onUpdate); return () => window.removeEventListener("depels-cart-updated", onUpdate); }, []);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  function updateQuantity(key: string, quantity: number) {
    const next = items.map((item) => item.key === key ? { ...item, quantity: Math.max(1, quantity) } : item);
    setItems(next); localStorage.setItem("depels-cart", JSON.stringify(next)); window.dispatchEvent(new Event("depels-cart-updated"));
  }
  function remove(key: string) {
    const next = items.filter((item) => item.key !== key); setItems(next); localStorage.setItem("depels-cart", JSON.stringify(next)); window.dispatchEvent(new Event("depels-cart-updated"));
  }
  function checkout() {
    if (!items.length) return;
    const message = ["Welcome to Depel's Food Enterprise.", "I'd like to order:", "", ...items.map((item) => `• ${item.name} — ${item.size} × ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString("en-NG")}`), "", `Product subtotal: ₦${subtotal.toLocaleString("en-NG")}`, "Delivery fee: Please confirm based on my location.", name.trim() ? `Customer name: ${name.trim()}` : "", "", "Please confirm delivery fee and final total before payment."].filter(Boolean).join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <main className="min-h-screen bg-[var(--cream)] py-12 sm:py-20"><div className="container"><a href="/products" className="text-sm font-bold text-[var(--green)] hover:underline">← Continue shopping</a><h1 className="mt-5 font-[Montserrat] text-4xl font-extrabold text-[var(--green-dark)] sm:text-5xl">Your Cart</h1><div className="mt-4 rounded-2xl border border-[var(--gold)]/50 bg-[#fff8e5] p-4 text-sm leading-6 text-[#594315]"><strong>Delivery notice:</strong> Delivery fees depend on your location. Our sales representative will communicate the delivery fee and confirm the final total before payment.</div>
  {!ready ? <p className="mt-8">Loading your cart…</p> : !items.length ? <div className="mt-8 rounded-3xl bg-white p-8"><p className="text-black/60">Your cart is empty.</p><a href="/products" className="button-motion mt-5 inline-flex rounded-full bg-[var(--green)] px-6 py-3 font-bold text-white">Browse products</a></div> : <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]"><div className="space-y-4">{items.map((item) => <article key={item.key} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"><img src={item.image} alt="" className="h-24 w-24 rounded-xl bg-[var(--cream)] object-contain p-2 sm:h-32 sm:w-32"/><div className="min-w-0 flex-1"><h2 className="font-extrabold text-[var(--green-dark)]">{item.name}</h2><p className="mt-1 text-sm text-black/55">{item.size} · ₦{item.price.toLocaleString("en-NG")} each</p><p className="mt-2 font-extrabold text-[var(--green-dark)]">₦{(item.price * item.quantity).toLocaleString("en-NG")}</p><div className="mt-3 flex flex-wrap items-center gap-3"><label className="text-xs font-bold">Qty <input aria-label={`Quantity for ${item.name}`} type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.key, Number(e.target.value) || 1)} className="ml-2 w-16 rounded-lg border border-black/10 p-2"/></label><button onClick={() => remove(item.key)} className="text-xs font-bold text-red-700 underline">Remove</button></div></div></article>)}</div><aside className="h-fit rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-extrabold text-[var(--green-dark)]">Order summary</h2><div className="mt-5 flex justify-between gap-3 text-sm"><span className="text-black/60">Products subtotal</span><strong>₦{subtotal.toLocaleString("en-NG")}</strong></div><div className="mt-3 flex justify-between gap-3 text-sm"><span className="text-black/60">Delivery</span><strong>Confirmed by sales rep</strong></div><p className="mt-4 text-xs leading-5 text-black/50">Delivery is not included in the subtotal because the fee depends on your location.</p><label htmlFor="cart-name" className="mt-5 block text-sm font-bold">Your name (optional)</label><input id="cart-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm"/><button onClick={checkout} className="button-motion mt-6 w-full rounded-full bg-[var(--green)] px-5 py-4 text-sm font-extrabold text-white">Checkout on WhatsApp →</button></aside></div>}
  </div></main>;
}
