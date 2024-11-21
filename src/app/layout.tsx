import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeComponent from "@/@core/theme/ThemeComponent";
// import "./fonts/DroidSans.ttf";
// import "./fonts/DroidSansBold.ttf";
import "../../public/fonts/DroidSans.ttf";
import "../../public/fonts/DroidSansBold.ttf";

const droidSans = localFont({
  // src: "./fonts/DroidSans.ttf",
  src: "../../public/fonts/DroidSans.ttf",
  variable: "--font-DroidSans",
  // weight: "100 900",
});

const droidSansBold = localFont({
  src: "../../public/fonts/DroidSansBold.ttf",
  variable: "--font-DroidSans-Bold",
  // weight: "100 900",
});

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
