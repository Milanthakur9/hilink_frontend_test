import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Image from "next/image";
import HappyImg from "../../../../../../happy.gif";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
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

function Overview() {
  const router = useRouter();
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;

  return (
    <Box sx={{ padding: "4% 0%" }}>
      {/* Events by test start  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* text  */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              display: { md: "block", xs: "none" },
              color: "#fff",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Events by test
          </Typography>
        </Box>
        {/* text */}
        {/* week days  */}
        <Box
          sx={{
            display: "flex",
            border: `1px solid ${orange}`,
            padding: "5px 20px",
            borderRadius: "8px",
          }}
        >
          <Typography sx={{ "&:hover": { cursor: "pointer" } }}>1W</Typography>
          <Typography
            sx={{
              margin: "0 20px",
              "&:hover": { cursor: "pointer" },
            }}
          >
            1M
          </Typography>
          <Typography sx={{ "&:hover": { cursor: "pointer" } }}>ALL</Typography>
        </Box>
        {/* week days  */}
        {/* tickets & revanue  */}
        <Box sx={{ display: "flex", marginTop: { md: "0", xs: "20px" } }}>
          <Box sx={{ marginRight: "15px", textAlign: "center" }}>
            <Typography sx={{ fontSize: "12px" }}>Revenue This Week</Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              $0.00
            </Typography>
          </Box>
          <Box sx={{ marginRight: "5px", textAlign: "center" }}>
            <Typography sx={{ fontSize: "12px" }}>Tickets This Week</Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              1
            </Typography>
          </Box>
        </Box>
        {/* tickets & revanue  */}
      </Box>
      <Divider sx={{ background: orange, opacity: 0.4, margin: "5px 0%" }} />
      {/* Events by test end  */}
      {/* Chart start  */}
      <Box sx={{ marginTop: "3%" }}>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="events" stroke={orange}></Line>
            {/* <CartesianGrid/> */}
            <Tooltip />
            <XAxis dataKey="date" interval={"preserveStartEnd"} />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      {/* chart end  */}

      {/* events btn start  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          justifyContent: { md: "space-between", xs: "center" },
          margin: "3% auto",
          width: "95%",
        }}
      >
        <Box
          sx={{
            width: { md: "58%", xs: "100%" },
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            sx={{
              background: {
                md: theme.palette.customColors.primaryDark2,
                xs: "none",
              },
              minWidth: "150px",
              textAlign: "center",
              padding: "5px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              borderRadius: "10px",
            }}
          >
            <Typography>Events</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              2
            </Typography>
          </Box>
          <Box
            sx={{
              background: {
                md: theme.palette.customColors.primaryDark2,
                xs: "none",
              },
              minWidth: "150px",
              textAlign: "center",
              padding: "5px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              borderRadius: "10px",
              marginInline: "10px",
              marginBlock: { md: "0", xs: "20px" },
            }}
          >
            <Typography>Total Attendees</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              1
            </Typography>
          </Box>
          <Box
            sx={{
              background: {
                md: theme.palette.customColors.primaryDark2,
                xs: "none",
              },
              minWidth: "150px",
              textAlign: "center",
              padding: "5px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              borderRadius: "10px",
            }}
          >
            <Typography>Total Revenue</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              $0.00
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { md: "40%", xs: "100%" },
            textAlign: { md: "normal", xs: "center" },
            margin: { md: "0", xs: "3% 0 4% " },
          }}
        >
          <Button
            sx={{
              width: { md: "100%", xs: "80%" },
              background: orange,
              borderRadius: "30px",
              color: white,
              padding: "5px 20px",
              fontSize: "20px",
              transition: "all .1s linear",
              "&:hover": { transform: "scale(1.051)" },
            }}
          >
            Create New Events +
          </Button>
        </Box>
      </Box>
      {/* events btn end  */}

      {/* recent order start  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          margin: "6% 0%",
        }}
      >
        <Box
          sx={{
            width: { md: "55%", xs: "100%" },
            background: "#202524",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <Typography sx={{ fontSize: "16px", marginBottom: "10px" }}>
            Events
          </Typography>
          <Box
            sx={{
              width: { md: "100%", xs: "100%" },
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              background: "#151618",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ width: "25%", margin: { md: "0", xs: "0 auto" } }}>
              <Image
                src={HappyImg}
                alt="happy"
                style={{ width: "100%", height: "inherit" }}
              ></Image>
            </Box>
            <Box
              sx={{
                width: "70%",
                margin: { md: "0", xs: "0 auto" },
                textAlign: { md: "normal", xs: "center" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "16px" }}>
                Congrats on the success of tj!
              </Typography>

              <Box
                sx={{
                  width: { md: "100%", xs: "100%" },
                  margin: "3% 0%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                    borderRadius: "10px",
                    marginInline: "10px",
                    marginBlock: { md: "0", xs: "20px" },
                  }}
                >
                  <Typography sx={{ color: orange, fontSize: "12px" }}>
                    Tickets Sold
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px" }}
                  >
                    0
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                    borderRadius: "10px",
                    marginInline: "10px",
                    marginBlock: { md: "0", xs: "20px" },
                  }}
                >
                  <Typography sx={{ color: orange, fontSize: "12px" }}>
                    Revenue
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    $0.00
                  </Typography>
                </Box>
              </Box>
              <Button
                onClick={() => router.push(`/owner/groups/overview`)}
                sx={{
                  width: { md: "100%", xs: "100%" },
                  background: orange,
                  borderRadius: "10px",
                  padding: "5px 20px",
                  fontSize: "2.5vh",
                  transition: "all .1s linear",
                  color: `${theme.palette.customColors.primaryWhite}`,
                  "&:hover": { transform: "scale(1.051)" },
                }}
              >
                View Event Analytics
              </Button>
            </Box>
          </Box>
          <Button
            onClick={() => router.push(`/creator/events/dashboard/pastEvents`)}
            sx={{
              marginTop: "3%",
              width: { md: "100%", xs: "100%" },
              background: orange,
              borderRadius: "10px",
              color: white,
              padding: "5px 20px",
              fontSize: "2.5vh",
              transition: "all .1s linear",
              "&:hover": { transform: "scale(1.051)" },
            }}
          >
            View Past Events
          </Button>
        </Box>
        <Box
          sx={{
            width: { md: "40%", xs: "100%" },
            margin: { md: "0 0 18px 0", xs: "4% 0%" },
            background: theme.palette.customColors.primaryDark2,
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <Typography sx={{ fontSize: "16px", marginBottom: "10px" }}>
            Recent Orders
          </Typography>
          {/* search bar start  */}
          <Box
            sx={{
              p: "2px 14px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: `1px solid ${orange}`,
              margin: "4% auto",
              borderRadius: "20px",
              background: "rgba( 255, 145, 77, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
            }}
          >
            <SearchIcon sx={{ color: white }} />
            <InputBase
              sx={{ ml: 1, flex: 1, color: orange }}
              placeholder="Search (Event Name , Email ,Oreder #)"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          {/* search bar end  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              background: "#151618",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ width: { md: "25%", xs: "45%" } }}>
              <Avatar
                sx={{
                  bgcolor: theme.palette.customColors.primaryDark2,
                  margin: { md: "0", xs: "0 auto 12%" },
                  marginBottom: "3%",
                  width: "100px",
                  height: "100px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  transition: "all .3s linear",
                  "&:hover": {
                    transform: "scale(0.8)",
                  },
                }}
              >
                <PersonIcon sx={{ color: orange, fontSize: "18vh" }} />
              </Avatar>
            </Box>
            <Box sx={{ width: { md: "60%", xs: "80%" } }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                Order #7314206 - 11/13/2024, 11:18 AM test
              </Typography>
              <Divider
                sx={{ background: orange, opacity: 0.2, margin: "1px 0%" }}
              />
              <Typography sx={{ textAlign: { md: "left", xs: "center" } }}>
                Sartaj Gill
              </Typography>
              <Typography sx={{ textAlign: { md: "left", xs: "center" } }}>
                $0.00
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={() => router.push(`/creator/events/dashboard/order`)}
            sx={{
              marginTop: "3%",
              width: { md: "100%", xs: "100%" },
              background: orange,
              borderRadius: "10px",
              color: white,
              padding: "5px 20px",
              fontSize: "2.5vh",
              transition: "all .1s linear",
              "&:hover": { transform: "scale(1.051)" },
            }}
          >
            View More
          </Button>
        </Box>
      </Box>
      {/* recent order end  */}

      {/* SMS Campaigns start  */}
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "15px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Recent SMS Campaigns
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "lighter",
            textTransform: "capitalize",
            margin: "2% 0%",
          }}
        >
          {`You haven't utilized marketing campaigns yet.`}
        </Typography>

        <Button
          sx={{
            background: "#202524",
            border: `1px solid ${orange}`,
            paddingInline: "20px",
            color: orange,
            fontSize: "12px",
          }}
        >
          + Begin Campaign
        </Button>
      </Box>
      {/* SMS Campaigns end  */}
    </Box>
  );
}

export default Overview;
