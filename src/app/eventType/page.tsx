"use client";

import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import HMBG from "../../../hmbg.png";
import { useRouter } from "next/navigation";

const LaunchEvent: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${HMBG.src}),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${HMBG.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: "transparent",
          background: "linear-gradient(60deg,#ff914d,#fff,#ff914d)",
          WebkitBackgroundClip: "text",
          fontWeight: "bold",
        }}
      >
        {`Let's launch your event`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 0,
          border: "1px solid #ff914d",
          borderRadius: "60px",
          padding: "5px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "60px",
            padding: "10px",
            background: "#1516187a",
            border: "1px solid #ff914d",
            fontWeight: "bold",
            fontSize: "25px",
            textTransform: "capitalize",
          }}
        >
          Sell Tickets
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "60px",
            padding: "10px",
            background: "transparent",
            border: "none",
            boxShadow: "none",
            fontWeight: "bold",
            fontSize: "25px",
            textTransform: "capitalize",
          }}
        >
          RSVP Only
        </Button>
      </Box>
      <Button
        variant="contained"
        sx={{
          mt: 12,
          borderRadius: "60px",
          padding: "10px 35px",
          background: "#1516187a",
          border: "1px solid #ff914d",
          fontWeight: "bold",
          fontSize: "25px",
          textTransform: "capitalize",
          transition: "all 0.2s linear",
          "&:hover": {
            transform: "scale(1.051)",
            background: "#ff914d30",
          },
        }}
        onClick={() => router.push("/creator/events/new")}
      >
        Continue
      </Button>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          fontSize: "20px",
          textDecoration: "underline #ff914d",
          color: "#ff914d",
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        Cancel
      </Typography>
    </Box>
  );
};

export default LaunchEvent;
