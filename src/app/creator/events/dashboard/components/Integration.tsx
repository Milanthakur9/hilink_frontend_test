import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MailchimpLogo from "../../../../../../mailchimp-logo.webp";
import AudianceLogo from "../../../../../../audiance-republic.webp";

function Integrations() {
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
        >
          Integrations
        </Typography>
        <Typography sx={{ color: "#fff", margin: "2% 0%", fontSize: "18px" }}>
          Connect other applications with Posh to superpower your organization.
        </Typography>
        {/* MailChimp & Audience box start    */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: { md: "40%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid #ff914d",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Image
              src={MailchimpLogo}
              alt="mailchimp-logo"
              height={50}
              width={50}
              style={{ borderRadius: "10px" }}
            ></Image>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "2%",
                }}
              >
                MailChimp
              </Typography>
              <Typography sx={{ color: "#fff", margin: "3% 0%" }}>
                Email blast your attendees
              </Typography>
              <Button
                sx={{
                  border: "1px solid #ff914d",
                  background: "#202524",
                  width: "100%",
                  borderRadius: "5px",
                  color: "#ff914d",
                }}
                endIcon={<KeyboardArrowRightIcon />}
              >
                Connect
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "40%", xs: "100%" },
              border: "1px solid #ff914d",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Image
              src={AudianceLogo}
              alt="mailchimp-logo"
              height={50}
              width={50}
              style={{ borderRadius: "10px" }}
            ></Image>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "2%",
                }}
              >
                Audience Republic
              </Typography>
              <Typography sx={{ color: "#fff", margin: "3% 0%" }}>
                Expand your marketing arsenal
              </Typography>
              <Button
                sx={{
                  border: "1px solid #ff914d",
                  background: "#202524",
                  width: "100%",
                  borderRadius: "5px",
                  color: "#ff914d",
                }}
              >
                Coming Soon
              </Button>
            </Box>
          </Box>
        </Box>
        {/* MailChimp & Audience box end */}
      </Box>
    </>
  );
}

export default Integrations;
