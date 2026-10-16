"use client";

import { productCatalog } from "../lib/product-catalog";

export default function ProductOrderSection() {
  return (
    <section id="products" className="bg-[var(--cream)] py-20 sm:py-24">
      <div className="container">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green)]">Explore the range</p><p className="mt-2 text-sm text-black/55">Open any product to see its available variants, product imagery and ordering options.</p></div>
          <a href="/products" className="text-sm font-bold text-[var(--green)] underline-offset-4 hover:underline">View all products →</a>
        </div>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Our growing range</p>
          <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[var(--green-dark)] sm:text-5xl">Products that belong in your kitchen.</h2>
          <p className="mt-5 text-base leading-7 text-black/60">Choose a product first. On its product page, you can view available variants, select the pack type and quantity, then continue to WhatsApp to confirm your order.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {productCatalog.map((product) => (
            <a key={product.slug} href={`/products/${product.slug}`} className="group flex flex-col rounded-[26px] border border-black/5 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--green)]">
              <div className="flex aspect-[4/4.2] items-center justify-center overflow-hidden rounded-[20px] bg-[var(--cream)]">
                <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-[1.04]" />
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--gold)]">{product.type}</p>
                <h3 className="mt-1 text-lg font-extrabold text-[var(--green-dark)]">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-black/55">{product.description}</p>
                <span className="mt-5 inline-flex items-center text-sm font-extrabold text-[var(--green)]">View product &amp; variants <span className="ml-2 transition group-hover:translate-x-1">→</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
