// // Import necessary libraries
// "use client";
// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   Button,
//   Box,
//   Divider,
//   Typography,
//   TextField,
//   useTheme,
//   styled,
// } from "@mui/material";
// import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
// import { useRouter } from "next/navigation";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

// // Validation schema using yup
// const validationSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   phone: yup
//     .string()
//     .matches(/^\d+$/, "Phone number must be numeric")
//     .required("Phone number is required"),
//   currentPassword: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Current password is required"),
//   newPassword: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("New password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("newPassword"), ""], "Passwords must match")
//     .required("Please confirm your new password"),
// });

// interface AccountSettingDataType {
//   email: string;
//   phone: string;
//   currentPassword: string;
//   newPassword: string;
//   confirmPassword: string;
// }

// function Page() {
//   const router = useRouter();
//   const theme = useTheme();
//   const white = theme.palette.customColors.primaryWhite;
//   const orangeColor = theme.palette.customColors.orange;

//   // React Hook Form setup
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       email: "",
//       phone: "",
//       currentPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = (data: AccountSettingDataType) => {
//     console.log("Form Data:", data);
//     alert("Form submitted successfully!");
//   };

//   return (
//     <Box>
//       <Box sx={{ width: "80%", margin: "0 auto 2%" }}>
//         <Box sx={{ display: "flex", alignItems: "center", margin: "2% 0%" }}>
//           <ArrowCircleLeftIcon
//             onClick={() => router.back()}
//             sx={{
//               fontSize: "50px",
//               color: orangeColor,
//               marginRight: "20px",
//               "&:hover": { cursor: "pointer" },
//             }}
//           />
//           <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
//             Account Settings
//           </Typography>
//         </Box>

//         <Box sx={{ marginTop: "3%" }}>
//           <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
//             General Settings
//           </Typography>
//           <Divider
//             sx={{
//               margin: "1% 0%",
//               background: `${hexToRGBA(
//                 theme.palette.customColors.orange,
//                 0.4
//               )}`,
//             }}
//           ></Divider>
//         </Box>

//         {/* Email */}
//         <Box>
//           <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
//             Email
//           </Typography>
//           <Box
//             sx={{
//               width: { md: "50%", xs: "100%" },
//               margin: "1% 0%",
//             }}
//           >
//             <Controller
//               name="email"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   placeholder="Enter your email"
//                   variant="outlined"
//                   size="small"
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                   sx={{
//                     // p: 2,
//                     // border: "1px solid red",
//                     background: "transparent",
//                     boxShadow: `0 8px 32px 0 ${hexToRGBA(
//                       theme.palette.customColors.orange,
//                       0.12
//                     )}`,
//                     backdropFilter: "blur(4px)",
//                     width: "100%",
//                     "& .MuiOutlinedInput-root": {
//                       background: `${hexToRGBA(
//                         theme.palette.customColors.orange,
//                         0.1
//                       )}`,
//                       color: theme.palette.customColors.orange,
//                       borderRadius: "30px",
//                       fontFamily: "Arial",
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: theme.palette.customColors.orange,
//                       },
//                     },
//                   }}
//                 />
//               )}
//             />
//           </Box>
//         </Box>

//         {/* Phone */}
//         <Box>
//           <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
//             Phone
//           </Typography>
//           <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
//             <Controller
//               name="phone"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   placeholder="Enter your phone number"
//                   variant="outlined"
//                   size="small"
//                   error={!!errors.phone}
//                   helperText={errors.phone?.message}
//                   sx={{
//                     boxShadow: `0 8px 32px 0 ${hexToRGBA(
//                       theme.palette.customColors.orange,
//                       0.12
//                     )}`,
//                     backdropFilter: "blur(4px)",
//                     width: "100%",
//                     "& .MuiOutlinedInput-root": {
//                       background: `${hexToRGBA(
//                         theme.palette.customColors.orange,
//                         0.1
//                       )}`,
//                       color: theme.palette.customColors.orange,
//                       borderRadius: "30px",
//                       fontFamily: "Arial",
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: theme.palette.customColors.orange,
//                       },
//                     },
//                   }}
//                 />
//               )}
//             />
//           </Box>
//         </Box>
//         <Box sx={{ marginTop: "3%" }}>
//           <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
//             Privacy Settings{" "}
//           </Typography>
//           <Divider
//             sx={{
//               margin: "1% 0%",
//               background: `${hexToRGBA(
//                 theme.palette.customColors.orange,
//                 0.4
//               )}`,
//             }}
//           ></Divider>
//         </Box>
//         {/* Current Password */}
//         <Box>
//           <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
//             Current Password
//           </Typography>
//           <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
//             <Controller
//               name="currentPassword"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   type="password"
//                   placeholder="Enter current password"
//                   variant="outlined"
//                   size="small"
//                   error={!!errors.currentPassword}
//                   helperText={errors.currentPassword?.message}
//                   sx={{
//                     boxShadow: `0 8px 32px 0 ${hexToRGBA(
//                       theme.palette.customColors.orange,
//                       0.12
//                     )}`,
//                     backdropFilter: "blur(4px)",
//                     width: "100%",
//                     "& .MuiOutlinedInput-root": {
//                       background: `${hexToRGBA(
//                         theme.palette.customColors.orange,
//                         0.1
//                       )}`,
//                       color: theme.palette.customColors.orange,
//                       borderRadius: "30px",
//                       fontFamily: "Arial",
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: theme.palette.customColors.orange,
//                       },
//                     },
//                   }}
//                 />
//               )}
//             />
//           </Box>
//         </Box>

//         {/* New Password */}
//         <Box>
//           <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
//             New Password
//           </Typography>
//           <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
//             <Controller
//               name="newPassword"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   type="password"
//                   placeholder="Enter new password"
//                   variant="outlined"
//                   size="small"
//                   error={!!errors.newPassword}
//                   helperText={errors.newPassword?.message}
//                   sx={{
//                     boxShadow: `0 8px 32px 0 ${hexToRGBA(
//                       theme.palette.customColors.orange,
//                       0.12
//                     )}`,
//                     backdropFilter: "blur(4px)",
//                     width: "100%",
//                     "& .MuiOutlinedInput-root": {
//                       background: `${hexToRGBA(
//                         theme.palette.customColors.orange,
//                         0.1
//                       )}`,
//                       color: theme.palette.customColors.orange,
//                       borderRadius: "30px",
//                       fontFamily: "Arial",
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: theme.palette.customColors.orange,
//                       },
//                     },
//                   }}
//                 />
//               )}
//             />
//           </Box>
//         </Box>

//         {/* Confirm Password */}
//         <Box>
//           <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
//             Confirm New Password
//           </Typography>
//           <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
//             <Controller
//               name="confirmPassword"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   type="password"
//                   placeholder="Confirm new password"
//                   variant="outlined"
//                   size="small"
//                   error={!!errors.confirmPassword}
//                   helperText={errors.confirmPassword?.message}
//                   sx={{
//                     boxShadow: `0 8px 32px 0 ${hexToRGBA(
//                       theme.palette.customColors.orange,
//                       0.12
//                     )}`,
//                     backdropFilter: "blur(4px)",
//                     width: "100%",
//                     "& .MuiOutlinedInput-root": {
//                       background: `${hexToRGBA(
//                         theme.palette.customColors.orange,
//                         0.1
//                       )}`,
//                       color: theme.palette.customColors.orange,
//                       borderRadius: "30px",
//                       fontFamily: "Arial",
//                       "& .MuiOutlinedInput-notchedOutline": {
//                         borderColor: theme.palette.customColors.orange,
//                       },
//                     },
//                   }}
//                 />
//               )}
//             />
//           </Box>
//         </Box>

//         <Button
//           onClick={handleSubmit(onSubmit)}
//           sx={{
//             color: white,
//             background: orangeColor,
//             borderRadius: "6px",
//             marginTop: "25px",
//           }}
//         >
//           Save Changes
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default Page;

"use client";
import React from "react";
import {
  Button,
  Box,
  Divider,
  Typography,
  TextField,
  useTheme,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import axios from "axios";

// Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3333/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// phone number
const updatePhoneNumber = async (phoneNo: string) => {
  try {
    const response = await axiosInstance.put("/account/change-phoneNo", {
      phoneNo,
    });
    console.log("Phone number updated successfully:", response.data);
    alert("Phone number updated successfully!");
  } catch (error) {
    console.error(
      "Error updating phone number:"
      // error.response?.data || error.message
    );
    alert(
      // error.response?.data?.message ||
      "Failed to update phone number. Please try again."
    );
  }
};

// Form submission handler
const onPhoneSubmit = (data: { phone: string }) => {
  console.log("Submitting phone number:", data);
  updatePhoneNumber(data.phone);
};

// password
// API call to update the password
const updatePassword = async (data: {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}) => {
  try {
    const response = await axiosInstance.put("/account/change-password", {
      oldPassword: data.currentPassword,
      newPassword: data.newPassword,
      confirmNewPassword: data.confirmNewPassword,
    });
    console.log("Password updated successfully:", response.data);
    alert("Password updated successfully!");
  } catch (error) {
    console.error(
      "Error updating password:"
      // error.response?.data || error.message
    );
    alert(
      // error.response?.data?.message ||
      "Failed to update password. Please try again."
    );
  }
};

// Form submission handler for password
const onPasswordSubmit = (data: {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}) => {
  console.log("Submitting password data:", data);
  updatePassword(data);
};
// password

// Validation schemas
const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

const passwordSchema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

function Page() {
  const router = useRouter();
  const theme = useTheme();
  const white = theme.palette.customColors.primaryWhite;
  const orangeColor = theme.palette.customColors.orange;

  // Phone form
  const {
    handleSubmit: handlePhoneSubmit,
    control: phoneControl,
    formState: { errors: phoneErrors },
  } = useForm({
    resolver: yupResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  // Password form
  const {
    handleSubmit: handlePasswordSubmit,
    control: passwordControl,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  // Form submission handlers
  const onPhoneSubmit = (data: { phone: string }) => {
    console.log("Phone Data:", data);
    // console.log("Password updated successfully:", response.data);
    updatePhoneNumber(data.phone);
  };

  const onPasswordSubmit = (data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    console.log("Password Data:", data);
    updatePassword(data);
  };

  return (
    <Box>
      <Box sx={{ width: "80%", margin: "0 auto 2%" }}>
        <Box sx={{ display: "flex", alignItems: "center", margin: "2% 0%" }}>
          <ArrowCircleLeftIcon
            onClick={() => router.back()}
            sx={{
              fontSize: "50px",
              color: orangeColor,
              marginRight: "20px",
              "&:hover": { cursor: "pointer" },
            }}
          />
          <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
            Account Settings
          </Typography>
        </Box>
        <Box sx={{ marginTop: "3%" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            General Settings
          </Typography>
          <Divider
            sx={{
              margin: "1% 0%",
              background: `${hexToRGBA(
                theme.palette.customColors.orange,
                0.4
              )}`,
            }}
          ></Divider>
        </Box>
        {/* Email */}
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
            Email
          </Typography>
          <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
            <TextField
              id="outlined-basic"
              // label="My Event"
              placeholder="gills1enterprises@gmail.com"
              variant="outlined"
              size="small"
              sx={{
                boxShadow: `0 8px 32px 0 ${hexToRGBA(
                  theme.palette.customColors.orange,
                  0.12
                )}`,
                backdropFilter: "blur( 4px )",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  background: `${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.1
                  )}`,
                  color: theme.palette.customColors.orange,
                  borderRadius: "30px",
                  fontFamily: "Arial",
                  fontWeight: "noraml",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.customColors.orange,
                    borderWidth: "1px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: theme.palette.customColors.orange,
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
        </Box>
        {/* Email */}
        {/* Phone Form */}
        {/* <form onSubmit={handlePhoneSubmit(onPhoneSubmit)}> */}
        <form onSubmit={handlePhoneSubmit(onPhoneSubmit)}>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
              Phone
            </Typography>
            <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
              <Controller
                name="phone"
                control={phoneControl}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Enter Your contact Number"
                    variant="outlined"
                    size="small"
                    error={!!phoneErrors.phone}
                    helperText={phoneErrors.phone?.message}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        background: `${orangeColor}20`,
                        color: orangeColor,
                        borderRadius: "30px",
                        border: `1px solid ${orangeColor}`,
                      },
                    }}
                  />
                )}
              />
            </Box>
            <Button
              type="submit"
              sx={{ color: white, background: orangeColor }}
            >
              Save Phone
            </Button>
          </Box>
        </form>

        <Box sx={{ marginTop: "3%" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            Privacy Settings{" "}
          </Typography>
          <Divider
            sx={{
              margin: "1% 0%",
              background: `${hexToRGBA(
                theme.palette.customColors.orange,
                0.4
              )}`,
            }}
          ></Divider>
        </Box>

        {/* Password Form */}
        <form onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
              Current Password
            </Typography>
            <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
              <Controller
                name="currentPassword"
                control={passwordControl}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    placeholder="Current Password"
                    variant="outlined"
                    size="small"
                    error={!!passwordErrors.currentPassword}
                    helperText={passwordErrors.currentPassword?.message}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        background: `${orangeColor}20`,
                        color: orangeColor,
                        borderRadius: "30px",
                        border: `1px solid ${orangeColor}`,
                      },
                    }}
                  />
                )}
              />
            </Box>

            <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
              New Password
            </Typography>
            <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
              <Controller
                name="newPassword"
                control={passwordControl}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    placeholder="New Password"
                    variant="outlined"
                    size="small"
                    error={!!passwordErrors.newPassword}
                    helperText={passwordErrors.newPassword?.message}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        background: `${orangeColor}20`,
                        color: orangeColor,
                        borderRadius: "30px",
                        border: `1px solid ${orangeColor}`,
                      },
                    }}
                  />
                )}
              />
            </Box>

            <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
              Confirm New Password
            </Typography>
            <Box sx={{ width: { md: "50%", xs: "100%" }, margin: "1% 0%" }}>
              <Controller
                name="confirmNewPassword"
                control={passwordControl}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    placeholder="Confirm New Password"
                    variant="outlined"
                    size="small"
                    error={!!passwordErrors.confirmNewPassword}
                    helperText={passwordErrors.confirmNewPassword?.message}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        background: `${orangeColor}20`,
                        color: orangeColor,
                        borderRadius: "30px",
                        border: `1px solid ${orangeColor}`,
                      },
                    }}
                  />
                )}
              />
            </Box>
            <Button
              type="submit"
              sx={{ color: white, background: orangeColor }}
            >
              Save Password
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Page;
