import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import { Profile, Artwork, Collection } from '@/types'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/SiteHeader'
import Slab from '@/components/Slab'
import { BRAND } from '@/lib/brand'
import ProfileContent from './ProfileContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getProfile(slug: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('slug', slug)
    .eq('is_public', true)
    .single()

  if (error || !data) return null
  return data
}

async function getPublicCollectionsWithArtworks(userId: string): Promise<(Collection & { artworks: Artwork[] })[]> {
  // Get public collections
  const { data: collections, error: colError } = await supabase
    .from('collections')
    .select('*')
    .eq('user_id', userId)
    .eq('is_public', true)
    .order('created_at', { ascending: false })

  if (colError || !collections) return []

  // Get artworks for those collections
  const collectionIds = collections.map(c => c.id)

  if (collectionIds.length === 0) return []

  const { data: artworks, error: artError } = await supabase
    .from('artworks')
    .select('*')
    .in('collection_id', collectionIds)
    .order('created_at', { ascending: false })

  if (artError) return []

  // Group artworks by collection
  return collections.map(collection => ({
    ...collection,
    artworks: (artworks || []).filter(a => a.collection_id === collection.id)
  }))
}

/** Only render http(s) links the artist typed in; anything else is dropped. */
function safeWebsite(raw: string): string | null {
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
  try {
    const url = new URL(candidate)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const profile = await getProfile(slug)

  if (!profile) {
    return { title: 'Profile Not Found' }
  }

  const name = profile.display_name || 'Artist'
  return {
    // Layout template appends " · ANIMAL"
    title: name,
    description: profile.bio || `View artwork by ${name} on ${BRAND.name}`,
  }
}

export default async function ProfilePage({ params }: PageProps) {
  const { slug } = await params
  const profile = await getProfile(slug)

  if (!profile) {
    notFound()
  }

  const collections = await getPublicCollectionsWithArtworks(profile.user_id)
  const name = profile.display_name || 'Artist'
  const instagram = profile.instagram?.replace('@', '')
  const website = profile.website ? safeWebsite(profile.website) : null

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader minimal />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-8 md:py-14">
        {/* Profile header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          {profile.logo_url && (
            <div className="h-32 w-32 flex-shrink-0 border border-ink bg-white p-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- artist-hosted image, never cropped */}
              <img
                src={profile.logo_url}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>
          )}

          <div className="flex-1">
            <Slab as="h1" size="lg">
              {name}
            </Slab>

            {profile.bio && (
              <p className="mt-5 max-w-2xl whitespace-pre-wrap text-body">{profile.bio}</p>
            )}

            <ul className="mono mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] uppercase tracking-[1px]">
              {profile.contact_email && (
                <li>
                  <a href={`mailto:${profile.contact_email}`}>{profile.contact_email}</a>
                </li>
              )}
              {website && (
                <li>
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </li>
              )}
              {instagram && (
                <li>
                  <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{instagram}
                  </a>
                </li>
              )}
              {profile.contact_phone && (
                <li>
                  <a href={`tel:${profile.contact_phone}`}>{profile.contact_phone}</a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <hr />

        {/* Artwork Content with View Toggle */}
        <div className="mt-8">
          <ProfileContent collections={collections} />
        </div>
      </main>

      {/* Compact footer: this is the artist's page, not ours */}
      <footer className="mt-12 bg-ink py-8 text-center">
        <p className="mono text-[14px] uppercase tracking-[1px] text-white">
          Powered by{' '}
          <a
            href={BRAND.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-yellow border-yellow hover:text-white hover:border-white"
          >
            {BRAND.name}
          </a>
        </p>
      </footer>
    </div>
  )
}
