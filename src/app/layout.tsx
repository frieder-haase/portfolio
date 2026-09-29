import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frieder Haase – Junior Developer",
  description: "Fachinformatiker in Anwendungsentwicklung. Motivierter Junior Developer mit Interesse an Web- und Game Development.",
  keywords: "Junior Developer, Web Development, Game Development, Graphic Design, JavaScript, React, Portfolio, Full-Stack, Junior, Fachinformatiker, Anwendungsentwicklung",
  authors: [{ name: "Frieder Haase" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={spaceMono.variable}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
