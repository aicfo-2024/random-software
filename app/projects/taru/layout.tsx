import { MDXLayout } from "@/app/components/MDXLayout";

export default function TaruLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXLayout>{children}</MDXLayout>;
}
