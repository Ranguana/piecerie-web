import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Piecerie</h1>
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
          href="/p/demo"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50"
        >
          View Demo Profile
        </Link>
      </div>
    </div>
  )
}
