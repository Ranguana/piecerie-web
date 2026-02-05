import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-[#e85a4f]">P</span>
            <span className="text-[#2d2d2d]">ie</span>
            <span className="text-[#d9a441]">c</span>
            <span className="text-[#2d2d2d]">e</span>
            <span className="text-[#2d7d6e]">r</span>
            <span className="text-[#2d2d2d]">ie</span>
          </Link>
          <nav className="flex gap-10 text-sm tracking-wide">
            <Link href="/resources" className="hover:text-[#2d7d6e]">Resources</Link>
            <Link href="/pricing" className="hover:text-[#2d7d6e]">Pricing</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#2d7d6e] mb-4">For Artists</p>
            <h1 className="text-5xl md:text-7xl italic font-normal leading-tight mb-6">
              Your art,<br />beautifully organized
            </h1>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed mb-10 max-w-md">
              Catalog your artwork. Generate professional line sheets, portfolios, and catalogs in seconds.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://apps.apple.com/app/piecerie"
                className="bg-[#1a1a1a] text-[#faf9f7] px-8 py-4 text-sm tracking-wide hover:bg-[#2d7d6e]"
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
        </section>

        {/* Templates Section */}
        <section className="border-t border-[#1a1a1a]/10 bg-white">
          <div className="max-w-6xl mx-auto px-8 py-24">
            <p className="text-sm tracking-[0.3em] uppercase text-[#2d7d6e] mb-4">Templates</p>
            <h2 className="text-4xl md:text-5xl italic font-normal mb-6">Professional PDFs in seconds</h2>
            <p className="text-lg text-[#1a1a1a]/60 mb-16 max-w-xl">
              Choose from six beautiful templates designed for galleries, collectors, and wholesale buyers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {/* Line Sheet - 6 items in 2x3 grid with pricing */}
              <div>
                <div className="bg-white border border-[#1a1a1a]/10 p-4 mb-4 hover:border-[#1a1a1a]/30 transition-colors">
                  <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#1a1a1a]/10">
                    <div className="w-16 h-3 bg-[#1a1a1a]/10 rounded" />
                    <div className="w-10 h-2 bg-[#1a1a1a]/5 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div><div className="w-full h-16 bg-[#e85a4f]/20 rounded-sm mb-1" /><div className="h-1 bg-[#1a1a1a]/10 rounded w-full mb-0.5" /><div className="h-1 bg-[#1a1a1a]/5 rounded w-2/3" /></div>
                    <div><div className="w-full h-16 bg-[#d9a441]/20 rounded-sm mb-1" /><div className="h-1 bg-[#1a1a1a]/10 rounded w-full mb-0.5" /><div className="h-1 bg-[#1a1a1a]/5 rounded w-2/3" /></div>
                    <div><div className="w-full h-16 bg-[#2d7d6e]/20 rounded-sm mb-1" /><div className="h-1 bg-[#1a1a1a]/10 rounded w-full mb-0.5" /><div className="h-1 bg-[#1a1a1a]/5 rounded w-2/3" /></div>
                    <div><div className="w-full h-16 bg-[#1a1a1a]/10 rounded-sm mb-1" /><div className="h-1 bg-[#1a1a1a]/10 rounded w-full mb-0.5" /><div className="h-1 bg-[#1a1a1a]/5 rounded w-2/3" /></div>
                    <div><div className="w-full h-16 bg-[#2d7d6e]/20 rounded-sm mb-1" /><div className="h-1 bg-[#1a1a1a]/10 rounded w-full mb-0.5" /><div className="h-1 bg-[#1a1a1a]/5 rounded w-2/3" /></div>
                    <div><div className="w-full h-16 bg-[#e85a4f]/20 rounded-sm mb-1" /><div className="h-1 bg-[#1a1a1a]/10 rounded w-full mb-0.5" /><div className="h-1 bg-[#1a1a1a]/5 rounded w-2/3" /></div>
                  </div>
                </div>
                <h3 className="font-medium mb-1">Line Sheet</h3>
                <p className="text-sm text-[#1a1a1a]/50">Multiple pieces per page with SKU & pricing</p>
              </div>

              {/* Catalog - 2 images per page */}
              <div>
                <div className="bg-white border border-[#1a1a1a]/10 p-4 mb-4 hover:border-[#1a1a1a]/30 transition-colors">
                  <div className="space-y-4">
                    <div>
                      <div className="w-full h-20 bg-[#2d7d6e]/20 rounded-sm mb-2" />
                      <div className="w-1/2 h-2 bg-[#1a1a1a]/10 rounded mb-1" />
                      <div className="w-3/4 h-1.5 bg-[#1a1a1a]/5 rounded" />
                    </div>
                    <div>
                      <div className="w-full h-20 bg-[#d9a441]/20 rounded-sm mb-2" />
                      <div className="w-1/2 h-2 bg-[#1a1a1a]/10 rounded mb-1" />
                      <div className="w-3/4 h-1.5 bg-[#1a1a1a]/5 rounded" />
                    </div>
                  </div>
                </div>
                <h3 className="font-medium mb-1">Catalog</h3>
                <p className="text-sm text-[#1a1a1a]/50">Two artworks per page with details</p>
              </div>

              {/* Portfolio - elegant presentation */}
              <div>
                <div className="bg-white border border-[#1a1a1a]/10 p-6 mb-4 hover:border-[#1a1a1a]/30 transition-colors">
                  <div className="w-full h-40 bg-[#e8927c]/20 rounded-sm mb-4" />
                  <div className="w-1/3 h-2 bg-[#1a1a1a]/10 rounded mx-auto mb-1" />
                  <div className="w-1/2 h-1.5 bg-[#1a1a1a]/5 rounded mx-auto" />
                </div>
                <h3 className="font-medium mb-1">Portfolio</h3>
                <p className="text-sm text-[#1a1a1a]/50">Elegant presentation for collectors</p>
              </div>

              {/* Grid - simple 3x3 thumbnail grid */}
              <div>
                <div className="bg-white border border-[#1a1a1a]/10 p-4 mb-4 hover:border-[#1a1a1a]/30 transition-colors">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-full h-14 bg-[#e85a4f]/20 rounded-sm" />
                    <div className="w-full h-14 bg-[#d9a441]/20 rounded-sm" />
                    <div className="w-full h-14 bg-[#2d7d6e]/20 rounded-sm" />
                    <div className="w-full h-14 bg-[#1a1a1a]/10 rounded-sm" />
                    <div className="w-full h-14 bg-[#2d7d6e]/20 rounded-sm" />
                    <div className="w-full h-14 bg-[#e85a4f]/20 rounded-sm" />
                    <div className="w-full h-14 bg-[#2d7d6e]/20 rounded-sm" />
                    <div className="w-full h-14 bg-[#d9a441]/20 rounded-sm" />
                    <div className="w-full h-14 bg-[#1a1a1a]/10 rounded-sm" />
                  </div>
                </div>
                <h3 className="font-medium mb-1">Grid</h3>
                <p className="text-sm text-[#1a1a1a]/50">Quick overview of your collection</p>
              </div>

              {/* Consignment - list with signature line */}
              <div>
                <div className="bg-white border border-[#1a1a1a]/10 p-4 mb-4 hover:border-[#1a1a1a]/30 transition-colors">
                  <div className="text-center pb-2 border-b border-[#1a1a1a]/10 mb-3">
                    <div className="w-1/2 h-2 bg-[#1a1a1a]/10 rounded mx-auto mb-1" />
                    <div className="w-1/3 h-1.5 bg-[#1a1a1a]/5 rounded mx-auto" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex gap-2 items-center"><div className="w-8 h-8 bg-[#2d7d6e]/20 rounded-sm flex-shrink-0" /><div className="flex-1 h-1.5 bg-[#1a1a1a]/10 rounded" /><div className="w-12 h-1.5 bg-[#1a1a1a]/5 rounded" /></div>
                    <div className="flex gap-2 items-center"><div className="w-8 h-8 bg-[#e85a4f]/20 rounded-sm flex-shrink-0" /><div className="flex-1 h-1.5 bg-[#1a1a1a]/10 rounded" /><div className="w-12 h-1.5 bg-[#1a1a1a]/5 rounded" /></div>
                    <div className="flex gap-2 items-center"><div className="w-8 h-8 bg-[#2d7d6e]/20 rounded-sm flex-shrink-0" /><div className="flex-1 h-1.5 bg-[#1a1a1a]/10 rounded" /><div className="w-12 h-1.5 bg-[#1a1a1a]/5 rounded" /></div>
                  </div>
                  <div className="pt-3 border-t border-[#1a1a1a]/10">
                    <div className="w-1/4 h-1.5 bg-[#1a1a1a]/5 rounded mb-2" />
                    <div className="w-1/3 h-px bg-[#1a1a1a]/30" />
                  </div>
                </div>
                <h3 className="font-medium mb-1">Consignment</h3>
                <p className="text-sm text-[#1a1a1a]/50">For galleries with signature lines</p>
              </div>

            </div>
          </div>
        </section>
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
