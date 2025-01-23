"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
// import theme from '@/@core/theme/theme';
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
// icons
import BarChartIcon from "@mui/icons-material/BarChart";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import BrushIcon from "@mui/icons-material/Brush";
// import withAuth from "../../../../context/hoc/withAuth";

const groupsNavigation = [
  {
    name: "overview",
    link: "/owner/groups/overview/",
    icon: <BarChartIcon sx={{ fontSize: "4vh" }} />,
  },
  {
    name: "ticket",
    link: "/owner/groups/tickets/",
    icon: <ConfirmationNumberIcon sx={{ fontSize: "4vh" }} />,
  },
  {
    name: "visuals",
    link: "/owner/groups/visuals/",
    icon: <BrushIcon sx={{ fontSize: "4vh" }} />,
  },
  // {
  //   name: "setting",
  //   link: "/owner/groups/settings/",
  //   icon: <SettingsIcon sx={{ fontSize: "4vh" }} />,
  // },
  {
    name: "team",
    link: "/owner/groups/team/",
    icon: <Diversity3Icon sx={{ fontSize: "4vh" }} />,
  },
  {
    name: "attendees",
    link: "/owner/groups/attendees/",
    icon: <GroupsIcon sx={{ fontSize: "4vh" }} />,
  },
];

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathName = usePathname();
  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette.customColors.orange;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: { md: "8%", xs: "100%" },
            boxShadow: `0 8px 50px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.15
            )}`,
            display: "flex",
            flexDirection: { md: "column", xs: "row" },
            justifyContent: { md: "flex-start", xs: "space-evenly" },
            alignItems: { md: "", xs: "center" },
            padding: "10px",
          }}
        >
          {groupsNavigation.map((item) => {
            return (
              <Box
                key={item.name}
                onClick={() => router.push(item.link)}
                sx={{
                  minWidth: { md: "100%", xs: "45px" },
                  textAlign: "center",
                  padding: "5px",
                  borderRadius: "5px",
                  transition: "all .1s linear",
                  marginTop: { md: "20px" },
                  xs: "0",
                  backgroundColor: pathName === item.link ? orange : "",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(0.95) translateY(-5px)",
                  },
                }}
                title={item.name}
              >
                {item.icon}

                <Typography sx={{ textAlign: "center", fontSize: "2.5vh" }}>
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ width: { md: "85%", xs: "100%" } }}>
          <Box
            sx={{
              height: "100vh",
              overflowY: "scroll",
              borderBottomLeftRadius: { md: "50px", xs: "0" },
              borderTopLeftRadius: { md: "50px", xs: "0" },
              boxShadow: `0 8px 50px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.15
              )}`,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
// export default withAuth(SideBar);
