# Piecerie Web - Public Artist Profiles

Public-facing website for artist profile pages at `piecerie.com/p/[artist-slug]`.

## Setup

1. Run the SQL in `supabase-profiles.sql` in your Supabase dashboard
2. Copy `.env.local.example` to `.env.local` and add your Supabase credentials
3. `npm install`
4. `npm run dev`

## Deployment

Deploy to Vercel:

```bash
vercel
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## How It Works

- Artists set up their profile in the main Piecerie iOS app
- They choose a slug (e.g., "jane-doe-art")
- They toggle `is_public` on their profile and individual artworks
- Their public page is visible at `piecerie.com/p/jane-doe-art`

## Structure

```
app/
  page.tsx          # Landing page
  not-found.tsx     # 404 page
  p/[slug]/
    page.tsx        # Dynamic artist profile page
lib/
  supabase.ts       # Supabase client
types/
  index.ts          # TypeScript types
```
