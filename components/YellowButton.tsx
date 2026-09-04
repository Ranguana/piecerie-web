import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'yellow' | 'black' | 'gray' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface YellowButtonProps {
  href: string
  children: ReactNode
  /**
   * yellow  = primary ANIMAL nav button (yellow, red on hover).
   * black   = white text on black, yellow on hover.
   * gray    = secondary link button from the live site (#4E555B).
   * outline = white with a 1px black border.
   */
  variant?: Variant
  size?: Size
  /** Stretch to the container width (product-card style). */
  full?: boolean
  /** Opens in a new tab with rel=noopener. Auto-detected for http(s) hrefs. */
  external?: boolean
  className?: string
  ariaLabel?: string
}

const VARIANT_CLASSES: Record<Variant, string> = {
  yellow: 'bg-yellow text-ink hover:bg-red hover:text-white',
  black: 'bg-ink text-white hover:bg-yellow hover:text-ink',
  gray: 'bg-gray-menu text-white hover:bg-red hover:text-white',
  outline: 'bg-white text-ink border border-ink hover:bg-ink hover:text-white',
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'text-[14px] px-3 py-1.5',
  md: 'text-[16px] px-5 py-2.5',
  lg: 'text-[18px] px-6 py-3',
}

/**
 * ANIMAL's nav/commerce button: Courier bold, uppercase, underlined, letter
 * spacing 1px, square corners, no shadow. Named after the default variant
 * because that is the one you will reach for 90% of the time.
 */
export default function YellowButton({
  href,
  children,
  variant = 'yellow',
  size = 'md',
  full = false,
  external,
  className = '',
  ariaLabel,
}: YellowButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href)
  const classes = [
    'inline-block text-center font-mono font-bold uppercase underline tracking-[1px]',
    'border-b-0 transition-colors',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    full ? 'block w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (isExternal || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
