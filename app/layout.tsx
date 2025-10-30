import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mistie - Abstract Artist",
  description: "Explore the world of Mistie's abstract paintings. Contemporary art from a world-renowned artist.",
  keywords: ["abstract art", "contemporary artist", "paintings", "Mistie", "gallery"],
  authors: [{ name: "Mistie" }],
  openGraph: {
    title: "Mistie - Abstract Artist",
    description: "Explore the world of Mistie's abstract paintings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
        style={{ paddingTop: 'var(--header-height)' }}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
