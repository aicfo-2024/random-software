import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Random Software",
  description: "A collection of experiments, tools, and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
