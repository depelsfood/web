import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const steps = [
  ["01", "Choose your products", "Browse the product catalogue and open any product to view its images, ingredient image where available, pack sizes and prices."],
  ["02", "Select sizes and quantities", "Choose the pack size you want, set the quantity, and add each product to your cart. You can return to the catalogue to add more products."],
  ["03", "Review your cart", "Check each product, pack size, quantity and item total. Adjust quantities or remove items as needed. Your product subtotal is calculated automatically."],
  ["04", "Enter delivery details", "At checkout, provide your full name, phone number, delivery address, city or town and state. You can add optional delivery instructions too."],
  ["05", "Open your prepared WhatsApp order", "Select Continue to WhatsApp. Your order details, item totals, product subtotal and delivery information are composed into a message addressed to Depel's Food Enterprise."],
  ["06", "Press SEND in WhatsApp", "Important: WhatsApp does not send the message automatically. Review the prepared message and press SEND in WhatsApp. Your order enquiry is submitted when you send it."],
  ["07", "Confirm delivery and payment", "Our sales representative will confirm product availability and the delivery fee based on your location, then communicate the final amount and payment instructions. Please wait for confirmation before making payment."],
  ["08", "Receive your order", "After the order and payment arrangements are confirmed, our team will coordinate fulfilment and delivery and keep you informed about the next steps."],
];

export const metadata = {
  title: "How to Order",
  description: "Learn how to select Depel's Food Enterprise products, check out and submit your order through WhatsApp.",
};

export default function HowToOrderPage() {
  return <main><SiteHeader />
    <section className="bg-[var(--cream)] py-16 sm:py-24"><div className="container">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Simple, clear and convenient</p>
      <h1 className="mt-3 max-w-3xl font-[Montserrat] text-4xl font-extrabold leading-tight text-[var(--green-dark)] sm:text-6xl">How to Order</h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-black/60 sm:text-lg">From choosing your products to confirming delivery, we aim to make ordering from Depel's Food Enterprise straightforward. Follow the steps below to send your order to our team on WhatsApp.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{steps.map(([number,title,description]) => <article key={number} className="rounded-[24px] border border-black/5 bg-white p-6"><span className="text-3xl font-extrabold text-[var(--gold)]">{number}</span><h2 className="mt-5 text-lg font-extrabold text-[var(--green-dark)]">{title}</h2><p className="mt-2 text-sm leading-7 text-black/55">{description}</p></article>)}</div>
      <div className="mt-8 rounded-2xl border border-[var(--gold)]/50 bg-[#fff8e5] p-5 text-sm leading-7 text-[#594315]"><strong>Delivery notice:</strong> Delivery fees vary by location and are not included in the product subtotal. A Depel's sales representative will communicate the delivery fee and confirm the final amount before payment.</div>
      <div className="mt-5 rounded-2xl border border-[var(--green)]/20 bg-white p-5 text-sm leading-7 text-black/65"><strong className="text-[var(--green-dark)]">Please remember:</strong> Selecting “Continue to WhatsApp” only opens a prepared message. You must press <strong>SEND</strong> in WhatsApp for your order enquiry to reach us. Our team will then confirm the order and payment details.</div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="/products" className="inline-flex justify-center rounded-full bg-[var(--green)] px-7 py-4 text-sm font-extrabold text-white">Browse Products →</a><a href="/cart" className="inline-flex justify-center rounded-full border border-[var(--green)] px-7 py-4 text-sm font-extrabold text-[var(--green)]">View Your Cart</a><a href="https://wa.me/2348162007086?text=Hello%20Depel%27s%20Food%20Enterprise%2C%20I%27d%20like%20help%20with%20an%20order." target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-black/10 px-7 py-4 text-sm font-extrabold text-[var(--green-dark)]">Ask Us on WhatsApp</a></div>
    </div></section><SiteFooter /></main>;
}
