"use client";

import { useMemo, useState } from "react";
import type { ProductInfo } from "../lib/product-catalog";

const phone = "2348162007086";
const packSizes = ["250g", "500g", "550g", "1kg", "2kg", "4kg", "Bulk order enquiry"];

export default function ProductDetailClient({ product }: { product: ProductInfo }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [packSize, setPackSize] = useState(product.variants[0]?.weight ?? "500g");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const variant = useMemo(() => product.variants.find((item) => item.id === variantId) ?? product.variants[0], [product.variants, variantId]);
  const papProduct = product.slug.includes("pap");
  const selectedPack = packSize === "Bulk order enquiry" ? "Bulk order (size to be confirmed)" : packSize;

  function continueToWhatsApp() {
    if (!variant || quantity < 1) return;
    const message = [
      "Welcome to Depel's Food Enterprise.",
      "I'd like to place an order enquiry:",
      "",
      `Product: ${product.name}`,
      `Product option: ${variant.label}`,
      `Pack size requested: ${selectedPack}`,
      `Number of packs: ${quantity}`,
      customerName.trim() ? `Customer name: ${customerName.trim()}` : "",
      "",
      "Please confirm whether this pack size is available, the current price, total cost and delivery details. Thank you.",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-[var(--cream)] py-12 sm:py-20">
      <div className="container">
        <a href="/products" className="mb-7 inline-flex text-sm font-bold text-[var(--green)] transition hover:translate-x-1 hover:underline">← Back to all products</a>
        <div className="grid gap-9 rounded-[28px] bg-white p-4 shadow-sm sm:p-7 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[22px] bg-[var(--cream)]">
              <img key={variant?.image} src={variant?.image ?? product.image} alt={variant?.description ?? product.name} className="h-full w-full object-contain p-4" />
            </div>
            {variant?.ingredientsImage && <div className="mt-4 grid grid-cols-[100px_1fr] items-center gap-4 rounded-2xl border border-black/5 p-3 sm:grid-cols-[130px_1fr]">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[var(--cream)]"><img src={variant.ingredientsImage} alt={`${product.name} ingredients`} className="h-full w-full object-contain p-1" /></div>
              <div><p className="text-sm font-extrabold text-[var(--green-dark)]">Ingredients / product details</p><p className="mt-1 text-sm leading-6 text-black/55">Refer to the physical pack for the complete ingredient and allergen information.</p></div>
            </div>}
          </div>
          <div className="flex flex-col py-2">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[var(--gold)]">{product.type}</p>
            <h1 className="mt-3 font-[Montserrat] text-3xl font-extrabold leading-tight text-[var(--green-dark)] sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-base leading-8 text-black/60">{product.detail}</p>
            {product.note && <p className="mt-4 rounded-xl bg-[var(--cream)] p-3 text-sm leading-6 text-black/65">{product.note}</p>}

            <div className="mt-7 rounded-2xl border border-[var(--gold)]/40 bg-[var(--cream)] p-4">
              <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[var(--green)]">Current price</p>
              <p className="mt-1 text-2xl font-extrabold text-[var(--green-dark)]">Price on request</p>
              <p className="mt-1 text-sm leading-6 text-black/55">We haven&apos;t published a verified price for this pack yet. Ask us on WhatsApp for the current price before confirming your order.</p>
            </div>

            {product.variants.length > 1 && <div className="mt-7">
              <p className="mb-3 text-sm font-extrabold text-[var(--green-dark)]">Choose your product option</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.variants.map((item) => <button key={item.id} type="button" onClick={() => { setVariantId(item.id); setPackSize(item.weight); }} aria-pressed={variantId === item.id} className={`rounded-2xl border p-4 text-left transition ${variantId === item.id ? "border-[var(--green)] bg-[var(--green)]/5 ring-1 ring-[var(--green)]" : "border-black/10 hover:border-[var(--green)]"}`}><span className="block text-sm font-extrabold text-[var(--green-dark)]">{item.label}</span><span className="mt-1 block text-sm text-black/55">{item.weight}</span></button>)}
              </div>
            </div>}

            <div className="mt-7">
              <label htmlFor="product-pack-size" className="mb-2 block text-sm font-extrabold text-[var(--green-dark)]">Choose pack size</label>
              <select id="product-pack-size" value={packSize} onChange={(event) => setPackSize(event.target.value)} className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold outline-none transition focus:border-[var(--green)]">
                {(papProduct ? packSizes.filter((size) => size !== "Bulk order enquiry") : ["Pack size to be confirmed", ...packSizes.filter((size) => size !== "550g")]).map((size) => <option key={size} value={size}>{size}</option>)}
              </select>
              <p className="mt-2 text-xs leading-5 text-black/45">Requested sizes are subject to availability. We&apos;ll confirm the actual pack and price with you.</p>
            </div>

            <div className="mt-6">
              <label htmlFor="product-quantity" className="mb-2 block text-sm font-extrabold text-[var(--green-dark)]">Number of packs</label>
              <div className="flex max-w-[220px] items-center gap-3">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="button-motion h-11 w-11 rounded-full border border-black/10 text-xl font-bold text-[var(--green-dark)]">−</button>
                <input id="product-quantity" type="number" min="1" step="1" value={quantity} onChange={(event) => setQuantity(Math.max(1, Math.floor(Number(event.target.value) || 1)))} className="h-11 min-w-0 flex-1 rounded-xl border border-black/10 text-center font-bold text-[var(--green-dark)] outline-none focus:border-[var(--green)]" />
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="button-motion h-11 w-11 rounded-full bg-[var(--green)] text-xl font-bold text-white">+</button>
              </div>
            </div>
            <label htmlFor="product-customer-name" className="mb-2 mt-6 block text-sm font-extrabold text-[var(--green-dark)]">Your name (optional)</label>
            <input id="product-customer-name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Enter your name" className="h-12 w-full rounded-xl border border-black/10 px-4 text-sm outline-none focus:border-[var(--green)]" />
            <button type="button" onClick={continueToWhatsApp} className="button-motion mt-7 inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-white shadow-md">Continue to WhatsApp checkout <span className="ml-3 text-lg">→</span></button>
            <p className="mt-3 text-xs leading-5 text-black/45">This starts an order enquiry. Your order is not final until our team confirms the available pack size, price and delivery details.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
