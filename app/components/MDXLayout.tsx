import { ReactNode } from "react";

interface MDXLayoutProps {
  children: ReactNode;
}

export function MDXLayout({ children }: MDXLayoutProps) {
  return (
    <main className="min-h-screen bg-base-bg pt-24">
      <article className="max-w-3xl mx-auto px-6 py-20">{children}</article>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-8 text-center border-t border-base-border mt-12">
        <p className="text-sm text-base-text/50">
          Built with Next.js · Deployed on Vercel
        </p>
      </footer>
    </main>
  );
}
