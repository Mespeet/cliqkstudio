import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cliqk Studio",
  description: "Your All-In-One Developer Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://views.cliqk.studio/script.js" data-website-id="2ad39aa0-516a-41af-9df2-aa3ec29c7e19" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
