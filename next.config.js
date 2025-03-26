/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure static generation
  output: 'export',
  
  // Configure image optimization
  images: {
    unoptimized: true, // For static export
  },
  
  // Configure trailing slash
  trailingSlash: true,
  
  // Configure base path if needed
  // basePath: '',
  
  // Configure redirects
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
  
  // Configure rewrites
  async rewrites() {
    return {
      beforeFiles: [
        // Rewrite for language detection
        {
          source: '/',
          destination: '/api/language-detection',
        },
      ],
    }
  },
}

module.exports = nextConfig