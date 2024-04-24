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
          {
            protocol: 'https',
            hostname: 'picsum.photos', // Add your second hostname here
            port: '', 
            pathname: '**',
          }
        ],
      },
};

export default nextConfig;
