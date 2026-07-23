import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Boda de Mariana & Fernando',
  description: '¡Nos casamos! Te invitamos a celebrar con nosotros nuestro gran día.',
  openGraph: {
    title: 'Boda de Mariana & Fernando',
    description: '¡Nos casamos! Te invitamos a celebrar con nosotros nuestro gran día.',
    images: [
      {
        url: '/images/hero.jpg', // Usa la foto principal que ya tienes subida
        width: 1200,
        height: 630,
        alt: 'Boda de Mariana y Fernando',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background ${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
