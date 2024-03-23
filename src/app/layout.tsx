import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSDEV Creative",
  description: "Impulsione seu negócio com estratégia, design e tecnologia",
  openGraph: {
    images: [{
      type: 'website',
      url: 'https://nsdev.vercel.app',
      width: 800,
      height: 600
    }]
  },
  twitter: {
    site: 'https://nsdev.vercel.app',
    images: [{
      type: 'website',
      url: 'https://nsdev.vercel.app',
      width: 800,
      height: 600
    }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased min-h-screen`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
