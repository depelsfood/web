import type { Metadata } from "next";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import ProductDetailClient from "../../../components/ProductDetailClient";
import { getProduct, productCatalog } from "../../../lib/product-catalog";

export function generateStaticParams() {
  return productCatalog.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: { title: `${product.name} | Depel's Food Enterprise`, description: product.description, images: [product.image] },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return <main><SiteHeader /><section className="container py-24"><h1 className="text-3xl font-extrabold text-[var(--green-dark)]">Product not found</h1><p className="mt-3 text-black/60">This product may have moved or is not currently listed.</p><a href="/products" className="mt-6 inline-flex rounded-full bg-[var(--green)] px-6 py-3 font-bold text-white">Browse products</a></section><SiteFooter /></main>;
  }
  return <main><SiteHeader /><ProductDetailClient product={product} /><SiteFooter /></main>;
}
