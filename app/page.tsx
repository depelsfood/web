const trustItems = [
  ["✦", "Quality Grains", "Carefully selected ingredients"],
  ["✧", "Hygienically Processed", "Clean, safe & standardized"],
  ["✓", "Trusted Quality", "Made with care for everyday life"],
];

export default function Home() {
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container flex h-20 items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight text-white">
            Depel&apos;s <span className="text-[var(--gold)]">Food Enterprise</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/90 md:flex">
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#business" className="transition hover:text-white">For Business</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href="#products" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--green-dark)] shadow-lg transition hover:-translate-y-0.5">
            Order Now
          </a>
        </div>
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-[var(--green-dark)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(217,165,20,.28),transparent_38%),linear-gradient(110deg,rgba(11,84,40,.98)_0%,rgba(23,107,53,.82)_48%,rgba(10,55,28,.7)_100%)]" />
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-16 h-[390px] w-[390px] rounded-full border border-white/10" />

        <div className="container relative flex min-h-[760px] items-center pb-20 pt-28">
          <div className="max-w-2xl text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
              Quality food for everyday life
            </p>
            <h1 className="font-[Montserrat] text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[86px]">
              Good Food<br />
              <span className="text-[var(--gold)]">Gives More.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              From nourishing breakfasts to delicious everyday meals, Depel&apos;s brings carefully selected food products into the moments that matter most — at home, with family, and around the table.
            </p>
            <div className="mt-9">
              <a href="#products" className="inline-flex items-center rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                Explore Our Products <span className="ml-3 text-lg">→</span>
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
              {trustItems.map(([icon, title, text]) => (
                <div key={title} className="flex gap-3 sm:block">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--gold)]">{icon}</span>
                  <div>
                    <p className="mt-1 text-sm font-bold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 right-0 hidden h-full w-[48%] lg:block">
            <div className="absolute right-[-18%] top-[15%] h-[620px] w-[620px] rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <div className="absolute bottom-[-80px] right-[-70px] h-[520px] w-[520px] rounded-full border-[70px] border-white/5" />
            <div className="absolute bottom-[20%] right-[8%] rounded-[32px] border border-white/10 bg-white/10 p-7 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">From our kitchen to yours</p>
              <p className="mt-3 max-w-[230px] text-2xl font-bold leading-tight text-white">More food. More moments. More possibilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[var(--cream)] py-24">
        <div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">More than just food</p>
            <h2 className="mt-4 font-[Montserrat] text-4xl font-extrabold leading-tight tracking-tight text-[var(--green-dark)] sm:text-5xl">More Goodness for Every Table.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-black/65 sm:text-lg">
            Every home has different needs, different meals, and different moments to share. That is why Depel&apos;s is growing beyond one product — bringing together quality food choices that fit naturally into everyday life.
          </p>
        </div>
      </section>

      <section id="products" className="bg-white py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Discover Depel&apos;s</p>
              <h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[var(--green-dark)] sm:text-5xl">Good Food. More Choices.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-black/55">Nourishing pap and everyday food essentials for homes, families and growing businesses.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {["Mix Grain Pap", "Baby Special Pap", "Beans", "Natural Honey", "Dates"].map((product, index) => (
              <article key={product} className="group overflow-hidden rounded-[24px] border border-black/5 bg-[var(--cream)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex aspect-square items-center justify-center rounded-[18px] bg-[var(--green-dark)]/8 text-center">
                  <span className="px-4 text-sm font-semibold text-[var(--green-dark)]">Product image {index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--green-dark)]">{product}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">Quality food made for everyday moments.</p>
                <a href="#contact" className="mt-5 inline-flex text-sm font-bold text-[var(--green)]">View product →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="bg-[var(--green-dark)] py-24 text-white">
        <div className="container flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">For retailers & businesses</p>
            <h2 className="mt-4 font-[Montserrat] text-4xl font-extrabold leading-tight sm:text-5xl">Buying for Business?</h2>
            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">Reliable food products for retailers, caterers, food vendors, hospitality businesses and growing distributors.</p>
          </div>
          <a href="#contact" className="inline-flex w-fit rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1">Enquire for Bulk Supply →</a>
        </div>
      </section>

      <footer id="contact" className="bg-[#082f18] py-14 text-white">
        <div className="container grid gap-10 md:grid-cols-3">
          <div><p className="text-xl font-extrabold">Depel&apos;s Food Enterprise</p><p className="mt-3 max-w-sm text-sm leading-6 text-white/55">Quality food products for everyday life, families and businesses.</p></div>
          <div><p className="text-sm font-bold uppercase tracking-wider text-[var(--gold)]">Contact</p><p className="mt-3 text-sm text-white/70">+234 816 200 7086</p><p className="mt-2 text-sm text-white/70">executive@depelsfood.com</p><p className="mt-2 text-sm text-white/70">Osun State, Nigeria</p></div>
          <div><p className="text-sm font-bold uppercase tracking-wider text-[var(--gold)]">Quick links</p><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70"><a href="#">Home</a><a href="#about">About</a><a href="#products">Products</a><a href="#business">For Business</a></div></div>
        </div>
        <div className="container mt-12 border-t border-white/10 pt-6 text-xs text-white/40">© 2026 Depel&apos;s Food Enterprise. All Rights Reserved.</div>
      </footer>
    </main>
  );
}
