import { Box, Button } from "@mui/material";
import React from "react";
import LogoWithLink from "../logo/LogoWithLink";
import CustomLink from "../links/CustomLink";
import FooterContainer from "./FooterContainer";
import { DEFAULT_LOW_OPACITY } from "@/lib/constants";

interface EventInfoFooterProps {
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const EventInfoFooter = ({
  buttonBgColor,
  buttonTextColor,
}: EventInfoFooterProps) => {
  return (
    <footer>
      <FooterContainer
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          gap: 4,
          px: 2,
          py: 6,
          "& img": { opacity: DEFAULT_LOW_OPACITY, "&:hover": { opacity: 1 } },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <LogoWithLink logoColor="white" />
          <CustomLink link="/terms" linkTitle="TERMS OF SERVICE" />
          <CustomLink link="/privacyPolicy" linkTitle="Create Your Own Event" />
        </Box>
        <Button
          sx={{
            background: buttonBgColor ? buttonBgColor : "",
            color: buttonTextColor ? buttonTextColor : "",
          }}
          variant="contained"
        >
          Create Your Own Event{" "}
        </Button>
      </FooterContainer>
    </footer>
  );
};

export default EventInfoFooter;
