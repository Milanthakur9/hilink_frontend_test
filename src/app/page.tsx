"use client";
import HomeHeader from "@/components/header/HomeHeader";
import { Box } from "@mui/material";
import HomePage from "./homepage/page";
// import FormSlide1 from "./creator/events/new/components/FormSlide1";
// import FormSlide2 from "./creator/events/new/components/FormSlide2";
// import Tabpage from "./creator/events/new/components/Tabpage";
export default function Home() {
  return (
    <Box>
      <HomeHeader />
      <HomePage />
      {/* <FormSlide1 /> */}
      {/* <FormSlide2 /> */}
      {/* <Tabpage /> */}
    </Box>
  );
}
