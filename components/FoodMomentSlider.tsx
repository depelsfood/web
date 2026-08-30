"use client";

import { useState } from "react";

const moments = [
  { eyebrow: "FOR YOUR FAMILY", title: "Pap + Honey + A Warm Breakfast", text: "Start the day with simple, nourishing choices that bring everyone to the table.", image: "/images/family-breakfast.jpg" },
  { eyebrow: "FOR YOUR KITCHEN", title: "Beans + Moimoi + Family Moments", text: "From classic moimoi to satisfying bean cakes, make everyday cooking easier.", image: "/images/beans-kitchen.jpg" },
  { eyebrow: "FOR YOUR LITTLE ONES", title: "Baby Special Pap + Care", text: "A smooth, nourishing option made with growing children in mind.", image: "/images/baby-pap.jpg" },
  { eyebrow: "FOR YOUR SWEET MOMENTS", title: "Honey + Pap + More Goodness", text: "Pair everyday favourites with natural sweetness for breakfast and beyond.", image: "/images/honey-breakfast.jpg" },
  { eyebrow: "FOR YOUR EVERYDAY MEALS", title: "Soya + Grains + Better Choices", text: "Keep quality ingredients within reach for the meals you make every day.", image: "/images/soya-grains.jpg" },
  { eyebrow: "FOR YOUR BUSINESS", title: "Quality Food + Reliable Supply", text: "Stock products your customers can enjoy while your business keeps growing.", image: "/images/business-supply.jpg" },
];

export default function FoodMomentSlider() {
  const [active, setActive] = useState(0);
  const current = moments[active];

  return (
    <section className="bg-[var(--cream)] py-8 sm:py-10">
      <div className="container">
        <div className="relative min-h-[260px] overflow-hidden rounded-[28px] bg-[var(--green-dark)] shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,47,24,.96)_0%,rgba(8,47,24,.82)_45%,rgba(8,47,24,.25)_100%)]" />
          <div className="relative z-10 flex min-h-[260px] items-center px-7 py-8 sm:px-12 lg:px-16">
            <div className="max-w-xl text-white">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--gold)] sm:text-xs">{current.eyebrow}</p>
              <h2 className="mt-2 font-[Montserrat] text-2xl font-extrabold leading-tight sm:text-3xl">{current.title}</h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/75">{current.text}</p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(217,165,20,.25),transparent_65%)]" />
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-2" aria-label="Food moments">
            {moments.map((moment, index) => (
              <button key={moment.eyebrow} onClick={() => setActive(index)} aria-label={`Show ${moment.eyebrow}`} className={`h-1.5 rounded-full transition-all ${index === active ? "w-10 bg-[var(--green)]" : "w-4 bg-black/15"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActive((active - 1 + moments.length) % moments.length)} aria-label="Previous slide" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--green-dark)]">←</button>
            <button onClick={() => setActive((active + 1) % moments.length)} aria-label="Next slide" className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--green)] text-white">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
