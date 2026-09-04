'use client'

import { useState } from 'react'
import { Artwork, Collection } from '@/types'

interface Props {
  collections: (Collection & { artworks: Artwork[] })[]
}

const TOGGLE_BASE =
  'font-mono font-bold uppercase tracking-[1px] text-[14px] px-4 py-2 border border-ink transition-colors'

function Price({ amount }: { amount: number }) {
  return (
    <span className="font-mono text-[20px] font-bold leading-[30px] text-green-price">
      ${amount.toLocaleString()}
    </span>
  )
}

export default function ProfileContent({ collections }: Props) {
  const [view, setView] = useState<'gallery' | 'linesheet'>('gallery')

  // Flatten all artworks from all collections
  const allArtworks = collections.flatMap(c => c.artworks)

  if (allArtworks.length === 0) {
    return (
      <div className="mono py-12 text-center text-[14px] uppercase tracking-[1px] text-gray-rule">
        No public artworks yet
      </div>
    )
  }

  return (
    <div>
      {/* View Toggle */}
      <div className="mb-8 flex justify-end">
        <div className="inline-flex" role="group" aria-label="View">
          <button
            type="button"
            onClick={() => setView('gallery')}
            aria-pressed={view === 'gallery'}
            className={`${TOGGLE_BASE} ${
              view === 'gallery' ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-yellow'
            }`}
          >
            Gallery
          </button>
          <button
            type="button"
            onClick={() => setView('linesheet')}
            aria-pressed={view === 'linesheet'}
            className={`${TOGGLE_BASE} -ml-px ${
              view === 'linesheet' ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-yellow'
            }`}
          >
            Line Sheet
          </button>
        </div>
      </div>

      {view === 'gallery' ? (
        // Gallery View - grouped by collection
        <div className="space-y-16">
          {collections.map((collection) => (
            <section key={collection.id}>
              <h2 className="inline-block bg-yellow p-[10px] text-[25px] leading-[28px]">
                {collection.name}
              </h2>
              {collection.description && (
                <p className="mt-4 max-w-2xl text-body">{collection.description}</p>
              )}
              <ul className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {collection.artworks.map((artwork) => (
                  <li key={artwork.id}>
                    <div className="aspect-square border border-ink bg-white p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element -- artist-hosted image, never cropped */}
                      <img
                        src={artwork.image_url}
                        alt={artwork.title}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="truncate text-[22px] leading-[24px]">{artwork.title}</h3>
                      {artwork.medium && (
                        <p className="mono text-[13px] uppercase tracking-[1px] text-body">{artwork.medium}</p>
                      )}
                      {artwork.price != null && artwork.price > 0 && <Price amount={artwork.price} />}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        // Line Sheet View
        <div className="overflow-x-auto border border-ink">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-ink text-white">
                {['Image', 'SKU', 'Title', 'Medium', 'Size', 'Price'].map((col, i) => (
                  <th
                    key={col}
                    className={`mono px-3 py-3 text-[13px] font-bold uppercase tracking-[1px] ${
                      i === 5 ? 'text-right' : 'text-left'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allArtworks.map((artwork) => (
                <tr key={artwork.id} className="border-b border-gray-rule last:border-b-0 hover:bg-yellow/30">
                  <td className="px-3 py-2">
                    <div className="h-16 w-16 border border-ink bg-white p-1">
                      {/* eslint-disable-next-line @next/next/no-img-element -- artist-hosted image, never cropped */}
                      <img
                        src={artwork.image_url}
                        alt={artwork.title}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </td>
                  <td className="mono px-3 py-2 text-[14px] text-body">{artwork.sku || '-'}</td>
                  <td className="px-3 py-2 font-heading text-[20px] leading-[22px] uppercase">{artwork.title}</td>
                  <td className="px-3 py-2 text-[14px] text-body">{artwork.medium || '-'}</td>
                  <td className="mono px-3 py-2 text-[14px] text-body">{artwork.dimensions || '-'}</td>
                  <td className="px-3 py-2 text-right">
                    {artwork.price != null && artwork.price > 0 ? (
                      <Price amount={artwork.price} />
                    ) : (
                      <span className="mono text-[14px] text-body">-</span>
                    )}
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
