'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dkgyowbgueylstwgmmfd.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ3lvd2JndWV5bHN0d2dtbWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwODY4NDAsImV4cCI6MjA2MjY2Mjg0MH0.geLr4bYoHZBdkRnXILSl5Vj7KDMH7DGR2Bt-qlbWl04'
)

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
    // Check if we have a recovery token in the URL hash
    const hash = window.location.hash
    if (!hash || !hash.includes('access_token')) {
      setNoToken(true)
      return
    }

    // Parse the hash to get the access token
    const params = new URLSearchParams(hash.substring(1))
    const accessToken = params.get('access_token')
    const refreshToken = params.get('refresh_token')
    const type = params.get('type')

    if (type === 'recovery' && accessToken && refreshToken) {
      // Set the session with the recovery tokens
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      }).then(({ error }) => {
        if (error) {
          setError('Invalid or expired reset link. Please request a new one.')
        } else {
          setSessionReady(true)
        }
      })
    } else {
      setNoToken(true)
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
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-8">
            <span className="text-[#e85a4f]">P</span>
            <span className="text-[#2d2d2d]">ie</span>
            <span className="text-[#d9a441]">c</span>
            <span className="text-[#2d2d2d]">e</span>
            <span className="text-[#2d7d6e]">r</span>
            <span className="text-[#2d2d2d]">ie</span>
          </Link>
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            <p>Invalid or missing reset token.</p>
            <p className="text-sm mt-2">Please request a new password reset link.</p>
          </div>
          <Link href="/" className="text-[#2d7d6e] hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-8">
            <span className="text-[#e85a4f]">P</span>
            <span className="text-[#2d2d2d]">ie</span>
            <span className="text-[#d9a441]">c</span>
            <span className="text-[#2d2d2d]">e</span>
            <span className="text-[#2d7d6e]">r</span>
            <span className="text-[#2d2d2d]">ie</span>
          </Link>
          <div className="bg-green-50 text-green-700 p-6 rounded-lg mb-6">
            <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-medium text-lg">Password updated!</p>
            <p className="text-sm mt-2">You can now sign in with your new password in the Piecerie app.</p>
          </div>
          <a
            href="https://apps.apple.com/app/piecerie"
            className="inline-block px-6 py-3 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#2d7d6e]"
          >
            Open App
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold tracking-tight inline-block">
            <span className="text-[#e85a4f]">P</span>
            <span className="text-[#2d2d2d]">ie</span>
            <span className="text-[#d9a441]">c</span>
            <span className="text-[#2d2d2d]">e</span>
            <span className="text-[#2d7d6e]">r</span>
            <span className="text-[#2d2d2d]">ie</span>
          </Link>
          <h1 className="mt-6 text-2xl italic">Set new password</h1>
          <p className="mt-2 text-[#1a1a1a]/60">Enter your new password below</p>
        </div>

        {!sessionReady ? (
          <div className="text-center py-8">
            <p className="text-[#1a1a1a]/60">Verifying reset link...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#1a1a1a]/20 rounded-lg focus:ring-2 focus:ring-[#2d7d6e] focus:outline-none focus:border-transparent bg-white pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>

            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-[#1a1a1a]/20 rounded-lg focus:ring-2 focus:ring-[#2d7d6e] focus:outline-none focus:border-transparent bg-white"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#1a1a1a] text-[#faf9f7] rounded-lg font-medium hover:bg-[#2d7d6e] disabled:opacity-50 transition-colors"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        )}

        <p className="text-center mt-6">
          <Link href="/" className="text-[#1a1a1a]/60 hover:text-[#2d7d6e]">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  )
}
