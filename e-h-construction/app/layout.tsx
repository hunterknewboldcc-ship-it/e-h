import type { Metadata } from "next";
import { Oswald, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: '--font-heading',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: "E&H Construction",
  description: "Your DFW Home, Rebuilt Right. Custom remodels. No shortcuts. River Oaks to Dallas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${robotoCondensed.variable} font-body bg-eh-white text-eh-charcoal`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
