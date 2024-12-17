/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  transpilePackages: ["mui-one-time-password-input"],
  images: {
    unoptimized: true,
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.ttf$/,
  //     use: {
  //       loader: "file-loader",
  //       options: {
  //         name: "static/fonts/[name].[hash].[ext]",
  //       },
  //     },
  //   });
  //   return config;
  // },
  
};

export default nextConfig;
