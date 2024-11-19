"use client";
import Link from "next/link";
import React from "react";
import { styled } from "@mui/material/styles";

interface CustomLinkProps {
  linkTextColor?: string;
  link: string;
  linkTitle: string;
}

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.customColors.primaryWhite} !important`,
  opacity: 0.5,
  "&:hover": {
    opacity: 1,
  },
}));

const CustomLink = ({ linkTextColor, link, linkTitle }: CustomLinkProps) => {
  return (
    <LinkStyled sx={{ color: linkTextColor ? linkTextColor : "" }} href={link}>
      {linkTitle}
    </LinkStyled>
  );
};

export default CustomLink;
