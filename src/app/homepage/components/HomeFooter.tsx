import React from "react";
import { Box, Typography, Grid, Link, IconButton,useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Svlogo from "../../../assets/branding/HL_Clean_Transparent_white.svg";
import Image from "next/image";


const Footer: React.FC = () => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        width:'90%',
        margin:'0 auto',
        bgcolor: theme.palette.customColors.primaryDark1,
        color: "white",
        p: 6,
        px: { xs: 2, md: 6 },
        fontFamily: "Arial, sans-serif",
        borderRadius:'20px',
        boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={3}>
        <Image src={Svlogo} height="40" alt="hilink logo" />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Find your world.
          </Typography>
          {/* App Links */}
          {/* <Box display="flex" gap={1}>
            <Link href="#" underline="none">
              <Box
                component="img"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                sx={{ width: 120, height: "auto" }}
              />
            </Link>
            <Link href="#" underline="none">
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                sx={{ width: 120, height: 'auto', padding:'0px 0' }}
              />
            </Link>
          </Box> */}
        </Grid>

        {/* HILINK Links */}

        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            HILINK
          </Typography>
          {["About", "Careers", "Blog", "HILINK TV"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 1 }}>
              <Link href="#" color="inherit" underline="none">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>
        {/* RESOURCES Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            RESOURCES
          </Typography>
          {[
            "Support",
            "Request A Demo",
            "FAQ",
            "Tutorials",
            "Newsletter",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 1 }}>
              <Link href="#" color="inherit" underline="none">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Divider */}
      <Box sx={{ mt: 4, borderTop: "1px solid gray", opacity: 0.3 }} />

      {/* Bottom Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"

        sx={{ mt: 3,flexDirection:{md:'row',xs:'column'} }}
      >
        <Typography variant="body2">
          ©2024 HILINK Group Inc.{" "}
          <Link href="#" color="inherit" underline="none">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" color="inherit" underline="none">
            Terms of Service
          </Link>
        </Typography>

        {/* Social Icons */}
        <Box>
          <IconButton href="#" sx={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
