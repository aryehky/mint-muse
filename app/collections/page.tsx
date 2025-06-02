'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PlaceholderImage } from '@/components/PlaceholderImage'

interface Collection {
  id: string
  name: string
  description: string
  imageUrl: string
  itemCount: number
  floorPrice: string
}

const featuredCollections: Collection[] = [
  {
    id: '1',
    name: 'Candy Kingdom',
    description: 'A magical collection of sweet-themed NFTs from the enchanted Candy Kingdom',
    imageUrl: '/candy-kingdom.png',
    itemCount: 1000,
    floorPrice: '0.5 ETH'
  },
  {
    id: '2',
    name: 'Lollipop Legends',
    description: 'Legendary lollipop characters with unique traits and powers',
    imageUrl: '/lollipop-legends.png',
    itemCount: 888,
    floorPrice: '0.8 ETH'
  },
  {
    id: '3',
    name: 'Gummy Galaxy',
    description: 'Explore the cosmic world of gummy-inspired digital collectibles',
    imageUrl: '/gummy-galaxy.png',
    itemCount: 2000,
    floorPrice: '0.3 ETH'
  }
]

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden shadow-lg border border-white/20"
    >
      <div className="aspect-square relative mb-4 bg-gradient-to-b from-white to-candy-yellow/20 rounded-xl overflow-hidden">
        {collection.imageUrl.startsWith('/collections/') ? (
          <PlaceholderImage name={collection.name} />
        ) : (
          <Image
            src={collection.imageUrl}
            alt={collection.name}
            fill
            className="object-contain p-4"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-candy-purple dark:text-candy-blue mb-2">
          {collection.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {collection.description}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-candy-pink">
            {collection.itemCount} Items
          </span>
          <span className="font-semibold text-candy-purple dark:text-candy-mint">
            Floor: {collection.floorPrice}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function CollectionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-candy-purple dark:text-candy-blue mb-4">
          Featured Collections
        </h1>
        <p className="text-lg text-candy-pink dark:text-candy-mint opacity-90">
          Discover the sweetest NFT collections in our candy-themed marketplace
        </p>
      </motion.div>

      {/* Floating decorations */}
      <div className="absolute top-32 left-20 animate-float-slow">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-candy-pink to-candy-purple opacity-60"></div>
      </div>
      <div className="absolute top-60 right-32 animate-float-slower">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-candy-blue to-candy-mint opacity-60"></div>
      </div>

      {/* Collections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCollections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </main>
  )
} 