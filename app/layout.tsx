import type { Metadata, Viewport } from 'next'
import { Raleway } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Configuração da fonte Raleway (Apenas para Títulos, Headings e Botões)
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'], // Adicionado o peso 800 para garantir títulos extra-negritos se necessário
  variable: '--font-raleway',
  display: 'swap',
})

// Configuração da fonte Effra (Mantida para o Corpo/Texto comum)
const effra = localFont({
  src: './fonts/effra.woff2.ttf',
  variable: '--font-effra',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'STG | Proteção Veicular',
  description:
    'A STG oferece proteção patrimonial mutualista com gestão responsável, atendimento próximo e soluções eficientes para o seu dia a dia.',
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
      {/* ATENÇÃO: Aqui juntamos a Raleway e a Effra, limpando completamente a Ubuntu */}
      <body className={`${raleway.variable} ${effra.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}