"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import CreatorFooter from "./components/CreatorFooter";
import CreatorHeader from "./components/CreatorHeader";
import CreatorTabs from "./components/CreatorTabs";
import CreatorVerticalTab from "./components/VerticalHeader";

const CreatorDashboard = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <CreatorHeader />
      {isMdDown ? <CreatorVerticalTab /> : <CreatorTabs />}
      <CreatorFooter />
    </>
  );
};

export default CreatorDashboard;
