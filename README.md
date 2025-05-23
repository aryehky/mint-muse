# 🎨 MintMuse

**MintMuse** is a beautiful, Web3-enabled NFT gallery built with **Next.js**, **TypeScript**, and **RainbowKit**. It allows users to connect their wallets, view owned NFTs, and browse on-chain collections in an immersive, responsive interface.

---

## 🛠 Tech Stack

* ⚛️ **Next.js** (App Router)
* 📘 **TypeScript**
* 🎨 **Tailwind CSS** + Radix UI
* 🔌 **RainbowKit** + **WAGMI**
* 🔗 **Ethers.js**
* 🖼️ **NFTPort** or **Alchemy NFT API**
* 🗃️ **IPFS support**

---

## 💡 Features

* 🔐 Connect wallet (MetaMask, Coinbase, WalletConnect)
* 🧾 Fetch NFTs for connected address
* 🖼️ Display NFT metadata (image, name, traits)
* 🔍 View collection details and token properties
* 🌐 Cross-chain support (Ethereum, Polygon)
* 📱 Mobile-responsive layout

---

## 🔧 Installation

```bash
git clone https://github.com/aryehky/mintmuse.git
cd mintmuse
npm install
npm dev
```

---

## 🌍 .env.local

Create a `.env.local` file:

```bash
NEXT_PUBLIC_ALCHEMY_KEY=your_key_here
NEXT_PUBLIC_SUPPORTED_CHAIN=ethereum
```

You can use Alchemy or NFTPort APIs for fetching NFT metadata.

---

## 📁 Directory Structure

```
/components   → UI blocks like Gallery, Card, Header
/hooks        → useWallet, useNFTs, etc.
/pages        → Next.js pages
/public       → Static assets
/styles       → Tailwind + globals
/utils        → helpers for NFT parsing, IPFS
```

---

## 🚀 Roadmap

* ✅ NFT Gallery by wallet
* ✅ Alchemy + IPFS NFT metadata
* ⏳ Collection search
* ⏳ Wallet ENS support
* ⏳ Custom token contract support

---

## 🤝 Contributing

Want to add features? Fork + PR! Run:

```bash
pnpm lint
pnpm format
```

---

## 📜 License

MIT © 2025 \[Your Name or Org]

---

## 🧪 Live Demo

> Coming soon: [https://mintmuse.xyz](https://mintmuse.xyz)
