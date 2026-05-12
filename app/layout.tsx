import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STG | Proteção Veicular',
  description:
    'A Pettrus oferece proteção patrimonial mutualista com gestão responsável, atendimento próximo e soluções eficientes para o seu dia a dia.',
  keywords: [
    'proteção veicular',
    'seguro de carro',
    'proteção patrimonial',
    'assistência 24h',
    'guincho',
  ],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="antialiased font-sans">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}