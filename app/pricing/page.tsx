import Link from 'next/link'

export const metadata = {
  title: 'Pricing - Piecerie',
  description: 'Simple, affordable pricing for artists. Your art, handled.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-archivo), system-ui, sans-serif' }}
          >
            <span className="text-[#6b7f5b]">P</span>
            <span className="text-[#2d2d2d]">ie</span>
            <span className="text-[#6b7f5b]">c</span>
            <span className="text-[#2d2d2d]">e</span>
            <span className="text-[#6b7f5b]">r</span>
            <span className="text-[#2d2d2d]">ie</span>
          </Link>
          <nav className="flex gap-8 items-center">
            <Link href="/resources" className="text-[11px] uppercase tracking-[0.15em] text-[#6b7f5b] hover:text-[var(--foreground)]">Resources</Link>
            <Link href="/pricing" className="text-[11px] uppercase tracking-[0.15em] text-[#6b7f5b] border-b border-[#5a6350] pb-0.5">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b7f5b] mb-4">Pricing</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase">
            Your Art, <span className="text-[#6b7f5b] italic">Handled</span>.
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="border border-[var(--border)] p-10 rounded-xl bg-white">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b7f5b] mb-2">Free</p>
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Get started</h2>
            <p className="text-[var(--foreground)] text-sm mb-8">Everything you need to begin</p>
            <div className="mb-10">
              <span className="text-5xl font-semibold tracking-tight">$0</span>
              <span className="text-[#6b7f5b] ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm">
              {[
                'Up to 30 artworks',
                'Basic image editing',
                '3 PDF templates (with watermark)',
                'Instagram import',
                'CSV import & export',
                'Portfolio page',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#6b7f5b] mt-0.5">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://apps.apple.com/app/piecerie"
              className="block w-full text-center py-3.5 border border-[var(--border)] text-sm tracking-wide rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="border-2 border-[var(--accent)] p-10 rounded-xl bg-white relative">
            <div className="absolute -top-3 left-8 bg-[#6b7f5b] text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
              Recommended
            </div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b7f5b] mb-2">Pro</p>
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Go professional</h2>
            <p className="text-[var(--foreground)] text-sm mb-8">The full studio</p>
            <div className="mb-10">
              <span className="text-5xl font-semibold tracking-tight">$9.99</span>
              <span className="text-[#6b7f5b] ml-2">/month</span>
              <p className="text-xs text-[#6b7f5b] mt-1">or $99/year (save 17%)</p>
            </div>
            <ul className="space-y-4 mb-10 text-sm">
              {[
                'Unlimited artworks',
                'All PDF templates',
                'Watermark-free exports',
                'Custom branding & logo',
                'Public artist profile with custom URL',
                'Instagram & Shopify integrations',
                'CSV import & export with collections',
                'QR codes for your profile',
                'Priority support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#6b7f5b] mt-0.5">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://apps.apple.com/app/piecerie"
              className="block w-full text-center py-3.5 bg-[var(--accent)] text-white text-sm tracking-wide rounded-lg hover:bg-[var(--accent-light)]"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-28 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b7f5b] mb-4 text-center">FAQ</p>
          <h2 className="text-2xl font-semibold tracking-tight text-center mb-12">Common questions</h2>
          <div className="space-y-8">
            {[
              { q: 'Can I try Pro before paying?', a: 'Yes. Start with a 7-day free trial. Cancel anytime.' },
              { q: 'What happens if I cancel Pro?', a: 'Your artwork stays safe. You\'ll be limited to 30 artworks and basic features.' },
              { q: 'Which integrations are included?', a: 'Pro includes Instagram import, Shopify integration, and CSV import/export with auto-collection creation.' },
              { q: 'Is there an annual plan?', a: 'Yes. $99/year saves 17% compared to monthly.' },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-[var(--border)] pb-6">
                <h3 className="font-medium mb-2">{faq.q}</h3>
                <p className="text-[var(--foreground)] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-20">
        <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--foreground)]">
          <div>&copy; {new Date().getFullYear()} Piecerie</div>
          <div className="flex gap-8">
            <Link href="/resources" className="text-[#6b7f5b] hover:text-[var(--foreground)]">Resources</Link>
            <Link href="/pricing" className="text-[#6b7f5b] hover:text-[var(--foreground)]">Pricing</Link>
            <a href="mailto:support@piecerie.com" className="text-[#6b7f5b] hover:text-[var(--foreground)]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
