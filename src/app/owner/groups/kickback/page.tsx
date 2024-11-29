"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "@/@core/theme/theme";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function page() {
  const orange = theme.palette?.customColors.orange;

  const offer = [
    {
      title: "Public Offers",
      description:
        "Create paid offers that any attendee of this event may redeem for selling tickets to their friends. Attendees will be prompted with this opportunity after they checkout.",
      btnName: "Create Public Offer",
      icon: <AttachMoneyIcon />,
      link: "/",
    },
    {
      title: "Affiliate Offers",
      description:
        "Create paid offers and invite affiliates to redeem commission for selling tickets to this event. These offers will not be available to the general public and will be limited to the affiliates you select.",
      btnName: "Create Affiliate Offer",
      icon: <PeopleIcon />,
      link: "/",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0% 4%",
        }}
      >
        <Box sx={{ marginTop: "2%" }}>
          <Box>
            <Typography sx={{ fontSize: "18px", margin: "5px 0px" }}>
              tj — Kickback
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "20px" }}>Ended </Typography>
            <Typography sx={{ marginLeft: "10px", color: orange }}>
              -- 9 days ago
            </Typography>
            {/* <RefreshIcon sx={{marginLeft:'10px'}}/> */}
          </Box>
        </Box>
        {/* <Divider sx={{marginTop:'2%'}}></Divider> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "3% 0%",
            position: "relative",
          }}
        >
          <Box sx={{ width: { md: "60%", xs: "100%" } }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              What Are Kickbacks?
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "3% 0 0 0" }}>
              Kickbacks allow attendees and affiliates to receive a commission
              on tickets they sell. After purchasing their own ticket, an
              attendee will be prompted to create an affiliate link.
            </Typography>
          </Box>

          <SettingsIcon
            sx={{ position: "absolute", right: "0", top: "-10%" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            margin: "4% 0%",
          }}
        >
          {offer.map((item) => {
            return (
              <Box key={item.title} sx={{ width: { md: "48%", xs: "100%" } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    marginTop: { md: "0", xs: "35px" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "16px", margin: "3% 0 0 0" }}>
                  {item.description}
                </Typography>
                <Button
                  startIcon={item.icon}
                  sx={{
                    background: orange,
                    marginTop: "10px",
                    paddingInline: "20px",
                  }}
                >
                  {item.btnName}
                </Button>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: { md: "nowrap", xs: "wrap" },
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5% 0% 0 0",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                margin: { md: "0", xs: "25px 0px -5px" },
              }}
            >
              Affiliates
            </Typography>
          </Box>
          <Box>
            <Button
              startIcon={<PersonAddIcon />}
              sx={{
                background: orange,
                marginTop: "10px",
                paddingInline: "20px",
              }}
            >
              Add Affiliate
            </Button>
          </Box>
        </Box>
        <Typography
          sx={{
            color: orange,
            margin: { md: "1% 0% 0 0", xs: "25px 0px -5px" },
          }}
        >
          {`You don't have any affiliates yet.`}
        </Typography>

        <Box sx={{ marginTop: "3%" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Recent Kickbacks
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default page;
