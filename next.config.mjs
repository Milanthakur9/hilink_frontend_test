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
  webpack(config, {}) {
    // Add loader for font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/, // This includes .ttf and other font formats
      use: {
        loader: "file-loader",
        options: {
          name: "static/fonts/[name].[hash].[ext]", // Specify output directory and naming convention
        },
      },
    });

    return config;
  },
};

export default nextConfig;
