import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE_URL } from "@/lib/site";

// Schriftart
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

// Seitentitel und Beschreibung (Browser-Tab und Linkvorschau)
const title = "Frieder Haase – Junior Developer";
const description =
  "Fachinformatiker in Anwendungsentwicklung. Motivierter Junior Developer mit Interesse an Web- und Game Development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Frieder Haase",
  },
  description,
  keywords:
    "Junior Developer, Web Development, Game Development, Graphic Design, JavaScript, React, Portfolio, Full-Stack, Junior, Fachinformatiker, Anwendungsentwicklung",
  authors: [{ name: "Frieder Haase" }],
  // Nicht in Suchmaschinen indexieren
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
  // Linkvorschau (LinkedIn, WhatsApp usw.)
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Frieder Haase",
    title,
    description,
    images: [{ url: "/assets/projekte/Ticketsystem.png", alt: "Ticketsystem für maßnahme-direkt.de" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/projekte/Ticketsystem.png"],
  },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
