# Piecerie Web - Marketing Site & Public Profiles

Public-facing marketing website and artist profile pages at `piecerie.com`.

## Setup

1. Run the SQL in `supabase-profiles.sql` in your Supabase dashboard
2. Copy `env.example` to `.env.local` and add your Supabase credentials
3. `npm install`
4. `npm run dev`

## Deployment

Deployed on **Vercel**. Pushes to `main` auto-deploy.

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## How It Works

- Artists set up their profile in the main Piecerie iOS app
- They choose a slug (e.g., "jane-doe-art")
- They toggle `is_public` on their profile and individual artworks
- Their public page is visible at `piecerie.com/jane-doe-art`

## Structure

```
app/
  page.tsx              # Landing page
  not-found.tsx         # 404 page
  pricing/page.tsx      # Pricing page
  resources/page.tsx    # Help/FAQ page
  reset-password/page.tsx  # Password reset (linked from email)
  [slug]/page.tsx       # Dynamic artist profile page
lib/
  supabase.ts           # Supabase client
types/
  index.ts              # TypeScript types
```
