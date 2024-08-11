import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <head>
      <meta content="Embed Title" property="og:title" />
      <meta content="Site Description" property="og:description" />
      <meta content="https://cliqk.studio/" property="og:url" />
      <meta content="https://cliqk.studio/imgs/logo.png" property="og:image" />
      <meta content="#8980F5" data-react-helmet="true" name="theme-color" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
