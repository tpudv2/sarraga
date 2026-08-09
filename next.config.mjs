/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: añadir dominios remotos si se sirven imágenes desde un CDN.
    remotePatterns: [],
  },
};

export default nextConfig;
