import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import AppCtaButton from '@/components/AppCtaButton'
import AppDemo from '@/components/AppDemo'
import PhoneFrame from '@/components/PhoneFrame'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Slab from '@/components/Slab'
import YellowButton from '@/components/YellowButton'
import {
  BRAND,
  SCREENSHOT_DIR,
  TIERS,
  formatPrice,
} from '@/lib/brand'

/** Hero screenshot. Drop the real file at public/screenshots/app-home.png. */
const HERO_SCREENSHOT = 'app-home.png'

const SELL_STEPS = [
  {
    label: '01 / SUBMIT',
    title: 'Pick a piece. Tap submit.',
    body: `Any artwork in your inventory can be sent to the ${BRAND.name} front desk straight from the app. Photos, dimensions, price, done.`,
  },
  {
    label: '02 / REVIEW',
    title: 'The front desk looks at everything.',
    body: `Real people at ${BRAND.fullName} review every submission. You see the status in the app: submitted, under review, listed, or declined.`,
  },
  {
    label: '03 / LISTED',
    title: 'Selected work goes up in the shop.',
    body: `Pieces that make the cut are listed at animalnewyork.com/shop, next to the artists ${BRAND.name} already sells. Withdraw anytime.`,
  },
] as const

const TEMPLATES = [
  { n: '01', name: 'Line Sheet', blurb: 'SKU, wholesale, retail. For buyers.' },
  { n: '02', name: 'Catalog', blurb: 'One or two pieces a page, full details.' },
  { n: '03', name: 'Portfolio', blurb: 'Big images, no noise. For galleries.' },
  { n: '04', name: 'Grid', blurb: 'Everything at a glance.' },
  { n: '05', name: 'Consignment', blurb: 'Terms and signature lines built in.' },
  { n: '06', name: 'Invoice', blurb: 'Get paid without opening a spreadsheet.' },
] as const

const IMPORTS = [
  { name: 'Camera', blurb: 'Shoot it in the studio or pull from your photo library.' },
  { name: 'Instagram', blurb: 'Pick posts, captions become descriptions. No duplicates.' },
  { name: 'Shopify', blurb: 'Connect your store and list from the app.' },
  { name: 'CSV', blurb: 'Bulk import a spreadsheet. Collections get made for you.' },
] as const

/**
 * Hero visual. A real screenshot wins when one has been dropped into
 * public/screenshots; otherwise the live React demo of the app takes over.
 */
function HeroPhone({ hasScreenshot }: { hasScreenshot: boolean }) {
  if (!hasScreenshot) return <AppDemo />
  return (
    <PhoneFrame label={`${BRAND.appName} home screen`}>
      <Image
        src={`/screenshots/${HERO_SCREENSHOT}`}
        alt={`${BRAND.appName} home screen`}
        fill
        sizes="(min-width: 640px) 280px, 240px"
        className="bg-white object-contain"
        priority
      />
    </PhoneFrame>
  )
}

export default function Home() {
  const hasScreenshot = fs.existsSync(
    path.join(process.cwd(), SCREENSHOT_DIR, HERO_SCREENSHOT),
  )
  const friend = TIERS.friend

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className="mono mb-5 text-[14px] uppercase tracking-[1px] text-body">
              {BRAND.appName} · the artist app from {BRAND.fullName}
            </p>
            <h1 className="mb-6 flex flex-col items-start gap-2 text-[40px] leading-[48px] sm:text-[56px] sm:leading-[64px]">
              <span className="inline-block bg-yellow p-[10px]">Shoot it.</span>
              <span className="inline-block bg-yellow p-[10px]">Log it.</span>
              <span className="inline-block bg-yellow p-[10px]">Sell out.</span>
            </h1>
            <p className="mb-8 max-w-lg text-[18px] leading-[28px] text-body">
              Inventory your work, spit out gallery-ready PDFs, and sell through{' '}
              {BRAND.name} — all from your phone.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AppCtaButton size="lg" />
              <YellowButton href="/resources" variant="outline" size="lg">
                See how it works
              </YellowButton>
            </div>
            <p className="mono mt-5 text-[13px] text-gray-rule">
              iOS. Free to start. Same account works on the web.
            </p>
          </div>
          <HeroPhone hasScreenshot={hasScreenshot} />
        </section>

        <hr className="mx-auto max-w-6xl" />

        {/* Sell through ANIMAL */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 md:py-24">
          <Slab as="h2" size="md">
            Sell through {BRAND.name}
          </Slab>
          <p className="mt-6 max-w-2xl text-[18px] leading-[28px]">
            Work directly with the gallery. Submit from your phone; {BRAND.name} curates,
            lists, and sells your work in the{' '}
            <a href={BRAND.shopUrl} target="_blank" rel="noopener noreferrer">
              {BRAND.name} shop
            </a>
            . No cold emails, no portfolio PDFs lost in someone&apos;s inbox.
          </p>

          <ol className="mt-12 grid gap-px bg-ink md:grid-cols-3">
            {SELL_STEPS.map((step) => (
              <li key={step.label} className="bg-white p-6 sm:p-8">
                <p className="mono mb-4 inline-block bg-ink px-[10px] py-[6px] text-[14px] font-bold uppercase tracking-[1px] text-white">
                  {step.label}
                </p>
                <h3 className="mb-3 text-[28px] leading-[32px]">{step.title}</h3>
                <p className="text-body">{step.body}</p>
              </li>
            ))}
          </ol>

          <p className="mono mt-8 text-[14px] uppercase tracking-[1px]">
            {BRAND.name} picks what goes up. You keep making work.
          </p>
        </section>

        <hr className="mx-auto max-w-6xl" />

        {/* Pro documents */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 md:py-24">
          <Slab as="h2" size="md">
            Paperwork that doesn&apos;t look like paperwork
          </Slab>
          <p className="mt-6 max-w-2xl text-[18px] leading-[28px]">
            Six PDF templates built for galleries, collectors, and wholesale buyers. Pick
            your pieces, pick a template, tap once. Your logo on top if you want it.
          </p>

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {TEMPLATES.map((tmpl) => (
              <li
                key={tmpl.name}
                className="relative flex aspect-square flex-col justify-between border border-ink bg-white p-4 sm:p-5"
              >
                <div className="flex items-start justify-between">
                  <span className="mono text-[13px] font-bold uppercase tracking-[1px]">
                    PDF · {tmpl.n}
                  </span>
                  <span className="block h-[5px] w-10 bg-red" aria-hidden="true" />
                </div>
                <div>
                  <Slab as="h3" size="sm" className="-ml-[15px]">
                    {tmpl.name}
                  </Slab>
                  <p className="mono mt-3 text-[13px] leading-[18px] text-body">{tmpl.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <hr className="mx-auto max-w-6xl" />

        {/* Imports */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 md:py-24">
          <Slab as="h2" size="md">
            Get your work in
          </Slab>
          <p className="mt-6 max-w-2xl text-[18px] leading-[28px]">
            Your inventory is probably scattered across a camera roll, a grid, a store,
            and a spreadsheet. Pull it all into one place.
          </p>

          <ul className="mt-12 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {IMPORTS.map((item, i) => (
              <li key={item.name} className="bg-white p-6">
                <p className="mono text-[13px] font-bold uppercase tracking-[1px] text-gray-rule">
                  Import · 0{i + 1}
                </p>
                <h3 className="mt-2 text-[28px] leading-[32px]">{item.name}</h3>
                <p className="mt-2 text-body">{item.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Hunting Club */}
        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-8 md:pt-12">
          <div className="border-[5px] border-red bg-yellow p-6 sm:p-10 md:p-14">
            <div className="grid items-start gap-10 md:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 className="text-[40px] leading-[46px] text-red sm:text-[50px] sm:leading-[60px]">
                  Join the {friend.club}
                </h2>
                <p className="mt-4 max-w-xl text-[18px] leading-[28px] text-ink">
                  {friend.name} is {BRAND.name}&apos;s membership for working artists. Unlimited
                  inventory, every template, a public profile, and a seat at the table when
                  {' '}{BRAND.name} does something in real life.
                </p>
                <p className="mono mt-6 text-[20px] font-bold leading-[30px] text-ink">
                  {formatPrice(friend.priceMonthly)}/mo{' '}
                  <span className="text-[16px] font-normal">
                    or {formatPrice(friend.priceYearly)}/year
                  </span>
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <YellowButton href="/pricing" variant="black" size="lg">
                    See pricing
                  </YellowButton>
                </div>
              </div>
              <div className="border border-ink bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="mono text-[13px] font-bold uppercase tracking-[1px]">
                    {friend.name} · benefits
                  </p>
                  <Image src="/brand/pigeon.svg" alt="" width={44} height={31} />
                </div>
                <ul className="space-y-2">
                  {friend.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-[15px] leading-[22px]">
                      <span className="mono font-bold text-red" aria-hidden="true">
                        +
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-8 md:pt-24">
          <div className="flex flex-col items-start gap-6 border-t border-gray-rule pt-10 md:flex-row md:items-center md:justify-between">
            <div>
              <Slab as="h2" size="md">
                Stop managing. Start showing.
              </Slab>
              <p className="mt-4 max-w-md">
                Free for your first {TIERS.free.artworkLimit} pieces. Questions? Write the front desk at{' '}
                <a href={`mailto:${BRAND.supportEmail}`}>{BRAND.supportEmail}</a>.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <AppCtaButton size="lg" />
              <Link
                href="/pricing"
                className="mono self-center text-[14px] font-bold uppercase tracking-[1px]"
              >
                Compare plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
