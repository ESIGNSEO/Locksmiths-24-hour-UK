import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Locksmiths24hour | 24/7 Emergency Locksmith | DBS Checked",
  description: "Local emergency locksmiths across England, Scotland & Wales — arrive ≤30 mins, no call-out fee, all locks insurance-approved, DBS-checked technicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <head>
        <title>Locksmiths24hour | 24/7 Emergency Locksmith</title>
        <meta name="description" content="Local emergency locksmiths across England, Scotland & Wales." />
        <meta property="og:title" content="Locksmiths24hour" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
