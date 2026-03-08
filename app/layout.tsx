import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Random Software",
    template: "%s | Random Software",
  },
  description:
    "Software with something to say. A collection of intentional tools and experiments by a builder who believes software should serve people, not scale.",
  keywords: [
    "software",
    "tools",
    "vibecoding",
    "indie software",
    "developer",
    "portfolio",
  ],
  authors: [{ name: "Random Software" }],
  creator: "Random Software",
  metadataBase: new URL("https://random-software.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://random-software.com",
    siteName: "Random Software",
    title: "Random Software",
    description:
      "Software with something to say. Intentional tools and experiments for people who build.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Software",
    description:
      "Software with something to say. Intentional tools and experiments for people who build.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
