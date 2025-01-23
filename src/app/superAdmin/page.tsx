"use client";
import React from "react";
import RevenueChart from "./components/revenueChart";
import RevenueChart2 from "./components/RevenuChart2";
import { Box, Typography, useTheme } from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import Image from "next/image";
import user from "../../assets/background_patterns/user.webp";
import events from "../../assets/background_patterns/eventIcon.webp";
import sales from "../../assets/background_patterns/sales.webp";
import tickets from "../../assets/background_patterns/tickets.webp";
import svgline from "../../assets/background_patterns/svgline.svg";
import PastEventsList from "./components/PastEventsList";

// icons
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import GroupsIcon from "@mui/icons-material/Groups";
import { useRouter } from "next/navigation";

const sideBar = [
  {
    id: 1,
    name: "user",
    link: "/superAdmin/users/",
    icon: <PersonIcon />,
  },
  {
    id: 2,
    name: "events",
    link: "/superAdmin/events/",
    icon: <EventIcon />,
  },
  {
    id: 3,
    name: "sales",
    link: "/superAdmin/saleEvents/",
    icon: <MonetizationOnIcon />,
  },
  {
    id: 4,
    name: "tickets",
    link: "/superAdmin/tickets/",
    icon: <ConfirmationNumberIcon />,
  },
  {
    id: 5,
    name: "organization",
    link: "/superAdmin/orgs/",
    icon: <GroupsIcon />,
  },
];

function Page() {
  var theme = useTheme();
  var router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { md: "85%", xs: "100%" },
          // border: "1px solid red",
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, Edge
          },
          boxShadow: `0 8px 50px 0 ${hexToRGBA(
            theme.palette.customColors.orange,
            0.15
          )}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3% 0",
          }}
        >
          <Box sx={{ width: { md: "48%", xs: "95%" } }}>
            {/* <RevenueChart /> */}
            <RevenueChart2 />
          </Box>
          <Box
            sx={{
              width: { md: "48%", xs: "95%" },
              display: "flex",
              margin: "0 auto",
              gap: 3,
              flexDirection: { md: "row", xs: "column" },
              flexWrap: "wrap",
            }}
          >
            {/* total events  */}
            <Box
              onClick={() => router.push(`/superAdmin/events`)}
              sx={{
                background: `repeating-linear-gradient(${hexToRGBA(
                  theme.palette.customColors.primaryDark1,
                  0.9
                )},${hexToRGBA(theme.palette.customColors.primaryDark1, 0.9)})`,
                boxShadow: `${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 10px 20px -10px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 30px 20px -45px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )}  0px -2px 6px 0px inset `,

                width: { md: "48%", xs: "100%" },
                padding: "20px",
                borderRadius: "20px",
                transition: "all .1s linear",
                cursor: "pointer",
                "&:hover": { transform: "scale(0.9)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  // justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Image src={events} alt="user" height={100} width={100} />
                </Box>
                <Box>
                  <Typography variant="h5">Total Events</Typography>
                  <Typography variant="subtitle2">View More</Typography>
                </Box>
              </Box>
            </Box>
            {/* total events  */}

            {/* total user */}
            <Box
              onClick={() => router.push(`/superAdmin/users`)}
              sx={{
                background: `repeating-linear-gradient(${hexToRGBA(
                  theme.palette.customColors.primaryDark1,
                  0.9
                )},${hexToRGBA(theme.palette.customColors.primaryDark1, 0.9)})`,
                boxShadow: `${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 10px 20px -10px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 30px 20px -45px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )}  0px -2px 6px 0px inset `,

                width: { md: "48%", xs: "100%" },
                padding: "20px",
                borderRadius: "20px",
                transition: "all .1s linear",
                cursor: "pointer",
                "&:hover": { transform: "scale(0.9)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  // justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "100px", height: "100px" }}>
                  <Image
                    src={user}
                    style={{ width: "100%" }}
                    alt="user"
                    height={100}
                    width={100}
                  />
                </Box>
                <Box>
                  <Typography variant="h5">Total Users</Typography>
                  <Typography variant="subtitle2">View More</Typography>
                </Box>
              </Box>
            </Box>
            {/* total user */}

            {/* sale events      */}
            <Box
              onClick={() => router.push(`/superAdmin/saleEvents`)}
              sx={{
                background: `repeating-linear-gradient(${hexToRGBA(
                  theme.palette.customColors.primaryDark1,
                  0.9
                )},${hexToRGBA(theme.palette.customColors.primaryDark1, 0.9)})`,
                boxShadow: `${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 10px 20px -10px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 30px 20px -45px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )}  0px -2px 6px 0px inset `,

                width: { md: "48%", xs: "100%" },
                padding: "20px",
                borderRadius: "20px",
                transition: "all .1s linear",
                "&:hover": { transform: "scale(0.9)" },
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Box sx={{ width: "100px", height: "100px" }}>
                  <Image
                    src={sales}
                    style={{ width: "100%" }}
                    alt="user"
                    height={100}
                    width={100}
                  />
                </Box>
                <Box>
                  <Typography variant="h5">Total sale Events </Typography>
                  <Typography variant="subtitle2">View More</Typography>
                </Box>
              </Box>
            </Box>
            {/* sale events      */}

            {/* tickets  */}
            <Box
              onClick={() => router.push(`/superAdmin/tickets`)}
              sx={{
                background: `repeating-linear-gradient(${hexToRGBA(
                  theme.palette.customColors.primaryDark1,
                  0.9
                )},${hexToRGBA(theme.palette.customColors.primaryDark1, 0.9)})`,
                boxShadow: `${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 10px 20px -10px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )} 0px 30px 20px -45px, ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.6
                )}  0px -2px 6px 0px inset `,

                width: { md: "48%", xs: "100%" },
                padding: "20px",
                borderRadius: "20px",
                transition: "all .1s linear",
                cursor: "pointer",
                "&:hover": { transform: "scale(0.9)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-between",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "100px", height: "100px" }}>
                  <Image
                    src={tickets}
                    style={{ width: "100%" }}
                    alt="user"
                    height={100}
                    width={100}
                  />
                </Box>
                <Box>
                  <Typography variant="h5">Total Tickets</Typography>
                  <Typography variant="subtitle2">View More</Typography>
                </Box>
              </Box>
            </Box>
            {/* tickets  */}
          </Box>
        </Box>
        <PastEventsList />
      </Box>
    </>
  );
}

export default Page;
