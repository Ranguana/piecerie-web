'use client'

import Image from 'next/image'
import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react'
import { BRAND } from '@/lib/brand'
import PhoneFrame from './PhoneFrame'

/**
 * Live product demo for the landing hero: four faithful recreations of the
 * app's screens (gallery, artwork detail, export, sell) inside a phone frame,
 * auto-advancing every few seconds. Everything is React + inline SVG with
 * sample data, so it works without a single screenshot or network request.
 *
 * Screens are authored at the iPhone's 390 x 844 logical size and scaled by
 * `.demo-screen` / `.phone-screen` in globals.css. Keep the markup close to
 * the real app (see `app/*.tsx` and `src/components/*.tsx` in the app repo):
 * if the app changes, this should change with it.
 */

const INTERVAL_MS = 4000

/* ------------------------------------------------------------------------ */
/* Sample data                                                               */
/* ------------------------------------------------------------------------ */

interface SampleArtwork {
  plate: string
  title: string
  medium: string
  dimensions: string
  year: number
  price: number
  sku: string
}

const ARTWORKS: readonly SampleArtwork[] = [
  { plate: '001', title: 'Bodega Cat', medium: 'Aerosol on canvas', dimensions: '36 × 48 in', year: 2026, price: 1800, sku: 'BC-001' },
  { plate: '002', title: 'Late Train', medium: 'Acrylic on panel', dimensions: '24 × 24 in', year: 2025, price: 950, sku: 'LT-002' },
  { plate: '003', title: 'Pigeon King', medium: 'Aerosol on canvas', dimensions: '36 × 48 in', year: 2026, price: 2400, sku: 'PK-003' },
  { plate: '004', title: 'Canal St. Noise', medium: 'Screenprint, ed. 20', dimensions: '18 × 24 in', year: 2025, price: 300, sku: 'CN-004' },
  { plate: '005', title: 'Fire Escape', medium: 'Oil stick on paper', dimensions: '22 × 30 in', year: 2024, price: 650, sku: 'FE-005' },
  { plate: '006', title: 'Off the Wall', medium: 'Wheatpaste on wood', dimensions: '30 × 40 in', year: 2026, price: 1200, sku: 'OW-006' },
] as const

/** The piece opened on the detail screen. */
const FEATURED = ARTWORKS[2]

const INVENTORY_COUNT = 12

function money(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`
}

/* ------------------------------------------------------------------------ */
/* Artwork images: abstract compositions in the ANIMAL palette               */
/* ------------------------------------------------------------------------ */

/** Six distinct black / yellow / red compositions, one per sample piece. */
function Art({ index, className = '' }: { index: number; className?: string }) {
  const common = {
    viewBox: '0 0 100 100',
    preserveAspectRatio: 'xMidYMid slice',
    className: `block h-full w-full ${className}`,
    'aria-hidden': true,
    focusable: false,
  } as const

  switch (index % ARTWORKS.length) {
    case 0:
      return (
        <svg {...common}>
          <rect width="100" height="100" className="fill-white" />
          <rect x="0" y="62" width="100" height="14" className="fill-yellow" />
          <circle cx="58" cy="44" r="30" className="fill-ink" />
          <rect x="8" y="10" width="14" height="14" className="fill-red" />
          <path d="M20 90 L92 90" className="stroke-ink" strokeWidth="3" />
        </svg>
      )
    case 1:
      return (
        <svg {...common}>
          <rect width="100" height="100" className="fill-yellow" />
          <path d="M-5 78 C 20 60, 30 95, 55 70 S 85 30, 110 55 L110 110 L-5 110 Z" className="fill-ink" />
          <circle cx="70" cy="28" r="16" className="fill-white" />
          <path d="M12 20 L40 22 L38 34 L10 30 Z" className="fill-red" />
        </svg>
      )
    case 2:
      return (
        <svg {...common}>
          <rect width="100" height="100" className="fill-ink" />
          <path d="M8 92 L52 12 L96 92 Z" className="fill-yellow" />
          <circle cx="30" cy="30" r="12" className="fill-red" />
          <path d="M0 50 H100 M0 58 H100" className="stroke-white" strokeWidth="1.5" />
          <path d="M60 70 l8 -12 l8 12" className="stroke-ink" strokeWidth="4" fill="none" />
        </svg>
      )
    case 3:
      return (
        <svg {...common}>
          <rect width="100" height="100" className="fill-white" />
          {[6, 22, 38, 54, 70, 86].map((x) => (
            <rect key={x} x={x} y="8" width="8" height="84" className="fill-red" />
          ))}
          <rect x="0" y="40" width="100" height="22" className="fill-ink" />
          <rect x="30" y="46" width="40" height="10" className="fill-yellow" />
        </svg>
      )
    case 4:
      return (
        <svg {...common}>
          <rect width="100" height="100" className="fill-red" />
          <path d="M18 100 V52 A32 32 0 0 1 82 52 V100 Z" className="fill-ink" />
          {[0, 1, 2, 3].flatMap((r) =>
            [0, 1, 2, 3].map((c) => (
              <circle key={`${r}-${c}`} cx={14 + c * 24} cy={14 + r * 12} r="3.2" className="fill-yellow" />
            )),
          )}
          <rect x="0" y="92" width="100" height="8" className="fill-white" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <rect width="100" height="100" className="fill-white" />
          <ellipse cx="46" cy="56" rx="34" ry="26" className="fill-yellow" />
          <path
            d="M10 20 C 40 5, 45 55, 70 30 S 95 55, 60 70 C 40 80, 30 60, 20 85"
            className="stroke-ink"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="74" y="74" width="16" height="16" className="fill-red" />
        </svg>
      )
  }
}

/* ------------------------------------------------------------------------ */
/* Phone chrome shared by every screen                                       */
/* ------------------------------------------------------------------------ */

function StatusBar() {
  return (
    <div className="flex h-[59px] shrink-0 items-end justify-between px-8 pb-[9px] font-mono text-[15px] font-bold leading-none text-ink">
      <span>9:41</span>
      <svg width="62" height="12" viewBox="0 0 62 12" aria-hidden="true" className="fill-ink">
        <rect x="0" y="7" width="3" height="5" />
        <rect x="5" y="5" width="3" height="7" />
        <rect x="10" y="3" width="3" height="9" />
        <rect x="15" y="0" width="3" height="12" />
        <path d="M24 4.5a9 9 0 0 1 12 0l-1.6 1.6a6.7 6.7 0 0 0-8.8 0zM26.8 7.4a5 5 0 0 1 6.4 0L31.6 9l-1.6 1.6-1.6-1.6z" />
        <rect x="41" y="1" width="18" height="10" className="fill-none stroke-ink" strokeWidth="1.5" />
        <rect x="42.5" y="2.5" width="15" height="7" />
        <rect x="60" y="4" width="2" height="4" />
      </svg>
    </div>
  )
}

/** The app's AppHeader: 56px white bar, wordmark left, 1px red rule. */
function DemoHeader({ right }: { right: ReactNode }) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-red bg-white px-5">
      <div className="flex items-center gap-2.5">
        <Image src="/brand/animal-logo-new.svg" alt="" width={129} height={28} className="block h-7 w-auto" />
        <span className="font-heading text-[22px] uppercase leading-none text-ink">{BRAND.appNameShort}</span>
      </div>
      <div className="flex min-w-0 items-center">{right}</div>
    </header>
  )
}

/** Pages that draw their own masthead instead of the wordmark bar. */
function Masthead({ title, right }: { title: string; right: ReactNode }) {
  return (
    <header className="flex shrink-0 items-baseline justify-between border-b border-red px-5 pb-3 pt-1">
      <div className="font-heading text-[22px] uppercase leading-none text-ink">{title}</div>
      <div>{right}</div>
    </header>
  )
}

type TabKey = 'pieces' | 'collections' | 'showcase' | 'events' | 'export' | 'account'

/** Mirrors TABS in the app's TabBar.tsx: same labels, same icons, same order. */
const TABS: readonly { key: TabKey; label: string; icon: string }[] = [
  { key: 'pieces', label: 'Pieces', icon: 'M3 4h18v4H3zM3 10h18v4H3zM3 16h18v4H3z' },
  { key: 'collections', label: 'Collections', icon: 'M4 7v11a2 2 0 002 2h12a2 2 0 002-2V9h-9l-2-2H6a2 2 0 00-2 2z' },
  { key: 'showcase', label: 'Showcase', icon: 'M3 5h18v14H3zM3 19l5-6 3 3 4-5 6 8M8 9h.01' },
  { key: 'events', label: 'Events', icon: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4' },
  { key: 'export', label: 'Export', icon: 'M5 4h11l3 3v13H5zM9 13l3 3 3-3M12 9v7' },
  { key: 'account', label: 'Account', icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 1116 0' },
]

function DemoTabBar({ active }: { active: TabKey | null }) {
  return (
    <nav
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 z-10 border-t border-red bg-white pb-[10px]"
    >
      <div className="grid grid-cols-6">
        {TABS.map((tab) => {
          const isActive = tab.key === active
          return (
            <div key={tab.key} className="flex min-w-0 flex-col items-center gap-[4px] pb-1 pt-2.5 text-ink">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={isActive ? 2 : 1.5}
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d={tab.icon} />
              </svg>
              <span
                className={`max-w-full truncate px-[5px] py-[3px] font-mono text-[9px] font-bold uppercase leading-none tracking-[0.04em] ${
                  isActive ? 'bg-yellow' : ''
                }`}
              >
                {tab.label}
              </span>
            </div>
          )
        })}
      </div>
      {/* Home indicator: phone chrome, so it keeps its pill shape. */}
      <div className="mx-auto mt-[6px] h-[5px] w-[134px] rounded-full bg-ink" />
    </nav>
  )
}

function Screen({ children }: { children: ReactNode }) {
  return (
    <div className="demo-screen absolute left-0 top-0 flex flex-col overflow-hidden bg-white text-ink">
      {children}
    </div>
  )
}

const EYEBROW = 'font-mono text-[10px] uppercase tracking-[0.14em] text-gray-menu'

/* ------------------------------------------------------------------------ */
/* Screen 01: the gallery (app/page.tsx)                                     */
/* ------------------------------------------------------------------------ */

function GalleryScreen() {
  return (
    <Screen>
      <StatusBar />
      <DemoHeader
        right={
          <span className="font-mono text-[10px] font-bold uppercase tracking-[1px] text-ink">
            {INVENTORY_COUNT} pieces
          </span>
        }
      />
      <div className="flex items-baseline justify-between px-5 pb-3 pt-4">
        <span className={EYEBROW}>Inventory · {INVENTORY_COUNT} works</span>
        <span className={EYEBROW}>{new Date().getFullYear()}</span>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4 px-5">
        {ARTWORKS.map((art, i) => (
          <div key={art.plate}>
            <div className="relative aspect-square overflow-hidden border border-gray-rule bg-white">
              <Art index={i} />
              <div className="absolute left-1.5 top-1.5 border border-gray-rule bg-white/95 px-[5px] py-[2px] font-mono text-[10px] tracking-[0.05em] text-ink">
                No. {art.plate}
              </div>
            </div>
            <div className="pt-1.5 leading-[1.2]">
              <div className="truncate font-heading text-[18px] uppercase text-ink">{art.title}</div>
              <div className="price text-[13px]">{money(art.price)}</div>
            </div>
          </div>
        ))}
      </div>
      <DemoTabBar active="pieces" />
    </Screen>
  )
}

/* ------------------------------------------------------------------------ */
/* Screen 02: artwork detail (app/artwork/view/page.tsx)                     */
/* ------------------------------------------------------------------------ */

function DetailScreen() {
  const rows: [string, ReactNode][] = [
    ['Medium', FEATURED.medium],
    ['Dimensions', FEATURED.dimensions],
    ['Year', FEATURED.year],
    ['Price', <span key="price" className="price text-[15px]">{money(FEATURED.price)}</span>],
  ]
  return (
    <Screen>
      <StatusBar />
      <header className="flex shrink-0 items-center justify-between border-b border-red px-5 pb-3 pt-1">
        <span className="flex items-center gap-2.5 text-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M14 6l-6 6 6 6" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Index</span>
        </span>
        <span className={EYEBROW}>Plate No. {FEATURED.plate}</span>
      </header>

      <div className="relative h-[250px] shrink-0 bg-white">
        <Art index={2} />
        <div className="absolute left-3 top-3 border border-gray-rule bg-white/95 px-[7px] py-1 font-mono text-[10px] tracking-[0.05em] text-ink">
          No. {FEATURED.plate}
        </div>
      </div>

      <div className="px-6 pb-2 pt-5">
        <div className="-ml-[10px]">
          <span className="slab text-[30px] leading-none">{FEATURED.title}</span>
        </div>
        <div className="mt-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-green-price">
          ▌ Available
        </div>
      </div>

      <div className="mx-6 border-t border-gray-rule">
        {rows.map(([k, v], i) => (
          <div
            key={k}
            className={`flex items-baseline justify-between gap-3 py-2.5 ${
              i < rows.length - 1 ? 'border-b border-dotted border-gray-rule' : ''
            }`}
          >
            <div className={EYEBROW}>{k}</div>
            <div className="text-[14px] text-ink">{v}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 px-6 pt-4">
        <div className="btn-yellow text-[13px]">Submit to {BRAND.name}</div>
        <div className="border border-ink bg-white px-[10px] py-[5px] text-center font-mono text-[13px] font-bold uppercase leading-[1.5] tracking-[1px] text-ink underline">
          Sell on Shopify
        </div>
      </div>

      <DemoTabBar active="pieces" />
    </Screen>
  )
}

/* ------------------------------------------------------------------------ */
/* Screen 03: export (app/export/page.tsx)                                   */
/* ------------------------------------------------------------------------ */

const TEMPLATE_CHIPS = [
  { key: 'grid', label: 'Grid', sub: '9 / page' },
  { key: 'catalog', label: 'Catalog', sub: '2 / page' },
  { key: 'linesheet', label: 'Line sheet', sub: 'Wholesale' },
  { key: 'consignment', label: 'Consign.', sub: 'Galleries' },
] as const

function TemplateThumb({ k }: { k: (typeof TEMPLATE_CHIPS)[number]['key'] }) {
  if (k === 'grid') {
    return (
      <div className="absolute inset-1.5 grid grid-cols-3 gap-[2px]">
        {Array.from({ length: 9 }).map((_, j) => (
          <div key={j} className="bg-gray-rule/40" />
        ))}
      </div>
    )
  }
  if (k === 'catalog') {
    return (
      <div className="absolute inset-1.5 flex flex-col gap-[3px]">
        {[0, 1].map((j) => (
          <div key={j} className="flex flex-1 gap-[3px]">
            <div className="w-1/2 bg-gray-rule/40" />
            <div className="flex flex-1 flex-col gap-[2px] pt-[2px]">
              <div className="h-[3px] bg-gray-rule/60" />
              <div className="h-[2px] w-3/4 bg-gray-rule/40" />
              <div className="h-[2px] w-1/2 bg-gray-rule/40" />
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (k === 'linesheet') {
    return (
      <div className="absolute inset-1.5 flex flex-col gap-[3px]">
        <div className="h-[3px] bg-ink" />
        {Array.from({ length: 6 }).map((_, j) => (
          <div key={j} className="flex items-center gap-[2px]">
            <div className="h-[6px] w-[6px] bg-gray-rule/60" />
            <div className="h-[2px] flex-1 bg-gray-rule/40" />
            <div className="h-[2px] w-[8px] bg-green-price" />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="absolute inset-1.5 flex flex-col gap-[3px]">
      {Array.from({ length: 5 }).map((_, j) => (
        <div key={j} className="h-[2px] bg-gray-rule/40" />
      ))}
      <div className="mt-auto h-[1px] bg-ink" />
      <div className="h-[2px] w-1/2 bg-gray-rule/60" />
    </div>
  )
}

function LineSheetPage() {
  return (
    <div className="relative mx-auto border border-ink bg-white" style={{ width: 216, aspectRatio: '210 / 297' }}>
      <div className="absolute inset-0 flex flex-col p-3.5">
        <div className="flex items-baseline justify-between border-b border-gray-rule pb-1.5">
          <div className="font-heading text-[13px] uppercase leading-none text-ink">R. Vega Studio</div>
          <div className="font-mono text-[6px] uppercase tracking-[0.1em] text-gray-menu">
            Line sheet · {new Date().getFullYear()}
          </div>
        </div>
        <div className="mt-2 grid grid-cols-[14px_1fr_34px_30px_30px] gap-x-1.5 border-b border-ink pb-1 font-mono text-[5px] uppercase tracking-[0.1em] text-gray-menu">
          <span>No.</span>
          <span>Piece</span>
          <span>SKU</span>
          <span className="text-right">Whsl</span>
          <span className="text-right">Retail</span>
        </div>
        <div className="flex-1">
          {ARTWORKS.map((art, i) => (
            <div
              key={art.sku}
              className="grid grid-cols-[14px_1fr_34px_30px_30px] items-center gap-x-1.5 border-b border-dotted border-gray-rule py-[3px]"
            >
              <div className="h-[14px] w-[14px] overflow-hidden">
                <Art index={i} />
              </div>
              <div className="min-w-0">
                <div className="truncate text-[6.5px] font-bold leading-[1.2] text-ink">{art.title}</div>
                <div className="truncate font-mono text-[5px] leading-[1.2] text-gray-menu">{art.medium}</div>
              </div>
              <div className="font-mono text-[5px] text-ink">{art.sku}</div>
              <div className="text-right font-mono text-[5.5px] text-ink">{money(art.price / 2)}</div>
              <div className="price text-right text-[5.5px]">{money(art.price)}</div>
            </div>
          ))}
        </div>
        <div className="flex items-baseline justify-between border-t border-gray-rule pt-1 font-mono text-[5px] uppercase tracking-[0.14em] text-gray-menu">
          <span>{BRAND.madeWith}</span>
          <span>Page 01</span>
        </div>
      </div>
    </div>
  )
}

function ExportScreen() {
  return (
    <Screen>
      <StatusBar />
      <Masthead title="Compose" right={<span className={EYEBROW}>Export · 6 of {INVENTORY_COUNT}</span>} />

      <div className="bg-[#efefef] py-4">
        <LineSheetPage />
        <div className={`mt-2.5 text-center ${EYEBROW}`}>Line sheet · A4 · 6 pieces</div>
      </div>

      <div className="pb-1 pt-3.5">
        <div className={`px-5 pb-2 ${EYEBROW}`}>Template</div>
        <div className="flex gap-2 px-5">
          {TEMPLATE_CHIPS.map((t) => {
            const active = t.key === 'linesheet'
            return (
              <div
                key={t.key}
                className={`relative w-[80px] shrink-0 border bg-white p-1.5 text-left ${
                  active ? 'border-ink' : 'border-gray-rule'
                }`}
              >
                <div className="relative bg-[#f3f3f3]" style={{ aspectRatio: '3 / 4' }}>
                  <TemplateThumb k={t.key} />
                </div>
                <div className="pt-1.5">
                  <div className={`truncate text-[11px] leading-tight ${active ? 'bg-yellow font-bold' : ''} text-ink`}>
                    {t.label}
                  </div>
                  <div className="mt-0.5 truncate font-mono text-[8px] uppercase tracking-[0.04em] text-gray-menu">
                    {t.sub}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="px-5 pt-4">
        <div className="btn-yellow text-[13px]">Export PDF</div>
      </div>

      <DemoTabBar active="export" />
    </Screen>
  )
}

/* ------------------------------------------------------------------------ */
/* Screen 04: sell on ANIMAL (app/sell/page.tsx)                             */
/* ------------------------------------------------------------------------ */

const SELECTED = [ARTWORKS[0], ARTWORKS[2], ARTWORKS[5]]

const SUBMISSIONS = [
  { art: ARTWORKS[1], status: 'Listed', tone: 'bg-green-price text-ink', date: 'Aug 12' },
  { art: ARTWORKS[3], status: 'Under review', tone: 'bg-yellow text-ink', date: 'Aug 28' },
  { art: ARTWORKS[4], status: 'Submitted', tone: 'bg-ink text-white', date: 'Sep 02' },
] as const

function Thumb({ index }: { index: number }) {
  return (
    <div className="h-11 w-11 shrink-0 overflow-hidden border border-gray-rule bg-white">
      <Art index={index} />
    </div>
  )
}

function SellScreen() {
  return (
    <Screen>
      <StatusBar />
      <Masthead
        title="Sell"
        right={
          <span className="border border-ink px-[9px] py-[5px] font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
            The shop ↗
          </span>
        }
      />

      <section className="px-5 pb-4 pt-4">
        <div className={EYEBROW}>Marketplace No. 01</div>
        <h2 className="mt-1 font-heading text-[24px] uppercase leading-[1.1] text-ink">Sell on {BRAND.name}</h2>
        <p className="mt-1.5 text-[13px] leading-[1.45] text-gray-menu">
          Pick the pieces. {BRAND.name} reviews every submission and lists selected work in the shop.
        </p>

        <div className="mt-3 flex items-baseline justify-between">
          <span className={EYEBROW}>3 of 6 selected</span>
          <span className="border-b border-red font-mono text-[10px] uppercase tracking-[0.12em] text-ink">Clear</span>
        </div>

        <ul className="mt-1.5 border-t border-gray-rule">
          {SELECTED.map((art) => (
            <li key={art.plate} className="flex items-center gap-3 border-b border-dotted border-gray-rule py-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center bg-ink text-white">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <Thumb index={ARTWORKS.indexOf(art)} />
              <div className="min-w-0 flex-1">
                <div className="truncate font-heading text-[17px] uppercase leading-tight text-ink">{art.title}</div>
                <div className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.06em] text-gray-menu">
                  {art.medium} · <span className="price font-normal">{money(art.price)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="btn-yellow mt-3 text-[13px]">
          Submit {SELECTED.length} pieces to {BRAND.name}
        </div>
      </section>

      <section className="border-t border-gray-rule px-5 pt-3.5">
        <div className="flex items-baseline justify-between">
          <span className={EYEBROW}>Your submissions</span>
          <span className={EYEBROW}>{SUBMISSIONS.length} entries</span>
        </div>
        <ul className="mt-2 border-t border-gray-rule">
          {SUBMISSIONS.map((s) => (
            <li key={s.art.plate} className="flex items-center gap-3 border-b border-dotted border-gray-rule py-2">
              <Thumb index={ARTWORKS.indexOf(s.art)} />
              <div className="min-w-0 flex-1">
                <div className="truncate font-heading text-[17px] uppercase leading-tight text-ink">{s.art.title}</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className={`px-[6px] py-[2px] font-mono text-[9px] font-bold uppercase tracking-[0.1em] ${s.tone}`}>
                    {s.status}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-gray-menu">
                    {money(s.art.price)} · {s.date}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <DemoTabBar active={null} />
    </Screen>
  )
}

/* ------------------------------------------------------------------------ */
/* The carousel                                                              */
/* ------------------------------------------------------------------------ */

/** Captions echo the hero headline: shoot it, log it, sell out. */
const SCREENS = [
  { step: '01', caption: 'Shoot it', name: 'Gallery', render: GalleryScreen },
  { step: '02', caption: 'Log it', name: 'Artwork detail', render: DetailScreen },
  { step: '03', caption: 'Paper it', name: 'Export a line sheet', render: ExportScreen },
  { step: '04', caption: 'Sell out', name: `Sell on ${BRAND.name}`, render: SellScreen },
] as const

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function getReducedMotionOnServer() {
  return false
}

export default function AppDemo() {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [touching, setTouching] = useState(false)
  const [focused, setFocused] = useState(false)
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer,
  )

  const paused = hovered || touching || focused || reducedMotion

  useEffect(() => {
    if (paused) return
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % SCREENS.length)
    }, INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [index, paused])

  const current = SCREENS[index]
  const CurrentScreen = current.render

  return (
    <div
      className="flex flex-col items-center gap-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setTouching(true)}
      onTouchEnd={() => setTouching(false)}
      onTouchCancel={() => setTouching(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false)
      }}
    >
      <PhoneFrame label={`${BRAND.appName}: ${current.name}`}>
        {/* Keyed so the fade-in runs on every step change. */}
        <CurrentScreen key={current.step} />
      </PhoneFrame>

      <div className="flex flex-col items-center gap-3" role="group" aria-label="Demo steps">
        <div className="flex items-center gap-2.5">
          {SCREENS.map((screen, i) => {
            const isActive = i === index
            return (
              <button
                key={screen.step}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Step ${screen.step}: ${screen.caption}`}
                aria-pressed={isActive}
                className={`flex h-7 w-7 items-center justify-center border border-ink font-mono text-[11px] font-bold leading-none transition-colors hover:bg-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red ${
                  isActive ? 'bg-yellow text-ink' : 'bg-white text-ink'
                }`}
              >
                {screen.step}
              </button>
            )
          })}
        </div>
        <p className="font-mono text-[13px] font-bold uppercase tracking-[1px] text-ink">
          {current.step} / {current.caption}
        </p>
      </div>
    </div>
  )
}
