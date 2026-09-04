import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Slab from '@/components/Slab'
import YellowButton from '@/components/YellowButton'
import {
  APP_STORE_URL,
  BRAND,
  TIERS,
  formatPrice,
  yearlySavingsPercent,
} from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Free to start. ${TIERS.friend.name} for ${formatPrice(TIERS.friend.priceMonthly)}/month or ${formatPrice(TIERS.friend.priceYearly)}/year.`,
}

const savings = yearlySavingsPercent(TIERS.friend)

const FAQ = [
  {
    q: `Is the free plan actually free?`,
    a: `Yes. Up to ${TIERS.free.artworkLimit} artworks, three PDF templates with a small "${BRAND.madeWith}" footer, Instagram import, a portfolio page, and you can submit work to ${BRAND.name} for sale. No card required.`,
  },
  {
    q: `What is the ${TIERS.friend.club}?`,
    a: `${TIERS.friend.club} is ${BRAND.fullName}'s membership program. Joining as a ${TIERS.friend.name} unlocks everything in the app, puts you in the ${BRAND.name} Showcase, and gets you invited to in-person ${BRAND.name} events.`,
  },
  {
    q: `How does selling through ${BRAND.name} work?`,
    a: `Submit any piece from the app. The ${BRAND.name} front desk reviews it and decides what to list at animalnewyork.com/shop. Selling is available on both plans; ${BRAND.name} does not charge a listing fee to submit. Terms for listed work are agreed with the front desk before anything goes live.`,
  },
  {
    q: `What happens if I cancel?`,
    a: `Your artwork stays where it is. You drop back to the free limits: ${TIERS.free.artworkLimit} artworks and the three free templates. Nothing gets deleted.`,
  },
  {
    q: `Is there an annual plan?`,
    a: `Yes. ${formatPrice(TIERS.friend.priceYearly)}/year saves about ${savings}% compared to paying monthly.`,
  },
  {
    q: `How do I pay?`,
    a: `Through the App Store, from inside the app. Manage or cancel from your Apple subscriptions at any time.`,
  },
]

function Benefits({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-[22px]">
          <span className="mono font-bold text-red" aria-hidden="true">
            +
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PricingPage() {
  const { free, friend } = TIERS

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-8 md:py-20">
        <div className="mb-12 md:mb-16">
          <p className="mono mb-4 text-[14px] uppercase tracking-[1px]">Pricing</p>
          <Slab as="h1" size="lg">
            Two plans. No fine print.
          </Slab>
          <p className="mt-6 max-w-xl text-[18px] leading-[28px]">
            Start free. Join the {friend.club} when you want the whole studio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Free */}
          <section className="flex flex-col border border-ink bg-white p-6 sm:p-8">
            <p className="mono text-[13px] font-bold uppercase tracking-[1px] text-gray-rule">
              Plan · 01
            </p>
            <h2 className="mt-2 text-[32px] leading-[38px]">{free.name}</h2>
            <p className="mt-1 text-body">Everything you need to get your inventory in order.</p>
            <p className="mono mt-6 text-[20px] font-bold leading-[30px] text-green-price">
              {formatPrice(free.priceMonthly)}
              <span className="ml-2 text-[16px] font-normal text-body">forever</span>
            </p>
            <hr className="my-6" />
            <div className="flex-1">
              <Benefits items={free.benefits} />
            </div>
            <div className="mt-8">
              <YellowButton href={APP_STORE_URL} full>
                Get the app
              </YellowButton>
            </div>
          </section>

          {/* Friend of ANIMAL */}
          <section className="flex flex-col border-[5px] border-red bg-white p-6 sm:p-8">
            <p className="mono text-[13px] font-bold uppercase tracking-[1px] text-red">
              Plan · 02 · {friend.club}
            </p>
            <h2 className="mt-2 text-[32px] leading-[38px]">{friend.name}</h2>
            <p className="mt-1 text-body">
              Unlimited work, every template, and a seat at {BRAND.name} events.
            </p>
            <p className="mono mt-6 text-[20px] font-bold leading-[30px] text-green-price">
              {formatPrice(friend.priceMonthly)}
              <span className="ml-2 text-[16px] font-normal text-body">/month</span>
            </p>
            <p className="mono text-[14px] text-body">
              or {formatPrice(friend.priceYearly)}/year (save {savings}%)
            </p>
            <hr className="my-6" />
            <div className="flex-1">
              <Benefits items={friend.benefits} />
            </div>
            <div className="mt-8 grid gap-3">
              <YellowButton href={APP_STORE_URL} full>
                Join in the app
              </YellowButton>
              <a
                href={BRAND.huntingClubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mono self-center text-[14px] font-bold uppercase tracking-[1px]"
              >
                About the {friend.club}
              </a>
            </div>
          </section>
        </div>

        {/* Compare line */}
        <p className="mono mt-8 text-[14px] leading-[22px] text-body">
          Both plans let you submit work to {BRAND.name} for sale. Subscriptions are billed
          through the App Store and can be cancelled anytime.
        </p>

        {/* FAQ */}
        <section className="mt-20 max-w-3xl md:mt-28">
          <Slab as="h2" size="md">
            Questions
          </Slab>
          <dl className="mt-8 divide-y divide-gray-rule border-t border-gray-rule">
            {FAQ.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-heading text-[25px] leading-[28px] uppercase">{item.q}</dt>
                <dd className="mt-2 text-body">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8">
            Something else?{' '}
            <a href={`mailto:${BRAND.supportEmail}`}>{BRAND.supportEmail}</a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
