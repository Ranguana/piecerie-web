import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-archivo), system-ui, sans-serif' }}
          >
            <span className="text-[#e85a4f]">P</span>
            <span className="text-[#2d2d2d]">ie</span>
            <span className="text-[#d9a441]">c</span>
            <span className="text-[#2d2d2d]">e</span>
            <span className="text-[#6b7f5b]">r</span>
            <span className="text-[#2d2d2d]">ie</span>
          </Link>
          <nav className="flex gap-8 items-center">
            <Link href="/resources" className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] hover:text-[var(--foreground)]">Resources</Link>
            <Link href="/pricing" className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] hover:text-[var(--foreground)]">Pricing</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b7f5b] mb-4">For Artists</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
              Stop managing inventory.
              <br />
              <span className="text-[var(--muted)]"><span className="text-[#e85a4f]">S</span>tart <span className="text-[#d9a441]">s</span>howin<span className="text-[#6b7f5b]">g</span> your work.</span>
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-10 max-w-md">
              Inventory your work, generate line sheets, portfolios, and catalogs — and get back to the studio. All of it in minutes.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://apps.apple.com/app/piecerie"
                className="bg-[var(--accent)] text-white px-8 py-3.5 text-sm tracking-wide rounded-lg hover:bg-[var(--accent-light)]"
              >
                Download App
              </Link>
              <Link
                href="/resources"
                className="border border-[var(--border)] px-8 py-3.5 text-sm tracking-wide rounded-lg text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] bg-[var(--surface)] border border-[var(--border)] rounded-xl flex items-center justify-center">
              <span className="text-[var(--muted)] text-lg">App Preview</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-[var(--border)] bg-white">
          <div className="max-w-6xl mx-auto px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Templates */}
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b7f5b] mb-4">Templates</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  Professional PDFs in <span className="text-[#6b7f5b]">s</span>econds
                </h2>
                <p className="text-base text-[var(--muted)] mb-12">
                  Choose from six templates designed for galleries, collectors, and wholesale buyers.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    { name: 'Line Sheet', rows: 2, cols: 3 },
                    { name: 'Catalog', rows: 2, cols: 1 },
                    { name: 'Portfolio', rows: 1, cols: 1 },
                    { name: 'Grid', rows: 2, cols: 3 },
                    { name: 'Consignment', rows: 3, cols: 2 },
                    { name: 'Invoice', rows: 4, cols: 1 },
                  ].map((tmpl) => (
                    <div key={tmpl.name}>
                      <div className="bg-white border border-[var(--border)] p-3 mb-3 rounded-lg hover:border-[var(--accent)] transition-colors">
                        <div className={`grid gap-1 ${tmpl.cols === 3 ? 'grid-cols-3' : tmpl.cols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {Array.from({ length: tmpl.rows * tmpl.cols }).map((_, i) => (
                            <div key={i} className={`w-full ${tmpl.cols === 1 && tmpl.rows === 1 ? 'h-20' : 'h-8'} bg-[var(--surface)] rounded-sm`} />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-sm font-medium">{tmpl.name}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Import & Integrations */}
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b7f5b] mb-4">Import</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  Your art, your way <span className="text-[#6b7f5b]">i</span>n
                </h2>
                <p className="text-base text-[var(--muted)] mb-12">
                  Upload photos, import from Instagram, connect Shopify, or bulk import from a spreadsheet.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {/* Instagram */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 bg-[var(--accent)] rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Instagram</h3>
                    <p className="text-xs text-[var(--muted)]">Import your posts</p>
                  </div>

                  {/* Shopify */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 bg-[var(--accent)] rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.337 3.415c-.025-.145-.139-.218-.243-.218-.104 0-2.097-.155-2.097-.155s-1.392-1.377-1.54-1.525c-.147-.147-.436-.103-.548-.069 0 0-.285.088-.758.234-.088-.272-.244-.6-.456-.927C9.175.013 8.415 0 7.797 0c-2.097 0-3.1 2.622-3.415 3.954-.821.254-1.405.435-1.479.459-.461.144-.476.158-.537.594C2.314 5.365.039 22.899.039 22.899l14.848 2.549V3.458c0-.013-.013-.031-.025-.043h-.525z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Shopify</h3>
                    <p className="text-xs text-[var(--muted)]">Publish to your store</p>
                  </div>

                  {/* CSV */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 bg-[var(--accent)] rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12c-.621 0-1.125.504-1.125 1.125M12 12c.621 0 1.125.504 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0-1.5v1.5m0 0c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">CSV Import</h3>
                    <p className="text-xs text-[var(--muted)]">Bulk import from spreadsheet</p>
                  </div>

                  {/* Upload */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 bg-[var(--accent)] rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Camera</h3>
                    <p className="text-xs text-[var(--muted)]">Photo or library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--muted)]">
          <div>&copy; {new Date().getFullYear()} Piecerie</div>
          <div className="flex gap-8">
            <Link href="/resources" className="hover:text-[var(--foreground)]">Resources</Link>
            <Link href="/pricing" className="hover:text-[var(--foreground)]">Pricing</Link>
            <a href="mailto:support@piecerie.com" className="hover:text-[var(--foreground)]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
