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
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

const defaultValues: FormData = {
  email: "",
  password: "",
};

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  // const theme = useTheme();

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
    // const { email, password } = data;
    console.log(data);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} sx={{ maxWidth: "400px" }}>
        <Grid size={{ xs: 12 }}>
          <CustomTextFieldForRhf
            control={control}
            errors={errors}
            label="Email"
            placeHolder="Username/E-mail"
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
            LOGIN
            {/* {loading ? <CustomCircularProgressForButton /> : "Login"} */}
          </Button>
        </Grid>
        <Grid size={12}>
          <LinkStyled href={"/"}>NEED HELP SIGNING UP?</LinkStyled>
          <LinkStyled href={"/register"} sx={{ mt: 1 }}>
            REGISTER NOW!
          </LinkStyled>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
