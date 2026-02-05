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
            <h1 className="text-5xl md:text-7xl font-normal leading-tight mb-6">
              <span className="text-[#1a1a1a]">Stop managing inventory.</span><br />
              <span className="text-[#e85a4f]">Start showing your work.</span>
            </h1>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed mb-10 max-w-md">
              Easily import and catalog your artwork. Generate professional line sheets, portfolios, and catalogs in seconds.
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

        {/* Templates & Integrations Section */}
        <section className="border-t border-[#1a1a1a]/10 bg-white">
          <div className="max-w-6xl mx-auto px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Templates */}
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-[#2d7d6e] mb-4">Templates</p>
                <h2 className="text-4xl md:text-5xl italic font-normal mb-6">Professional PDFs in seconds</h2>
                <p className="text-lg text-[#1a1a1a]/60 mb-12">
                  Choose from five templates designed for galleries, collectors, and wholesale buyers.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {/* Line Sheet */}
                  <div>
                    <div className="bg-white border border-[#1a1a1a]/10 p-3 mb-3 hover:border-[#1a1a1a]/30 transition-colors">
                      <div className="grid grid-cols-3 gap-1">
                        <div className="w-full h-10 bg-[#e85a4f]/20 rounded-sm" />
                        <div className="w-full h-10 bg-[#d9a441]/20 rounded-sm" />
                        <div className="w-full h-10 bg-[#2d7d6e]/20 rounded-sm" />
                        <div className="w-full h-10 bg-[#1a1a1a]/10 rounded-sm" />
                        <div className="w-full h-10 bg-[#2d7d6e]/20 rounded-sm" />
                        <div className="w-full h-10 bg-[#e85a4f]/20 rounded-sm" />
                      </div>
                    </div>
                    <h3 className="text-sm font-medium">Line Sheet</h3>
                  </div>

                  {/* Catalog */}
                  <div>
                    <div className="bg-white border border-[#1a1a1a]/10 p-3 mb-3 hover:border-[#1a1a1a]/30 transition-colors">
                      <div className="space-y-2">
                        <div className="w-full h-12 bg-[#2d7d6e]/20 rounded-sm" />
                        <div className="w-full h-12 bg-[#d9a441]/20 rounded-sm" />
                      </div>
                    </div>
                    <h3 className="text-sm font-medium">Catalog</h3>
                  </div>

                  {/* Portfolio */}
                  <div>
                    <div className="bg-white border border-[#1a1a1a]/10 p-3 mb-3 hover:border-[#1a1a1a]/30 transition-colors">
                      <div className="w-full h-24 bg-[#e8927c]/20 rounded-sm" />
                    </div>
                    <h3 className="text-sm font-medium">Portfolio</h3>
                  </div>

                  {/* Grid */}
                  <div>
                    <div className="bg-white border border-[#1a1a1a]/10 p-3 mb-3 hover:border-[#1a1a1a]/30 transition-colors">
                      <div className="grid grid-cols-3 gap-1">
                        <div className="w-full h-8 bg-[#e85a4f]/20 rounded-sm" />
                        <div className="w-full h-8 bg-[#d9a441]/20 rounded-sm" />
                        <div className="w-full h-8 bg-[#2d7d6e]/20 rounded-sm" />
                        <div className="w-full h-8 bg-[#1a1a1a]/10 rounded-sm" />
                        <div className="w-full h-8 bg-[#2d7d6e]/20 rounded-sm" />
                        <div className="w-full h-8 bg-[#e85a4f]/20 rounded-sm" />
                      </div>
                    </div>
                    <h3 className="text-sm font-medium">Grid</h3>
                  </div>

                  {/* Consignment */}
                  <div>
                    <div className="bg-white border border-[#1a1a1a]/10 p-3 mb-3 hover:border-[#1a1a1a]/30 transition-colors">
                      <div className="space-y-1.5">
                        <div className="flex gap-1 items-center"><div className="w-6 h-6 bg-[#2d7d6e]/20 rounded-sm" /><div className="flex-1 h-1 bg-[#1a1a1a]/10 rounded" /></div>
                        <div className="flex gap-1 items-center"><div className="w-6 h-6 bg-[#e85a4f]/20 rounded-sm" /><div className="flex-1 h-1 bg-[#1a1a1a]/10 rounded" /></div>
                        <div className="flex gap-1 items-center"><div className="w-6 h-6 bg-[#d9a441]/20 rounded-sm" /><div className="flex-1 h-1 bg-[#1a1a1a]/10 rounded" /></div>
                      </div>
                    </div>
                    <h3 className="text-sm font-medium">Consignment</h3>
                  </div>
                </div>
              </div>

              {/* Integrations */}
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-[#2d7d6e] mb-4">Integrations</p>
                <h2 className="text-4xl md:text-5xl italic font-normal mb-6">Your art, your way in</h2>
                <p className="text-lg text-[#1a1a1a]/60 mb-12">
                  Connect your Instagram, Etsy, or Shopify — or upload directly.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {/* Instagram */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Instagram</h3>
                    <p className="text-xs text-[#1a1a1a]/50">Import your posts</p>
                  </div>

                  {/* Etsy */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[#f56400] rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.559 3.89c0-.318.014-.503.138-.614.123-.111.423-.152 1.017-.152h3.474c.963 0 1.608.124 1.949.372.34.249.586.788.74 1.617l.213 1.143h.591l-.083-4.012h-.567c-.114.36-.326.537-.636.537H6.442c-.31 0-.522-.177-.636-.537h-.567L5.156 6.256h.591l.213-1.143c.154-.829.4-1.368.74-1.617.341-.248.986-.372 1.949-.372h1.91v14.148c0 .594-.041.994-.124 1.2-.082.206-.282.35-.6.431l-1.17.291v.567h7.67v-.567l-1.17-.291c-.318-.082-.518-.225-.6-.431-.083-.206-.124-.606-.124-1.2V3.89z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Etsy</h3>
                    <p className="text-xs text-[#1a1a1a]/50">Sync your listings</p>
                  </div>

                  {/* Shopify */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[#96bf48] rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.337 3.415c-.025-.145-.139-.218-.243-.218-.104 0-2.097-.155-2.097-.155s-1.392-1.377-1.54-1.525c-.147-.147-.436-.103-.548-.069 0 0-.285.088-.758.234-.088-.272-.244-.6-.456-.927C9.175.013 8.415 0 7.797 0c-2.097 0-3.1 2.622-3.415 3.954-.821.254-1.405.435-1.479.459-.461.144-.476.158-.537.594C2.314 5.365.039 22.899.039 22.899l14.848 2.549V3.458c0-.013-.013-.031-.025-.043h-.525zM11.062 4.47c-.475.146-.994.307-1.531.472.004-1.026-.146-1.684-.437-2.191.536.103.9.692 1.085 1.264.141.425.19.688.19.688.307-.095.499-.156.693-.233zm-2.438.753c-1.034.319-2.161.668-2.161.668.3-1.163.873-1.731 1.64-1.935.201.335.357.823.521 1.267zm-.809-2.626c.111 0 .223.013.333.038-.916.431-1.903 1.517-2.318 3.688-.554.171-1.097.339-1.599.494C4.663 4.89 5.598 2.597 7.815 2.597z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Shopify</h3>
                    <p className="text-xs text-[#1a1a1a]/50">Publish to your store</p>
                  </div>

                  {/* Upload */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[#1a1a1a] rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Upload</h3>
                    <p className="text-xs text-[#1a1a1a]/50">From camera or library</p>
                  </div>
                </div>
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
