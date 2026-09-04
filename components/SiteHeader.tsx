import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/brand'
import AppCtaButton from './AppCtaButton'
import YellowButton from './YellowButton'

interface SiteHeaderProps {
  /**
   * Wordmark only, no nav. Used on artist profile pages and the password
   * reset screen where the marketing nav would be noise.
   */
  minimal?: boolean
}

const NAV_LINKS = [
  { label: 'Pricing', href: '/pricing', external: false },
  { label: 'Resources', href: '/resources', external: false },
] as const

const NAV_LINK_CLASSES =
  'font-mono font-bold uppercase underline tracking-[1px] text-[16px] border-b-0'

/**
 * 92px white bar, wordmark left, 1px red rule underneath (the signature
 * animalnewyork.com header). Desktop shows the nav inline; on small screens
 * a native <details> element drives the three-bar menu so the header stays a
 * server component with zero JavaScript.
 */
export default function SiteHeader({ minimal = false }: SiteHeaderProps) {
  return (
    <header className="bg-white border-b border-red">
      <div className="mx-auto flex h-[92px] max-w-6xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="border-b-0 flex items-center" aria-label={`${BRAND.name} home`}>
          <Image
            src="/brand/animal-logo-new.svg"
            alt={BRAND.name}
            width={300}
            height={65}
            priority
            className="h-[40px] w-auto sm:h-[52px] md:h-[65px]"
          />
        </Link>

        {!minimal && (
          <>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={NAV_LINK_CLASSES}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className={NAV_LINK_CLASSES}>
                    {link.label}
                  </Link>
                ),
              )}
              <AppCtaButton size="sm" />
            </nav>

            {/* Mobile: three-bar menu, black panel with red border */}
            <details className="group relative md:hidden">
              <summary
                className="flex h-[45px] w-[45px] cursor-pointer list-none flex-col justify-between py-[5px] [&::-webkit-details-marker]:hidden"
                aria-label="Open menu"
              >
                <span className="block h-[5px] w-full bg-ink" />
                <span className="block h-[5px] w-full bg-ink" />
                <span className="block h-[5px] w-full bg-ink" />
              </summary>
              <nav
                className="absolute right-0 top-[56px] z-50 w-[calc(100vw-2rem)] max-w-[360px] border border-red bg-ink p-4"
                aria-label="Primary"
              >
                <div className="grid gap-3">
                  {NAV_LINKS.map((link) => (
                    <YellowButton
                      key={link.label}
                      href={link.href}
                      external={link.external}
                      full
                    >
                      {link.label}
                    </YellowButton>
                  ))}
                  <AppCtaButton full variant="black" className="border border-yellow" />
                </div>
                <p className="mt-4 text-center font-heading text-[22px] leading-none tracking-[2px] text-white uppercase">
                  {BRAND.tagline}
                </p>
              </nav>
            </details>
          </>
        )}
      </div>
    </header>
  )
}
