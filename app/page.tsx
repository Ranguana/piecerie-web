import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Piecerie" className="h-8" />
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
            <Link href="/how-to-use" className="text-gray-600 hover:text-black">How to Use</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-black">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <img src="/logo.png" alt="Piecerie" className="h-24 mb-4" />
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Artwork management for artists. Create beautiful portfolios, line sheets, and catalogs.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://apps.apple.com/app/piecerie"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Download App
          </Link>
          <Link
            href="/demo"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50"
          >
            View Demo Profile
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Piecerie. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/how-to-use" className="hover:text-black">How to Use</Link>
            <Link href="/pricing" className="hover:text-black">Pricing</Link>
            <a href="mailto:support@piecerie.com" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
