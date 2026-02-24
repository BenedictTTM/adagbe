import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import ClientDecorations from "@/components/ClientDecorations";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "KÆST Ventures | Style Meets Purpose",
  description: "Fashion that inspires confidence, celebrates individuality, and elevates everyday living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-background text-text selection:bg-accent selection:text-black`}
      >
        <CartProvider>
          <SmoothScroll>
            <ClientDecorations />
            <Navbar />
            <Cart />
            {children}
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
