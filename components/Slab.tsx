import type { ElementType, ReactNode } from 'react'

type SlabSize = 'sm' | 'md' | 'lg' | 'xl'
type SlabTone = 'yellow' | 'black' | 'club'

interface SlabProps {
  children: ReactNode
  /** Which HTML element to render. Defaults to h2. */
  as?: ElementType
  /**
   * sm = card title (25px), md = H2 (32/38), lg = H1 (40/48),
   * xl = Hunting Club title (50/60).
   */
  size?: SlabSize
  /**
   * yellow = black Bebas on a yellow slab (default).
   * black  = white Bebas on a black slab (date/author tag style).
   * club   = red Bebas on yellow with a 5px red border (Hunting Club).
   */
  tone?: SlabTone
  className?: string
  id?: string
}

const SIZE_CLASSES: Record<SlabSize, string> = {
  sm: 'text-[25px] leading-[28px]',
  md: 'text-[32px] leading-[38px]',
  lg: 'text-[32px] leading-[38px] sm:text-[40px] sm:leading-[48px]',
  xl: 'text-[36px] leading-[42px] sm:text-[50px] sm:leading-[60px]',
}

const TONE_CLASSES: Record<SlabTone, string> = {
  yellow: 'bg-yellow text-ink p-[10px]',
  black: 'bg-ink text-white p-[10px]',
  club: 'bg-yellow text-red border-[5px] border-red p-5 text-center',
}

/**
 * The ANIMAL title slab: Bebas Neue, uppercase, sitting on a solid block of
 * yellow (or black). Renders inline-block so the slab hugs the text, which is
 * how the live site does it. Wrap multi-line headings in separate <Slab>s if
 * you want each line to carry its own slab.
 */
export default function Slab({
  children,
  as: Tag = 'h2',
  size = 'md',
  tone = 'yellow',
  className = '',
  id,
}: SlabProps) {
  return (
    <Tag
      id={id}
      className={`inline-block font-heading uppercase ${SIZE_CLASSES[size]} ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </Tag>
  )
}
