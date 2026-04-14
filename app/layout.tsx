import type { Metadata } from "next";
import { Modak } from "next/font/google"; 
import "./globals.css";

const modak = Modak({
  variable: "--font-modak",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jouse te invita",
  description: "a celebrar su primer añito",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${modak.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
