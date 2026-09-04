# ANIMAL Web — Marketing Site & Public Artist Profiles

The public-facing website for **ANIMAL**, the artist app from [ANIMAL New York](https://animalnewyork.com) ("art. culture. nyc."). Landing page, pricing, help, legal pages, password reset, and public artist profile pages.

## The two repos

| Repo | What it is | Where it runs |
|---|---|---|
| `animal-web` (this repo, formerly `piecerie-web`) | Marketing site + public profiles | Vercel |
| `animal-app` (formerly `piecerie`) | The app artists use: inventory, PDFs, imports, selling through ANIMAL | iOS via Capacitor + web on Vercel |

Both share one Supabase project (same database, same auth). This site only *reads* public profile and artwork data; all writes happen in the app.

`lib/brand.ts` mirrors the app repo's `lib/brand.ts` (`BRAND`, `TIERS`, `publicProfileUrl`). Keep the two in sync — every name, price, email, and URL on this site comes from that file.

## Setup

1. Run the SQL in `supabase-profiles.sql` in your Supabase dashboard (once per project)
2. Copy `env.example` to `.env.local` and add your Supabase credentials
3. `npm install`
4. `npm run dev`

## Deployment

Deployed on **Vercel**. Pushes to `main` auto-deploy.

Environment variables (Vercel dashboard and `.env.local`):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL` (optional) — origin of the web app; used to build public profile links
- `NEXT_PUBLIC_SITE_URL` (optional) — origin of this site, for absolute Open Graph URLs. Falls back to Vercel's production URL.

## Routes

```
/                    Landing page
/pricing             Free vs Friend of ANIMAL (Hunting Club)
/resources           How to use ANIMAL (FAQ)
/privacy             Privacy Policy   — used for App Store + Meta app review
/terms               Terms of Service — used for App Store + Meta app review
/reset-password      Password reset (linked from Supabase auth emails)
/[slug]              Public artist profile (read-only, from Supabase)
/opengraph-image     Generated OG card
```

`/privacy` and `/terms` are drafts pending review by counsel (see the comment at the top of each file). Update the "Last updated" line when they change.

## Design system

Follow `notes/animal-style-spec.md` — it is the captured style of animalnewyork.com. Highlights: Bebas Neue headings on yellow (`#FFEA03`) slabs, Lato body, Courier for prices/labels/buttons, 1px red (`#FF0000`) header rule and link underlines, green (`#03D43E`) prices, black footer, **border-radius 0 and no shadows anywhere**.

Shared pieces live in `components/`: `SiteHeader`, `SiteFooter`, `Slab`, `YellowButton`. Tokens are CSS variables in `app/globals.css`, mapped to Tailwind via `@theme inline` (`bg-yellow`, `text-red`, `text-green-price`, `font-heading`, `font-mono`, …).

## Assets

```
public/brand/
  animal-logo-new.svg     Primary black wordmark (header)
  animal-n-white.svg      White N mark (footer)
  pigeon.svg              Pigeon accent
  animal-wordmark.png     Raster wordmark (OG image)
  icon-1024.png           App icon source (favicon generated from this)
public/screenshots/
  app-home.png            Hero phone screenshot. Optional: the landing page
                          checks for it at build time and shows a styled
                          placeholder frame when it is missing.
```

Add more screenshots to `public/screenshots/` as `<screen-name>.png` (iPhone portrait, 9:19.5) and reference them from pages with `next/image`.

## Structure

```
app/
  layout.tsx            Fonts (Bebas Neue, Lato, Courier Prime), metadata
  globals.css           Tokens + base styles
  page.tsx              Landing
  pricing/page.tsx
  resources/page.tsx
  privacy/page.tsx
  terms/page.tsx
  reset-password/page.tsx
  [slug]/page.tsx       Artist profile (server) + ProfileContent.tsx (client toggle)
  not-found.tsx
  opengraph-image.tsx
  icon.svg              Favicon (N mark on yellow)
components/             SiteHeader, SiteFooter, Slab, YellowButton
lib/
  brand.ts              BRAND, TIERS, APP_STORE_URL, WEB_APP_URL
  supabase.ts           Supabase client
types/index.ts          Profile / Collection / Artwork types
notes/                  Style spec and reference files
```
