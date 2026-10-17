"use client";
import { useEffect, useState } from "react";

type CartLine = { key: string; slug: string; name: string; size: string; price: number; quantity: number; image: string };
const phone = "2348162007086";

export default function CartClient() {
  const [items, setItems] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [instructions, setInstructions] = useState("");
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
  function checkout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length) return;
    const message = [
      "WELCOME TO DEPEL'S FOOD ENTERPRISE!",
      "",
      "Hello Depel's Food Enterprise team, I'd like to place this order:",
      "",
      "MY ORDER",
      ...items.map((item, index) => `${index + 1}. ${item.name}\n   Pack size: ${item.size}\n   Unit price: ₦${item.price.toLocaleString("en-NG")}\n   Quantity: ${item.quantity}\n   Item total: ₦${(item.price * item.quantity).toLocaleString("en-NG")}`),
      "",
      `PRODUCT SUBTOTAL: ₦${subtotal.toLocaleString("en-NG")}`,
      "DELIVERY: To be confirmed based on my delivery location.",
      "",
      "CUSTOMER DETAILS",
      `Full name: ${name.trim()}`,
      `Phone number: ${customerPhone.trim()}`,
      `Delivery address: ${address.trim()}`,
      `City/Town: ${city.trim()}`,
      `State: ${state.trim()}`,
      instructions.trim() ? `Order instructions: ${instructions.trim()}` : "",
      "",
      "Please confirm product availability, delivery fee and the final amount payable before payment.",
      "",
      "I understand that I must press SEND in WhatsApp to submit this order. Thank you!",
    ].filter(Boolean).join("\n");
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
  return <main className="min-h-screen bg-[var(--cream)] py-12 sm:py-20"><div className="container">
    <a href="/products" className="text-sm font-bold text-[var(--green)] hover:underline">← Continue shopping</a>
    <h1 className="mt-5 font-[Montserrat] text-4xl font-extrabold text-[var(--green-dark)] sm:text-5xl">Your Cart &amp; Checkout</h1>
    <div className="mt-4 rounded-2xl border border-[var(--gold)]/50 bg-[#fff8e5] p-4 text-sm leading-6 text-[#594315]"><strong>Delivery notice:</strong> Delivery fees depend on your location. Our sales representative will communicate the delivery fee and confirm the final total before payment.</div>
    {!ready ? <p className="mt-8">Loading your cart…</p> : !items.length ? <div className="mt-8 rounded-3xl bg-white p-8"><p className="text-black/60">Your cart is empty.</p><a href="/products" className="button-motion mt-5 inline-flex rounded-full bg-[var(--green)] px-6 py-3 font-bold text-white">Browse products</a></div> : <>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">{items.map((item) => <article key={item.key} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"><img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl bg-[var(--cream)] object-contain p-2 sm:h-32 sm:w-32"/><div className="min-w-0 flex-1"><h2 className="font-extrabold text-[var(--green-dark)]">{item.name}</h2><p className="mt-1 text-sm text-black/55">{item.size} · ₦{item.price.toLocaleString("en-NG")} each</p><p className="mt-2 font-extrabold text-[var(--green-dark)]">₦{(item.price * item.quantity).toLocaleString("en-NG")}</p><div className="mt-3 flex flex-wrap items-center gap-3"><label className="text-xs font-bold">Quantity <input aria-label={`Quantity for ${item.name}`} type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.key, Number(e.target.value) || 1)} className="ml-2 w-16 rounded-lg border border-black/10 p-2"/></label><button onClick={() => remove(item.key)} className="text-xs font-bold text-red-700 underline">Remove</button></div></div></article>)}</div>
        <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-extrabold text-[var(--green-dark)]">Order summary</h2><div className="mt-5 flex justify-between gap-3 text-sm"><span className="text-black/60">Products subtotal</span><strong>₦{subtotal.toLocaleString("en-NG")}</strong></div><div className="mt-3 flex justify-between gap-3 text-sm"><span className="text-black/60">Delivery</span><strong>To be confirmed</strong></div><p className="mt-4 text-xs leading-5 text-black/50">Delivery is not included in the subtotal. Our sales representative will confirm the fee based on your location.</p></aside>
      </div>
      <form onSubmit={checkout} className="mt-8 rounded-3xl bg-white p-5 shadow-sm sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[var(--gold)]">Almost there</p><h2 className="mt-2 font-[Montserrat] text-2xl font-extrabold text-[var(--green-dark)] sm:text-3xl">Delivery &amp; customer details</h2><p className="mt-2 text-sm leading-6 text-black/55">Complete these details so our team can identify your order and arrange delivery.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="checkout-name" className="mb-2 block text-sm font-bold">Full name *</label><input id="checkout-name" required autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" className="h-12 w-full rounded-xl border border-black/10 px-4 text-sm outline-none focus:border-[var(--green)]"/></div>
          <div><label htmlFor="checkout-phone" className="mb-2 block text-sm font-bold">Phone number *</label><input id="checkout-phone" required type="tel" autoComplete="tel" value={customerPhone} onChange={e=>setCustomerPhone(e.target.value)} placeholder="e.g. 08012345678" className="h-12 w-full rounded-xl border border-black/10 px-4 text-sm outline-none focus:border-[var(--green)]"/></div>
          <div className="sm:col-span-2"><label htmlFor="checkout-address" className="mb-2 block text-sm font-bold">Delivery address *</label><textarea id="checkout-address" required autoComplete="street-address" value={address} onChange={e=>setAddress(e.target.value)} placeholder="House number, street, area or landmark" rows={3} className="w-full rounded-xl border border-black/10 p-4 text-sm outline-none focus:border-[var(--green)]"/></div>
          <div><label htmlFor="checkout-city" className="mb-2 block text-sm font-bold">City or town *</label><input id="checkout-city" required autoComplete="address-level2" value={city} onChange={e=>setCity(e.target.value)} placeholder="City or town" className="h-12 w-full rounded-xl border border-black/10 px-4 text-sm outline-none focus:border-[var(--green)]"/></div>
          <div><label htmlFor="checkout-state" className="mb-2 block text-sm font-bold">State *</label><input id="checkout-state" required autoComplete="address-level1" value={state} onChange={e=>setState(e.target.value)} placeholder="State" className="h-12 w-full rounded-xl border border-black/10 px-4 text-sm outline-none focus:border-[var(--green)]"/></div>
          <div className="sm:col-span-2"><label htmlFor="checkout-instructions" className="mb-2 block text-sm font-bold">Additional instructions (optional)</label><textarea id="checkout-instructions" value={instructions} onChange={e=>setInstructions(e.target.value)} placeholder="Any delivery notes or order requests" rows={2} className="w-full rounded-xl border border-black/10 p-4 text-sm outline-none focus:border-[var(--green)]"/></div>
        </div>
        <div className="mt-6 rounded-2xl bg-[var(--cream)] p-4 text-sm leading-6 text-black/65"><strong className="text-[var(--green-dark)]">Next:</strong> Clicking the button opens WhatsApp with your order and details prepared. You must press <strong>SEND</strong> in WhatsApp to submit the order. Our sales representative will then confirm availability, delivery charges and the final amount before payment is arranged.</div>
        <button type="submit" className="button-motion mt-6 w-full rounded-full bg-[var(--green)] px-5 py-4 text-sm font-extrabold text-white sm:w-auto sm:min-w-[280px]">Continue to WhatsApp →</button>
      </form>
    </>}
  </div></main>;
}
