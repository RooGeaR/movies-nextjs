/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org"
      }
    ]
  },
  env: {
    TMDB_API_ACCESS_TOKEN: process.env.TMDB_API_ACCESS_TOKEN,
  },
};

export default nextConfig;
