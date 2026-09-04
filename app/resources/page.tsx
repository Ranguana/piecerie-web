import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Slab from '@/components/Slab'
import YellowButton from '@/components/YellowButton'
import AppCtaButton from '@/components/AppCtaButton'
import {
  BRAND,
  TIERS,
  WEB_APP_URL,
  getAppCta,
  publicProfileDisplay,
} from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Resources',
  description: `How to use ${BRAND.appName}: inventory, PDFs, imports, selling through ${BRAND.fullName}, and the ${TIERS.friend.club}.`,
}

const webAppDisplay = WEB_APP_URL.replace(/^https?:\/\//, '')

const sections = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: `What is ${BRAND.name}?`,
        a: `${BRAND.appName} is the artist app from ${BRAND.fullName}. Photograph your work, keep an inventory, generate professional PDFs (line sheets, catalogs, portfolios), and submit pieces to ${BRAND.name} for sale at animalnewyork.com/shop.`,
      },
      {
        q: 'How do I sign up?',
        a: `1. ${getAppCta().comingSoon ? `Email the front desk at ${BRAND.supportEmail} for beta access` : `Install ${BRAND.appName} from the TestFlight link`}\n2. Tap "Sign Up" and enter your email\n3. Create a password (at least 6 characters)\n4. Check your email and tap the confirmation link\n5. You're in. Start adding your artwork.`,
      },
      {
        q: 'How do I add my first artwork?',
        a: 'Tap "Import" in the navigation. You can take a photo with your camera, choose from your photo library, bulk import from a CSV spreadsheet, or import from Instagram.',
      },
      {
        q: 'Is my data backed up?',
        a: 'Yes. All your artwork and data is stored securely in the cloud and synced across your devices.',
      },
    ],
  },
  {
    category: 'Managing Artwork',
    questions: [
      {
        q: 'How do I edit artwork details?',
        a: 'Tap any artwork in your gallery to view it, then tap "Edit Info" to change the title, description, medium, dimensions, price, or other details.',
      },
      {
        q: 'Can I organize artwork into groups?',
        a: 'Yes. Use Collections to group related artwork. Go to "Collections" to create one, then tap any artwork in your gallery and use the Collection dropdown to assign it.',
      },
      {
        q: 'How do I reorder my artwork?',
        a: 'Press and hold any artwork in your gallery, then drag it to a new position. Your order is saved automatically.',
      },
      {
        q: 'Can I delete artwork?',
        a: 'Yes. Tap the artwork, scroll down, and tap "Delete". This cannot be undone.',
      },
    ],
  },
  {
    category: `Selling through ${BRAND.name}`,
    questions: [
      {
        q: `How do I sell my work through ${BRAND.name}?`,
        a: `Open any artwork in the app and tap "Submit to ${BRAND.name}". The ${BRAND.name} front desk reviews every submission and decides what to list at animalnewyork.com/shop. You will hear back in the app either way.`,
      },
      {
        q: 'What do the submission statuses mean?',
        a: `Submitted — the front desk has your piece.\nUnder review — someone at ${BRAND.name} is looking at it.\nListed — it's live in the ${BRAND.name} shop.\nDeclined — not a fit right now. You can submit other work anytime.`,
      },
      {
        q: 'Can I withdraw a submission?',
        a: `Yes, at any time and at any status. Open the artwork and tap "Withdraw". If the piece was already listed, it comes down from the shop.`,
      },
      {
        q: `Who decides what gets listed?`,
        a: `${BRAND.fullName}. Submitting does not guarantee a listing. Pricing, commission, and shipping for listed work are agreed with the front desk before anything goes live. Questions go to ${BRAND.submissionsEmail}.`,
      },
      {
        q: 'Do I need a paid plan to sell?',
        a: `No. Submitting work to ${BRAND.name} is included on the ${TIERS.free.name} plan.`,
      },
    ],
  },
  {
    category: TIERS.friend.club,
    questions: [
      {
        q: `What is the ${TIERS.friend.club}?`,
        a: `The ${TIERS.friend.club} is ${BRAND.fullName}'s membership program. Inside the app, joining makes you a ${TIERS.friend.name}: unlimited artworks, every PDF template with no footer, custom branding, and a public profile with your own URL and QR code.`,
      },
      {
        q: 'What is the Showcase?',
        a: `A page on animalnewyork.com featuring current ${TIERS.friend.name}s and their work. Members are added automatically once their public profile is switched on.`,
      },
      {
        q: 'What about events?',
        a: `${BRAND.name} produces shows, openings, and other things in real life in New York. ${TIERS.friend.name}s get invited.`,
      },
      {
        q: 'How do I join?',
        a: `From the app: Settings → ${TIERS.friend.club}. Billing goes through the App Store. See the pricing page for current rates.`,
      },
    ],
  },
  {
    category: 'CSV Import & Export',
    questions: [
      {
        q: 'How does CSV import work?',
        a: 'Create a spreadsheet with your artwork info — title, medium, price, dimensions, etc. Save it as a CSV file, then go to Import → CSV Import. Your artworks will be created with all the info filled in. Add photos later by tapping each artwork in your gallery.',
      },
      {
        q: 'Does CSV import create collections automatically?',
        a: 'Yes. If your CSV has a "collection" column, any collection names will be matched to existing collections or created as new ones. All artworks with that collection name get assigned automatically.',
      },
      {
        q: 'What columns does the CSV support?',
        a: 'title (required), description, medium, height, width, depth, dimension_unit (in/cm/ft/mm), year_created, price, status, sku, collection, image_url, is_public. Only title is required — everything else is optional.',
      },
      {
        q: 'Can I export my inventory as a CSV?',
        a: `Yes. On the Export page, select your artworks and tap "Export to CSV". This creates a spreadsheet backup with all your artwork data including collection names (files are named ${BRAND.csvFilePrefix}-…). You can edit it and re-import later.`,
      },
    ],
  },
  {
    category: 'Creating PDFs',
    questions: [
      {
        q: 'What PDF templates are available?',
        a: 'Grid, Catalog, Line Sheet, Grid Line Sheet, Portfolio, Consignment Sheet, and Invoice.',
      },
      {
        q: 'How do I create a PDF?',
        a: 'Go to Export, select artwork, choose a template, customize options, then tap "Generate PDF".',
      },
      {
        q: 'Can I add my logo to PDFs?',
        a: `Yes. Upload a logo in Profile settings. It will appear on your exported PDFs. ${TIERS.free.name} exports carry a small "${BRAND.madeWith}" footer; ${TIERS.friend.name}s export without it.`,
      },
      {
        q: "What's the difference between Line Sheet and Catalog?",
        a: 'Line Sheet shows multiple pieces per page with pricing — ideal for wholesale buyers. Catalog shows one or two per page with full details — great for exhibitions and galleries.',
      },
    ],
  },
  {
    category: 'Portfolio Page',
    questions: [
      {
        q: 'What is a portfolio page?',
        a: `A public webpage at ${publicProfileDisplay('yourname')} where visitors can view your artwork and contact info.`,
      },
      {
        q: 'How do I set up my portfolio?',
        a: 'Go to Profile settings, fill in your details, set a URL slug, and toggle "Public Profile" on.',
      },
      {
        q: "How do I control what's visible?",
        a: 'Only collections marked as "Public" appear on your portfolio.',
      },
    ],
  },
  {
    category: 'Importing',
    questions: [
      {
        q: 'Can I import from Instagram?',
        a: 'Yes. Go to Import → Instagram, connect your account, and select photos to import. Captions become descriptions automatically.',
      },
      {
        q: 'Will it import duplicates?',
        a: `No. ${BRAND.name} tracks which Instagram posts you've already imported and skips them.`,
      },
      {
        q: 'Can I connect Shopify?',
        a: 'Yes. Go to the Sell page, enter your Shopify store name, and authorize the connection. Then tap any artwork in your gallery and use "Sell on Shopify" to list it in your own store.',
      },
      {
        q: 'Can I import from a spreadsheet?',
        a: 'Yes. CSV import lets you bulk-add artwork info from any spreadsheet. Include a "collection" column to auto-create and assign collections. Add photos later.',
      },
    ],
  },
  {
    category: 'Account',
    questions: [
      {
        q: 'Can I use multiple devices?',
        a: `Yes. ${BRAND.name} works on the iOS app and on the web at ${webAppDisplay}. Sign in with the same account on either and everything stays in sync.`,
      },
      {
        q: 'How do I reset my password?',
        a: 'Tap "Forgot Password" on the login screen and follow the email instructions.',
      },
      {
        q: 'How do I delete my account and data?',
        a: `Email ${BRAND.supportEmail} from the address on your account. We delete your account, artworks, photos, and profile within 30 days and confirm by email.`,
      },
    ],
  },
]

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-14 sm:px-8 md:py-20">
        <p className="mono mb-4 text-[14px] uppercase tracking-[1px]">Resources</p>
        <Slab as="h1" size="lg">
          How to use {BRAND.appName}
        </Slab>
        <p className="mt-6 max-w-xl text-[18px] leading-[28px]">
          Everything you need to get started, get organized, and get your work in front of{' '}
          {BRAND.name}.
        </p>

        {/* Table of Contents */}
        <nav className="mt-12 border border-ink p-6" aria-label="Contents">
          <p className="mono mb-4 text-[13px] font-bold uppercase tracking-[1px]">Contents</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {sections.map((section) => (
              <li key={section.category}>
                <a href={`#${slugify(section.category)}`} className="mono text-[14px] font-bold uppercase tracking-[1px]">
                  {section.category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="mt-16 space-y-16">
          {sections.map((section) => (
            <section key={section.category} id={slugify(section.category)} className="scroll-mt-6">
              <Slab as="h2" size="md">
                {section.category}
              </Slab>
              <dl className="mt-6 divide-y divide-gray-rule border-t border-gray-rule">
                {section.questions.map((item) => (
                  <div key={item.q} className="py-6">
                    <dt className="font-heading text-[25px] leading-[28px] uppercase">{item.q}</dt>
                    <dd className="mt-2 whitespace-pre-line text-body">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-20 border-[5px] border-red bg-yellow p-8 text-center sm:p-12">
          <h2 className="text-[40px] leading-[46px] text-red">Still stuck?</h2>
          <p className="mt-3">The front desk answers email. Really.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <YellowButton href={`mailto:${BRAND.supportEmail}`} variant="black">
              {BRAND.supportEmail}
            </YellowButton>
            <AppCtaButton variant="outline" comingSoonVariant="outline" />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
