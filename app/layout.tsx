import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Configuração da fonte Mugen (Títulos)
const mugen = localFont({
  src: './fonts/mugengroteskfw-bold.otf',
  variable: '--font-mugen',
  display: 'swap',
})

// Configuração da fonte Effra (Corpo/Texto)
const effra = localFont({
  src: './fonts/effra.woff2.ttf',
  variable: '--font-effra',
  display: 'swap',
})

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
    <html lang="pt-BR">
      {/* Injetamos as variáveis das duas fontes no body */}
      <body className={`${mugen.variable} ${effra.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}