import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import FloatingCTABubble from "@/components/FloatingCTABubble";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Locksmith24hour | 24/7 Emergency Locksmith | DBS Checked",
  description: "Local emergency locksmiths across England, Scotland & Wales — arrive ≤30 mins, no call-out fee, all locks insurance-approved, DBS-checked technicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showBubble = process.env.NEXT_PUBLIC_SHOW_CTA_BUBBLE !== "false";

  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
        {showBubble && <FloatingCTABubble />}
      </body>
    </html>
  );
}
