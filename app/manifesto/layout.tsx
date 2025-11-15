import { MDXLayout } from "@/app/components/MDXLayout";

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXLayout>{children}</MDXLayout>;
}
