import Link from 'next/link'

export const metadata = {
  title: 'About - Piecerie',
  description: 'Learn about Piecerie and our mission to help artists manage their artwork.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Piecerie" className="h-8" />
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/about" className="text-black font-medium">About</Link>
            <Link href="/how-to-use" className="text-gray-600 hover:text-black">How to Use</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-black">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Piecerie</h1>

        <p className="text-xl text-gray-600 mb-8">
          The simplest way for artists to catalog their work and create professional documents.
        </p>

        <p className="text-gray-700 mb-6">
          Hi, I'm Jessica Wilson. As an estate planning attorney, I work with many artist clients who struggled to keep track of their work and create professional documentation for galleries, collectors, and insurance.
        </p>

        <p className="text-gray-700 mb-6">
          Piecerie solves that. Photograph your artwork, add the details, and generate beautiful PDFs—line sheets, catalogs, portfolios—in seconds.
        </p>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="font-semibold mb-2">Get in Touch</h2>
          <a href="mailto:support@piecerie.com" className="text-blue-600 hover:underline">
            support@piecerie.com
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Piecerie. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
