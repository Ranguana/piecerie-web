import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl italic">
            Piecerie
          </Link>
          <nav className="flex gap-10 text-sm tracking-wide">
            <Link href="/resources" className="hover:text-[#9a3412]">Resources</Link>
            <Link href="/pricing" className="hover:text-[#9a3412]">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#9a3412] mb-4">For Artists</p>
            <h1 className="text-5xl md:text-7xl italic font-normal leading-tight mb-6">
              Your art,<br />beautifully organized
            </h1>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed mb-10 max-w-md">
              Catalog your artwork. Generate professional line sheets, portfolios, and catalogs in seconds.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://apps.apple.com/app/piecerie"
                className="bg-[#1a1a1a] text-[#faf9f7] px-8 py-4 text-sm tracking-wide hover:bg-[#9a3412]"
              >
                Download App
              </Link>
              <Link
                href="/demo"
                className="border border-[#1a1a1a]/30 px-8 py-4 text-sm tracking-wide hover:border-[#1a1a1a]"
              >
                View Demo
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 flex items-center justify-center">
              <span className="text-[#1a1a1a]/20 italic text-2xl">App Preview</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#1a1a1a]/50">
          <div className="italic">&copy; {new Date().getFullYear()} Piecerie</div>
          <div className="flex gap-8">
            <Link href="/resources" className="hover:text-[#1a1a1a]">Resources</Link>
            <Link href="/pricing" className="hover:text-[#1a1a1a]">Pricing</Link>
            <a href="mailto:support@piecerie.com" className="hover:text-[#1a1a1a]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
