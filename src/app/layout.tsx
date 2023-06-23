import './globals.css'
import { Inter, Teko, Schoolbell } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const teko = Teko({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-teko'
})

const schoolbell = Schoolbell({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-schoolbell'
})

export const metadata = {
  title: 'Monster Energy',
  description: 'SINTA A ENERGIA FLUINDO',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={`bg-fixed bg-gradient-to-t from-gray to-black text-icewhite ${inter.variable} ${teko.variable} ${schoolbell.variable} `}>{children}</body>
    </html>
  )
}
