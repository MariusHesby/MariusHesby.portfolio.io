/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com'],
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;