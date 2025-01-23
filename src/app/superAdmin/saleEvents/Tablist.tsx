import React, { SyntheticEvent, useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import TraditionalCommissionGroupList from "../tickets/TicketsList";
import RetailCommissionGroupList from "./SaleList";

const TabPanelStyled = styled(TabPanel)(() => ({
  padding: "0",
}));

// Styled Tabs Container
const TabsStyled = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    display: "none", // Hide the default underline indicator
  },
}));

// Styled Tab to look like a button
const TabButtonStyled = styled(Tab)(({ theme }) => ({
  textTransform: "none", // Prevent text capitalization
  borderRadius: "8px", // Rounded corners for a button look
  padding: "8px 16px", // Padding for button-like appearance
  marginRight: "10px", // Spacing between buttons
  backgroundColor: theme.palette.customColors.primaryDark2, // Default background color
  transition: "all 0.3s ease-in-out", // Smooth hover and click effects
  "&:hover": {
    backgroundColor: theme.palette.customColors.orange, // Hover effect
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main, // Active tab background color
    color: theme.palette.customColors.primaryWhite, // Active tab text color
    borderColor: theme.palette.primary.main, // Active tab border color
  },
}));

// Define the props for the component (if needed)
interface CommissionGroupListProps {}

const CommissionGroupList: React.FC<CommissionGroupListProps> = () => {
  // State to handle the active tab
  const [value, setValue] = useState<number>(1);

  // Function to handle tab change
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setValue(Number(newValue));
  };

  return (
    <>
      {/* Page Title */}
      {/* <PageTitle title="Commission Group List" /> */}

      {/* Container Box */}
      <Box component="div">
        <TabContext value={value}>
          {/* Header Section */}
          <Box
            component="div"
            sx={{
              display: "flex",
              margin: "0 0 20px",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {/* Tab List
            <Tabs
              value={value}
              onChange={handleChange}
              variant="standard"
              aria-label="customized-tab"
            >
              <Tab label="Tickets" value={1} />
              <Tab label="User & Events Info" value={2} />
            </Tabs> */}
            <TabsStyled
              value={value}
              onChange={handleChange}
              aria-label="styled tabs"
            >
              <TabButtonStyled label="Tickets" value={1} />
              <TabButtonStyled label="User & Events Info" value={2} />
            </TabsStyled>

            {/* Add Button */}
            {/* <AddIconButton
              link="/admin/ib/addcommissiongroup"
            /> */}
          </Box>

          {/* Content Section */}
          <Card sx={{ width: "100%", margin: "0 auto" }}>
            {/* Traditional Tab Panel */}
            <TabPanelStyled value={1}>
              <TraditionalCommissionGroupList />
            </TabPanelStyled>

            {/* Retail Tab Panel */}
            <TabPanelStyled value={2}>
              <RetailCommissionGroupList />
            </TabPanelStyled>
          </Card>
        </TabContext>
      </Box>
    </>
  );
};

export default CommissionGroupList;
