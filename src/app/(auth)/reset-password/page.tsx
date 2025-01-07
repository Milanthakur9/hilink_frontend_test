"use client";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomTextFieldForRhf from "@/components/textField/CustomTextFieldForRhf";
import CustomTextFieldPassword from "@/components/textField/CustomTextFieldPassword";
import Button from "@mui/material/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Box, Typography, useTheme } from "@mui/material";
import ForgetBg from "../../../../hmbg.png";
import { Email } from "@mui/icons-material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.customColors?.primaryWhite,
  display: "table",
  fontSize: "11px",
  margin: "auto",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const schema = yup.object().shape({
  password: yup.string().required("Please enter your password"),
  otp: yup.string().required(),
});

const defaultValues: FormData = {
  password: "",
  otp: "",
};

interface FormData {
  otp: string;
  password: string;
}

const ResetPasswordForm = () => {
  // const theme = useTheme();
  var router = useRouter();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const { otp, password } = data;
    const email = localStorage.getItem("ForgetPassword");
    try {
      // console.log("Submitting login data:", data);

      const response = await axios.post(
        "http://localhost:3333/v1/auth/reset-password",
        {
          otp,
          newPassword: password,
          email,
        }
      );

      console.log("Reset Password successful:", response.data);
      localStorage.removeItem("ForgetPassword");

      // Example: Save token to localStorage or handle successful login
      if (response.data?.token) {
        localStorage.setItem("authToken", response.data.token); // Save token
        alert("Reset Password successful!");
        // Redirect or perform other actions
      }
      router.push(`/`);
    } catch (error) {
      console.error("Reset Password failed:", error);
      if (axios.isAxiosError(error)) {
        // Display server error message if available
        alert(
          error.response?.data?.message || "An error occurred during login."
        );
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${ForgetBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "500px",
          padding: "20px",
          background: hexToRGBA(
            `${theme.palette.customColors.primaryDark1}`,
            0.9
          ),
          border: `2px solid ${theme.palette.customColors.orange}`,
        }}
      >
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} sx={{ maxWidth: "500px" }}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h4">Reset Password</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CustomTextFieldPassword
                control={control}
                errors={errors}
                label=""
                placeHolder="Reset Password"
                name="password"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CustomTextFieldForRhf
                control={control}
                errors={errors}
                label="OTP"
                placeHolder="OTP"
                name="otp"
              />
            </Grid>
            <Grid size={12}>
              <Button
                type="submit"
                variant="contained"
                // disabled={true}
                sx={{
                  borderRadius: 6,
                  px: 6,
                  py: 2,
                  // color: theme.palette.customColors?.primaryWhite,
                  fontFamily: "var(--font-DroidSans-Bold)",
                  fontSize: "13px",
                }}
              >
                Reset Password
                {/* {loading ? <CustomCircularProgressForButton /> : "Login"} */}
              </Button>
            </Grid>
            {/* <Grid size={12}>
              <LinkStyled href={"/"}>NEED HELP SIGNING UP?</LinkStyled>
              <LinkStyled href={"/register"} sx={{ mt: 1 }}>
                REGISTER NOW!
              </LinkStyled>
            </Grid> */}
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
