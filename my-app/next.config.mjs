/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.place-hold.it',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
