import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Profile Not Found</h1>
      <p className="text-gray-600 mb-8">
        This artist profile doesn&apos;t exist or isn&apos;t public.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Go Home
      </Link>
    </div>
  )
}
