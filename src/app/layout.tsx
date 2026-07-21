import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-garamond",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Laws Way | Distinguished Legal Counsel in New Delhi",
  description:
    "The Laws Way is a full-service law firm in New Delhi advising discerning individuals and enterprises across corporate, family, criminal, real estate and civil litigation matters.",
  keywords: [
    "law firm New Delhi",
    "corporate lawyers Delhi",
    "criminal defence",
    "civil litigation",
    "real estate law",
    "family law",
  ],
  openGraph: {
    title: "The Laws Way | Distinguished Legal Counsel",
    description:
      "Discreet, decisive counsel for those who cannot afford to be wrong.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${garamond.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
