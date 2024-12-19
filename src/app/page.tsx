import HomeHeader from "@/components/header/HomeHeader";
import { Box } from "@mui/material";
import HomePage from "./homepage/page";

export default function Home() {
  return (
    <Box>
      <HomeHeader />
      <HomePage />
    </Box>
  );
}
