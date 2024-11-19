"use client";

import CreatorFooter from "./components/CreatorFooter";
import CreatorHeader from "./components/CreatorHeader";
import CreatorTabs from "./components/CreatorTabs";

const CreatorDashboard = () => {
  return (
    <>
      <CreatorHeader />
      <CreatorTabs />
      <CreatorFooter />
    </>
  );
};

export default CreatorDashboard;
