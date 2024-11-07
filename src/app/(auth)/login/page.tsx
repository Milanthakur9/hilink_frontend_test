"use client";

import { Box } from "@mui/material";
import loginPageCover from "../../../assets/background_patterns/halftone-texture-background-5.png";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/branding/HL_Clean_Transparent.png";
import Link from "next/link";
// import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import LoginForm from "./loginForm";

const Item = styled(Paper)(({}) => ({
  textAlign: "center",
  borderRadius: 0,
  boxShadow: "none",
  height: "100%",
  p: 5,
  // background: theme.customColors.primaryDark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${loginPageCover.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${loginPageCover.src}),url(${loginPageCover.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${loginPageCover.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundBlendMode: "overlay",

  "& >  img": {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
    opacity: 0.8,
  },
}));

const BottomLinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.customColors?.primaryWhite,
  display: "table",
  fontSize: "11px",
  margin: "auto",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const LoginBoxStyled = styled(Box)(({ theme }) => ({
  width: theme.breakpoints.down("md") ? "100%" : "45%",
  maxWidth: "550px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.7)",
  backgroundBlendMode: "overlay",
  border: `2px solid ${theme.palette.primary.main}`,
  zIndex: "2",
  boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
  "& >  img": {
    width: "130px",
    height: "40px",
  },
}));

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Item>
        {/* <Image alt="background-image" src={loginPageCover} /> */}
        <LoginBoxStyled
          sx={{
            p: 8,
            "& >  img": {
              mb: 8,
            },
          }}
        >
          <Image alt="logo" src={logo} />
          <LoginForm />
        </LoginBoxStyled>
        <Box
          sx={{
            position: "absolute",
            zIndex: 3,
            bottom: 10,
            display: "flex",
            gap: 1,
          }}
        >
          <BottomLinkStyled href={"/"}>HILINK </BottomLinkStyled>
          <BottomLinkStyled href={"/"}>TERMS </BottomLinkStyled>
          <BottomLinkStyled href={"/"}>PRIVACY</BottomLinkStyled>
        </Box>
      </Item>
    </Box>
  );
};

export default LoginPage;
