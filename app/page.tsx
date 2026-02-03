import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
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
    </div>
  )
}
