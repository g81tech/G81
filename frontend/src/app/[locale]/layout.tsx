import { ThemeProvider } from '@/providers/theme-provider'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { cn } from '@/lib/utils'
import { notFound } from 'next/navigation'
import ParticlesBackground from '@/components/Particles'
import Menu from '@/components/Menu'
import { useTranslations } from 'next-intl'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'G81',
  description: 'Interactive and Neurolinguistic Technology',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'favicon.ico',
        href: 'favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'favicon.ico',
        href: 'favicon.ico',
      },
    ],
  },
}

const locales = ['en', 'pt-BR']

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) notFound()
  const t = useTranslations('Menu')
  const t2 = useTranslations('Shared')

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          nunito.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute w-full">
            <Menu
              items={{
                home: t('home'),
                about: t('about'),
                posts: {
                  title: t('posts.title'),
                  b1: t('posts.b1'),
                },
                contact: t('contact'),
                emptyPage: t2('pages.emptyPage'),
                postList: t2('pages.emptyList'),
              }}
              lang={[
                { locale: 'en', name: t('lang.en') },
                { locale: 'pt-BR', name: t('lang.pt') },
              ]}
              theme={{
                dark: t('icon.dark'),
                light: t('icon.light'),
                system: t('icon.system'),
              }}
              newPosts={[]}
            />
          </div>

          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
