'use client'

import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { NFTCard } from './NFTCard'
import { useNFTs } from '@/hooks/useNFTs'

export function NFTGallery() {
  const { address } = useAccount()
  const { nfts, loading, error } = useNFTs(address)

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-bounce-slow rounded-full h-16 w-16 border-4 border-candy-pink mx-auto"></div>
        <p className="mt-6 text-xl font-display text-candy-purple dark:text-candy-blue">
          Loading your sweet NFT collection...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12 candy-border inline-block mx-auto px-8">
        <p className="text-xl font-display text-red-500">
          Oops! Something went wrong: {error.message}
        </p>
      </div>
    )
  }

  if (!nfts?.length) {
    return (
      <div className="text-center py-12">
        <div className="candy-border inline-block mx-auto px-8">
          <p className="text-xl font-display text-candy-purple dark:text-candy-blue">
            No sweet NFTs found in your wallet yet!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {nfts.map((nft) => (
        <NFTCard key={`${nft.contract.address}-${nft.tokenId}`} nft={nft} />
      ))}
    </div>
  )
} 