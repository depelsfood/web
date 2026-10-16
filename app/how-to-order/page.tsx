import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const steps = [
  ["01", "Choose your product", "Browse the current product range and open the product you are interested in."],
  ["02", "Select the variant and quantity", "Where options are available, choose your preferred product type and pack size, then set the quantity."],
  ["03", "Continue to WhatsApp", "The product, selected variant, pack size and quantity are added to your enquiry message."],
  ["04", "Confirm the details", "Our team will respond to confirm availability, pricing and delivery arrangements."],
  ["05", "Receive your order", "Once the details are agreed, our team will guide you through the next steps for your order."],
];

export const metadata = {
  title: "How to Order",
  description: "Learn how to choose Depel's Food Enterprise products and send an order enquiry through WhatsApp.",
};

export default function HowToOrderPage() {
  return <main><SiteHeader />
    <section className="bg-[var(--cream)] py-16 sm:py-24"><div className="container">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Simple and direct</p>
      <h1 className="mt-3 max-w-3xl font-[Montserrat] text-4xl font-extrabold leading-tight text-[var(--green-dark)] sm:text-6xl">How to Order</h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">Ordering with Depel's starts with choosing the product you need. You can then send your selection to our team on WhatsApp to confirm the details.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{steps.map(([number,title,description]) => <article key={number} className="rounded-[24px] border border-black/5 bg-white p-6"><span className="text-3xl font-extrabold text-[var(--gold)]">{number}</span><h2 className="mt-5 text-lg font-extrabold text-[var(--green-dark)]">{title}</h2><p className="mt-2 text-sm leading-7 text-black/55">{description}</p></article>)}</div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="/products" className="inline-flex justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-white">Browse Products →</a><a href="https://wa.me/2348162007086?text=Hello%20Depel%27s%20Food%20Enterprise%2C%20I%27d%20like%20help%20with%20an%20order." target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-[var(--green)] px-7 py-4 text-sm font-extrabold text-[var(--green)]">Ask Us on WhatsApp</a></div>
    </div></section><SiteFooter /></main>;
}
