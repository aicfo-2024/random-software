import { MDXLayout } from "@/app/components/MDXLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Docket - Random Software",
  description:
    "One event list to rule them all for SXSW regulars: plan your week, share your schedule, and link up with your people.",
  openGraph: {
    title: "The Docket | Random Software",
    description:
      "One event list to rule them all for SXSW regulars: plan your week, share your schedule, and link up with your people.",
  },
};

export default function DocketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXLayout>{children}</MDXLayout>;
}
