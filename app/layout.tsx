import type { Metadata } from "next";
import FloatingSocialLinks from "../components/FloatingSocialLinks";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://depelsfood.com"),
  title: {
    default: "Depel's Food Enterprise | Quality Food Products in Nigeria",
    template: "%s | Depel's Food Enterprise",
  },
  description:
    "Explore Depel's Food Enterprise products including Mix Grain Pap, Baby Special Pap, Beans Powder, Natural Honey and Soya Mix Powder. Quality food for homes, families and businesses in Nigeria.",
  applicationName: "Depel's Food Enterprise",
  icons: {
    icon: "/images/logo/Depels_Food_Logo.svg",
    shortcut: "/images/logo/Depels_Food_Logo.svg",
    apple: "/images/logo/Depels_Food_Logo.svg",
  },
  keywords: [
    "Depel's Food Enterprise",
    "Mix Grain Pap",
    "Baby Special Pap",
    "Beans Powder",
    "Natural Honey",
    "Soya Mix Powder",
    "Nigerian food products",
    "food wholesale Nigeria",
    "food supply Osun State",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Depel's Food Enterprise",
    title: "Good Food Gives More | Depel's Food Enterprise",
    description:
      "Quality food products for everyday meals, families and growing businesses.",
    url: "https://depelsfood.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body>
        {children}
        <FloatingSocialLinks />
      </body>
    </html>
  );
}
