import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import FormSlide1 from "../components/FormSlide1";
import FormSlide2 from "../components/FormSlide2";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.customColors.primaryWhite, // Indicator color
            },
            "& .MuiTab-root": {
              textTransform: "none", // Disable uppercase text
              color: "gray", // Default tab color
              "&.Mui-selected": {
                color: theme.palette.customColors.primaryWhite, // Selected tab color
                fontWeight: "bold", // Bold on active tab
              },
              "&:hover": {
                color: "secondary.main", // Hover effect
              },
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Event Details" {...a11yProps(0)} />
          <Tab label="Event Flyer" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FormSlide1 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FormSlide2 />
      </CustomTabPanel>
    </Box>
  );
}
