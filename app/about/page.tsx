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
            <Link href="/help" className="text-gray-600 hover:text-black">Help</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-black">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Piecerie</h1>

        <div className="prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Piecerie was created to give artists a simple, powerful way to manage and present their work professionally.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Story</h2>
          <p className="text-gray-700 mb-4">
            Hi, I'm Jessica Wilson. As an estate planning attorney, I work with many artist clients.
            Time and again, I saw the same problem: artists struggling to keep track of their work,
            create professional documentation, and present their portfolios to galleries, collectors, and clients.
          </p>
          <p className="text-gray-700 mb-4">
            Most artists were using spreadsheets, folders of photos, and cobbled-together solutions
            that made it difficult to generate the professional documents they needed—line sheets for
            wholesale buyers, catalogs for exhibitions, or simple inventory lists for insurance purposes.
          </p>
          <p className="text-gray-700 mb-4">
            Piecerie was born from this need. It's designed to be the simplest way for artists to
            photograph their work, organize it into collections, and generate beautiful, professional
            PDFs with just a few taps.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">What Piecerie Does</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Photograph and catalog your artwork in one place</li>
            <li>Organize pieces into collections</li>
            <li>Generate professional PDFs: line sheets, catalogs, portfolios, consignment sheets</li>
            <li>Create a public profile to share your work online</li>
            <li>List artwork for sale on Shopify (Etsy coming soon)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Get in Touch</h2>
          <p className="text-gray-700">
            Questions or feedback? I'd love to hear from you.
          </p>
          <p className="text-gray-700 mt-2">
            <a href="mailto:hello@piecerie.com" className="text-blue-600 hover:underline">
              hello@piecerie.com
            </a>
          </p>
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
