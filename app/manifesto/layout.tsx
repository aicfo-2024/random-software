import { MDXLayout } from "@/app/components/MDXLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "The philosophy behind vibecoding: building software for yourself first, rejecting the tyranny of scale, and creating tools that serve people instead of metrics.",
  openGraph: {
    title: "Manifesto | Random Software",
    description:
      "The philosophy behind vibecoding: building software for yourself first and rejecting the tyranny of scale.",
  },
};

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXLayout>{children}</MDXLayout>;
}
