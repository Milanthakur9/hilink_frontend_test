"use client";
import React from "react";
// icon
import { Box, Typography,useTheme } from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import CreatorHeader from "../creator/events/dashboard/components/CreatorHeader";

function Page() {
    const theme = useTheme();
    const orange = theme.palette.customColors.orange;
    const dark2 = theme.palette.customColors.primaryDark2;
    const white = theme.palette.customColors.primaryWhite;
  return (
    <Box sx={{ padding: "0 0 5% 0" }}>
      <CreatorHeader />
      <Box
        sx={{
          width: { md: "99%", xs: "99%" },
          // height: '50vh',
          margin:'0 auto',
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
            boxShadow: `0px 0px 19px 20px ${hexToRGBA(orange, 0.12)}`,
            border: `1px solid ${orange}`,
            backgroundColor: dark2,
            backgroundBlendMode: 'soft-light',
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
          border: `1px solid ${white}`,
          // backgroundBlendMode: "overlay",
          borderRadius: "50%",
          transition: "all 0.1s linear",
          position: "relative",
          "&:hover": {
            cursor: "pointer",
            // transform:'scale(1.1)'
            boxShadow: `0px 0px 19px 20px ${hexToRGBA(orange, 0.12)}`,
            border: `1px solid ${orange}`,
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
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box>
                <Typography
                sx={{ margin: "10px", fontWeight: "bold", fontSize: "18px" }}
                >
                21
                </Typography>
                <Typography sx={{ margin: "10px" }}>
                events 
                </Typography>
            </Box>
            <Box>
                <Typography
                sx={{ margin: "10px", fontWeight: "bold", fontSize: "18px" }}
                >
                2,447
                </Typography>
                <Typography sx={{ margin: "10px" }}>
             attended
                </Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Page;
