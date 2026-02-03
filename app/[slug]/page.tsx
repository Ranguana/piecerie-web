import { supabase } from '@/lib/supabase'
import { Profile, Artwork, Collection } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const profile = await getProfile(slug)

  if (!profile) {
    return { title: 'Profile Not Found - Piecerie' }
  }

  return {
    title: `${profile.display_name || 'Artist'} - Piecerie`,
    description: profile.bio || `View artwork by ${profile.display_name || 'this artist'} on Piecerie`,
  }
}

export default async function ProfilePage({ params }: PageProps) {
  const { slug } = await params
  const profile = await getProfile(slug)

  if (!profile) {
    notFound()
  }

  const collections = await getPublicCollectionsWithArtworks(profile.user_id)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Piecerie" className="h-8" />
          </Link>
        </div>
      </header>

      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Logo/Avatar */}
          {profile.logo_url && (
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={profile.logo_url}
                alt={profile.display_name || 'Artist'}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">
              {profile.display_name || 'Artist'}
            </h1>

            {profile.bio && (
              <p className="text-gray-600 mb-4 whitespace-pre-wrap">{profile.bio}</p>
            )}

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              {profile.contact_email && (
                <a
                  href={`mailto:${profile.contact_email}`}
                  className="text-blue-600 hover:underline"
                >
                  {profile.contact_email}
                </a>
              )}
              {profile.website && (
                <a
                  href={profile.website.startsWith('http') ? profile.website : `https://${profile.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Website
                </a>
              )}
              {profile.instagram && (
                <a
                  href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @{profile.instagram.replace('@', '')}
                </a>
              )}
              {profile.contact_phone && (
                <a href={`tel:${profile.contact_phone}`} className="text-gray-600">
                  {profile.contact_phone}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Artwork Content with View Toggle */}
        <ProfileContent collections={collections} />
      </div>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          Powered by{' '}
          <a href="https://piecerie.com" className="text-blue-600 hover:underline">
            Piecerie
          </a>
        </div>
      </footer>
    </div>
  )
}
