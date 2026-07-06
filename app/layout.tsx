import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Barbearia Black World | Barbearia Premium em Jacareí',
  description:
    'Mais que um corte. É sobre presença. Barbearia premium em Jacareí com atendimento personalizado. Agende seu horário pelo WhatsApp.',
  generator: 'v0.app',
  openGraph: {
    title: 'Barbearia Black World | Barbearia Premium em Jacareí',
    description:
      'Mais que um corte. É sobre presença. Barbearia premium em Jacareí com atendimento personalizado. Agende seu horário pelo WhatsApp.',
    url: 'https://barbeariabw.netlify.app',
    siteName: 'Barbearia Black World',
    images: [
      {
        url: 'https://barbeariabw.netlify.app/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Barbearia Black World - Barbearia Premium em Jacareí',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbearia Black World | Barbearia Premium em Jacareí',
    description:
      'Mais que um corte. É sobre presença. Barbearia premium em Jacareí com atendimento personalizado.',
    images: ['https://barbeariabw.netlify.app/images/hero.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0F0F10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`bg-background ${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
