"use client";

import { Box, Button, Typography } from "@mui/material";
import loginPageCover from "../../../assets/background_patterns/halftone-texture-background-1.png";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled, useTheme } from "@mui/material/styles";
import logo from "../../../assets/branding/HL_Clean_Transparent.svg";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomTextFieldForRhf from "@/components/textField/CustomTextFieldForRhf";

const SlideImageStyled = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
}));

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  borderRadius: 0,
  boxShadow: "none",
  height: "100%",
}));

const TypographyColorStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

const slideImages = [
  {
    src: "loginPageCover",
  },
  {
    src: "loginPageCover",
  },
  {
    src: "loginPageCover",
  },
];

const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

const defaultValues = {
  password: "",
  email: "",
};

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const theme = useTheme();
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const {} = data;
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          background: "primary.main",
          "&>img": {
            objectFit: "cover",
            height: "100%",
            width: "100%",
          },
        }}
      >
        <Image alt="background-cover" src={loginPageCover} />
      </Box> */}
      <Grid sx={{ height: "100%" }} container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item
            sx={{
              background: "#151618",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& > a > img": {
                width: "85px",
                height: "27px",
                position: "absolute",
                left: 20,
                top: 20,
              },
            }}
          >
            <Link href={"/"}>
              <Image alt="logo" src={logo} />
            </Link>
            <Box
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Carousel
                autoPlay={true}
                interval={5000}
                height={"300px"}
                sx={{
                  width: "100%",
                  border: "2px solid",
                  borderColor: "primary.main",
                }}
                indicators={false}
              >
                {slideImages.map((img, i) => (
                  <SlideImageStyled
                    key={i}
                    alt="background-cover"
                    src={loginPageCover}
                  />
                ))}
              </Carousel>
              <TypographyColorStyled variant="body2">
                Find events near you.
              </TypographyColorStyled>
              <TypographyColorStyled variant="body2">
                Make new friends.
              </TypographyColorStyled>
              <TypographyColorStyled variant="body2">
                Create unforgettable experiences.
              </TypographyColorStyled>
            </Box>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "#151618",
              "&>img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
              },
            }}
          >
            <Image alt="background-cover" src={loginPageCover} />
            <Box sx={{ zIndex: 10 }}>
              <TypographyColorStyled
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.9rem",
                  color: `${theme.customColors.white}`,
                }}
              >
                Welcome to the club.
              </TypographyColorStyled>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Box sx={{ mb: 4 }}>
                  <CustomTextFieldForRhf
                    control={control}
                    errors={errors}
                    label="Email"
                    placeHolder="Enter Email"
                    name="email"
                  />
                </Box>
                <Box component="div" sx={{ mb: 1.5 }}>
                  {/* <CustomTextFieldPassword
                    name="password"
                    control={control}
                    errors={errors}
                  /> */}
                </Box>
                <Box
                  component="div"
                  sx={{
                    mb: 1.75,
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* <FormControlLabel
                    label="Remember Me"
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                    }
                  />
                  <LinkWithUnderline
                    link="/forgot-password"
                    linkTitle="Forgot Password?"
                  /> */}
                </Box>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mb: 4 }}
                  //   disabled={loading}
                >
                  create
                  {/* {loading ? <CustomCircularProgressForButton /> : "Login"} */}
                </Button>
                {/* <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ color: "text.secondary", mr: 2 }}>
                    New on our platform?
                  </Typography>
                  <LinkWithUnderline
                    link="/register-new"
                    linkTitle="Create an account"
                  />
                </Box> */}
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography sx={{ color: "text.secondary", mr: 2 }}>
                    Account not verified?
                  </Typography>
                  {/* <LinkWithUnderline link="/request-otp" linkTitle="Verify" /> */}
                </Box>
              </form>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
