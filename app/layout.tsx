import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habo Tuna Factory - The Tastiest Fish in Town",
  description:
    "Leading producer and distributor of premium seafood products including white-meat tuna, sardines, and mackerel. Located in Bosaso, Puntland State, Somalia.",
  keywords:
    "tuna, seafood, sardines, mackerel, Somalia, Bosaso, fish factory, canned fish, omega-3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
