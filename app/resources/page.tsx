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
        q: 'How do I sign up?',
        a: '1. Download Piecerie from the App Store\n2. Tap "Sign Up" and enter your email\n3. Create a password (at least 6 characters)\n4. Check your email and tap the confirmation link\n5. You\'re in! Start adding your artwork.',
      },
      {
        q: 'What is Piecerie?',
        a: 'Piecerie is an app for artists to catalog their artwork and create professional documents like line sheets, catalogs, and portfolios. Take photos of your work, add details, and generate beautiful PDFs in seconds.',
      },
      {
        q: 'How do I add my first artwork?',
        a: 'Tap "Add Artwork" in the navigation. You can take a photo with your camera or choose from your photo library. Then fill in the details like title, medium, dimensions, and price.',
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
        a: 'Tap on any artwork in your gallery to view it, then tap "Edit" to change the title, description, medium, dimensions, price, or other details.',
      },
      {
        q: 'Can I organize artwork into groups?',
        a: 'Yes! Use Collections to group related artwork. Collections can be made public to appear on your profile.',
      },
      {
        q: 'How do I reorder my artwork?',
        a: 'Press and hold any artwork, then drag it to a new position.',
      },
      {
        q: 'Can I delete artwork?',
        a: 'Yes. Tap on the artwork, scroll down, and tap "Delete Artwork". This cannot be undone.',
      },
    ],
  },
  {
    category: 'Creating PDFs',
    questions: [
      {
        q: 'What PDF templates are available?',
        a: 'Grid, Catalog, Line Sheet, Portfolio, Consignment Sheet, and Detailed Catalog.',
      },
      {
        q: 'How do I create a PDF?',
        a: 'Go to Export, select artwork, choose a template, customize options, then tap "Generate PDF".',
      },
      {
        q: 'Can I add my logo to PDFs?',
        a: 'Yes. Upload a logo in Profile settings, then enable "Include Logo" when exporting.',
      },
      {
        q: 'What\'s the difference between Line Sheet and Catalog?',
        a: 'Line Sheet shows multiple pieces per page with pricing—ideal for wholesale. Catalog shows one per page with full details.',
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
        a: 'Piecerie connects to Shopify. Etsy integration is coming soon.',
      },
      {
        q: 'How do I connect Shopify?',
        a: 'Go to Sell, enter your store name, and authorize. Then list artwork from its detail page.',
      },
    ],
  },
  {
    category: 'Importing',
    questions: [
      {
        q: 'Can I import from Instagram?',
        a: 'Yes. Connect your account and select photos to import. Captions become descriptions.',
      },
      {
        q: 'Will it import duplicates?',
        a: 'No. Piecerie tracks what you\'ve imported.',
      },
    ],
  },
  {
    category: 'Account',
    questions: [
      {
        q: 'Can I use multiple devices?',
        a: 'Yes. Sign in with the same account and everything syncs.',
      },
      {
        q: 'How do I reset my password?',
        a: 'Tap "Forgot Password" on the login screen.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Contact support@piecerie.com to request deletion.',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl italic">
            Piecerie
          </Link>
          <nav className="flex gap-10 text-sm tracking-wide">
            <Link href="/resources" className="text-[#9a3412]">Resources</Link>
            <Link href="/pricing" className="hover:text-[#9a3412]">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 py-20">
        <p className="text-sm tracking-[0.3em] uppercase text-[#9a3412] mb-4">Resources</p>
        <h1 className="text-5xl md:text-6xl italic font-normal mb-6">How to use Piecerie</h1>
        <p className="text-lg text-[#1a1a1a]/60 mb-16 max-w-xl">
          Everything you need to know to get started and make the most of your account.
        </p>

        {/* Table of Contents */}
        <div className="border border-[#1a1a1a]/10 p-8 mb-20 bg-white">
          <p className="text-sm tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">Contents</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {sections.map((section) => (
              <a
                key={section.category}
                href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[15px] hover:text-[#9a3412]"
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
              <h2 className="text-2xl italic mb-8 pb-4 border-b border-[#1a1a1a]/10">
                {section.category}
              </h2>
              <div className="grid gap-8">
                {section.questions.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-normal mb-2">{item.q}</h3>
                    <p className="text-[#1a1a1a]/60 text-[15px] whitespace-pre-line leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-24 border border-[#1a1a1a]/10 p-12 text-center bg-white">
          <h2 className="text-2xl italic mb-4">Still have questions?</h2>
          <p className="text-[#1a1a1a]/60 mb-8">
            We're here to help.
          </p>
          <a
            href="mailto:support@piecerie.com"
            className="inline-block bg-[#1a1a1a] text-[#faf9f7] px-8 py-4 text-sm tracking-wide hover:bg-[#9a3412]"
          >
            Contact Support
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a]/10 mt-20">
        <div className="max-w-6xl mx-auto px-8 py-8 text-center text-sm text-[#1a1a1a]/50 italic">
          &copy; {new Date().getFullYear()} Piecerie
        </div>
      </footer>
    </div>
  )
}
