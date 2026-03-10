# Piecerie Web

## What This Is

The public-facing marketing website for Piecerie, hosted at piecerie.com. This is separate from the main Piecerie app (which is in the `piecerie` repo).

This site includes:
- Landing page
- Pricing page
- Resources/FAQ page
- Password reset page (linked from Supabase auth emails)
- Public artist profile pages at `piecerie.com/[artist-slug]`

## Tech Stack

- **Framework:** Next.js
- **Database:** Supabase (reads public profile/artwork data)
- **Deployment:** Vercel (auto-deploys from `main` branch)
- **Repo:** github.com/Ranguana/piecerie-web

## Environment Variables

Required in `.env.local` (and in Vercel dashboard):
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Relationship to Main App

- The main Piecerie app (`piecerie` repo) is the iOS app where artists manage artwork, collections, and exports.
- This site (`piecerie-web`) is the public website — marketing pages and artist profiles.
- Both repos share the same Supabase project (same database, same auth).

## Important Rules

- **Never crop images.** Always preserve the full image without cropping.
- Keep the UI simple and intuitive — the target users are artists, not developers.
- All user-provided URLs (website links) must be validated before rendering.
