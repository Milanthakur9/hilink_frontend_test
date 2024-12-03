"use client";
import React, { useState } from "react";
import { Button, Box, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import HMBG from "../../../hmbg.png";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";

const LaunchEvent: React.FC = () => {
  const [active, setActive] = useState<"sell" | "rsvp">("sell");
  const router = useRouter();
  const theme = useTheme();

  const borderAnimation = useSpring({
    left: active === "sell" ? "2%" : "48%",
    config: { duration: 100 },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `repeating-linear-gradient(80deg, rgba(0,0,0,0.1) 100%,rgba(0,0,0,0.1) 50%,rgba(0,0,0,0.4),rgba(0,0,0,0.4) 70%),url(${HMBG.src})`,
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
          WebkitBackgroundClip: "text",
          fontWeight: "bold",
        }}
      >
        {`Let's launch your event`}
      </Typography>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          gap: 2,
          mt: 4,
          width: "400px",
          border: `1px solid ${theme.palette.customColors.primaryWhite}`,
          borderRadius: "30px",
          p: 2,
        }}
      >
        <animated.div
          style={{
            position: "absolute",
            top: "11%",
            left: borderAnimation.left,
            width: "50%",
            height: "80%",
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "60px",
            pointerEvents: "none",
            transition: "all 0.3s ease-in-out",
          }}
        />

        <Button
          onClick={() => setActive("sell")}
          sx={{
            flex: 1,
            borderRadius: "60px",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            textTransform: "capitalize",

            color: active === "sell" ? "#fff" : theme.palette.text.primary,
          }}
        >
          Sell Tickets
        </Button>

        <Button
          onClick={() => setActive("rsvp")}
          sx={{
            flex: 1,
            borderRadius: "60px",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            textTransform: "capitalize",
            color: active === "rsvp" ? "#fff" : theme.palette.text.primary,
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
          background: `${hexToRGBA(
            theme.palette.customColors.primaryDark1,
            0.2
          )}`,
          fontWeight: "bold",
          fontSize: "25px",
          textTransform: "capitalize",
          transition: "all 0.2s linear",
          border: `1px solid ${theme.palette.customColors.primaryWhite}`,
          "&:hover": {
            transform: "scale(1.051)",
          },
        }}
        onClick={() => router.push(active === 'sell' ? "/creator/events/new" : "/creator/events/sell")}
      >
        Continue
      </Button>

      <Typography
        variant="body2"
        sx={{
          mt: 2,
          fontSize: "20px",
          textDecoration: `underline ${theme.palette.customColors.primaryWhite}`,
          color: theme.palette.customColors.primaryWhite,
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
