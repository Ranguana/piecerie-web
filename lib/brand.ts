/**
 * Single source of truth for brand identity, URLs, and membership tiers.
 * Every user-facing name, link, or price should come from here so a future
 * change (domain move, price change, new tier) is a one-file edit.
 *
 * Keep BRAND and TIERS identical to `lib/brand.ts` in the app repo
 * (`animal-app`, formerly `piecerie`) so the two stay in sync.
 */

export const BRAND = {
  /** Wordmark / product name as shown in the UI and on the phone. */
  name: 'ANIMAL',
  /** The app as a product. The organization stays ANIMAL. */
  appName: 'ANIMAL SELL OUT',
  /** Short form, shown beside the wordmark in the app header. */
  appNameShort: 'SELL OUT',
  /** Long-form name for legal / metadata copy. */
  fullName: 'ANIMAL New York',
  tagline: 'art. culture. nyc.',
  siteUrl: 'https://animalnewyork.com',
  shopUrl: 'https://animalnewyork.com/shop/',
  huntingClubUrl: 'https://animalnewyork.com/hunting-club/',
  instagramHandle: 'animalnewyork',
  instagramUrl: 'https://www.instagram.com/animalnewyork/',
  /** Where artists' questions and artwork submissions go. */
  supportEmail: 'frontdesk@animalnewyork.com',
  submissionsEmail: 'frontdesk@animalnewyork.com',
  /**
   * Origin the app itself is served from. Public profile links are built from
   * this. Override with NEXT_PUBLIC_APP_URL once the app has its own domain.
   */
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://piecerie.vercel.app',
  /** Footer line stamped on free-tier PDF exports. */
  madeWith: 'Made with ANIMAL SELL OUT',
  /** Prefix for exported CSV filenames. */
  csvFilePrefix: 'animal-artworks',
  /** Path to the wordmark image in /public. */
  wordmarkSrc: '/brand/animal-wordmark.png',
} as const;

export type MembershipTier = 'free' | 'friend';

export const TIERS = {
  free: {
    id: 'free' as const,
    name: 'Free',
    priceMonthly: 0,
    priceYearly: 0,
    artworkLimit: 30,
    benefits: [
      'Up to 30 artworks',
      'Basic image editing',
      '3 PDF templates (with ANIMAL footer)',
      'Instagram import',
      'Portfolio page',
      'Sell your work through ANIMAL',
    ],
  },
  friend: {
    id: 'friend' as const,
    name: 'Friend of ANIMAL',
    /** The membership program the paid tier belongs to. */
    club: 'Hunting Club',
    priceMonthly: 9.99,
    priceYearly: 99,
    artworkLimit: Infinity,
    benefits: [
      'Everything in Free',
      'Unlimited artworks',
      'All PDF templates, no footer',
      'Custom branding on exports',
      'Public artist profile with custom URL and QR code',
      'Featured in the ANIMAL Showcase',
      'Invitations to in-person ANIMAL events',
      'Shopify integration',
      'Priority support',
    ],
  },
} as const;

/** Full URL to an artist's public profile. */
export function publicProfileUrl(slug: string): string {
  return `${BRAND.appUrl}/p/${slug}`;
}

/** Same URL without the protocol, for display in tight UI. */
export function publicProfileDisplay(slug: string): string {
  return publicProfileUrl(slug).replace(/^https?:\/\//, '');
}

/* ------------------------------------------------------------------------ */
/* Marketing-site-only constants (not mirrored in the app repo).            */
/* ------------------------------------------------------------------------ */

/** App Store listing for the iOS app. */
// TODO: update once the ANIMAL app record exists in App Store Connect
export const APP_STORE_URL = 'https://apps.apple.com/app/piecerie';

/**
 * Public TestFlight invite link. The app is beta-only (never approved on the
 * App Store), so this is the real "get the app" destination. Empty until the
 * link exists; see getAppCta() for what the site shows in the meantime.
 */
export const TESTFLIGHT_URL = process.env.NEXT_PUBLIC_TESTFLIGHT_URL ?? '';

export interface AppCta {
  label: string;
  href: string;
  /** True when there is no install link yet and the CTA is a mailto instead. */
  comingSoon: boolean;
}

/**
 * The one "get the app" call to action for the whole site. With a TestFlight
 * link it invites people into the beta; without one it says so honestly and
 * lets them email the front desk for early access.
 */
export function getAppCta(): AppCta {
  if (TESTFLIGHT_URL) {
    return { label: `Join the ${BRAND.appNameShort} beta`, href: TESTFLIGHT_URL, comingSoon: false };
  }
  const subject = encodeURIComponent(`${BRAND.appName} early access`);
  return {
    label: `${BRAND.appName} · coming soon`,
    href: `mailto:${BRAND.supportEmail}?subject=${subject}`,
    comingSoon: true,
  };
}

/** The web build of the app (same account works on iOS and web). */
export const WEB_APP_URL = BRAND.appUrl;

/**
 * Origin this marketing site is served from. Used for `metadataBase` so Open
 * Graph images resolve to absolute URLs. Vercel sets the production URL
 * automatically; override with NEXT_PUBLIC_SITE_URL for a custom domain.
 */
export const MARKETING_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

/** Path under /public where app screenshots live (see README). */
export const SCREENSHOT_DIR = 'public/screenshots';

/** Formats a price the way the site shows it: whole dollars stay whole. */
export function formatPrice(amount: number): string {
  return Number.isInteger(amount) ? `$${amount}` : `$${amount.toFixed(2)}`;
}

/** Percent saved by paying yearly instead of monthly, rounded. */
export function yearlySavingsPercent(tier: {
  priceMonthly: number;
  priceYearly: number;
}): number {
  if (tier.priceMonthly === 0) return 0;
  const monthlyTotal = tier.priceMonthly * 12;
  return Math.round(((monthlyTotal - tier.priceYearly) / monthlyTotal) * 100);
}
