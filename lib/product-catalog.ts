export type ProductVariant = { id: string; label: string; weight: string; image: string; ingredientsImage?: string; description: string };
export type ProductInfo = { slug: string; name: string; type: string; description: string; image: string; detail: string; variants: ProductVariant[]; note?: string };
const productImage = (name: string) => `/images/products/${name}`;

export const productCatalog: ProductInfo[] = [
  {
    slug: "mix-grain-pap",
    name: "Mix Grain Pap",
    type: "Family favourite",
    description: "A comforting grain blend for family breakfasts and everyday nourishment.",
    image: productImage("mix-grain-pap.webp"),
    detail: "A versatile pap option for breakfast and everyday family routines. Select a listed pack size and ask our team to confirm availability and price.",
    variants: [
      { id: "regular-500g", label: "Regular Pap", weight: "500g", image: productImage("mix-grain-pap.webp"), ingredientsImage: productImage("mix-grain-pap-ingredients.webp"), description: "Regular Mix Grain Pap · 500g" },
      { id: "regular-1kg", label: "Regular Pap", weight: "1kg", image: productImage("mix-grain-pap.webp"), ingredientsImage: productImage("mix-grain-pap-ingredients.webp"), description: "Regular Mix Grain Pap · 1kg" },
    ],
  },
  {
    slug: "mix-grain-pap-powder",
    name: "Mix Grain Pap Powder",
    type: "Family favourite · Powder",
    description: "Mix Grain Pap in powder form, with its own product page and ordering options.",
    image: productImage("mix-grain-pap-powder.webp"),
    detail: "Mix Grain Pap Powder for everyday food routines. Select a listed pack size; availability and pricing are confirmed by our team.",
    variants: [
      { id: "powder-500g", label: "Pap Powder", weight: "500g", image: productImage("mix-grain-pap-powder.webp"), ingredientsImage: productImage("mix-grain-pap-powder-ingredients.webp"), description: "Mix Grain Pap Powder · 500g" },
      { id: "powder-1kg", label: "Pap Powder", weight: "1kg", image: productImage("mix-grain-pap-powder.webp"), ingredientsImage: productImage("mix-grain-pap-powder-ingredients.webp"), description: "Mix Grain Pap Powder · 1kg" },
    ],
  },
  {
    slug: "baby-special-pap",
    name: "Baby Special Pap",
    type: "Gentle family care",
    description: "A pap option for families caring for little ones.",
    image: productImage("baby-special-pap.webp"),
    detail: "A pap option for families caring for little ones. Always check the pack ingredients and age guidance before feeding.",
    variants: [
      { id: "regular-500g", label: "Regular Pap", weight: "500g", image: productImage("baby-special-pap.webp"), ingredientsImage: productImage("baby-special-pap-ingredients.webp"), description: "Baby Special Pap · 500g" },
      { id: "regular-550g", label: "Regular Pap", weight: "550g", image: productImage("baby-special-pap.webp"), ingredientsImage: productImage("baby-special-pap-ingredients.webp"), description: "Baby Special Pap · 550g" },
      { id: "regular-1kg", label: "Regular Pap", weight: "1kg", image: productImage("baby-special-pap.webp"), ingredientsImage: productImage("baby-special-pap-ingredients.webp"), description: "Baby Special Pap · 1kg" },
    ],
  },
  {
    slug: "baby-special-pap-powder",
    name: "Baby Special Pap Powder",
    type: "Gentle family care · Powder",
    description: "Baby Special Pap Powder listed separately for easier browsing and ordering.",
    image: productImage("baby-special-pap-powder.webp"),
    detail: "Baby Special Pap Powder for families caring for little ones. Always check the pack ingredients and age guidance before feeding; availability and pricing are confirmed by our team.",
    variants: [
      { id: "powder-500g", label: "Pap Powder", weight: "500g", image: productImage("baby-special-pap-powder.webp"), ingredientsImage: productImage("baby-special-pap-powder-ingredients.webp"), description: "Baby Special Pap Powder · 500g" },
      { id: "powder-1kg", label: "Pap Powder", weight: "1kg", image: productImage("baby-special-pap-powder.webp"), ingredientsImage: productImage("baby-special-pap-powder-ingredients.webp"), description: "Baby Special Pap Powder · 1kg" },
    ],
  },
  {
    slug: "beans-powder",
    name: "Beans Powder",
    type: "Kitchen essential",
    description: "A convenient pantry staple for preparing akara, moimoi and other bean-based meals.",
    image: productImage("beans.webp"),
    detail: "A convenient pantry staple for preparing akara, moimoi and other bean-based meals. Ask our team which pack sizes are currently available.",
    variants: [{ id: "standard", label: "Beans Powder", weight: "Pack size by request", image: productImage("beans.webp"), description: "Beans Powder" }],
  },
  {
    slug: "natural-honey",
    name: "Natural Honey",
    type: "A breakfast companion",
    description: "A naturally sweet pantry companion for pap, breakfast and everyday recipes.",
    image: productImage("natural-honey.webp"),
    detail: "A naturally sweet pantry companion for pap, breakfast and everyday recipes. Ask our team which pack sizes are currently available.",
    note: "Do not give honey to children under 12 months.",
    variants: [{ id: "standard", label: "Natural Honey", weight: "Pack size by request", image: productImage("natural-honey.webp"), description: "Natural Honey" }],
  },
  {
    slug: "soya-mix-powder",
    name: "Soya Mix Powder",
    type: "Plant-based variety",
    description: "A versatile soya blend for adding more variety to everyday food routines.",
    image: productImage("soya.webp"),
    detail: "A versatile soya blend for adding more variety to everyday food routines. Check the product packaging for ingredients and allergen information, and ask our team about available pack sizes.",
    note: "Contains soya. Check the ingredient label for allergen information.",
    variants: [{ id: "standard", label: "Soya Mix Powder", weight: "Pack size by request", image: productImage("soya.webp"), ingredientsImage: productImage("soya-ingredients.webp"), description: "Soya Mix Powder" }],
  },
];

export function getProduct(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}
