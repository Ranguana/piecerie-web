/*
 * DRAFT — pending review by counsel before publication.
 * This privacy policy was written by the product team as a starting point and
 * has not yet been reviewed by an attorney. Do not treat it as final legal text.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Slab from '@/components/Slab'
import { BRAND, TIERS } from '@/lib/brand'

const LAST_UPDATED = 'September 4, 2026'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How the ${BRAND.name} app collects, uses, and protects your information.`,
}

export default function PrivacyPage() {
  const supportLink = <a href={`mailto:${BRAND.supportEmail}`}>{BRAND.supportEmail}</a>

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-8 md:py-20">
        <p className="mono mb-4 text-[14px] uppercase tracking-[1px]">Legal</p>
        <Slab as="h1" size="lg">
          Privacy Policy
        </Slab>
        <p className="mono mt-4 text-[14px] uppercase tracking-[1px] text-body">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="legal mt-10 text-body">
          <p>
            This Privacy Policy explains how {BRAND.fullName} (&quot;{BRAND.name},&quot; &quot;we,&quot;
            &quot;us&quot;) collects, uses, and shares information when you use the {BRAND.name} mobile
            app, the {BRAND.name} web app, and this website (together, the &quot;Service&quot;). The short
            version: we collect what we need to run an art inventory app, we do not run ads, and we do not
            sell your data.
          </p>

          <h2>1. Information we collect</h2>
          <h3>Account information</h3>
          <p>
            When you create an account we collect your <strong>email address</strong> and a password
            (stored only as a salted hash by our authentication provider). We use your email to sign you
            in, to send password-reset and account emails, and to respond when you contact us.
          </p>

          <h3>Artwork and inventory data</h3>
          <p>
            The point of the Service is to catalog your work. You may upload{' '}
            <strong>artwork photos</strong> and enter <strong>artwork metadata</strong> such as titles,
            descriptions, medium, dimensions, year, price, SKU, status, and collection names. You may also
            upload a <strong>logo</strong> for use on PDF exports. This content is stored so you can access it
            from any of your devices and generate documents from it.
          </p>

          <h3>Optional public profile</h3>
          <p>
            If you turn on a public profile, the information you choose to include (display name, bio,
            profile URL slug, contact email, phone, website, Instagram handle, and any collections you mark
            public) is published on a web page anyone can view. You control what is public and can turn the
            profile off at any time in the app&apos;s settings.
          </p>

          <h3>Instagram media (only if you ask for it)</h3>
          <p>
            The Service can import photos and captions from Instagram using Meta&apos;s Instagram API. Imports
            happen only when you initiate them. We store the imported image, caption, and the Instagram
            post identifier (so we can avoid importing the same post twice). We do not post to Instagram,
            read your messages, or access your followers. Your use of Instagram is also governed by{' '}
            <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer">
              Meta&apos;s Privacy Policy
            </a>
            .
          </p>

          <h3>Shopify connection (optional)</h3>
          <p>
            If you connect a Shopify store, we store an access token for that store so the Service can
            create product listings you request. We do not access your customers&apos; personal data or
            order history. You can disconnect Shopify at any time in the app; doing so revokes our token.
          </p>

          <h3>Artwork submissions to {BRAND.name}</h3>
          <p>
            When you submit an artwork for sale through {BRAND.name}, the artwork&apos;s photos and metadata,
            your display name, and your account email are shared with the {BRAND.fullName} front desk so
            we can review it and, if selected, list it at animalnewyork.com/shop. Submission is always your
            choice and you can withdraw a submission at any time from the app.
          </p>

          <h3>Technical and usage information</h3>
          <p>
            Like most online services, our servers automatically record basic technical information such
            as IP address, device and browser type, operating system, and the date and time of requests.
            We use this for security, debugging, and to keep the Service running. We do not use
            third-party advertising trackers or sell analytics data.
          </p>

          <h2>2. How we use information</h2>
          <ul>
            <li>To provide, maintain, and improve the Service.</li>
            <li>To sync your inventory across your devices and generate PDF and CSV exports you request.</li>
            <li>To publish your public profile, if you enable it.</li>
            <li>To review artwork you submit for sale and communicate with you about it.</li>
            <li>To administer {TIERS.friend.club} membership, including Showcase features and event invitations, if you join.</li>
            <li>To send account and security emails (for example, password resets).</li>
            <li>To respond to your questions and support requests.</li>
            <li>To detect abuse and protect the Service and its users.</li>
          </ul>
          <p>We do not use your content to train machine-learning models, and we do not show advertising.</p>

          <h2>3. How we share information</h2>
          <p>We do not sell personal information. We share it only in these situations:</p>
          <ul>
            <li>
              <strong>Service providers.</strong> We use Supabase (authentication, database, and file
              storage, hosted in the United States), Vercel (web hosting), and Apple (App Store distribution
              and in-app subscription billing). These providers process data on our behalf under their own
              security and privacy commitments.
            </li>
            <li>
              <strong>Public profile.</strong> Anything you choose to make public is visible to anyone with
              the link.
            </li>
            <li>
              <strong>Integrations you enable.</strong> Instagram (Meta) and Shopify receive requests from
              the Service only when you connect them and initiate an import or listing.
            </li>
            <li>
              <strong>{BRAND.fullName}.</strong> Artwork you submit for sale is shared with our front desk
              for review. Listed work appears publicly in the {BRAND.name} shop.
            </li>
            <li>
              <strong>Legal reasons.</strong> If required by law, subpoena, or to protect the rights,
              property, or safety of {BRAND.name}, our users, or the public.
            </li>
            <li>
              <strong>Business transfers.</strong> If {BRAND.name} is involved in a merger, acquisition, or
              sale of assets, your information may be transferred; we will notify you before your data becomes
              subject to a different privacy policy.
            </li>
          </ul>

          <h2>4. Where your data lives</h2>
          <p>
            Your account data, artwork, and photos are stored on servers in the United States operated by
            Supabase. If you access the Service from outside the United States, you understand your
            information will be transferred to and processed in the United States.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We keep your data for as long as your account is active. We never overwrite your original
            uploaded photos; edited or watermarked copies are stored alongside the originals. When you
            delete an artwork in the app, its photos and metadata are removed from our systems, with
            residual copies in backups expiring within 30 days.
          </p>

          <h2>6. Your choices and rights</h2>
          <ul>
            <li>
              <strong>Access and export.</strong> You can export your full inventory as a CSV from the app at
              any time. Your photos can be saved from the app to your device.
            </li>
            <li>
              <strong>Correction.</strong> You can edit any artwork or profile field in the app.
            </li>
            <li>
              <strong>Public profile.</strong> Turn it off in Settings to unpublish it immediately.
            </li>
            <li>
              <strong>Integrations.</strong> Disconnect Instagram or Shopify in the app. You can also revoke
              {BRAND.name}&apos;s access from your Instagram or Shopify account settings.
            </li>
            <li>
              <strong>Deletion.</strong> To delete your account and all associated data (photos, artwork,
              profile, submissions), email {supportLink} from the address on your account. We will complete
              the deletion within 30 days and confirm by email. Work already listed and sold through
              {' '}{BRAND.name} may be retained in transaction records as required by law.
            </li>
            <li>
              <strong>Marketing.</strong> We do not send marketing email unless you opt in. Event
              invitations for {TIERS.friend.name}s are part of the membership and stop when you cancel.
            </li>
          </ul>
          <p>
            If you are a resident of California, the EU/EEA, the UK, or another jurisdiction with specific
            privacy rights, you may have additional rights to access, correct, delete, or restrict the use of
            your personal information. Contact us at {supportLink} to exercise them. We will not
            discriminate against you for doing so.
          </p>

          <h2>7. Security</h2>
          <p>
            Data is encrypted in transit (TLS) and at rest by our storage provider. Access to production
            systems is limited to the people who need it. No system is perfectly secure; if we learn of a
            breach affecting your information we will notify you as required by law.
          </p>

          <h2>8. Children</h2>
          <p>
            The Service is not directed to children under 13, and we do not knowingly collect personal
            information from anyone under 13. If you believe a child under 13 has created an account,
            contact us at {supportLink} and we will delete it.
          </p>

          <h2>9. Third-party links</h2>
          <p>
            The Service links to animalnewyork.com, Instagram, Shopify, and artists&apos; own websites.
            Those sites have their own privacy practices, which we do not control.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. We will post the new version here with a new
            &quot;Last updated&quot; date and, for material changes, notify you in the app or by email.
          </p>

          <h2>11. Contact</h2>
          <p>
            {BRAND.fullName}
            <br />
            Email: {supportLink}
            <br />
            Web:{' '}
            <a href={BRAND.siteUrl} target="_blank" rel="noopener noreferrer">
              {BRAND.siteUrl.replace(/^https?:\/\//, '')}
            </a>
          </p>
          <p>
            See also our <Link href="/terms">Terms of Service</Link>.
          </p>
        </div>
      </main>

      <SiteFooter compact />
    </div>
  )
}
