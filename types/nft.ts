export interface NFT {
  tokenId: string
  name?: string
  description?: string
  image?: {
    url?: string
    cachedUrl?: string
  }
  collection?: {
    name?: string
    symbol?: string
  }
  contract?: {
    address: string
    name?: string
    symbol?: string
  }
  metadata?: {
    attributes?: Array<{
      trait_type: string
      value: string | number
    }>
  }
} 