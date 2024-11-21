"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CreatorHeader from "../components/CreatorHeader";
import CreatorFooter from "../components/CreatorFooter";
function ViewPastEvent() {
  const router = useRouter();

  return (
    <>
      <CreatorHeader />
      <div style={{ background: "#151618" }}>
        {/* <Head/> */}
        <Box sx={{ width: "80%", margin: "0 auto", padding: "3% 0%" }}>
          <Box sx={{ display: "flex", alignItems: "center", padding: "4% 0%" }}>
            <Box onClick={() => router.back()}>
              <ArrowCircleLeftIcon
                sx={{
                  color: "#ff914d",
                  fontSize: "45px",
                  marginRight: "20px",
                  "&:hover": { cursor: "pointer" },
                }}
              />
            </Box>
            <Typography
              variant="h2"
              sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
            >
              All Events
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "0% auto",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              background:
                "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                width: { md: "40%", xs: "100%" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <Image
                  src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/xXsD9Uhiq8QAAAAC/happy.gif"
                  alt="gif"
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "inherit",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box sx={{ width: "70%", paddingLeft: "10px" }}>
                <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                  tj
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  November 14th 2024, 6:53 pm
                </Typography>
              </Box>
            </Box>
            <Box sx={{ margin: { md: "0", xs: "3% 0 0 0" } }}>
              <RocketLaunchIcon sx={{ color: "#ff914d" }} />
              <CreateIcon sx={{ color: "#fff", marginLeft: "20px" }} />
              <VisibilityIcon sx={{ color: "#fff", marginLeft: "20px" }} />
              <LibraryAddIcon sx={{ color: "#fff", marginLeft: "20px" }} />
              <DeleteIcon sx={{ color: "#fff", marginLeft: "20px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "2% auto",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
              background:
                "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/3KwgP0nO93sAAAAC/bar-is-open-dwight-the-general-manfredi.gif)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                width: { md: "40%", xs: "100%" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <Image
                  src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://media.tenor.com/3KwgP0nO93sAAAAC/bar-is-open-dwight-the-general-manfredi.gif"
                  alt="gif"
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "inherit",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box sx={{ width: "70%", paddingLeft: "10px" }}>
                <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                  test
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  November 13th 2024, 6:55 pm
                </Typography>
              </Box>
            </Box>
            <Box sx={{ margin: { md: "0", xs: "3% 0 0 0" } }}>
              <CreateIcon sx={{ color: "#fff" }} />
              <VisibilityIcon sx={{ color: "#fff", marginLeft: "20px" }} />
              <LibraryAddIcon sx={{ color: "#fff", marginLeft: "20px" }} />
            </Box>
          </Box>
        </Box>
        {/* <Footer/> */}
      </div>
      <CreatorFooter />
    </>
  );
}

export default ViewPastEvent;
