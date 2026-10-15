"use client";

import { useMemo, useState } from "react";

const products = [
  { name: "Mix Grain Pap", type: "Family favourite", description: "A wholesome grain blend for comforting breakfasts and everyday nourishment.", image: "/images/products/mix-grain-pap.webp" },
  { name: "Baby Special Pap", type: "Little ones", description: "A smooth pap option made with babies and growing children in mind.", image: "/images/products/baby-special-pap.webp" },
  { name: "Beans Powder", type: "Kitchen essential", description: "Convenient beans powder for preparing akara, moimoi and more.", image: "/images/products/beans.webp" },
  { name: "Natural Honey", type: "Natural goodness", description: "A sweet pantry companion for breakfast, drinks and recipes.", image: "/images/products/natural-honey.webp" },
  { name: "Soya Mix Powder", type: "Everyday nourishment", description: "A versatile soya blend for a variety of everyday food moments.", image: "/images/products/soya.webp" },
];

const phone = "2348162007086";

export default function ProductOrderSection() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [customerName, setCustomerName] = useState("");

  const selected = useMemo(
    () => products.filter((product) => (quantities[product.name] ?? 0) > 0),
    [quantities],
  );

  function sendOrder() {
    if (!selected.length) {
      document.getElementById("order-hint")?.focus();
      return;
    }
    const lines = selected.map((product) => `• ${product.name}: ${quantities[product.name]} unit(s)`);
    const message = [
      "Hello Depel's Food Enterprise,",
      "I would like to place an order:",
      "",
      ...lines,
      "",
      customerName.trim() ? `Customer name: ${customerName.trim()}` : "",
      "",
      "Please confirm the total price and delivery details. Thank you.",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="products" className="bg-[var(--cream)] py-20 sm:py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Our growing range</p>
          <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[var(--green-dark)] sm:text-5xl">Products that belong in your kitchen.</h2>
          <p className="mt-5 text-base leading-7 text-black/60">Choose the products you need and set your quantities. Your selection will be sent to our WhatsApp team so we can confirm pricing and delivery.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <article key={product.name} className="group flex flex-col rounded-[26px] border border-black/5 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex aspect-[4/4.2] items-center justify-center overflow-hidden rounded-[20px] bg-white">
                <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--gold)]">{product.type}</p>
                <h3 className="mt-1 text-lg font-extrabold text-[var(--green-dark)]">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-black/55">{product.description}</p>
                <label className="mt-4 text-xs font-bold text-[var(--green-dark)]" htmlFor={`qty-${product.name.replaceAll(" ", "-")}`}>Quantity</label>
                <div className="mt-2 flex items-center gap-2">
                  <button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => setQuantities((q) => ({ ...q, [product.name]: Math.max(0, (q[product.name] ?? 0) - 1) }))} className="h-10 w-10 rounded-full border border-black/10 text-lg font-bold text-[var(--green-dark)]">−</button>
                  <input id={`qty-${product.name.replaceAll(" ", "-")}`} type="number" min="0" step="1" value={quantities[product.name] ?? 0} onChange={(event) => setQuantities((q) => ({ ...q, [product.name]: Math.max(0, Math.floor(Number(event.target.value) || 0)) }))} className="h-10 min-w-0 flex-1 rounded-xl border border-black/10 text-center text-sm font-bold text-[var(--green-dark)] outline-none focus:border-[var(--green)]" />
                  <button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => setQuantities((q) => ({ ...q, [product.name]: (q[product.name] ?? 0) + 1 }))} className="h-10 w-10 rounded-full bg-[var(--green)] text-lg font-bold text-white">+</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[26px] border border-black/5 bg-white p-5 shadow-sm sm:p-7">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <label htmlFor="customer-name" className="mb-2 block text-sm font-bold text-[var(--green-dark)]">Your name (optional)</label>
              <input id="customer-name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Enter your name" className="h-12 w-full rounded-xl border border-black/10 px-4 text-sm outline-none focus:border-[var(--green)] md:max-w-sm" />
              <p id="order-hint" tabIndex={-1} aria-live="polite" className="mt-3 text-sm text-black/55">{selected.length ? `${selected.length} product type(s) selected · ${selected.reduce((sum, product) => sum + quantities[product.name], 0)} total unit(s)` : "Choose a quantity above to start your order."}</p>
            </div>
            <button type="button" onClick={sendOrder} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--green)] px-7 py-3 text-sm font-extrabold text-white transition hover:bg-[var(--green-dark)]">Continue on WhatsApp <span className="ml-3 text-lg">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
}
