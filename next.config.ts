// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // wajib untuk static export
  basePath: isProd ? '/herd' : '',   // ganti 'herd' sesuai nama repo
  assetPrefix: isProd ? '/herd/' : '',
}

export default nextConfig
