import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeComponent from "@/@core/theme/ThemeComponent";

const droidSans = localFont({
  src: [
    {
      path: "fonts/DroidSans.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-DroidSans",
});

const droidSansBold = localFont({
  src: [
    {
      path: "fonts/DroidSansBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-DroidSansBold",
});

// const droidSans = localFont({
//   // src: "./fonts/DroidSans.ttf",
//   src: "/fonts/DroidSans.ttf",
//   variable: "--font-DroidSans",
//   // weight: "100 900",
// });

// const droidSansBold = localFont({
//   src: "/fonts/DroidSansBold.ttf",
//   variable: "--font-DroidSans-Bold",
//   // weight: "100 900",
// });

export const metadata: Metadata = {
  title: "hi link",
  description: "corporate event ticket booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${droidSans.variable} ${droidSansBold.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeComponent>{children}</ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
