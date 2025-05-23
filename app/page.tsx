'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { NFTGallery } from '@/components/NFTGallery'
import { Header } from '@/components/Header'

export default function Home() {
  const { isConnected } = useAccount()

  return (
    <main className="min-h-screen p-4 md:p-8">
      <Header />
      <div className="max-w-7xl mx-auto mt-8">
        <div className="flex justify-end mb-8">
          <ConnectButton />
        </div>
        {isConnected ? (
          <NFTGallery />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Welcome to MintMuse</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Connect your wallet to view your NFT collection
            </p>
          </div>
        )}
      </div>
    </main>
  )
} 