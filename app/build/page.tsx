import { Navigation } from "@/app/components/Navigation";

export default function BuildPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-base-bg pt-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-wider text-brand-coral font-medium mb-4">
            Coming Soon
          </p>
          <h1 className="text-hero font-bold text-base-text mb-6">
            Vibecoding for Operators
          </h1>
          <p className="text-xl text-base-text/70 max-w-2xl mx-auto leading-relaxed mb-8">
            A course for founders, operators, and non-engineers who want to
            build software with intention—not obligation.
          </p>
          <a
            href="/manifesto"
            className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 font-medium"
          >
            Read the philosophy
            <span aria-hidden="true">→</span>
          </a>
        </section>

        {/* What You'll Learn */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-base-border rounded-lg">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-base-text mb-2">
                Build for yourself first
              </h3>
              <p className="text-base-text/70 text-sm">
                Learn to identify problems worth solving and create tools that
                serve your actual workflow.
              </p>
            </div>
            <div className="p-6 border border-base-border rounded-lg">
              <div className="text-2xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold text-base-text mb-2">
                Practical AI-assisted development
              </h3>
              <p className="text-base-text/70 text-sm">
                Use modern AI tools to prototype and build without years of
                traditional coding experience.
              </p>
            </div>
            <div className="p-6 border border-base-border rounded-lg">
              <div className="text-2xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-base-text mb-2">
                Ship something real
              </h3>
              <p className="text-base-text/70 text-sm">
                By the end, you&apos;ll have built and deployed a working tool
                that solves a problem you actually have.
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-h1 font-bold text-base-text mb-8 text-center">
            Who this is for
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-brand-green mt-1">✓</span>
              <p className="text-base-text/80">
                <strong>Operators and founders</strong> who have ideas for
                internal tools but no technical background
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-brand-green mt-1">✓</span>
              <p className="text-base-text/80">
                <strong>Curious builders</strong> who want to understand how
                software works without becoming full-time engineers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-brand-green mt-1">✓</span>
              <p className="text-base-text/80">
                <strong>Anyone frustrated</strong> by off-the-shelf tools that
                almost-but-don&apos;t-quite fit their workflow
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-br from-brand-green/10 to-brand-coral/10 rounded-2xl p-12 text-center">
            <h2 className="text-display font-bold text-base-text mb-4">
              Get notified when we launch
            </h2>
            <p className="text-base-text/70 mb-8 max-w-lg mx-auto">
              The course is currently in development. Join the waitlist to be
              first to know when enrollment opens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-base-border rounded-lg bg-base-bg text-base-text placeholder:text-base-text/40 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                disabled
              />
              <button
                className="px-6 py-3 bg-brand-green text-white font-medium rounded-lg opacity-50 cursor-not-allowed"
                disabled
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-xs text-base-text/50 mt-4">
              Waitlist signup coming soon
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-16 text-center border-t border-base-border mt-20">
          <p className="text-sm text-base-text/50">
            Built with Next.js · Deployed on Vercel
          </p>
        </footer>
      </main>
    </>
  );
}
