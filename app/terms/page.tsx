/*
 * DRAFT — pending review by counsel before publication.
 * These terms were written by the product team as a starting point and have
 * not yet been reviewed by an attorney. Do not treat them as final legal text.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Slab from '@/components/Slab'
import { BRAND, TIERS, formatPrice } from '@/lib/brand'

const LAST_UPDATED = 'September 4, 2026'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The rules for using the ${BRAND.name} app and selling work through ${BRAND.fullName}.`,
}

export default function TermsPage() {
  const supportLink = <a href={`mailto:${BRAND.supportEmail}`}>{BRAND.supportEmail}</a>

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-8 md:py-20">
        <p className="mono mb-4 text-[14px] uppercase tracking-[1px]">Legal</p>
        <Slab as="h1" size="lg">
          Terms of Service
        </Slab>
        <p className="mono mt-4 text-[14px] uppercase tracking-[1px] text-body">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="legal mt-10 text-body">
          <p>
            These Terms of Service (&quot;Terms&quot;) are an agreement between you and {BRAND.fullName}{' '}
            (&quot;{BRAND.name},&quot; &quot;we,&quot; &quot;us&quot;) covering your use of the {BRAND.name}{' '}
            mobile app, the {BRAND.name} web app, and this website (together, the &quot;Service&quot;). By
            creating an account or using the Service you agree to these Terms and to our{' '}
            <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not use the Service.
          </p>

          <h2>1. Who can use the Service</h2>
          <p>
            You must be at least 13 years old to use the Service. If you are under 18, you may use it only
            with the involvement of a parent or guardian. By using the Service you represent that you meet
            these requirements and that any information you give us is accurate.
          </p>

          <h2>2. Your account</h2>
          <p>
            You are responsible for keeping your password confidential and for everything that happens under
            your account. Tell us right away at {supportLink} if you suspect unauthorized use. One account per
            person; do not share accounts or impersonate anyone.
          </p>

          <h2>3. Your content</h2>
          <p>
            &quot;Content&quot; means anything you upload or enter into the Service: artwork photos, titles,
            descriptions, prices, logos, profile information, and imported material.
          </p>
          <ul>
            <li>
              <strong>You own it.</strong> {BRAND.name} claims no ownership of your Content. Your copyright in
              your artwork stays with you.
            </li>
            <li>
              <strong>License to operate the Service.</strong> You grant {BRAND.name} a worldwide,
              non-exclusive, royalty-free license to store, copy, resize, process, and display your Content
              solely to provide the Service to you: syncing across devices, generating PDFs and CSVs you request,
              rendering your public profile if you enable it, and reviewing submissions you send us. This
              license ends when you delete the Content or your account, except for copies in routine backups
              (which expire within 30 days) and for work you have submitted for sale, as described in Section 5.
            </li>
            <li>
              <strong>Your responsibility.</strong> You represent that you have the rights to upload your
              Content and that it does not infringe anyone else&apos;s rights or violate any law. Do not upload
              work that is not yours to sell.
            </li>
            <li>
              <strong>Public profile.</strong> If you turn on a public profile, you are choosing to publish
              that Content to the open web. Anyone can view, link to, and screenshot it.
            </li>
          </ul>

          <h2>4. Imports and integrations</h2>
          <p>
            The Service can import from Instagram (via Meta&apos;s API) and connect to Shopify at your request.
            Your use of those platforms is governed by their own terms. You are responsible for having the
            right to import and use any material you bring in. {BRAND.name} is not responsible for changes,
            outages, or restrictions imposed by third-party platforms.
          </p>

          <h2>5. Selling through {BRAND.name}</h2>
          <p>
            The Service lets you submit artwork to {BRAND.fullName} for consideration. Here is how that works:
          </p>
          <ul>
            <li>
              <strong>Submission is an offer, not a sale.</strong> Submitting a piece asks us to review it.
              {' '}{BRAND.name} decides, in its sole discretion, which pieces to list at animalnewyork.com/shop.
              We may decline any submission for any reason, and a listing may be removed at any time.
            </li>
            <li>
              <strong>Statuses.</strong> Submissions move through <em>submitted</em>, <em>under review</em>,
              and then <em>listed</em> or <em>declined</em>. You can see the current status in the app.
            </li>
            <li>
              <strong>Withdrawal.</strong> You can withdraw a submission at any stage from the app. If a piece
              is already listed, we will remove the listing within a reasonable time. Sales completed before
              withdrawal still go through.
            </li>
            <li>
              <strong>Commercial terms.</strong> Price, {BRAND.name}&apos;s commission, shipping, and payment
              timing for listed work are agreed between you and the {BRAND.name} front desk before a listing goes
              live, and are documented in writing (email counts). Those written terms control for that piece.
              Nothing is listed or sold without your agreement to those terms.
            </li>
            <li>
              <strong>Accuracy.</strong> You are responsible for the accuracy of the title, dimensions, medium,
              edition information, and condition of any piece you submit, and for delivering sold work as
              described.
            </li>
            <li>
              <strong>License for listed work.</strong> For pieces you submit, you additionally grant{' '}
              {BRAND.name} the right to display the photos and descriptions of that piece on animalnewyork.com,
              in the {BRAND.name} shop, and in {BRAND.name}&apos;s own social media and promotional material,
              for as long as the piece is listed and for a reasonable period afterward for archival purposes.
              You will be credited as the artist.
            </li>
          </ul>

          <h2>6. Plans, payment, and cancellation</h2>
          <ul>
            <li>
              <strong>{TIERS.free.name}.</strong> Free, with the limits shown on our pricing page (currently up
              to {TIERS.free.artworkLimit} artworks and three PDF templates with a &quot;{BRAND.madeWith}&quot;
              footer).
            </li>
            <li>
              <strong>{TIERS.friend.name} ({TIERS.friend.club}).</strong> A paid subscription, currently{' '}
              {formatPrice(TIERS.friend.priceMonthly)} per month or {formatPrice(TIERS.friend.priceYearly)} per
              year, billed through the Apple App Store using the payment method on your Apple ID. It renews
              automatically until you cancel in your Apple subscription settings at least 24 hours before the
              end of the current period. Apple handles refunds under its own policies.
            </li>
            <li>
              <strong>Changes.</strong> We may change prices or plan features with at least 30 days&apos; notice
              in the app or by email. Changes take effect at your next renewal.
            </li>
            <li>
              <strong>Downgrade.</strong> If you cancel, your Content stays in your account and you return to
              the {TIERS.free.name} limits. We will not delete artworks over the limit, but you may need to
              archive some before adding new ones.
            </li>
            <li>
              <strong>Membership perks.</strong> Showcase placement and event invitations are benefits of an
              active membership and are provided at {BRAND.name}&apos;s discretion. Events may have limited
              capacity.
            </li>
          </ul>

          <h2>7. Acceptable use</h2>
          <p>Do not:</p>
          <ul>
            <li>upload Content you do not have the right to use, or that infringes anyone&apos;s copyright, trademark, or privacy;</li>
            <li>upload unlawful, hateful, or harassing material, or anything sexualizing minors;</li>
            <li>use the Service to sell counterfeit or misrepresented work;</li>
            <li>scrape, reverse engineer, or interfere with the Service or other users&apos; accounts;</li>
            <li>use automated tools to create accounts or bulk-download other artists&apos; public profiles;</li>
            <li>circumvent plan limits or payment.</li>
          </ul>
          <p>We may remove Content or suspend or terminate accounts that violate these Terms.</p>

          <h2>8. Copyright complaints</h2>
          <p>
            If you believe Content on the Service infringes your copyright, email {supportLink} with: the
            work you claim is infringed, the URL or location of the allegedly infringing Content, your
            contact information, a statement that you have a good-faith belief the use is not authorized, a
            statement under penalty of perjury that the notice is accurate and that you are the owner or
            authorized to act for the owner, and your physical or electronic signature. We will respond in
            accordance with the Digital Millennium Copyright Act and may terminate repeat infringers.
          </p>

          <h2>9. Termination</h2>
          <p>
            You may stop using the Service and request deletion of your account at any time by emailing{' '}
            {supportLink}. We may suspend or terminate your access if you breach these Terms, if required by
            law, or if we discontinue the Service (with reasonable notice so you can export your Content).
            Sections 3 (as to backups and submitted work), 5, 10, 11, 12, and 13 survive termination.
          </p>

          <h2>10. Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE FULLEST EXTENT
            PERMITTED BY LAW, {BRAND.fullName.toUpperCase()} DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
            INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT YOUR CONTENT WILL
            NEVER BE LOST. KEEP YOUR OWN BACKUPS OF YOUR ORIGINAL PHOTOS. WE DO NOT GUARANTEE THAT ANY
            SUBMITTED WORK WILL BE LISTED OR SOLD.
          </p>

          <h2>11. Limitation of liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, {BRAND.fullName.toUpperCase()} AND ITS OWNERS, EMPLOYEES,
            AND CONTRACTORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL
            LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE IS LIMITED TO THE GREATER OF (A) THE AMOUNT YOU PAID
            US IN THE 12 MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS ($100). Some jurisdictions do
            not allow these limitations, so they may not apply to you.
          </p>

          <h2>12. Indemnity</h2>
          <p>
            You agree to defend and indemnify {BRAND.fullName} against claims, damages, and expenses (including
            reasonable attorneys&apos; fees) arising from your Content, your sale of artwork, or your breach of
            these Terms.
          </p>

          <h2>13. Governing law and disputes</h2>
          <p>
            These Terms are governed by the laws of the State of New York, without regard to its conflict of
            laws rules. Any dispute that cannot be resolved informally will be brought exclusively in the state
            or federal courts located in New York County, New York, and you consent to their jurisdiction. Before
            filing, you agree to contact us at {supportLink} and give us 30 days to try to work it out.
          </p>

          <h2>14. Apple App Store terms</h2>
          <p>
            The iOS app is distributed through Apple&apos;s App Store. These Terms are between you and{' '}
            {BRAND.fullName}, not Apple. Apple has no obligation to provide maintenance or support for the app
            and is not responsible for any claims relating to it. Apple and its subsidiaries are third-party
            beneficiaries of these Terms with the right to enforce them against you. You must also comply with
            Apple&apos;s Licensed Application End User License Agreement and App Store terms.
          </p>

          <h2>15. General</h2>
          <p>
            These Terms, together with the Privacy Policy and any written commercial terms for listed work,
            are the entire agreement between you and {BRAND.name} about the Service. If any part is found
            unenforceable, the rest stays in effect. Our failure to enforce a provision is not a waiver. You
            may not assign these Terms; we may assign them in connection with a merger, acquisition, or sale
            of assets. We may update these Terms; we will post the new version here with a new &quot;Last
            updated&quot; date and notify you of material changes in the app or by email. Continuing to use the
            Service after changes take effect means you accept them.
          </p>

          <h2>16. Contact</h2>
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
        </div>
      </main>

      <SiteFooter compact />
    </div>
  )
}
