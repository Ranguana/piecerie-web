import Image from 'next/image'
import Link from 'next/link'
import { APP_STORE_URL, BRAND } from '@/lib/brand'

const FOOTER_LINKS = [
  { label: 'App', href: APP_STORE_URL, external: true },
  { label: 'Pricing', href: '/pricing', external: false },
  { label: 'Resources', href: '/resources', external: false },
  { label: 'Privacy', href: '/privacy', external: false },
  { label: 'Terms', href: '/terms', external: false },
  { label: 'Contact', href: `mailto:${BRAND.supportEmail}`, external: true },
  { label: 'animalnewyork.com', href: BRAND.siteUrl, external: true },
] as const

const FOOTER_LINK_CLASSES =
  'font-heading text-[24px] leading-none tracking-[2px] uppercase text-white border-b-0 hover:text-yellow'

/**
 * Black footer with the white N mark, Bebas centered nav, and an Instagram
 * circle, matching animalnewyork.com. `compact` drops the 100px top margin
 * for pages that end in their own block (profiles, legal pages).
 */
export default function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={`bg-ink text-white ${compact ? 'mt-12' : 'mt-[100px]'} py-[50px]`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-8">
        <Link href="/" className="border-b-0" aria-label={`${BRAND.name} home`}>
          <Image
            src="/brand/animal-n-white.svg"
            alt={`${BRAND.name} N mark`}
            width={38}
            height={50}
          />
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6">
            {FOOTER_LINKS.map((link, i) => (
              <li key={link.label} className="flex items-center gap-x-4 sm:gap-x-6">
                {link.external ? (
                  <a
                    href={link.href}
                    className={FOOTER_LINK_CLASSES}
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={FOOTER_LINK_CLASSES}>
                    {link.label}
                  </Link>
                )}
                {i < FOOTER_LINKS.length - 1 && (
                  <span aria-hidden="true" className="hidden text-[24px] leading-none text-gray-rule sm:inline">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${BRAND.fullName} on Instagram`}
          className="flex h-[50px] w-[50px] items-center justify-center border border-white border-b bg-ink text-white hover:bg-yellow hover:text-ink hover:border-yellow"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
          </svg>
        </a>

        <div className="text-center font-mono text-[14px] leading-[22px] text-white">
          <p>Made for artists by {BRAND.fullName}.</p>
          <p className="text-gray-rule">
            &copy; {new Date().getFullYear()} {BRAND.fullName}. {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
