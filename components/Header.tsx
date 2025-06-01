'use client';

import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'

export function Header() {
  return (
    <header className="relative z-10 pl-10 w-full h-[80px] bg-orange-200 rounded-b-3xl shadow-md flex justify-between items-center px-6 py-4 font-fredoka">
          {/* Logo */}
          <Link 
            href="/" 
            className="hover:scale-105 transition-transform"
          >
            <Image
              src="/mint-muse-company-name-horizontal-stack.png"
              alt="MintMuse"
              width={200}
              height={60}
              className="object-contain"
            />
          </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-8 text-lg text-pink-800">
        <Link href="/gallery" className="hover:text-pink-600 transition-colors">
          Gallery
        </Link>
        <Link href="/collections" className="hover:text-pink-600 transition-colors">
          Collections
        </Link>
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <button
              onClick={openConnectModal}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded-full shadow-md transition-all"
            >
              Connect Wallet
            </button>
          )}
        </ConnectButton.Custom>
      </nav>

      {/* Decorative Emojis */}
      <div className="absolute top-0 left-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full text-4xl animate-float" style={{ animationDelay: '0.2s' }}>
          🍬
        </div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full text-4xl animate-float" style={{ animationDelay: '0.5s' }}>
          🍭
        </div>
      </div>
    </header>
  )
}

