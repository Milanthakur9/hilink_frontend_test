"use client";

import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { DEFAULT_LOW_OPACITY } from "@/lib/constants";
import { Container, SxProps, Theme } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

interface FooterContainerProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const FooterStyled = styled(Container)(({ theme }) => ({
  borderTop: `1px solid ${hexToRGBA(
    theme.palette.customColors.primaryWhite,
    DEFAULT_LOW_OPACITY
  )}`,
}));

const FooterContainer = ({ children, sx }: FooterContainerProps) => {
  return (
    <FooterStyled maxWidth="xl" sx={{ ...sx }}>
      {children}
    </FooterStyled>
  );
};

export default FooterContainer;
