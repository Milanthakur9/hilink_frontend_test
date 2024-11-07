"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import otpVerificationCover from "../../../assets/background_patterns/halftone-texture-background-8.png";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import { styled, useTheme } from "@mui/material/styles";
import logo from "../../../assets/branding/HL_Clean_Transparent.svg";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({}) => ({
  textAlign: "center",
  borderRadius: 0,
  height: "100%",
}));

const TypographyColorStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const OtpVerificationPage = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [otp, setOtp] = useState<string>("");

  const handleOtpChange = (newValue: string) => {
    setOtp(newValue);
  };

  const handleOtpSubmit = async () => {};

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Item
        sx={{
          p: 5,
          background: theme.palette.customColors?.primaryDark1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& >  img": {
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "1",
            opacity: 0.7,
          },
          "& .MuiOtpInput-Box": {
            ...(isSmDown ? { gap: "5px !important" } : {}),
          },
          "& .MuiInputBase-root": {
            "& > input": {
              border: `2px solid ${theme.palette.primary.main}`,
              background: theme.palette.customColors?.primaryDark2,
              color: theme.palette.customColors?.primaryWhite,
              maxWidth: 25,
              borderRadius: 0,
              ...(isSmDown
                ? { width: "10px", height: "25px", padding: "8px" }
                : { height: 35, padding: "10px" }),
              "&:focus .MuiInputBase-root": {
                border: "none",
                outline: "none",
                borderRadius: 0,
              },
            },
          },
        }}
      >
        <Image alt="background-image" src={otpVerificationCover} />
        <Box
          sx={{
            // width: "50%",
            ...(isMdDown
              ? { width: "100%" }
              : { width: "45%", maxWidth: "600px" }),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.83
            )}`,
            border: `2px solid ${theme.palette.primary.main}`,
            zIndex: "2",
            p: 8,
            // boxShadow: `1px 1px 10px ${theme.palette.customColors.primaryDark1}`,
            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            "& >  img": {
              width: "95px",
              height: "30px",
            },
          }}
        >
          <Image alt="logo" src={logo} />

          <TypographyColorStyled variant="body2">
            Enter the six digit verification code sent to @gmail.com to login to
            your account
          </TypographyColorStyled>
          <MuiOtpInput
            value={otp}
            onChange={handleOtpChange}
            length={6}
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            // disabled={true}
            onClick={handleOtpSubmit}
            sx={{
              borderRadius: 4,
              px: 5,
              py: 2,
              mt: 2,
              color: theme.palette.customColors?.primaryWhite,
              fontFamily: "var(--font-DroidSans-Bold)",
              fontSize: "14px",
            }}
          >
            submit.
            {/* {loading ? <CustomCircularProgressForButton /> : "Login"} */}
          </Button>
        </Box>
      </Item>
    </Box>
  );
};

export default OtpVerificationPage;
