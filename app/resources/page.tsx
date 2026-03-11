import Link from 'next/link'

export const metadata = {
  title: 'Resources - Piecerie',
  description: 'Learn how to use Piecerie to manage your artwork, create PDFs, and more.',
}

const sections = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Piecerie?',
        a: 'Piecerie is an app for artists to catalog their artwork and create professional documents like line sheets, catalogs, and portfolios. Take photos of your work, add details, and generate beautiful PDFs in seconds.',
      },
      {
        q: 'How do I sign up?',
        a: '1. Download Piecerie from the App Store\n2. Tap "Sign Up" and enter your email\n3. Create a password (at least 6 characters)\n4. Check your email and tap the confirmation link\n5. You\'re in! Start adding your artwork.',
      },
      {
        q: 'How do I add my first artwork?',
        a: 'Tap "Import" in the navigation. You can take a photo with your camera, choose from your photo library, bulk import from a CSV spreadsheet, or import from Instagram.',
      },
      {
        q: 'Is my data backed up?',
        a: 'Yes. All your artwork and data is securely stored in the cloud and synced across your devices.',
      },
    ],
  },
  {
    category: 'Managing Artwork',
    questions: [
      {
        q: 'How do I edit artwork details?',
        a: 'Tap on any artwork in your gallery to view it, then tap "Edit Info" to change the title, description, medium, dimensions, price, or other details.',
      },
      {
        q: 'Can I organize artwork into groups?',
        a: 'Yes! Use Collections to group related artwork. Go to "Collections" to create one, then tap any artwork in your gallery and use the Collection dropdown to assign it.',
      },
      {
        q: 'How do I reorder my artwork?',
        a: 'Press and hold any artwork in your gallery, then drag it to a new position. Your order is saved automatically.',
      },
      {
        q: 'Can I delete artwork?',
        a: 'Yes. Tap on the artwork, scroll down, and tap "Delete". This cannot be undone.',
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
        a: 'Yes! If your CSV has a "collection" column, any collection names will be matched to existing collections or created as new ones. All artworks with that collection name get assigned automatically.',
      },
      {
        q: 'What columns does the CSV support?',
        a: 'title (required), description, medium, height, width, depth, dimension_unit (in/cm/ft/mm), year_created, price, status, sku, collection, image_url, is_public. Only title is required — everything else is optional.',
      },
      {
        q: 'Can I export my inventory as a CSV?',
        a: 'Yes! On the Export page, select your artworks and click "Export to CSV". This creates a spreadsheet backup with all your artwork data including collection names. You can edit it and re-import later.',
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
        a: 'Yes. Upload a logo in Profile settings. It will automatically appear on your exported PDFs.',
      },
      {
        q: 'What\'s the difference between Line Sheet and Catalog?',
        a: 'Line Sheet shows multiple pieces per page with pricing — ideal for wholesale buyers. Catalog shows one or two per page with full details — great for exhibitions and galleries.',
      },
    ],
  },
  {
    category: 'Portfolio Page',
    questions: [
      {
        q: 'What is a portfolio page?',
        a: 'A public webpage at piecerie.com/yourname where visitors can view your artwork and contact info.',
      },
      {
        q: 'How do I set up my portfolio?',
        a: 'Go to Profile settings, fill in your details, set a URL slug, and toggle "Public Profile" on.',
      },
      {
        q: 'How do I control what\'s visible?',
        a: 'Only collections marked as "Public" appear on your portfolio.',
      },
    ],
  },
  {
    category: 'Selling Artwork',
    questions: [
      {
        q: 'Can I sell through Piecerie?',
        a: 'Piecerie connects to Shopify so you can list artwork directly from the app. Etsy integration is coming soon.',
      },
      {
        q: 'How do I connect Shopify?',
        a: 'Go to the Sell page, enter your Shopify store name, and authorize the connection. Then tap any artwork in your gallery and use the "Sell on Shopify" button to list it.',
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
        a: 'No. Piecerie tracks which Instagram posts you\'ve already imported and skips them.',
      },
      {
        q: 'Can I import from a spreadsheet?',
        a: 'Yes! CSV import lets you bulk-add artwork info from any spreadsheet. Include a "collection" column to auto-create and assign collections. Add photos later.',
      },
    ],
  },
  {
    category: 'Account',
    questions: [
      {
        q: 'Can I use multiple devices?',
        a: 'Yes! Piecerie works on the iOS app and on the web at piecerie.vercel.app. Sign in with the same account on either and everything stays in sync.',
      },
      {
        q: 'How do I reset my password?',
        a: 'Tap "Forgot Password" on the login screen and follow the email instructions.',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
          >
            <span className="text-[#5a6350]">P</span>
            <span className="text-[var(--foreground)]">iecerie</span>
          </Link>
          <nav className="flex gap-8 items-center">
            <Link href="/resources" className="text-[11px] uppercase tracking-[0.15em] text-[#5a6350] border-b border-[#5a6350] pb-0.5">Resources</Link>
            <Link href="/pricing" className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] hover:text-[var(--foreground)]">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 py-20">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#5a6350] mb-4">Resources</p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          How to use <span className="text-[#5a6350]">P</span>iecerie
        </h1>
        <p className="text-base text-[var(--muted)] mb-16 max-w-xl">
          Everything you need to know to get started and make the most of your account.
        </p>

        {/* Table of Contents */}
        <div className="border border-[var(--border)] p-8 mb-20 rounded-xl bg-[var(--surface)]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">Contents</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {sections.map((section) => (
              <a
                key={section.category}
                href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm hover:text-[#5a6350]"
              >
                {section.category}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section) => (
            <div key={section.category} id={section.category.toLowerCase().replace(/\s+/g, '-')}>
              <h2 className="text-xl font-semibold tracking-tight mb-8 pb-4 border-b border-[var(--border)]">
                {section.category}
              </h2>
              <div className="grid gap-8">
                {section.questions.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium mb-2">{item.q}</h3>
                    <p className="text-[var(--muted)] text-sm whitespace-pre-line leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-24 border border-[var(--border)] p-12 text-center rounded-xl bg-[var(--surface)]">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Still have questions?</h2>
          <p className="text-[var(--muted)] mb-8">
            We&apos;re here to help.
          </p>
          <a
            href="mailto:support@piecerie.com"
            className="inline-block bg-[var(--accent)] text-white px-8 py-3.5 text-sm tracking-wide rounded-lg hover:bg-[var(--accent-light)]"
          >
            Contact Support
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-20">
        <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--muted)]">
          <div>&copy; {new Date().getFullYear()} Piecerie</div>
          <div className="flex gap-8">
            <Link href="/resources" className="hover:text-[var(--foreground)]">Resources</Link>
            <Link href="/pricing" className="hover:text-[var(--foreground)]">Pricing</Link>
            <a href="mailto:support@piecerie.com" className="hover:text-[var(--foreground)]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
