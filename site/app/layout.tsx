import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AlphaXBot",
  description: "Trade like an ALPHA with AI-powered onchain analysis!",
  metadataBase: new URL("https://alphaxbot.vercel.app"),
  openGraph: {
    title: "AlphaXBot",
    description: "Trade like an ALPHA with AI-powered onchain analysis!",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081428",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syne.variable}>
      <body className="font-syne antialiased">{children}</body>
    </html>
  );
}
