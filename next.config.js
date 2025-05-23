/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['ipfs.io', 'alchemy.mypinata.cloud', 'gateway.pinata.cloud'],
    },
}

module.exports = nextConfig