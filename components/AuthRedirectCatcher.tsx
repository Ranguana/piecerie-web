'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

/**
 * Supabase auth emails (password recovery, magic links, invites) redirect to
 * the project's Site URL, which is this site's homepage, with the session
 * token in the URL hash (#access_token=…&type=recovery) or, for the PKCE flow,
 * a ?code= query param. Nothing on the homepage consumes those, so the user
 * used to dead-end. This catcher runs on every page and forwards any such
 * token to /reset-password, which knows how to exchange it and set a password.
 */
export default function AuthRedirectCatcher() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/reset-password') return
    const { hash, search } = window.location
    const hasHashToken = hash.includes('access_token=') || hash.includes('error=')
    const hasCode = new URLSearchParams(search).has('code')
    if (!hasHashToken && !hasCode) return
    router.replace(`/reset-password${search}${hash}`)
  }, [pathname, router])

  return null
}
