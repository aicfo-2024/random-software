import { ReactNode } from "react";

interface MDXLayoutProps {
  children: ReactNode;
}

export function MDXLayout({ children }: MDXLayoutProps) {
  return (
    <>
      {/* Fixed Minimal Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-base-bg/80 backdrop-blur-sm border-b border-base-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-semibold text-base-text hover:text-brand-green"
          >
            Random Software
          </a>
          <div className="flex gap-8 text-sm">
            <a
              href="/build"
              className="text-base-text hover:text-brand-green relative group"
            >
              Build
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300"></span>
            </a>
            <div className="relative group">
              <button className="text-base-text hover:text-brand-green relative">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-base-bg border border-base-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="/#taru"
                    className="block px-4 py-2 text-base-text hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    Taru
                  </a>
                  <a
                    href="/#project-two"
                    className="block px-4 py-2 text-base-text hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    Project Two
                  </a>
                  <a
                    href="/#project-three"
                    className="block px-4 py-2 text-base-text hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    Project Three
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/manifesto"
              className="text-base-text hover:text-brand-green relative group"
            >
              Manifesto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-base-bg pt-24">
        <article className="max-w-3xl mx-auto px-6 py-20">
          {children}
        </article>

        {/* Footer */}
        <footer className="max-w-3xl mx-auto px-6 py-16 text-center border-t border-base-border mt-20">
          <p className="text-sm text-base-text/50">
            Built with Next.js · Deployed on Vercel
          </p>
        </footer>
      </main>
    </>
  );
}
