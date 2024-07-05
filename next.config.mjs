/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/404',
            destination: '/not-found',
          },
        ];
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'png.pngtree.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'visualstudiomagazine.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.ndmed.org',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.bankofbaroda.in',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'contents.mediadecathlon.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'media.wired.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'sharpi.in',
          port: '',
          pathname: '/**',
        },
      ]
    }
};

export default nextConfig;
