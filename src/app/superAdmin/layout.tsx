import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeComponent from "@/@core/theme/ThemeComponent";
import { AuthProvider } from "@/context/AuthContext";
import SuperAdminSideBar from "./components/SuperAdminSideBar";
import { Box } from "@mui/material";
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
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "space-between", xs: "center" },
          flexDirection: { md: "row", xs: "column" },
          // border: "1px solid red",
          margin: { md: "0", xs: "0 auto" },
        }}
      >
        <SuperAdminSideBar />

        {children}
      </Box>
    </>
  );
}
