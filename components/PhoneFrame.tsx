import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  /** Accessible name for the whole device. */
  label: string
  className?: string
}

/**
 * A black iPhone-shaped bezel around a 390 x 844 (logical) screen. The screen
 * box is sized by `.phone-screen` in globals.css, which is also where the demo
 * screens get their scale factor, so the two stay in lockstep.
 *
 * This is the one place on the site with a border radius: a square phone reads
 * as a mistake, not a style. Everything inside the screen is still radius 0.
 */
export default function PhoneFrame({ children, label, className = '' }: PhoneFrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative mx-auto w-max rounded-[44px] bg-ink p-[10px] ${className}`}
    >
      <div className="phone-screen relative overflow-hidden rounded-[34px] bg-white">
        {children}
        {/* Dynamic island */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[1.4%] z-20 h-[4.2%] w-[32%] -translate-x-1/2 rounded-full bg-ink"
        />
      </div>
    </div>
  )
}
