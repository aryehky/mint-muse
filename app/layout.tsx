import './globals.css'
import { Fredoka } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '@/components/Header'

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka',
})

export const metadata = {
  title: 'MintMuse - Sweet NFT Gallery',
  description: 'A delightful candy-themed Web3-enabled NFT gallery built with Next.js and RainbowKit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className={`${fredoka.className} bg-gradient-to-br from-candy-pink/10 via-candy-blue/10 to-candy-purple/10`}>
        <div className="min-h-screen">
          <Providers>
            <Header />
            <main>
              {children}
            </main>
          </Providers>
        </div>
      </body>
    </html>
  )
} 