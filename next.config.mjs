/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "standalone",
  trailingSlash: true,
  reactStrictMode: false,
  transpilePackages: ["mui-one-time-password-input"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
