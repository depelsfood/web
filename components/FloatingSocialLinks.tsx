"use client";

import { useState } from "react";

const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@DepelsFood",
    short: "♪",
    description: "Follow our food moments on TikTok",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/DepelsFood/",
    short: "◎",
    description: "See our products and updates on Instagram",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@DepelsFood",
    short: "▶",
    description: "Watch us on YouTube",
  },
];

export default function FloatingSocialLinks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-[100] sm:bottom-7 sm:right-6">
      {open && (
        <section
          id="floating-social-panel"
          aria-label="Depel's social media links"
          className="mb-3 w-[min(290px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-black/20"
        >
          <div className="flex items-center justify-between bg-[#0b5428] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-bold">Connect with Depel&apos;s</p>
              <p className="mt-0.5 text-xs text-white/75">Follow our social pages</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Collapse social media links"
              className="flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              ×
            </button>
          </div>
          <div className="grid gap-1 p-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.description}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#252525] transition hover:bg-[#f5f3e9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#176b35]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#176b35] text-lg font-extrabold text-white">
                  {social.short}
                </span>
                <span>{social.name}</span>
                <span className="ml-auto text-lg text-[#176b35]" aria-hidden="true">↗</span>
              </a>
            ))}
            <div
              aria-label="Facebook page coming soon"
              title="Facebook page link coming soon"
              className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-400"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg font-extrabold text-gray-400">f</span>
              <span>Facebook</span>
              <span className="ml-auto text-[10px] font-medium uppercase tracking-wide">Coming soon</span>
            </div>
          </div>
        </section>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="floating-social-panel"
        aria-label={open ? "Collapse social media links" : "Open social media links"}
        title={open ? "Close social links" : "Follow Depel's Food Enterprise"}
        className="button-motion flex min-h-14 items-center gap-2 rounded-full border-2 border-white bg-[#d9a514] px-4 text-sm font-extrabold text-[#082f18] shadow-xl shadow-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176b35]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#082f18] text-lg text-white" aria-hidden="true">
          {open ? "×" : "♡"}
        </span>
        <span>{open ? "Close" : "Follow us"}</span>
      </button>
    </div>
  );
}
