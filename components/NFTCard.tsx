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
    <div className="group animate-float">
      <div className="candy-border">
        <div className="card">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl mb-4">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-xl text-candy-pink dark:text-candy-yellow truncate">
              {name}
            </h3>
            <p className="text-base text-candy-purple dark:text-candy-blue truncate">
              {collectionName}
            </p>
            {nft.contract?.address && (
              <p className="text-sm text-candy-mint dark:text-candy-mint/70 truncate font-mono">
                {nft.contract.address.slice(0, 6)}...{nft.contract.address.slice(-4)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 