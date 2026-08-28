import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Depel's Food Enterprise | Quality Food Products in Nigeria",
  description:
    "Discover quality food products from Depel's Food Enterprise, including nutritious pap, beans, natural honey, dates, soya and more. Quality food for homes, families and businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
