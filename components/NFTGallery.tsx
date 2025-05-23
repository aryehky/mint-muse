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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading your NFTs...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error loading NFTs: {error.message}</p>
      </div>
    )
  }

  if (!nfts?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">No NFTs found in your wallet</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {nfts.map((nft) => (
        <NFTCard key={`${nft.contract.address}-${nft.tokenId}`} nft={nft} />
      ))}
    </div>
  )
} 