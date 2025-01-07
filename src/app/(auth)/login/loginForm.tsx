// "use client";
// import Grid from "@mui/material/Grid2";
// import { styled } from "@mui/material/styles";
// import Link from "next/link";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import CustomTextFieldForRhf from "@/components/textField/CustomTextFieldForRhf";
// import CustomTextFieldPassword from "@/components/textField/CustomTextFieldPassword";
// import Button from "@mui/material/Button";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const LinkStyled = styled(Link)(({ theme }) => ({
//   color: theme.palette.customColors?.primaryWhite,
//   display: "table",
//   fontSize: "11px",
//   margin: "auto",
//   "&:hover": {
//     color: theme.palette.primary.main,
//   },
// }));

// const schema = yup.object().shape({
//   email: yup.string().email().required("Please enter your email"),
//   password: yup.string().required("Please enter your password"),
// });

// const defaultValues: FormData = {
//   email: "",
//   password: "",
// };

// interface FormData {
//   email: string;
//   password: string;
// }

// const LoginForm = () => {
//   // const theme = useTheme();
//   var router = useRouter();
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues,
//     mode: "onBlur",
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: FormData) => {
//     // const { email, password } = data;
//     try {
//       // console.log("Submitting login data:", data);

//       const response = await axios.post("http://localhost:3333/v1/auth/login", {
//         email: data.email,
//         password: data.password,
//       });

//       console.log("Login successful:", response.data);

//       // Example: Save token to localStorage or handle successful login
//       if (response.data?.token) {
//         localStorage.setItem("authToken", response.data.token); // Save token
//         alert("Login successful!");
//         // Redirect or perform other actions
//       }
//       router.push(`/`);
//     } catch (error) {
//       console.error("Login failed:", error);

//       if (axios.isAxiosError(error)) {
//         // Display server error message if available
//         alert(
//           error.response?.data?.message || "An error occurred during login."
//         );
//       } else {
//         alert("An unexpected error occurred. Please try again.");
//       }
//     }
//     console.log(data);
//   };

//   return (
//     <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
//       <Grid container spacing={4} sx={{ maxWidth: "400px" }}>
//         <Grid size={{ xs: 12 }}>
//           <CustomTextFieldForRhf
//             control={control}
//             errors={errors}
//             label="Email"
//             placeHolder="Username/E-mail"
//             name="email"
//           />
//         </Grid>
//         <Grid size={{ xs: 12 }}>
//           <CustomTextFieldPassword
//             control={control}
//             errors={errors}
//             label=""
//             placeHolder="Password"
//             name="password"
//           />
//         </Grid>
//         <Grid size={12}>
//           <Button
//             type="submit"
//             variant="contained"
//             // disabled={true}
//             sx={{
//               borderRadius: 6,
//               px: 6,
//               py: 2,
//               // color: theme.palette.customColors?.primaryWhite,
//               fontFamily: "var(--font-DroidSans-Bold)",
//               fontSize: "13px",
//             }}
//           >
//             LOGIN
//             {/* {loading ? <CustomCircularProgressForButton /> : "Login"} */}
//           </Button>
//         </Grid>
//         <Grid size={12}>
//           <LinkStyled href={"/forget-password"}>FORGET PASSWORD ?</LinkStyled>
//           <LinkStyled href={"/register"} sx={{ mt: 1 }}>
//             REGISTER NOW!
//           </LinkStyled>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default LoginForm;

// try 2

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
import { useAuth } from "@/context/AuthContext";

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
  const { login } = useAuth();

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
    try {
      await login(data.email, data.password);
      alert("Login successful!");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Login failed.");
    }
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
            sx={{
              borderRadius: 6,
              px: 6,
              py: 2,
              fontFamily: "var(--font-DroidSans-Bold)",
              fontSize: "13px",
            }}
          >
            LOGIN
          </Button>
        </Grid>
        <Grid size={12}>
          <LinkStyled href={"/forget-password"}>FORGET PASSWORD ?</LinkStyled>
          <LinkStyled href={"/register"} sx={{ mt: 1 }}>
            REGISTER NOW!
          </LinkStyled>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
