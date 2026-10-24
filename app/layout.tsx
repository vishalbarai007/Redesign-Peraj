import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { siteConfig } from "@/data/siteConfig";
import { SmoothScrollProvider } from "@/components/reusable/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Peraj Insurance Brokers | Commercial Risk Advisory Since 1951",
  description:
    "Tailored corporate insurance advice, risk diagnostics, and independent claims advocacy for Indian enterprises and multinational operations.",
  openGraph: {
    title: "Peraj Insurance Brokers | Commercial Risk Advisory",
    description: "Insurance solutions that understand businesses and the people behind them.",
    url: "https://www.peraj.com",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#102A43" />
      </head>
      <body className="min-h-screen bg-[#F7F8FA] text-[#243746] antialiased selection:bg-[#007F73]/20 selection:text-[#102A43]">
        <SmoothScrollProvider>
          {children}
          <Toaster position="bottom-right" richColors />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
