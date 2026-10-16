import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/products",
  "/business-supply",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://depelsfood.com${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index < 4 ? 0.8 : 0.5,
  }));
}
