import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  Typography,
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
            border: "1px solid #ff914d",
            padding: "5px 20px",
            borderRadius: "8px",
          }}
        >
          <Typography sx={{ color: "#fff", "&:hover": { cursor: "pointer" } }}>
            1W
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              margin: "0 20px",
              "&:hover": { cursor: "pointer" },
            }}
          >
            1M
          </Typography>
          <Typography sx={{ color: "#fff", "&:hover": { cursor: "pointer" } }}>
            ALL
          </Typography>
        </Box>
        {/* week days  */}
        {/* tickets & revanue  */}
        <Box sx={{ display: "flex", marginTop: { md: "0", xs: "20px" } }}>
          <Box sx={{ marginRight: "15px", textAlign: "center" }}>
            <Typography sx={{ color: "#fff", fontSize: "12px" }}>
              Revenue This Week
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px" }}
            >
              $0.00
            </Typography>
          </Box>
          <Box sx={{ marginRight: "5px", textAlign: "center" }}>
            <Typography sx={{ color: "#fff", fontSize: "12px" }}>
              Tickets This Week
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px" }}
            >
              1
            </Typography>
          </Box>
        </Box>
        {/* tickets & revanue  */}
      </Box>
      <Divider sx={{ background: "#ff914d", opacity: 0.4, margin: "5px 0%" }} />
      {/* Events by test end  */}
      {/* Chart start  */}
      <Box sx={{ marginTop: "3%" }}>
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
              background: { md: "#202524", xs: "none" },
              minWidth: "150px",
              textAlign: "center",
              padding: "5px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "#fff" }}>Events</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              2
            </Typography>
          </Box>
          <Box
            sx={{
              background: { md: "#202524", xs: "none" },
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
            <Typography sx={{ color: "#fff" }}>Total Attendees</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              1
            </Typography>
          </Box>
          <Box
            sx={{
              background: { md: "#202524", xs: "none" },
              minWidth: "150px",
              textAlign: "center",
              padding: "5px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "#fff" }}>Total Revenue</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
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
              background: "#ff914d",
              borderRadius: "30px",
              color: "#fff",
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
          justifyContent: "space-between",
          margin: "6% 0%",
        }}
      >
        <Box
          sx={{
            width: "55%",
            background: "#202524",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ color: "#fff", fontSize: "16px", marginBottom: "10px" }}
          >
            Events
          </Typography>
          <Box
            sx={{
              width: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              background: "#151618",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ width: "25%" }}>
              <Image
                src={HappyImg}
                style={{ width: "100%", height: "inherit" }}
                alt="happy"
              ></Image>
            </Box>
            <Box
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: "#fff", fontSize: "16px" }}>
                Congrats on the success of tj!
              </Typography>
              <Box
                sx={{
                  width: { md: "58%", xs: "100%" },
                  margin: "3% 0%",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    background: { md: "#202524", xs: "none" },
                    minWidth: "150px",
                    textAlign: "center",
                    padding: "5px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                    borderRadius: "10px",
                  }}
                >
                  <Typography sx={{ color: "#ff914d", fontSize: "12px" }}>
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
                    background: { md: "#202524", xs: "none" },
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
                  <Typography sx={{ color: "#ff914d", fontSize: "12px" }}>
                    Revenue
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px" }}
                  >
                    $0.00
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  width: { md: "100%", xs: "80%" },
                  background: "#ff914d",
                  borderRadius: "10px",
                  color: "#fff",
                  padding: "5px 20px",
                  fontSize: "16px",
                  transition: "all .1s linear",
                  "&:hover": { transform: "scale(1.051)" },
                }}
              >
                View Event Analytics
              </Button>
            </Box>
          </Box>
          <Button
            sx={{
              marginTop: "3%",
              width: { md: "100%", xs: "80%" },
              background: "#ff914d",
              borderRadius: "10px",
              color: "#fff",
              padding: "5px 20px",
              fontSize: "16px",
              transition: "all .1s linear",
              "&:hover": { transform: "scale(1.051)" },
              cursor: "pointer",
            }}
            onClick={() => router.push("/creator/events/dashboard/pastEvents")}
          >
            View Past Events
          </Button>
        </Box>
        <Box
          sx={{
            width: "40%",
            background: "#202524",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{ color: "#fff", fontSize: "16px", marginBottom: "10px" }}
          >
            Recent Orders
          </Typography>
          {/* search bar start  */}
          <Box
            sx={{
              p: "2px 14px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "1px solid #ff914d",
              margin: "4% auto",
              borderRadius: "20px",
              background: "rgba( 255, 145, 77, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
            }}
          >
            <SearchIcon sx={{ color: "#fff" }} />
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#ff914d" }}
              placeholder="Search (Event Name , Email ,Oreder #)"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          {/* search bar end  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#151618",
              padding: "15px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ width: "25%" }}>
              <Avatar
                sx={{
                  bgcolor: "#202524",
                  marginBottom: "3%",
                  width: 120,
                  height: 120,
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  transition: "all .3s linear",
                  "&:hover": {
                    transform: "scale(0.8)",
                  },
                }}
              >
                <PersonIcon sx={{ color: "#ff914d", fontSize: "80px" }} />
              </Avatar>
            </Box>
            <Box
              sx={{ width: "70%", cursor: "pointer" }}
              onClick={() => router.push("/creator/events/dashboard/attendee")}
            >
              <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                Order #7314206 - 11/13/2024, 11:18 AM test
              </Typography>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.2, margin: "1px 0%" }}
              />
              <Typography sx={{ color: "#fff" }}>Sartaj Gill</Typography>
              <Typography sx={{ color: "#fff" }}>$0.00</Typography>
            </Box>
          </Box>
          <Button
            sx={{
              marginTop: "3%",
              width: { md: "100%", xs: "80%" },
              background: "#ff914d",
              borderRadius: "10px",
              color: "#fff",
              padding: "5px 20px",
              fontSize: "16px",
              transition: "all .1s linear",
              "&:hover": { transform: "scale(1.051)" },
            }}
            onClick={() => router.push("/creator/events/dashboard/order")}
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
            color: "#fff",
            fontSize: "15px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Recent SMS Campaigns
        </Typography>

        <Typography
          sx={{
            color: "#fff",
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
            border: "1px solid #ff914d",
            paddingInline: "20px",
            color: "#ff914d",
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
