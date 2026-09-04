import Image from 'next/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Slab from '@/components/Slab'
import YellowButton from '@/components/YellowButton'
import { BRAND } from '@/lib/brand'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start justify-center px-4 py-20 sm:px-8">
        <p className="mono mb-4 text-[14px] uppercase tracking-[1px]">404</p>
        <Slab as="h1" size="lg">
          Nothing here.
        </Slab>
        <p className="mt-6 max-w-md text-[18px] leading-[28px]">
          This page doesn&apos;t exist, or this artist&apos;s profile isn&apos;t public. The pigeon has
          checked.
        </p>
        <Image src="/brand/pigeon.svg" alt="" width={120} height={84} className="mt-8" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <YellowButton href="/">Go home</YellowButton>
          <YellowButton href={BRAND.siteUrl} variant="outline">
            animalnewyork.com
          </YellowButton>
        </div>
      </main>
      <SiteFooter compact />
    </div>
  )
}
