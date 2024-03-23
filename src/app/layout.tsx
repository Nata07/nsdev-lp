import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSDEV Creative",
  description: "Impulsione seu negócio com estratégia, design e tecnologia",
  openGraph: {
    images: [{
      type: 'website',
      url: 'https://nsdev.vercel.app/logo.svg',
      width: 800,
      height: 600
    }]
  }
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
      </body>
    </html>
  );
}
