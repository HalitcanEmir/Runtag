import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Liquid Glass Tech Studio",
  description: "Crew-based liquid-glass tech studio homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-app-gradient text-slate-100 antialiased transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
