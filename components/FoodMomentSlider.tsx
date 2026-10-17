"use client";

import { useEffect, useState } from "react";

const moments = [
  { eyebrow: "FOR YOUR FAMILY", title: "A Better Start to Every Day", text: "Thoughtful food choices, beautiful mornings, and more moments around the table.", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=85" },
  { eyebrow: "FOR YOUR KITCHEN", title: "Everyday Cooking, Elevated", text: "Quality staples for the meals, recipes, and traditions that bring people together.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85" },
  { eyebrow: "FOR YOUR LITTLE ONES", title: "Made for Caring Moments", text: "A gentle breakfast ritual for the little ones you care for, with love in every serving.", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1800&q=85" },
  { eyebrow: "FOR YOUR SWEET MOMENTS", title: "A Golden Touch of Sweetness", text: "Bring a little golden goodness to breakfast favourites and everyday treats.", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1800&q=85" },
  { eyebrow: "FOR YOUR EVERYDAY MEALS", title: "Good Ingredients. More Possibilities.", text: "Keep versatile pantry essentials close for the meals you love to make.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85" },
  { eyebrow: "FOR YOUR BUSINESS", title: "Quality That Helps You Grow", text: "Reliable food products for retailers, food businesses, and growing customer relationships.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85" },
];

export default function FoodMomentSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = moments[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % moments.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="bg-[var(--cream)] py-8 sm:py-10">
      <div className="container">
        <div
          className="moment-slide relative min-h-[260px] overflow-hidden rounded-[28px] bg-[var(--green-dark)] shadow-xl sm:min-h-[300px]"
          style={{ backgroundImage: `url("${current.image}")`, backgroundPosition: "center", backgroundSize: "cover" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false); }}
          aria-live="polite"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#092d1b]/95 via-[#092d1b]/75 to-[#092d1b]/15" />
          <div key={active} className="moment-copy relative z-10 flex min-h-[260px] items-center px-7 py-8 sm:min-h-[300px] sm:px-12 lg:px-16">
            <div className="max-w-xl text-white">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--gold)] sm:text-xs">{current.eyebrow}</p>
              <h2 className="mt-2 font-[Montserrat] text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">{current.title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/85 sm:text-base">{current.text}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(217,165,32,.2),transparent_65%)]" />
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-2" aria-label="Food moments">
            {moments.map((moment, index) => (
              <button key={moment.eyebrow} onClick={() => setActive(index)} aria-label={`Show ${moment.eyebrow}`} aria-current={index === active} className={`h-1.5 rounded-full transition-all ${index === active ? "w-10 bg-[var(--green)]" : "w-4 bg-black/15"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActive((active - 1 + moments.length) % moments.length)} aria-label="Previous slide" className="button-motion flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--green-dark)]">←</button>
            <button onClick={() => setActive((active + 1) % moments.length)} aria-label="Next slide" className="button-motion flex h-9 w-9 items-center justify-center rounded-full bg-[var(--green)] text-white">→</button>
          </div>
        </div>
        <p className="mt-3 text-xs text-black/45">Slides advance automatically every five seconds. Hover or focus here to pause.</p>
      </div>
    </section>
  );
}
