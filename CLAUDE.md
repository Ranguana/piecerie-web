# ANIMAL Web

## What This Is

The public-facing marketing website for **ANIMAL SELL OUT**, the artist app from ANIMAL New York (animalnewyork.com, "art. culture. nyc."). It must look like it belongs to animalnewyork.com.

This site includes:
- Landing page
- Pricing page (Free vs Friend of ANIMAL / Hunting Club)
- Resources / FAQ page ("How to use ANIMAL SELL OUT")
- Privacy Policy (`/privacy`) and Terms of Service (`/terms`) — these URLs are submitted to Apple App Store review and Meta app review, so they must stay live and accurate
- Password reset page (linked from Supabase auth emails)
- Public artist profile pages at `/[artist-slug]`

## Tech Stack

- **Framework:** Next.js (App Router), Tailwind v4 (CSS-first), TypeScript
- **Database:** Supabase (reads public profile/artwork data only)
- **Deployment:** Vercel (auto-deploys from `main`)
- **Repo:** github.com/Ranguana/piecerie-web (to be renamed `animal-web`)

## Relationship to the App Repo

- **`animal-app`** (formerly `piecerie`) is the app: iOS via Capacitor plus a web build. Artists manage artwork, collections, exports, imports, and submit work to ANIMAL there.
- **`animal-web`** (this repo, formerly `piecerie-web`) is the marketing site and public profiles.
- Both share one Supabase project (same database, same auth).
- `lib/brand.ts` here mirrors `lib/brand.ts` in the app repo. `BRAND` and `TIERS` must stay identical between the two. This repo adds `APP_STORE_URL`, `TESTFLIGHT_URL`, `getAppCta()`, `WEB_APP_URL`, and `MARKETING_SITE_URL` on top. The product is `BRAND.appName` (ANIMAL SELL OUT); the organization is `BRAND.name` (ANIMAL). Use `AppCtaButton` for every get-the-app button.

## Brand Rules (non-negotiable)

- Read `notes/animal-style-spec.md` before touching any UI. It is the captured style of the live animalnewyork.com.
- Fonts: Bebas Neue (headings, uppercase), Lato (body 16/24), Courier stack (prices, labels, buttons). Loaded in `app/layout.tsx` via `next/font`.
- Colors: white ground, black ink, yellow `#FFEA03` slabs behind headings, red `#FF0000` 1px header rule and link underlines, green `#03D43E` prices. Tokens live in `app/globals.css`.
- **Border radius 0 everywhere. No shadows.**
- Never hardcode "ANIMAL", prices, emails, or URLs in pages — import from `lib/brand.ts`.
- Use the shared components: `SiteHeader`, `SiteFooter`, `Slab`, `YellowButton`. Do not paste header/footer markup into pages.
- Voice: short, blunt, uppercase headings. Irreverent, insider NYC.

## Screenshots Convention

App screenshots go in `public/screenshots/` as `<screen-name>.png` (iPhone portrait). The landing hero looks for `app-home.png` at build time with `fs.existsSync` and falls back to a styled placeholder frame when it is missing, so the site builds cleanly with or without real screenshots.

## Environment Variables

Required in `.env.local` (and in Vercel dashboard):
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
Optional: `NEXT_PUBLIC_APP_URL` (web app origin for profile links), `NEXT_PUBLIC_SITE_URL` (this site's origin for OG images).

## Important Rules

- **Never crop images.** Artwork thumbnails use `object-contain` inside square frames.
- Keep the UI simple and intuitive — the target users are artists, not developers.
- All user-provided URLs (website links) must be validated before rendering (see `safeWebsite` in `app/[slug]/page.tsx`).
- Do not add dependencies without a reason; the site is intentionally small.
- Legal pages are drafts pending counsel review. Bump the "Last updated" date whenever their text changes.
