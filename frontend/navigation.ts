import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'pt-BR'] as const

export const localePrefix = 'always'

// eslint-disable-next-line no-use-before-define
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
