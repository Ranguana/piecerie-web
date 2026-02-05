import Link from 'next/link'

export const metadata = {
  title: 'Pricing - Piecerie',
  description: 'Simple, affordable pricing for artists. Start free, upgrade when you need more.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl italic">
            Piecerie
          </Link>
          <nav className="flex gap-10 text-sm tracking-wide">
            <Link href="/resources" className="hover:text-[#9a3412]">Resources</Link>
            <Link href="/pricing" className="text-[#9a3412]">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9a3412] mb-4">Pricing</p>
          <h1 className="text-5xl md:text-6xl italic font-normal mb-4">Simple & transparent</h1>
          <p className="text-lg text-[#1a1a1a]/60">
            Start free. Upgrade when you need more.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="border border-[#1a1a1a]/10 p-10 bg-white">
            <p className="text-sm tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-2">Free</p>
            <h2 className="text-3xl italic mb-2">Get Started</h2>
            <p className="text-[#1a1a1a]/60 mb-8">Everything you need to begin</p>
            <div className="mb-10">
              <span className="text-5xl font-light">$0</span>
              <span className="text-[#1a1a1a]/40 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-10 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Up to <em>30 artworks</em></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>All editing features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Import from Instagram</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Basic PDF templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Portfolio page</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>1 store integration</span>
              </li>
            </ul>
            <Link
              href="https://apps.apple.com/app/piecerie"
              className="block w-full text-center py-4 border border-[#1a1a1a]/20 text-sm tracking-wide hover:border-[#1a1a1a]"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="border border-[#1a1a1a] p-10 bg-white relative">
            <div className="absolute -top-3 left-8 bg-[#9a3412] text-white text-xs tracking-wider uppercase px-3 py-1">
              Recommended
            </div>
            <p className="text-sm tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-2">Pro</p>
            <h2 className="text-3xl italic mb-2">Go Professional</h2>
            <p className="text-[#1a1a1a]/60 mb-8">For serious artists</p>
            <div className="mb-10">
              <span className="text-5xl font-light">$9.99</span>
              <span className="text-[#1a1a1a]/40 ml-2">/month</span>
              <p className="text-sm text-[#1a1a1a]/40 mt-1">or $99/year (save 17%)</p>
            </div>
            <ul className="space-y-4 mb-10 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span><em>Unlimited</em> artworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>All PDF templates, watermark-free</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Custom branding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Inquiry & commission form</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Etsy + Shopify integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Inventory sync & QR codes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9a3412] mt-1">—</span>
                <span>Analytics + Priority support</span>
              </li>
            </ul>
            <Link
              href="https://apps.apple.com/app/piecerie"
              className="block w-full text-center py-4 bg-[#1a1a1a] text-[#faf9f7] text-sm tracking-wide hover:bg-[#9a3412]"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-28 max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9a3412] mb-4 text-center">FAQ</p>
          <h2 className="text-3xl italic text-center mb-12">Common questions</h2>
          <div className="space-y-8">
            <div className="border-b border-[#1a1a1a]/10 pb-6">
              <h3 className="font-normal mb-2">Can I try Pro before paying?</h3>
              <p className="text-[#1a1a1a]/60 text-[15px]">Yes. Start with a 7-day free trial. Cancel anytime.</p>
            </div>
            <div className="border-b border-[#1a1a1a]/10 pb-6">
              <h3 className="font-normal mb-2">What happens if I cancel Pro?</h3>
              <p className="text-[#1a1a1a]/60 text-[15px]">Your artwork stays safe. You'll be limited to 30 pieces and basic features.</p>
            </div>
            <div className="border-b border-[#1a1a1a]/10 pb-6">
              <h3 className="font-normal mb-2">Can I switch store integrations?</h3>
              <p className="text-[#1a1a1a]/60 text-[15px]">Yes. On Free, you can use one at a time. Pro includes both.</p>
            </div>
            <div className="border-b border-[#1a1a1a]/10 pb-6">
              <h3 className="font-normal mb-2">Is there an annual plan?</h3>
              <p className="text-[#1a1a1a]/60 text-[15px]">Yes. $99/year saves 17% compared to monthly.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a]/10 mt-20">
        <div className="max-w-6xl mx-auto px-8 py-8 text-center text-sm text-[#1a1a1a]/50 italic">
          &copy; {new Date().getFullYear()} Piecerie
        </div>
      </footer>
    </div>
  )
}
