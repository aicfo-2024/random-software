import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibecoding for Operators | Random Software",
  description:
    "Learn to build software that matters. A course for operators, founders, and non-engineers who want to create tools with intention.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
