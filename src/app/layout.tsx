import "./globals.css";
import { Shippori_Antique_B1 } from "next/font/google";

export const metadata = {
  title: "Next Three",
  description: "Next.js × Three.js Demo Page",
};

const ShipporiAntiqueB1 = Shippori_Antique_B1({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={ShipporiAntiqueB1.className}>{children}</body>
    </html>
  );
}
