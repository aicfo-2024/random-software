import { ReactNode } from "react";

interface MDXLayoutProps {
  children: ReactNode;
}

export function MDXLayout({ children }: MDXLayoutProps) {
  return (
    <main className="min-h-screen bg-base-bg pt-16 md:pt-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-20">
        {children}
      </article>
    </main>
  );
}
