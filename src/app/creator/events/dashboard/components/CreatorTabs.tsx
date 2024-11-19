"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Team from "./Team";
// import Webhooks from "./Webhooks";
import Finance from "./Finance";
import Marketing from "./Marketing";
import General from "./General";
import Overview from "./Overview";
// import Image from 'next/image';
// import MailchimpLogo from '../../mailchimp-logo.webp';
// import UsFlag from '../../us-flag.png'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CreatorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background: "rgba(21, 22, 24, 0.9)" }}>
      {/* <Box sx={{ width: '100%',background:'rgba( 21, 22, 24, 0.25 )',boxShadow:'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',backdropFilter:'blur( 4px )',WebkitBackdropFilter:'blur( 4px )' }}> */}
      <Box
        sx={{
          width: "100%",
          background: "#151618",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "center",
              width: "fit-content",
              // border:'1px solid #ff914d',
              margin: "0 auto",
              "& .MuiTabs-indicator": {
                backgroundColor: "#ff914d", // Change the indicator color
              },
              "& .MuiTab-root": {
                color: "#ff914d", // Change the text color of the tabs
                "&.Mui-selected": {
                  color: "#ff914d", // Change the text color of the selected tab
                },
                "&:hover": {
                  backgroundColor: "#202524", // Change the background color on hover
                },
              },
            }}
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Marketing" {...a11yProps(1)} />
            <Tab label="Team" {...a11yProps(2)} />
            <Tab label="Finance" {...a11yProps(3)} />
            <Tab label="Profile" {...a11yProps(4)} />
            <Tab label="Settings" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {/* Overview Content */}
          <Overview />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* Marketing Content */}
          <Marketing />
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* Team Content */}
          <Team />
        </TabPanel>
        <TabPanel value={value} index={3}>
          {/* Finance Content */}
          <Finance />
        </TabPanel>
        <TabPanel value={value} index={4}>
          Profile Content
        </TabPanel>
        <TabPanel value={value} index={5}>
          {/* Settings Content */}
          {/* <Webhooks/> */}
          <General />
        </TabPanel>
      </Box>
    </Box>
  );
}
