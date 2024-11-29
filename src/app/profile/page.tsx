"use client";
import React from "react";
// icon
import { Box, Typography } from "@mui/material";
import theme from "@/@core/theme/theme";
import CreatorHeader from "../creator/events/dashboard/components/CreatorHeader";

function page() {
  return (
    <Box sx={{ padding: "0 0 5% 0" }}>
      <CreatorHeader />
      <Box
        sx={{
          width: { md: "100%", xs: "100%" },
          // height: '50vh',
          minHeight: { md: "450px", xs: "250px" },
          // margin: { md: "0%", xs: "0% auto 6%" },
          backgroundImage: `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          // backgroundBlendMode: "overlay",
          // borderRadius: "25px",
          transition: "all 0.1s linear",
          position: "relative",
          "&:hover": {
            cursor: "pointer",
            // transform:'scale(1.1)'
            boxShadow: "0px 0px 19px 20px rgba(255,145,77,0.12)",
            border: "1px solid #ff914d",
            backgroundColor: "#1f1f1f",
            backgroundBlendMode: "overlay",
          },
        }}
      ></Box>
      {/* event by test  */}
      {/* profile image start  */}
      <Box
        sx={{
          width: "250px",
          margin: "-150px auto 0",
          // height: '50vh',
          minHeight: "250px",
          // margin: { md: "0%", xs: "0% auto 6%" },
          backgroundImage: `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          border: `1px solid ${theme.palette?.customColors.primaryWhite}`,
          // backgroundBlendMode: "overlay",
          borderRadius: "50%",
          transition: "all 0.1s linear",
          position: "relative",
          "&:hover": {
            cursor: "pointer",
            // transform:'scale(1.1)'
            boxShadow: "0px 0px 19px 20px rgba(255,145,77,0.12)",
            border: "1px solid #ff914d",
            // backgroundColor:'#1f1f1f',
            // backgroundBlendMode:'overlay'
          },
        }}
      ></Box>
      {/* profile image end  */}
      <Box sx={{ margin: "1% 0", textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "35px", fontWeight: "bold", textAlign: "center" }}
        >
          Sartaj Gill
        </Typography>
        <Typography sx={{ margin: "10px" }}>@sartajgill165</Typography>
        <Typography
          sx={{ margin: "10px", fontWeight: "bold", fontSize: "18px" }}
        >
          1
        </Typography>
        <Typography sx={{ margin: "10px" }}>
          events <br></br> attended
        </Typography>
      </Box>
    </Box>
  );
}

export default page;
