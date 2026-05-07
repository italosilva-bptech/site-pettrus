import type { Metadata } from 'next'
import { Sora, Work_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
})

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pettrus | Proteção Veicular',
  description: 'A Pettrus oferece proteção patrimonial mutualista com gestão responsável, atendimento próximo e soluções eficientes para o seu dia a dia.',
  keywords: ['proteção veicular', 'seguro de carro', 'proteção patrimonial', 'assistência 24h', 'guincho'],
}

export const viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${sora.variable} ${workSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
