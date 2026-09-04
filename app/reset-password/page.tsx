'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { BRAND, WEB_APP_URL } from '@/lib/brand'
import Slab from '@/components/Slab'

const INPUT_CLASSES =
  'w-full border border-ink bg-white px-4 py-3 text-[16px] text-body placeholder:text-gray-rule focus:outline-none focus:border-red focus:ring-1 focus:ring-red'

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-red bg-white">
        <div className="mx-auto flex h-[92px] max-w-6xl items-center px-4 sm:px-8">
          <Link href="/" className="border-b-0 flex items-center" aria-label={`${BRAND.name} home`}>
            <Image
              src="/brand/animal-logo-new.svg"
              alt={BRAND.name}
              width={300}
              height={65}
              priority
              className="h-[40px] w-auto sm:h-[52px]"
            />
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-start justify-center px-4 py-14 sm:py-20">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  )
}

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)
  const [noToken, setNoToken] = useState(false)

  useEffect(() => {
    let cancelled = false

    // Read the recovery token from the URL hash and exchange it for a session.
    // Runs as one async step so state updates land in a callback, not
    // synchronously inside the effect body.
    const recover = async (): Promise<'no-token' | 'invalid' | 'ready'> => {
      const hash = window.location.hash
      const search = new URLSearchParams(window.location.search)

      // PKCE flow: Supabase sends ?code= instead of hash tokens.
      const code = search.get('code')
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        return error ? 'invalid' : 'ready'
      }

      if (!hash) return 'no-token'
      const params = new URLSearchParams(hash.substring(1))

      // Supabase reports expired/used links as #error=...&error_description=...
      if (params.get('error')) return 'invalid'

      const accessToken = params.get('access_token')
      const refreshToken = params.get('refresh_token')
      if (!accessToken || !refreshToken) return 'no-token'
      // Any auth email (recovery, magic link, invite) is a valid reason to let
      // the user set a password, so we do not gate on type === 'recovery'.

      // Set the session with the recovery tokens
      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      })
      return error ? 'invalid' : 'ready'
    }

    recover().then((result) => {
      if (cancelled) return
      if (result === 'no-token') setNoToken(true)
      else if (result === 'invalid') setError('Invalid or expired reset link. Please request a new one.')
      else setSessionReady(true)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.updateUser({
      password: password,
    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  if (noToken) {
    return (
      <Shell>
        <Slab as="h1" size="lg">
          Bad link
        </Slab>
        <div className="mt-6 border-[5px] border-red p-5">
          <p className="font-bold text-ink">Invalid or missing reset token.</p>
          <p className="mt-2 text-body">
            Open {BRAND.appName}, tap &quot;Forgot Password&quot;, and request a new link.
          </p>
        </div>
        <p className="mono mt-6 text-[14px] uppercase tracking-[1px]">
          <Link href="/">Back to home</Link>
        </p>
      </Shell>
    )
  }

  if (success) {
    return (
      <Shell>
        <Slab as="h1" size="lg">
          Password updated
        </Slab>
        <div className="mt-6 border border-ink p-5">
          <p className="mono text-[20px] font-bold leading-[30px] text-green-price">Done.</p>
          <p className="mt-2 text-body">
            Open {BRAND.appName} on your phone and log in with your new password.
          </p>
        </div>
        <div className="mt-6">
          <a
            href={`${WEB_APP_URL}/login`}
            className="mono block border border-ink px-4 py-3 text-center text-[14px] font-bold uppercase tracking-[1px] text-ink no-underline hover:bg-ink hover:text-white"
          >
            Or log in on the web
          </a>
        </div>
      </Shell>
    )
  }

  return (
    <Shell>
      <Slab as="h1" size="lg">
        Set a new password
      </Slab>
      <p className="mt-4 text-body">At least 6 characters. Make it a good one.</p>

      {!sessionReady ? (
        <p className="mono mt-10 text-[14px] uppercase tracking-[1px] text-gray-rule">
          Verifying reset link...
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && (
            <div className="border-[5px] border-red p-3 text-[14px] font-bold text-red" role="alert">
              {error}
            </div>
          )}

          <div className="relative">
            <label htmlFor="new-password" className="mono mb-1 block text-[13px] font-bold uppercase tracking-[1px]">
              New password
            </label>
            <input
              id="new-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${INPUT_CLASSES} pr-20`}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="mono absolute bottom-[13px] right-3 text-[12px] font-bold uppercase tracking-[1px] text-body hover:text-red"
              aria-pressed={showPassword}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div>
            <label htmlFor="confirm-password" className="mono mb-1 block text-[13px] font-bold uppercase tracking-[1px]">
              Confirm new password
            </label>
            <input
              id="confirm-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={INPUT_CLASSES}
              autoComplete="new-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mono block w-full bg-yellow px-5 py-3 text-[16px] font-bold uppercase tracking-[1px] text-ink underline hover:bg-red hover:text-white disabled:opacity-50 disabled:hover:bg-yellow disabled:hover:text-ink"
          >
            {loading ? 'Updating...' : 'Update password'}
          </button>
        </form>
      )}

      <p className="mono mt-8 text-[14px] uppercase tracking-[1px]">
        <Link href="/">Back to home</Link>
      </p>
    </Shell>
  )
}
