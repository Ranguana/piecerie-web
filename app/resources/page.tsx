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
        a: 'Yes. All your artwork and data is securely stored in the cloud and synced across your devices. Your images are stored separately from your device photos.',
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
        a: 'Yes! Use Collections to group related artwork. Go to Collections, create a new collection, then add artwork to it. Collections can be made public to appear on your profile.',
      },
      {
        q: 'How do I reorder my artwork?',
        a: 'In your gallery, press and hold any artwork, then drag it to a new position. On desktop, you can also drag and drop.',
      },
      {
        q: 'Can I delete artwork?',
        a: 'Yes. Tap on the artwork to view it, scroll down, and tap "Delete Artwork". This cannot be undone.',
      },
    ],
  },
  {
    category: 'Creating PDFs',
    questions: [
      {
        q: 'What PDF templates are available?',
        a: 'Piecerie offers 6 templates: Grid (overview), Catalog (one per page), Line Sheet (for wholesale), Portfolio (presentation), Consignment Sheet (for galleries), and Detailed Catalog (full descriptions).',
      },
      {
        q: 'How do I create a PDF?',
        a: 'Go to Export, select the artwork you want to include, choose a template, customize options like logo and page size, then tap "Generate PDF". The PDF will open for you to save or share.',
      },
      {
        q: 'Can I add my logo to PDFs?',
        a: 'Yes. In your Profile settings, upload a logo. Then when exporting, enable "Include Logo" and choose the size (small, medium, or large).',
      },
      {
        q: 'What\'s the difference between Line Sheet and Catalog?',
        a: 'Line Sheet is designed for wholesale buyers—it shows multiple pieces per page with SKU, dimensions, and pricing in a compact format. Catalog shows one artwork per page with full details, better for collectors or exhibitions.',
      },
      {
        q: 'Can I include pricing on PDFs?',
        a: 'Yes. Each template has options to show or hide pricing. Line sheets can show both wholesale and retail prices.',
      },
    ],
  },
  {
    category: 'Portfolio Page',
    questions: [
      {
        q: 'What is a portfolio page?',
        a: 'Your portfolio page is a webpage at piecerie.com/yourname where visitors can view your artwork, bio, and contact info without needing the app.',
      },
      {
        q: 'How do I set up my portfolio page?',
        a: 'Go to Profile settings. Fill in your display name, bio, and contact info. Set a unique URL slug (like "jane-smith"). Toggle "Public Profile" on. Only collections marked as public will appear.',
      },
      {
        q: 'How do I control what\'s visible?',
        a: 'Only collections marked as "Public" appear on your portfolio. In Collections, toggle the "Public" switch for each collection you want to share.',
      },
      {
        q: 'Can I share my portfolio?',
        a: 'Yes! Your portfolio URL (piecerie.com/yourname) can be shared anywhere—on business cards, social media, email signatures, etc.',
      },
    ],
  },
  {
    category: 'Selling Artwork',
    questions: [
      {
        q: 'Can I sell artwork through Piecerie?',
        a: 'Piecerie connects to Shopify so you can list artwork directly to your Shopify store. Etsy integration is coming soon.',
      },
      {
        q: 'How do I connect Shopify?',
        a: 'Go to Sell, enter your Shopify store name, and authorize the connection. Once connected, you can list any artwork to Shopify from its detail page.',
      },
      {
        q: 'What gets sent to Shopify?',
        a: 'When you list artwork, Piecerie sends the image, title, description, and price to create a product in your Shopify store. You can then edit it further in Shopify.',
      },
    ],
  },
  {
    category: 'Importing',
    questions: [
      {
        q: 'Can I import from Instagram?',
        a: 'Yes. Go to Instagram in the app, connect your account, and select photos to import. The caption becomes the description.',
      },
      {
        q: 'Will it import duplicates?',
        a: 'No. Piecerie tracks which Instagram photos you\'ve already imported and won\'t let you import them again.',
      },
    ],
  },
  {
    category: 'Account & Settings',
    questions: [
      {
        q: 'How do I change my profile info?',
        a: 'Go to Profile in the navigation. You can update your display name, bio, logo, contact email, phone, website, and Instagram handle.',
      },
      {
        q: 'Can I use Piecerie on multiple devices?',
        a: 'Yes. Sign in with the same account and all your artwork syncs automatically.',
      },
      {
        q: 'I didn\'t get my confirmation email',
        a: 'Check your spam folder. If it\'s not there, go back to the login screen and tap "Sign Up" again with the same email—we\'ll resend the confirmation.',
      },
      {
        q: 'How do I reset my password?',
        a: 'On the login screen, tap "Forgot Password" and enter your email. We\'ll send you a link to reset it.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Contact us at support@piecerie.com to request account deletion. This will permanently remove all your data.',
      },
    ],
  },
]

export default function HowToUsePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Piecerie" className="h-8" />
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/resources" className="text-black font-medium">Resources</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-black">Pricing</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-xl text-gray-600 mb-12">
          Everything you need to know to get started and make the most of Piecerie.
        </p>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="font-semibold mb-4">Jump to:</h2>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.category}
                href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-white border rounded-full text-sm hover:border-black transition-colors"
              >
                {section.category}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.category} id={section.category.toLowerCase().replace(/\s+/g, '-')}>
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.questions.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-lg mb-2">{item.q}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            We're here to help.
          </p>
          <a
            href="mailto:support@piecerie.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Contact Support
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Piecerie. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
