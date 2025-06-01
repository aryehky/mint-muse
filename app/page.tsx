'use client'

import Image from 'next/image'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-candy-gradient relative overflow-hidden">
      {/* Floating Lollipops Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <div className="text-4xl">🍭</div>
          </div>
        ))}
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative z-10 text-center pt-4 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Welcome Text Image */}
          <div className="relative w-full mx-auto aspect-[7/1] mb-2">
            <Image
              src="/welcome-to-mint-must-text.png"
              alt="Welcome to MintMuse"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Castle Image */}
          <div className="relative w-full aspect-[3/2] mb-8">
            <Image
              src="/candy-castle.png"
              alt="MintMuse Castle"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="text-2xl font-display text-candy-purple max-w-3xl mx-auto">
            Explore your NFT collections in a magical Candy Land world. 
            🍬 Connect your wallet to start your journey! 🍭
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="relative z-10 py-16 px-4">
        <h2 className="text-4xl font-display text-center mb-12 text-candy-pink">
          🍬 Featured Collections 🍬
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Sweet Surprise",
              number: 1,
              image: "/lollipop-blue.png",
              desc: "A delightful NFT from our collection."
            },
            {
              name: "Candy Castle",
              number: 2,
              image: "/castle-small.png",
              desc: "A charming NFT ready for you!"
            },
            {
              name: "Peppermint Dream",
              number: 3,
              image: "/lollipop-red.png",
              desc: "Enjoy the sweetness of ownership!"
            }
          ].map((item, i) => (
            <div key={i} className="transform hover:scale-105 transition-transform">
              <div className="bg-candy-yellow/40 p-1 rounded-3xl border-8 border-[#FF9EC8] border-dashed">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                  <div className="aspect-square relative mb-4 bg-gradient-to-b from-white to-candy-yellow/20 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <h3 className="text-2xl font-display text-candy-purple">
                    {item.name}
                    <span className="text-candy-pink"> #{item.number}</span>
                  </h3>
                  <p className="mt-2 font-display text-candy-purple/80">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8">
        <p className="text-lg font-display text-candy-purple">
          🍭 MintMuse Candy Land Edition © 2025 | Made with 🍬 & ❤️
        </p>
      </footer>
    </main>
  )
} 