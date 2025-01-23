"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
// import Image from "next/image";
// import user from "../../assets/background_patterns/user.webp";
// import events from "../../assets/background_patterns/eventIcon.webp";
// import sales from "../../assets/background_patterns/sales.webp";
// import tickets from "../../assets/background_patterns/tickets.webp";
// import svgline from "../../assets/background_patterns/svgline.svg";
// icons
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { usePathname, useRouter } from "next/navigation";

const sideBar = [
  {
    id: 1,
    name: "dashboard",
    link: "/superAdmin/",
    icon: <LeaderboardIcon />,
  },
  {
    id: 2,
    name: "user",
    link: "/superAdmin/users/",
    icon: <PersonIcon />,
  },
  {
    id: 3,
    name: "events",
    link: "/superAdmin/events/",
    icon: <EventIcon />,
  },
  {
    id: 4,
    name: "sales",
    link: "/superAdmin/saleEvents/",
    icon: <MonetizationOnIcon />,
  },
  // {
  //   id: 5,
  //   name: "tickets",
  //   link: "/superAdmin/tickets/",
  //   icon: <ConfirmationNumberIcon />,
  // },
  // {
  //   id: 6,
  //   name: "organization",
  //   link: "/superAdmin/orgs/",
  //   icon: <GroupsIcon />,
  // },
];

function SuperAdminSideBar() {
  const theme = useTheme();
  const router = useRouter();
  const pathName = usePathname();
  // console.log({ pathName });

  return (
    <Box
      sx={{
        width: { md: "12%", xs: "100%" },
        // xs: "95%",
        // border: "1px solid red",
        display: "flex",
        flexDirection: { md: "column", xs: "row" },
        justifyContent: { md: "flex-start", xs: "space-around" },
        gap: { md: 6, xs: 2 },
        boxShadow: `0 8px 50px 0 ${hexToRGBA(
          theme.palette.customColors.orange,
          0.15
        )}`,
        padding: { md: "30px 0 0 0", xs: "10px" },
        overflowX: { md: "none", xs: "auto" },
        "&::-webkit-scrollbar": {
          width: "8px", // Width of the scrollbar
          height: "8px", // Height for horizontal scrollbars
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.customColors.orange, // Color of the scrollbar thumb
          borderRadius: "8px", // Rounded corners for the thumb
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.customColors.orange, // Background of the scrollbar track
        },
        scrollbarWidth: "thin", // For Firefox: Thin scrollbar
        scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.paper}`,
      }}
    >
      {/* Side bar */}
      {sideBar.map((item) => {
        return (
          <Box
            key={item.id}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              onClick={() => router.push(`${item.link}`)}
              sx={{
                position: "relative",
                width: "100px",
                margin: "0 auto",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "10px",
                transition: "all .2s linear",
                "&:hover": {
                  background: `linear-gradient(${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.15
                  )},${hexToRGBA(theme.palette.customColors.orange, 0.35)})`,
                },
                "&": {
                  background:
                    pathName === item.link
                      ? theme.palette.customColors.orange
                      : "",
                  boxShadow:
                    pathName === item.link
                      ? `0 8px 50px 0 ${hexToRGBA(
                          theme.palette.customColors.orange,
                          0.15
                        )}`
                      : "",
                  transform: pathName === item.link ? "scale(0.95)" : "",
                },
              }}
            >
              <Typography>{item.icon}</Typography>
              <Typography>{item.name}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default SuperAdminSideBar;
