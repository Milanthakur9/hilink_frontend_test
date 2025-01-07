"use client";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import orgBg from "../../../background-organization.jpg";
import hilinkLogo from "../../assets/branding/HL_Clean_Transparent_white.svg";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
// icon
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

function Page() {
  var theme = useTheme();
  var router = useRouter();
  const [ticketLocation, setTicketLocation] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  var orange = theme.palette.customColors.orange;
  var dark1 = theme.palette.customColors.primaryDark1;
  var white = theme.palette.customColors.primaryWhite;

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const handleProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrls = URL.createObjectURL(file);
      setProfileImage(imageUrls);
    }
  };

  const handleSubmit = async () => {
    try {
      const requestData = {
        name: organizationName,
        location: ticketLocation,
        profilePhoto: profileImage, // Ensure the backend accepts the image URL directly
      };

      const response = await axios.post(
        "http://localhost:3333/v1/organization/create",
        requestData
      );

      // Handle success and errors based on response data
      if (response.data.success) {
        console.log("Organization created successfully:", response.data);
        router.push("/creator/events/dashboard"); // Redirect on success
      } else {
        console.error("Organization creation failed:", response.data.message);
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error creating organization:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <Box
        sx={{
          background: dark1,
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            width: { md: "40%", xs: "95%" },
            margin: { md: "0", xs: "0 auto" },
            background: `url(${orgBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left top",
            padding: { md: "20px", xs: "0" },
          }}
        >
          <Box sx={{ display: { md: "inline-block", xs: "none" } }}>
            <Image src={hilinkLogo} height={40} width={120} alt="logo" />
          </Box>
        </Box>
        <Box
          sx={{
            width: { md: "60%", xs: "95%" },
            padding: { md: "30px", xs: "20px" },
            margin: { md: "0", xs: "0 auto" },
            // border: `1px solid ${orange}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "right", marginBottom: "20px" }}
          >
            {` Already have an organization? `}
            <span
              style={{ color: orange, cursor: "pointer" }}
              onClick={() => router.push(`/creator/events/dashboard/`)}
            >
              {" "}
              My Dashboard{" "}
            </span>
          </Typography>
          <Typography variant="h1">Create Organization</Typography>

          {/* tickets start  */}
          <Box sx={{ width: { md: "100%", xs: "100%" }, margin: "5% 0" }}>
            <Typography variant="h5" sx={{ margin: "10px 0px" }}>
              Where will you be selling tickets?
            </Typography>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                value={ticketLocation}
                onChange={(e) => setTicketLocation(e.target.value)}
                sx={{
                  background: `${hexToRGBA(dark1, 0.2)}`,
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  border: `1px solid ${orange}`,
                  borderRadius: "30px",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                // label="Age"
                // size="small"
                // onChange={handleChange}
              >
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Finland">Finland</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="Spain">Spain</MenuItem>
                <MenuItem value="Netherlands">Netherlands</MenuItem>
                <MenuItem value="Greece">Greece</MenuItem>
                <MenuItem value="Peru">Peru</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="Denmark">Denmark</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Switzerland">Switzerland</MenuItem>
                <MenuItem value="Guatemala">Guatemala</MenuItem>
                <MenuItem value="Hungary">Hungary</MenuItem>
                <MenuItem value="United Arab Emirates">
                  United Arab Emirates
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* tickets end  */}

          {/* Brand name start       */}
          <Box>
            <Typography variant="h5" sx={{ margin: "10px 0px" }}>
              What is your organization called?
            </Typography>
            <TextField
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              autoComplete="off"
              id="outlined-basic"
              //   multiline
              //   rows={4}
              placeholder="Brand Name"
              variant="outlined"
              //   size="small"
              sx={{
                marginTop: "2% 0",
                //   border:` 1px solid ${theme.palette.customColors.primaryWhite}`,
                backdropFilter: "blur( 4px )",
                width: "99%",
                "& .MuiOutlinedInput-root": {
                  color: orange,
                  fontWeight: "noraml",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    background: ` ${hexToRGBA(dark1, 0.2)}`,
                    boxShadow: ` 0 8px 32px 0 ${hexToRGBA(orange, 0.12)}`,
                    borderColor: orange,
                    borderWidth: "1px",
                    borderRadius: "35px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: orange,
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
          {/* Brand name end  */}

          {/* brand's logo start    */}
          <Box sx={{ margin: "5% 0" }}>
            <Typography variant="h5" sx={{ margin: "10px 0px" }}>
              {`Add your brand's logo. (Square)`}
            </Typography>
            <Box
              sx={{
                width: "150px",
                // height: '50vh',
                minHeight: "150px",
                // margin: { md: "0%", xs: "0% auto 6%" },
                backgroundImage: profileImage
                  ? `url(${profileImage})`
                  : `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
                border: `1px solid ${orange}`,
                // backgroundBlendMode: "overlay",
                borderRadius: "20px",
                transition: "all 0.1s linear",
                position: "relative",
                "&:hover": {
                  cursor: "pointer",
                  // transform:'scale(1.1)'
                  boxShadow: "0px 0px 19px 20px rgba(255,145,77,0.12)",
                  border: `1px solid ${orange}`,
                  backgroundColor: "#1f1f1f",
                  backgroundBlendMode: "overlay",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                {profileImage ? (
                  <Button
                    sx={{
                      background: "#202524",
                      border: `1px solid ${orange}`,
                      color: orange,
                      borderRadius: "10px",
                    }}
                    variant="contained"
                    onClick={() => setProfileImage(null)}
                  >
                    <PanoramaIcon />
                  </Button>
                ) : (
                  <>
                    <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                      <CloudUploadIcon
                        sx={{ color: orange, fontSize: "35px" }}
                      />
                    </label>
                    <input
                      id="file-upload"
                      style={{
                        border: `1px solid ${orange}`,
                        width: "150px",
                        display: "none",
                        padding: "5px 25px",
                      }}
                      type="file"
                      accept="image/*"
                      onChange={handleProfileImage}
                    />
                  </>
                )}
              </Box>
              {/* profile image end  */}
            </Box>
          </Box>
          {/* brand's logo end  */}

          <Button
            // onClick={handleSubmit}
            onClick={handleSubmit}
            sx={{
              width: "100%",
              background: orange,
              color: white,
              fontSize: "22px",
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Page;
