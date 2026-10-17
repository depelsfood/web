"use client";

import { useMemo, useState } from "react";
import type { ProductInfo } from "../lib/product-catalog";

const phone = "2348162007086";
type CartLine = { key: string; slug: string; name: string; size: string; price: number; quantity: number; image: string };

export default function ProductDetailClient({ product }: { product: ProductInfo }) {
  const sizes = Object.keys(product.prices);
  const [packSize, setPackSize] = useState(sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [showIngredients, setShowIngredients] = useState(false);
  const variant = useMemo(() => product.variants[0], [product.variants]);
  const price = product.prices[packSize] ?? 0;

  function addToCart() {
    if (!packSize || quantity < 1 || !price) return;
    const line: CartLine = { key: `${product.slug}::${packSize}`, slug: product.slug, name: product.name, size: packSize, price, quantity, image: product.image };
    const existing = JSON.parse(localStorage.getItem("depels-cart") || "[]") as CartLine[];
    const index = existing.findIndex((item) => item.key === line.key);
    if (index >= 0) existing[index].quantity += quantity;
    else existing.push(line);
    localStorage.setItem("depels-cart", JSON.stringify(existing));
    window.dispatchEvent(new Event("depels-cart-updated"));
    alert(`${product.name} added to your cart.`);
  }

  function checkout() {
    const cart = JSON.parse(localStorage.getItem("depels-cart") || "[]") as CartLine[];
    if (!cart.length) { addToCart(); }
    const lines = JSON.parse(localStorage.getItem("depels-cart") || "[]") as CartLine[];
    const subtotal = lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
    const message = [
      "Welcome to Depel's Food Enterprise.",
      "I'd like to place this order:",
      "",
      ...lines.map((line) => `• ${line.name} — ${line.size} × ${line.quantity} = ₦${(line.price * line.quantity).toLocaleString("en-NG")}`),
      "",
      `Product subtotal: ₦${subtotal.toLocaleString("en-NG")}`,
      "Delivery fee: Please confirm based on my location.",
      customerName.trim() ? `Customer name: ${customerName.trim()}` : "",
      "",
      "Please confirm delivery fee, availability and final total before payment.",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-[var(--cream)] py-12 sm:py-20">
      <div className="container">
        <a href="/products" className="mb-7 inline-flex text-sm font-bold text-[var(--green)] hover:underline">← Back to all products</a>
        <div className="mb-5 rounded-2xl border border-[var(--gold)]/50 bg-[#fff8e5] p-4 text-sm leading-6 text-[#594315]"><strong>Delivery notice:</strong> Delivery fees depend on your location. Our sales representative will communicate the delivery fee and confirm the final total with you before payment.</div>
        <div className="grid gap-9 rounded-[28px] bg-white p-4 shadow-sm sm:p-7 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[22px] bg-[var(--cream)]"><img src={showIngredients && variant?.ingredientsImage ? variant.ingredientsImage : product.image} alt={showIngredients ? `${product.name} ingredients` : product.name} className="h-full w-full object-contain p-4 transition duration-300" /></div>
            {variant?.ingredientsImage && <div className="mt-4 grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setShowIngredients(false)} aria-pressed={!showIngredients} className={`rounded-xl border p-3 text-sm font-bold transition ${!showIngredients ? "border-[var(--green)] bg-[var(--green)]/5 text-[var(--green-dark)]" : "border-black/10"}`}>Product image</button>
              <button type="button" onClick={() => setShowIngredients(true)} aria-pressed={showIngredients} className={`rounded-xl border p-3 text-sm font-bold transition ${showIngredients ? "border-[var(--green)] bg-[var(--green)]/5 text-[var(--green-dark)]" : "border-black/10"}`}>View ingredients</button>
            </div>}
            {showIngredients && <p className="mt-3 text-sm leading-6 text-black/55">This image shows the product ingredients/details supplied for this product. Refer to the physical pack for the complete ingredient and allergen information.</p>}
          </div>
          <div className="flex flex-col py-2">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[var(--gold)]">{product.type}</p>
            <h1 className="mt-3 font-[Montserrat] text-3xl font-extrabold leading-tight text-[var(--green-dark)] sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-base leading-8 text-black/60">{product.detail}</p>
            {product.note && <p className="mt-4 rounded-xl bg-[var(--cream)] p-3 text-sm leading-6 text-black/65">{product.note}</p>}
            <div className="mt-7 rounded-2xl border border-[var(--gold)]/40 bg-[var(--cream)] p-4">
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[var(--green)]">Price for selected pack</p>
              <p className="mt-1 text-3xl font-extrabold text-[var(--green-dark)]">₦{price.toLocaleString("en-NG")}</p>
              <p className="mt-1 text-sm leading-6 text-black/55">Product subtotal excludes delivery. Delivery fees depend on your location and will be confirmed by our sales representative.</p>
            </div>
            <div className="mt-7">
              <label htmlFor="product-pack-size" className="mb-2 block text-sm font-extrabold text-[var(--green-dark)]">Choose pack size</label>
              <select id="product-pack-size" value={packSize} onChange={(event) => setPackSize(event.target.value)} className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold outline-none focus:border-[var(--green)]">
                {sizes.map((size) => <option key={size} value={size}>{size} — ₦{product.prices[size].toLocaleString("en-NG")}</option>)}
              </select>
            </div>
            <div className="mt-6">
              <label htmlFor="product-quantity" className="mb-2 block text-sm font-extrabold text-[var(--green-dark)]">Quantity</label>
              <div className="flex max-w-[220px] items-center gap-3">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="button-motion h-11 w-11 rounded-full border border-black/10 text-xl font-bold text-[var(--green-dark)]">−</button>
                <input id="product-quantity" type="number" min="1" step="1" value={quantity} onChange={(event) => setQuantity(Math.max(1, Math.floor(Number(event.target.value) || 1)))} className="h-11 min-w-0 flex-1 rounded-xl border border-black/10 text-center font-bold text-[var(--green-dark)] outline-none focus:border-[var(--green)]" />
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="button-motion h-11 w-11 rounded-full bg-[var(--green)] text-xl font-bold text-white">+</button>
              </div>
            </div>
            <label htmlFor="product-customer-name" className="mb-2 mt-6 block text-sm font-extrabold text-[var(--green-dark)]">Your name (optional)</label>
            <input id="product-customer-name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Enter your name" className="h-12 w-full rounded-xl border border-black/10 px-4 text-sm outline-none focus:border-[var(--green)]" />
            <button type="button" onClick={addToCart} className="button-motion mt-7 inline-flex min-h-14 items-center justify-center rounded-full border border-[var(--green)] px-7 py-4 text-sm font-extrabold text-[var(--green)]">Add to cart <span className="ml-3 text-lg">＋</span></button>
            <a href="/cart" className="mt-3 inline-flex justify-center rounded-full bg-[var(--cream)] px-7 py-4 text-sm font-extrabold text-[var(--green-dark)]">View cart</a>
            <button type="button" onClick={checkout} className="button-motion mt-3 inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-white shadow-md">Checkout on WhatsApp <span className="ml-3 text-lg">→</span></button>
            <p className="mt-3 text-xs leading-5 text-black/45">Orders are confirmed by our sales representative. Delivery is calculated separately based on your location.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
