/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',      // aktifkan static export
  images: { unoptimized: true }, // disable next/image optimization
  basePath: isProd ? '/herdian.github.io' : '',  // ganti sesuai nama repo
  assetPrefix: isProd ? '/herdian.github.io/' : '',
  trailingSlash: true,   // penting untuk GitHub Pages (biar folder jadi /index.html)
}

export default nextConfig
