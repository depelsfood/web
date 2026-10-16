import FoodMomentSlider from "../components/FoodMomentSlider";
import ProductOrderSection from "../components/ProductOrderSection";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { productCatalog } from "../lib/product-catalog";

const benefits = [
  ["hygienically-processed.svg", "Hygienically Processed", "Produced under clean and safe conditions."],
  ["quality-grains.svg", "Quality Ingredients", "Made with carefully selected food ingredients."],
  ["nutritious-healthy.svg", "Food Made with Care", "Thoughtfully prepared for everyday food routines."],
  ["reliable-supply.svg", "Reliable Supply", "Dependable service for homes and businesses."],
  ["trusted-quality.svg", "Trusted Quality", "Care and consistency from product to product."],
  ["proudly-nigerian.svg", "Proudly Nigerian", "A Nigerian food brand growing with its customers."],
];

const categories = [
  { title: "Pap Products", description: "Explore Mix Grain Pap and Baby Special Pap in regular and powder options.", image: "/images/products/mix-grain-pap.webp", href: "/products", label: "Explore Pap" },
  { title: "Beans", description: "A handy kitchen option for moimoi, akara and other bean-based meals.", image: "/images/products/beans.webp", href: "/products/beans-powder", label: "Explore Beans" },
  { title: "Natural Honey", description: "A naturally sweet companion for breakfast and everyday recipes.", image: "/images/products/natural-honey.webp", href: "/products/natural-honey", label: "Explore Honey" },
  { title: "Soya", description: "More ways to bring variety to your everyday food routine.", image: "/images/products/soya.webp", href: "/products/soya-mix-powder", label: "Explore Soya" },
];

const steps = [
  ["01", "Choose your product", "Browse the range and open the product you want."],
  ["02", "Select variant & quantity", "Choose the available pack option and how many you need."],
  ["03", "Send your enquiry", "Continue to WhatsApp with your selection already included."],
  ["04", "Confirm your order", "Our team will confirm availability, price and delivery details."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-[var(--green-dark)] sm:min-h-[700px]">
        <div className="absolute inset-0 bg-cover bg-[center_35%] sm:bg-center" style={{ backgroundImage: "url(/images/hero/hero-family-kitchen.webp.webp)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,47,24,.94),rgba(8,47,24,.74)_48%,rgba(8,47,24,.22))]" />
        <div className="container relative flex min-h-[620px] items-center py-24 sm:min-h-[700px] sm:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">Quality food for everyday life</p>
            <h1 className="font-[Montserrat] text-5xl font-extrabold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-[78px]">Quality Food Products,<br /><span className="text-[var(--gold)]">Processed with Care.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg">From nutritious Pap to quality beans, honey, soya and more, Depel&apos;s Food Enterprise provides carefully handled food products for homes, families, retailers and businesses.</p>
            <div className="mt-9"><a href="#categories" className="inline-flex rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition hover:brightness-105">Shop Our Products <span className="ml-3 text-lg">→</span></a></div>
          </div>
        </div>
      </section>

      {/* Trust badge bar */}
      <section aria-label="Our commitments" className="border-b border-black/5 bg-white py-8">
        <div className="container grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {benefits.map(([icon, title, description]) => <div key={title} className="flex flex-col items-center text-center">
            <img src={`/images/icons/${icon}`} alt="" className="h-10 w-10 object-contain" />
            <h2 className="mt-3 text-sm font-extrabold text-[var(--green-dark)]">{title}</h2>
            <p className="mt-1 max-w-[190px] text-xs leading-5 text-black/50">{description}</p>
          </div>)}
        </div>
      </section>

      <FoodMomentSlider />

      {/* About preview */}
      <section id="about" className="bg-[var(--cream)] py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">More than just food</p><h2 className="mt-4 font-[Montserrat] text-4xl font-extrabold leading-tight tracking-tight text-[var(--green-dark)] sm:text-5xl">Quality Food. Honest Processing. Trusted Care.</h2></div>
          <div><p className="text-base leading-8 text-black/65 sm:text-lg">Depel&apos;s Food Enterprise is a growing Nigerian food production and distribution brand. We bring together food products for everyday family meals, home kitchens and business supply — with care for quality, practical use and dependable service.</p><a href="/about" className="mt-6 inline-flex font-extrabold text-[var(--green)] hover:underline">Learn More About Us <span className="ml-2">→</span></a></div>
        </div>
      </section>

      {/* Product categories */}
      <section id="categories" className="bg-white py-20 sm:py-24">
        <div className="container">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">A growing range</p><h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[var(--green-dark)] sm:text-5xl">Explore Our Food Products</h2><p className="mt-5 text-base leading-7 text-black/60">Carefully handled food products made to bring quality, nutrition and convenience to your home and business.</p></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => <a key={category.title} href={category.href} className="group overflow-hidden rounded-[26px] border border-black/5 bg-[var(--cream)] p-3 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] bg-white"><img src={category.image} alt={category.title} loading="lazy" className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.04]" /></div>
              <div className="px-3 pb-3 pt-5"><h3 className="text-xl font-extrabold text-[var(--green-dark)]">{category.title}</h3><p className="mt-2 min-h-[72px] text-sm leading-6 text-black/55">{category.description}</p><span className="mt-4 inline-flex text-sm font-extrabold text-[var(--green)]">{category.label} <span className="ml-2 transition group-hover:translate-x-1">→</span></span></div>
            </a>)}
            <div className="flex flex-col justify-center rounded-[26px] border border-dashed border-[var(--green)]/35 bg-[var(--cream)] p-7"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl text-[var(--green)]">＋</span><h3 className="mt-5 text-xl font-extrabold text-[var(--green-dark)]">More Products Ahead</h3><p className="mt-2 text-sm leading-6 text-black/55">Our range is growing. Check back as more products become available.</p><a href="/products" className="mt-5 text-sm font-extrabold text-[var(--green)] hover:underline">View current range →</a></div>
          </div>
        </div>
      </section>

      {/* Featured products / full catalogue */}
      <ProductOrderSection />

      {/* Why choose us */}
      <section className="bg-[var(--cream)] py-20 sm:py-24">
        <div className="container"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Why choose Depel&apos;s</p><h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold tracking-tight text-[var(--green-dark)] sm:text-5xl">Made with care. Chosen with confidence.</h2><p className="mt-4 leading-7 text-black/60">We believe good food begins with care at every step — from selecting ingredients to preparing products and serving customers.</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([icon,title,description]) => <div key={title} className="rounded-[22px] border border-black/5 bg-white p-6"><img src={`/images/icons/${icon}`} alt="" className="h-11 w-11 object-contain" /><h3 className="mt-4 font-extrabold text-[var(--green-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-black/55">{description}</p></div>)}</div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 sm:py-24"><div className="container"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Simple and direct</p><h2 className="mt-3 font-[Montserrat] text-4xl font-extrabold text-[var(--green-dark)] sm:text-5xl">How to Order</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-black/60">A few simple steps take you from choosing a product to confirming your order with our team.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,description]) => <div key={number} className="rounded-[24px] border border-black/5 bg-[var(--cream)] p-6"><span className="text-3xl font-extrabold text-[var(--gold)]">{number}</span><h3 className="mt-5 font-extrabold text-[var(--green-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-black/55">{description}</p></div>)}</div>
        <div className="mt-8 text-center"><a href="/how-to-order" className="font-extrabold text-[var(--green)] hover:underline">Read how ordering works →</a></div>
      </div></section>

      {/* Bulk supply */}
      <section className="bg-[var(--green-dark)] py-20 text-white sm:py-24"><div className="container flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">For retailers &amp; businesses</p><h2 className="mt-4 font-[Montserrat] text-4xl font-extrabold leading-tight sm:text-5xl">Looking for Bulk Food Supply?</h2><p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">Depel&apos;s Food Enterprise welcomes enquiries from retailers, distributors, food vendors and businesses looking for dependable food product supply.</p></div><a href="/business-supply" className="inline-flex w-fit rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-extrabold text-white transition hover:brightness-105">Talk to Us About Bulk Orders <span className="ml-3">→</span></a></div></section>

      {/* Testimonials intentionally reserved for genuine customer feedback */}
      <section className="bg-white py-16"><div className="container text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Built on trust</p><h2 className="mt-3 font-[Montserrat] text-3xl font-extrabold text-[var(--green-dark)] sm:text-4xl">We want every order to earn your confidence.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-black/60">We believe trust is built through the quality of our products and the care we give each customer. As customer feedback comes in, we look forward to sharing genuine experiences here.</p></div></section>

      {/* Final CTA */}
      <section className="bg-[var(--cream)] py-20 sm:py-24"><div className="container text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Your next good choice</p><h2 className="mx-auto mt-4 max-w-3xl font-[Montserrat] text-4xl font-extrabold leading-tight text-[var(--green-dark)] sm:text-5xl">Ready to Order Quality Food Products?</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60">Explore our current range or speak with our team about product availability and your next order.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="/products" className="inline-flex justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-white">View Products <span className="ml-2">→</span></a><a href="https://wa.me/2348162007086?text=Hello%20Depel%27s%20Food%20Enterprise%2C%20I%27d%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-[var(--green)] px-7 py-4 text-sm font-extrabold text-[var(--green)]">Chat on WhatsApp</a></div></div></section>

      {/* Contact preview */}
      <section className="bg-white py-14"><div className="container grid gap-6 sm:grid-cols-3"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">Visit us</p><p className="mt-2 font-bold text-[var(--green-dark)]">EC13FA, Oke Itunu, Ilaje, Ilesa, Osun State, Nigeria</p></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">Call or WhatsApp</p><a href="https://wa.me/2348162007086" className="mt-2 inline-block font-bold text-[var(--green-dark)]">+234 816 200 7086</a></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--gold)]">Email</p><a href="mailto:executive@depelsfood.com" className="mt-2 inline-block font-bold text-[var(--green-dark)]">executive@depelsfood.com</a><a href="/contact" className="mt-2 block text-sm font-extrabold text-[var(--green)] hover:underline">Contact us →</a></div></div></section>

      <SiteFooter />
    </main>
  );
}
