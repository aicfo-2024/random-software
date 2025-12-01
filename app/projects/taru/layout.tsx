import { MDXLayout } from "@/app/components/MDXLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taru",
  description:
    "An AI-powered content processing system that transforms scattered information into structured knowledge. Automated RSS digests, podcast production, and persistent memory extraction.",
  openGraph: {
    title: "Taru | Random Software",
    description:
      "An AI-powered content processing system that transforms scattered information into structured knowledge.",
  },
};

export default function TaruLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXLayout>{children}</MDXLayout>;
}
