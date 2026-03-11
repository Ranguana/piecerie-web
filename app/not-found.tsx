import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Profile Not Found</h1>
      <p className="text-[var(--muted)] mb-8">
        This artist profile doesn&apos;t exist or isn&apos;t public.
      </p>
      <Link
        href="/"
        className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accent-light)] text-sm tracking-wide"
      >
        Go Home
      </Link>
    </div>
  )
}
