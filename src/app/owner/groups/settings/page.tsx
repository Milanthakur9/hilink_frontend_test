"use client";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GppGoodIcon from "@mui/icons-material/GppGood";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CodeIcon from "@mui/icons-material/Code";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from "next/navigation";
import SettingHeader from "./SettingHeader";

const cardData = [
  {
    name: "Checkout",
    description: "Checkout Flow, Custom Fees, Buttons",
    icons: <ShoppingCartIcon />,
    link: "/owner/groups/settings/checkout",
  },
  {
    name: "COVID-19",
    description: "Display entrance rules and vaccination requirements",
    icons: <VaccinesIcon />,
    link: "/owner/groups/settings/Vaccination",
  },
  {
    name: "Policies",
    description: "Terms of Service & Refund Policy",
    icons: <GppGoodIcon />,
    link: "/owner/groups/policies",
  },
  {
    name: "Embed",
    description: "Embed checkout for this event on another website",
    icons: <CodeIcon />,
    link: "/owner/groups/settings/embed",
  },
];

function Page() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0",
        }}
      >
        <SettingHeader />

        <Divider sx={{ marginTop: "0" }}></Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {cardData.map((item) => {
            return (
              <Box
                key={item.name}
                onClick={() => router.push(item.link)}
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: "space-between",
                  width: { md: "48%", xs: "100%" },
                  minHeight: { md: "120px", xs: "150px" },
                  margin: "20px 0px",
                  padding: "20px",
                  borderRadius: "10px",
                  background: `${hexToRGBA(
                    theme.palette.customColors.primaryDark1,
                    0.2
                  )}`,
                  boxShadow: `0 8px 55px 0 ${hexToRGBA(
                    theme.palette.customColors.primaryDark2,
                    0.52
                  )}`,
                  //  border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                  transition: "all .2s linear",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(0.95)",
                    boxShadow: `0 8px 52px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.22
                    )}`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "10%",
                    "& svg": { fontSize: "35px" },
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {item.icons}
                </Box>
                <Box sx={{ width: "85%" }}>
                  <Typography variant="h5" sx={{  fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export default Page;
