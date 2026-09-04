import { getAppCta } from '@/lib/brand'
import YellowButton from './YellowButton'

type Variant = 'yellow' | 'black' | 'gray' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface AppCtaButtonProps {
  /** Style when the beta link exists. Defaults to the yellow primary button. */
  variant?: Variant
  /** Style while the app is still "coming soon". Defaults to black. */
  comingSoonVariant?: 'black' | 'outline'
  size?: Size
  full?: boolean
  className?: string
}

/**
 * The site's single "get the app" button. Reads getAppCta() so every page
 * says the same thing: "Join the beta" linking to TestFlight when the link is
 * configured, otherwise "Coming soon to the App Store" as a black/outline
 * button that emails the front desk for early access.
 */
export default function AppCtaButton({
  variant = 'yellow',
  comingSoonVariant = 'black',
  size = 'md',
  full = false,
  className = '',
}: AppCtaButtonProps) {
  const cta = getAppCta()
  return (
    <YellowButton
      href={cta.href}
      variant={cta.comingSoon ? comingSoonVariant : variant}
      size={size}
      full={full}
      className={className}
    >
      {cta.label}
    </YellowButton>
  )
}
