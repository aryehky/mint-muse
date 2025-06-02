'use client'

import { NFTGallery } from '@/components/NFTGallery'
import { motion } from 'framer-motion'

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Candy-themed header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-candy-purple dark:text-candy-blue mb-4">
          Sweet NFT Collection
        </h1>
        <p className="text-lg text-candy-pink dark:text-candy-mint opacity-90">
          Browse through your delightful collection of digital treasures
        </p>
      </motion.div>

      {/* Floating candy decorations */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-candy-pink to-candy-purple opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-slower">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-candy-blue to-candy-mint opacity-60"></div>
      </div>

      {/* Gallery content */}
      <div className="relative z-10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
        <NFTGallery />
      </div>
    </main>
  )
} 