import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PersonIcon from "@mui/icons-material/Person";

// import { FontSize } from 'mui-tiptap';
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

function Orders() {
  const router = useRouter();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "3% auto",
          width: "80%",
        }}
      >
        <Box onClick={() => router.push("/creator/events/dashboard")}>
          <ArrowCircleLeftIcon
            sx={{
              color: "#ff914d",
              fontSize: "45px",
              marginRight: "20px",
              cursor: "pointer",
            }}
          />
        </Box>
        <Typography
          variant="h2"
          sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
        >
          Orders
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: { md: "15%", xs: "100%" },
            margin: { md: "0", xs: "3% 0" },
          }}
        >
          <Button
            sx={{
              width: "100%",
              background:
                "linear-gradient(to right bottom, #22ccee, #36bffa, #a4bcfd, #d444f1, #ba24d5)",
              color: "#fff",
              padding: "8px 20px",
              fontSize: "18px",
            }}
          >
            FILTER
          </Button>
        </Box>
        <Box sx={{ width: "80%" }}>
          {/* search bar start  */}
          <Box
            sx={{
              p: "2px 14px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "1px solid #ff914d",
              //   margin: "2% auto 0",
              borderRadius: "20px",
              background: "rgba( 255, 145, 77, 0.25 )",
              //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
            }}
          >
            {/* <IconButton sx={{ p: '10px' }} aria-label="menu"> */}
            {/* <MenuIcon /> */}
            <SearchIcon sx={{ color: "#fff" }} />
            {/* </IconButton> */}
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#ff914d" }}
              placeholder="Search (Event Name,Email,Order #)"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          {/* search bar end  */}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          background: "#151618",
          padding: "15px",
          borderRadius: { md: "100px", xs: "10px" },
          width: "80%",
          margin: { md: "3% auto", xs: "5% auto 10%" },
        }}
      >
        <Box sx={{ width: { md: "25%", xs: "45%" } }}>
          <Avatar
            sx={{
              bgcolor: "#202524",
              margin: { md: "0", xs: "0 auto 12%" },
              marginBottom: "3%",
              width: "150px",
              height: "150px",
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              transition: "all .3s linear",
              "&:hover": {
                transform: "scale(0.8)",
              },
            }}
          >
            <PersonIcon sx={{ color: "#ff914d", fontSize: "18vh" }} />
          </Avatar>
        </Box>
        <Box
          sx={{ width: { md: "75%", xs: "80%" }, cursor: "pointer" }}
          onClick={() => router.push("/creator/events/dashboard/attendee")}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Order #7314206 - 11/13/2024, 11:18 AM test
          </Typography>
          <Divider
            sx={{ background: "#ff914d", opacity: 0.2, margin: "1px 0%" }}
          />
          <Typography
            sx={{
              color: "#fff",
              textAlign: { md: "left", xs: "center" },
              fontSize: "24px",
            }}
          >
            Sartaj Gill
          </Typography>
          <Typography
            sx={{ color: "#fff", textAlign: { md: "left", xs: "center" } }}
          >
            $0.00
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Orders;
