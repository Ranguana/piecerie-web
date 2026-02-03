'use client'

import { useState } from 'react'
import { Artwork, Collection } from '@/types'

interface Props {
  collections: (Collection & { artworks: Artwork[] })[]
}

export default function ProfileContent({ collections }: Props) {
  const [view, setView] = useState<'gallery' | 'linesheet'>('gallery')

  // Flatten all artworks from all collections
  const allArtworks = collections.flatMap(c => c.artworks)

  if (allArtworks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No public artworks yet
      </div>
    )
  }

  return (
    <div>
      {/* View Toggle */}
      <div className="flex justify-end mb-6">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          <button
            onClick={() => setView('gallery')}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              view === 'gallery'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setView('linesheet')}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              view === 'linesheet'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Line Sheet
          </button>
        </div>
      </div>

      {view === 'gallery' ? (
        // Gallery View - grouped by collection
        <div className="space-y-12">
          {collections.map((collection) => (
            <div key={collection.id}>
              <h2 className="text-xl font-semibold mb-4">{collection.name}</h2>
              {collection.description && (
                <p className="text-gray-600 mb-4">{collection.description}</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {collection.artworks.map((artwork) => (
                  <div key={artwork.id} className="group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={artwork.image_url}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium text-sm truncate">{artwork.title}</h3>
                      {artwork.medium && (
                        <p className="text-xs text-gray-500">{artwork.medium}</p>
                      )}
                      {artwork.price && (
                        <p className="text-sm font-medium">${artwork.price.toLocaleString()}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Line Sheet View
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-2 text-sm font-semibold">Image</th>
                <th className="text-left py-3 px-2 text-sm font-semibold">SKU</th>
                <th className="text-left py-3 px-2 text-sm font-semibold">Title</th>
                <th className="text-left py-3 px-2 text-sm font-semibold">Medium</th>
                <th className="text-left py-3 px-2 text-sm font-semibold">Size</th>
                <th className="text-right py-3 px-2 text-sm font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {allArtworks.map((artwork) => (
                <tr key={artwork.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2">
                    <div className="w-16 h-16 rounded overflow-hidden bg-gray-100">
                      <img
                        src={artwork.image_url}
                        alt={artwork.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-2 px-2 text-sm text-gray-600">
                    {artwork.sku || '-'}
                  </td>
                  <td className="py-2 px-2 text-sm font-medium">
                    {artwork.title}
                  </td>
                  <td className="py-2 px-2 text-sm text-gray-600">
                    {artwork.medium || '-'}
                  </td>
                  <td className="py-2 px-2 text-sm text-gray-600">
                    {artwork.dimensions || '-'}
                  </td>
                  <td className="py-2 px-2 text-sm font-medium text-right">
                    {artwork.price ? `$${artwork.price.toLocaleString()}` : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
