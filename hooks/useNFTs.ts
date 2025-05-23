import { useState, useEffect } from 'react'
import { NFT } from '@/types/nft'

export function useNFTs(address?: string) {
  const [nfts, setNfts] = useState<NFT[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!address) return

    const fetchNFTs = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}/getNFTs/?owner=${address}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch NFTs')
        }

        const data = await response.json()
        setNfts(data.nfts || [])
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'))
      } finally {
        setLoading(false)
      }
    }

    fetchNFTs()
  }, [address])

  return { nfts, loading, error }
} 