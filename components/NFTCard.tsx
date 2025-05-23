'use client'

import Image from 'next/image'
import { NFT } from '@/types/nft'

interface NFTCardProps {
  nft: NFT
}

export function NFTCard({ nft }: NFTCardProps) {
  const imageUrl = nft.image?.cachedUrl || nft.image?.url || '/placeholder.png'
  const name = nft.name || `#${nft.tokenId}`
  const collectionName = nft.collection?.name || 'Unknown Collection'

  return (
    <div className="card group">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {collectionName}
        </p>
        {nft.contract?.address && (
          <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
            {nft.contract.address.slice(0, 6)}...{nft.contract.address.slice(-4)}
          </p>
        )}
      </div>
    </div>
  )
} 