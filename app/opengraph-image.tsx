import fs from 'node:fs'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { BRAND } from '@/lib/brand'

export const alt = `${BRAND.name} — the artist app from ${BRAND.fullName}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Open Graph card: black wordmark on white, yellow slab tagline, red rule.
 * Uses the raster wordmark because satori renders PNG data URIs reliably.
 * Text falls back to the built-in sans font (Bebas would require shipping
 * the TTF at build time); it is rendered uppercase and heavy to match.
 */
export default function OpenGraphImage() {
  const wordmarkPath = path.join(process.cwd(), 'public', BRAND.wordmarkSrc)
  const wordmark = `data:image/png;base64,${fs.readFileSync(wordmarkPath).toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          color: '#000000',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #ff0000',
            paddingBottom: 32,
          }}
        >
          {/* Plain <img>: satori (next/og) does not support next/image. */}
          <img src={wordmark} alt="" width={434} height={178} />
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 26,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            the artist app
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 56 }}>
          {['Shoot it.', 'Log it.', 'Sell it.'].map((line) => (
            <div
              key={line}
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                background: '#ffea03',
                padding: '6px 18px',
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              {line}
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontFamily: 'monospace',
            fontSize: 24,
            letterSpacing: 1,
            color: '#212529',
          }}
        >
          {BRAND.fullName} · {BRAND.tagline}
        </div>
      </div>
    ),
    size,
  )
}
