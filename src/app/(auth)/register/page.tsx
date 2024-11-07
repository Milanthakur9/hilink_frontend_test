"use client";

import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import registerPageCover from "../../../assets/background_patterns/halftone-texture-background-1.png";
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
import CustomTextFieldPassword from "@/components/textField/CustomTextFieldPassword";
import { useState } from "react";
import Icon from "@/@core/components/icon";
import Button from "@mui/material/Button";

const SlideImageStyled = styled(Image)(({}) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
}));

const Item = styled(Paper)(({}) => ({
  textAlign: "center",
  borderRadius: 0,
  boxShadow: "none",
  height: "100%",
}));

const TypographyColorStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

// const items = [
//   {
//     name: "Random Name #1",
//     description: "Probably the most random thing you have ever seen!",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//   },
// ];

const slideImages = [
  {
    src: "registerPageCover",
  },
  {
    src: "registerPageCover",
  },
  {
    src: "registerPageCover",
  },
];

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
  confirmPassword: yup
    .string()
    .min(8, "Password must be 8 character long")
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Please enter confirm password"),
});

const defaultValues: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [isTermsAndConditionAccepted, setIsTermsAndConditionAccepted] =
    useState<boolean>(false);
  const [
    isTermsAndConditionAcceptedError,
    setIsTermsAndConditionAcceptedError,
  ] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleTermsAndConditionClick = () => {
    setIsTermsAndConditionAccepted((prev) => !prev);
  };

  const onSubmit = async (data: FormData) => {
    if (!isTermsAndConditionAccepted) {
      setIsTermsAndConditionAcceptedError(true);
      // toast.error("Please Accept Terms And Condition");

      return;
    }

    // const { confirmPassword, email, firstName, lastName, password } = data;

    return data;

    console.log(data);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Grid sx={{ height: "100%" }} container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item
            sx={{
              p: 3,
              background: "#151618",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...(isMdDown
                ? {
                    flexDirection: "column",
                    gap: 1,
                  }
                : {
                    flexDirection: "row",
                  }),
              "& > a > img": {
                width: "85px",
                height: "27px",
                ...(isMdDown
                  ? {
                      position: "relative",
                      left: "unset",
                      top: "unset",
                    }
                  : {
                      position: "absolute",
                      left: 20,
                      top: 20,
                    }),
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
                    src={registerPageCover}
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
              background: theme.palette.customColors?.primaryDark1,
              pt: { xs: 5, md: 0 },
              "&>img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
                opacity: 0.7,
              },
            }}
          >
            <Image alt="background-cover" src={registerPageCover} />

            <Box sx={{ zIndex: 10, width: "70%" }}>
              <TypographyColorStyled
                variant="h2"
                sx={{
                  fontWeight: 400,
                  fontSize: "2rem",
                  color: `${theme.palette.customColors?.primaryWhite}`,
                  marginBottom: 2.5,
                }}
              >
                Welcome to the club.
              </TypographyColorStyled>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomTextFieldForRhf
                      control={control}
                      errors={errors}
                      label="first name"
                      placeHolder="First Name"
                      name="firstName"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CustomTextFieldForRhf
                      control={control}
                      errors={errors}
                      label="last name"
                      placeHolder="Last Name"
                      name="lastName"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <CustomTextFieldForRhf
                      control={control}
                      errors={errors}
                      label="Email"
                      placeHolder="Email"
                      name="email"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <CustomTextFieldPassword
                      control={control}
                      errors={errors}
                      label=""
                      placeHolder="Password"
                      name="password"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <CustomTextFieldPassword
                      control={control}
                      errors={errors}
                      label=""
                      placeHolder="Confirm Password"
                      name="confirmPassword"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }} sx={{ textAlign: "left" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onClick={handleTermsAndConditionClick}
                          checked={isTermsAndConditionAccepted}
                          icon={
                            <Icon fontSize="1.2rem" icon={"tabler:square"} />
                          }
                          checkedIcon={
                            <Icon fontSize="1.2rem" icon={"tabler:check"} />
                          }
                          sx={{
                            color: "primary.main",
                            background: "transparent",
                            margin: 0,
                            "& > svg": {
                              background: theme.palette.primary.main,
                              fontSize: "17px",
                              borderRadius: "4px",
                              ...(isTermsAndConditionAccepted
                                ? {
                                    color:
                                      theme.palette.customColors?.primaryWhite,
                                  }
                                : {}),
                            },
                          }}
                        />
                      }
                      sx={{
                        ml: 0.2,
                      }}
                      label={
                        <Box
                          component="div"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            color: theme.palette.customColors?.primaryWhite,
                            fontFamily: "var(--font-DroidSans-Bold)",
                            fontWeight: "700",
                            "& > span": {
                              fontSize: "0.7rem",
                            },
                            "&>a": {
                              textDecoration: "none",
                              fontSize: "0.7rem",
                              color: theme.palette.primary.main,
                              mx: 0.4,
                            },
                          }}
                        >
                          <Typography component={"span"}>
                            I have read and agree to the
                          </Typography>
                          <Link href="/">Terms Of Service</Link>
                          <Typography component={"span"}>and</Typography>
                          <Link href="/">Privacy Policy</Link>
                        </Box>
                      }
                    />
                    {isTermsAndConditionAcceptedError && (
                      <Typography variant="body2" mt={-5} mb={4} color="error">
                        Please Accept Terms And Condition
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    // disabled={true}
                    sx={{
                      borderRadius: 4,
                      px: 5,
                      py: 2,
                      color: theme.palette.customColors?.primaryWhite,
                      fontFamily: "var(--font-DroidSans-Bold)",
                      fontSize: "14px",
                      my: 4,
                    }}
                  >
                    submit.
                    {/* {loading ? <CustomCircularProgressForButton /> : "Login"} */}
                  </Button>
                </Grid>

                {/* <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography sx={{ color: theme.palette.customColors?.primaryWhite, mr: 2 }}>
                    Already have an account?
                  </Typography>
                  <LinkWithUnderline
                    link="/login"
                    linkTitle="Sign in instead"
                  />
                </Box> */}
              </form>
              <Box></Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;
