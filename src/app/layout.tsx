import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeComponent from "@/@core/theme/ThemeComponent";
import { AuthProvider } from "@/context/AuthContext";
import { Provider } from "react-redux";
import store from "../app/store";
// import "../interceptor/axiosInterceptor";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    console.log(config);

    config.headers.Authorization =
      "Bearer " + localStorage.getItem("authToken");

    return config;
  },
  (error) => {
    console.log("Request Error:", error);
    return Promise.reject(error);
  }
);

// const droidSans = localFont({
//   src: [
//     {
//       path: "./../assets/fonts/DroidSans.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-DroidSans",
// });

// const droidSansBold = localFont({
//   src: [
//     {
//       path: "./../assets/fonts/DroidSansBold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-DroidSansBold",
// });

const droidSans = localFont({
  // src: "./fonts/DroidSans.ttf",
  src: "./../assets/fonts/DroidSans.ttf",
  variable: "--font-DroidSans",
  // weight: "100 900",
});

const droidSansBold = localFont({
  src: "./../assets/fonts/DroidSansBold.ttf",
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
        <AuthProvider>
          <AppRouterCacheProvider>
            {/* <Provider store={store}> */}
            <ThemeComponent>{children}</ThemeComponent>
            {/* </Provider> */}
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
