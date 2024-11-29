"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from "next/navigation";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// icon
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const OverviewPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette.customColors.orange;

  // Dynamically import the chart to prevent SSR issues
  const CustomActiveShapePieChart = dynamic(
    () => import("../overview/piechart"),
    { ssr: false }
  );
  // chart data
  const data = [
    {
      date: "Nov 12",
      events: 13,
    },
    {
      date: "Nov 13",
      events: 15,
    },
    {
      date: "Nov 14",
      events: 12,
    },
    {
      date: "Nov 15",
      events: 18,
    },
    {
      date: "Nov 16",
      events: 10,
    },
    {
      date: "Nov 17",
      events: 6,
    },
    {
      date: "Nov 18",
      events: 18,
    },
    {
      date: "Nov 19",
      events: 18,
    },
  ];
  //   chart data end

  // pie chart start
  // pie chart end

  const overviewBtn = [
    {
      name: "Day",
      link: "/",
    },
    {
      name: "Week",
      link: "/",
    },
    {
      name: "Month",
      link: "/",
    },
    {
      name: "YTD",
      link: "/",
    },
    {
      name: "All Time",
      link: "/",
    },
  ];

  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: { md: "3% 0%", xs: "5% 0" },
        }}
      >
        <Box sx={{ margin: { md: "15px 0", xs: "30px 0" } }}>
          {/* Dashboard title start */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h3">Dashboard</Typography>
            </Box>
            <Box>
              <Button
                onClick={() => router.push(`/e/view/`)}
                sx={{
                  background: orange,
                  paddingInline: "20px",
                  transition: "all .1s linear",
                  color: `${theme.palette.customColors.primaryWhite}`,
                  "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
                }}
              >
                View Event Page{" "}
              </Button>
            </Box>
          </Box>
          {/* Dashboard title end */}
          <Divider
            sx={{ marginTop: "2%", bgcolor: orange, opacity: 0.4 }}
          ></Divider>
          {/* divider end  */}
        </Box>

        {/* Total Tickets Sold start */}
        <Box sx={{ margin: "3% 0%" }}>
          <Box
            sx={{
              background: theme.palette.customColors.primaryDark2,
              boxShadow: `0 8px 50px 0 ${hexToRGBA(
                theme.palette.customColors.primaryDark2,
                0.55
              )}`,
              width: { md: "30%", xs: "100%" },
              padding: "20px",
              borderRadius: "20px",
              transition: "all .1s linear",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                boxShadow: `0 8px 50px 0 ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.15
                )}`,
              },
            }}
          >
            <Typography>Total Tickets Sold</Typography>
            <Typography sx={{ color: orange, fontSize: "30px" }}>0</Typography>
            <Typography>Total</Typography>
          </Box>
        </Box>
        {/* Total Tickets Sold end  */}

        {/* Overview All Time start  */}
        <Box
          sx={{
            display: "flex",
            margin: { md: "2% 0", xs: "6% 0" },
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3">
              {" "}
              Overview <span style={{ fontWeight: "normal" }}>
                {" "}
                All Time{" "}
              </span>{" "}
            </Typography>
          </Box>
          <Box>
            {overviewBtn.map((item) => {
              return (
                <Button
                  key={item.name}
                  sx={{
                    border: `1px solid ${orange}`,
                    paddingInline: "20px",
                    margin: { md: "0 0 0 10px", xs: "5px 0 0 10px" },
                    transition: "all .1s linear",
                    borderRadius: "5px",

                    "&:hover": { background: orange },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>
        </Box>
        {/* Overview All Time end  */}

        {/* Revenue start   */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { md: "48%", xs: "100%" },
              background: theme.palette.customColors.primaryDark2,
              boxShadow: `0 8px 50px 0 ${hexToRGBA(
                theme.palette.customColors.primaryDark2,
                0.55
              )}`,
              padding: "20px",
              borderRadius: "20px",
              margin: "2% 0",
            }}
          >
            <Typography>Revenue</Typography>
            <Typography variant="h2" sx={{ color: orange }}>
              $0.00
            </Typography>
          </Box>
          <Box
            sx={{
              width: { md: "48%", xs: "100%" },
              background: theme.palette.customColors.primaryDark2,
              boxShadow: `0 8px 50px 0 ${hexToRGBA(
                theme.palette.customColors.primaryDark2,
                0.55
              )}`,
              padding: "20px",
              borderRadius: "20px",
              margin: "2% 0",
            }}
          >
            <Typography>Total Tickets Sold</Typography>
            <Typography variant="h2" sx={{ color: orange }}>
              0
            </Typography>
          </Box>
        </Box>
        {/* Revenue end     */}

        {/* Chart start  */}
        <Box sx={{ margin: "5% 0" }}>
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="events" stroke="#ff914d"></Line>
              {/* <CartesianGrid/> */}
              <Tooltip />
              <XAxis dataKey="date" interval={"preserveStartEnd"} />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        {/* chart end  */}

        <Box sx={{ margin: { md: "15px 0px", xs: "30px 0px" } }}>
          <Divider
            sx={{ margin: "2% 0", bgcolor: orange, opacity: 0.4 }}
          ></Divider>
          {/* divider end  */}
          {/* Tickets  start */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h3">Tickets</Typography>
            </Box>
            <Box>
              <Button
                onClick={() => router.push(`/owner/groups/tickets`)}
                sx={{
                  background: orange,
                  paddingInline: "20px",
                  transition: "all .1s linear",
                  color: `${theme.palette.customColors.primaryWhite}`,

                  "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
                }}
              >
                View Tickets
              </Button>
            </Box>
          </Box>
          {/* Tickets  end */}
        </Box>

        {/* pie chart section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "3% 0",
          }}
        >
          <Box
            sx={{
              background: theme.palette.customColors.primaryDark2,
              boxShadow: `0 8px 50px 0 ${hexToRGBA(
                theme.palette.customColors.primaryDark2,
                0.55
              )}`,
              width: { md: "33%", xs: "100%" },
              padding: "20px",
              borderRadius: "20px",
              transition: "all .1s linear",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                boxShadow: `0 8px 50px 0 ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.15
                )}`,
              },
            }}
          >
            <Box sx={{ margin: "2% 0" }}>
              <Typography variant="h5">Total Tickets Sold</Typography>
              <Typography variant="h2" sx={{ color: orange }}>
                0
              </Typography>
              <Typography>0 Ticket Types Sold</Typography>
            </Box>
            {/* pie chart start  */}
            <CustomActiveShapePieChart />
            {/* pie chart end  */}
          </Box>
          <Box
            sx={{
              width: { md: "60%", xs: "100%" },
              padding: "20px",
              background: theme.palette.customColors.primaryDark2,
              borderRadius: "20px",
            }}
          >
            <Typography variant="h3">Recent Order</Typography>
          </Box>
        </Box>
        {/* pie chart section */}

        <Box sx={{ margin: { md: "15px 0px", xs: "30px 0" } }}>
          {/* Attendees title start */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h3">Attendee</Typography>
            </Box>
            <Box>
              <Button
                onClick={() => router.push(`/owner/groups/attendees/`)}
                sx={{
                  background: orange,
                  paddingInline: "20px",
                  transition: "all .1s linear",
                  color: `${theme.palette.customColors.primaryWhite}`,
                  "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
                }}
              >
                View Attendees
              </Button>
            </Box>
          </Box>
          {/* Attendees title end */}
          <Divider
            sx={{ marginTop: "2%", bgcolor: orange, opacity: 0.4 }}
          ></Divider>
          {/* divider end  */}
        </Box>

        <Box
          sx={{
            margin: "3% 0",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
            gap: { md: 2, xs: 4 },
          }}
        >
          <Box
            sx={{
              background: theme.palette.customColors.primaryDark2,
              boxShadow: `0 8px 50px 0 ${hexToRGBA(
                theme.palette.customColors.primaryDark2,
                0.55
              )}`,
              width: { md: "32%", xs: "100%" },
              padding: "20px",
              borderRadius: "20px",
              transition: "all .1s linear",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(0.95)",
                boxShadow: `0 8px 50px 0 ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.15
                )}`,
              },
            }}
          >
            <Typography>Gender Ratio</Typography>
            <Typography variant="h2" sx={{ color: orange }}>
              Male
            </Typography>
            <Typography>Majority Gender</Typography>
          </Box>
          {/* pie chart section */}
          <Box sx={{ width: { md: "32%", xs: "100%" } }}>
            <Box
              sx={{
                background: theme.palette.customColors.primaryDark2,
                boxShadow: `0 8px 50px 0 ${hexToRGBA(
                  theme.palette.customColors.primaryDark2,
                  0.55
                )}`,
                padding: "20px",
                borderRadius: "20px",
                transition: "all .1s linear",
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(0.95)",
                  boxShadow: `0 8px 50px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.15
                  )}`,
                },
              }}
            >
              <Box sx={{ margin: "2% 0" }}>
                <Typography variant="h5">
                  Your New Vs. Returning Accounts
                </Typography>
                <Typography variant="h2" sx={{ color: orange }}>
                  0
                </Typography>
                <Typography>Unique Accounts</Typography>
              </Box>
              {/* pie chart start  */}
              <CustomActiveShapePieChart />
              {/* pie chart end  */}
            </Box>
          </Box>
          {/* pie chart section */}
          <Box
            sx={{
              background: theme.palette.customColors.primaryDark2,
              boxShadow: `0 8px 50px 0 ${hexToRGBA(
                theme.palette.customColors.primaryDark2,
                0.55
              )}`,
              width: { md: "32%", xs: "100%" },
              padding: "20px",
              borderRadius: "20px",
              transition: "all .1s linear",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(0.95)",
                boxShadow: `0 8px 50px 0 ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.15
                )}`,
              },
            }}
          >
            <Typography>Attendee Location</Typography>

            <Box sx={{ paddingTop: "10%", textAlign: "center" }}>
              <TravelExploreIcon
                sx={{ fontSize: "10vh", alignSelf: "center" }}
              />
              <Typography sx={{ marginTop: "20px", fontSize: "20px" }}>
                No attendee location available
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OverviewPage;
