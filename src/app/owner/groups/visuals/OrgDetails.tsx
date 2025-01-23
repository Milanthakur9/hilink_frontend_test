import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PanoramaIcon from "@mui/icons-material/Panorama";

import uploadImage from "../../../../assets/background_patterns/uploadImage.webp";

function OrgDetails() {
  // profile image

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const handleProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrls = URL.createObjectURL(file);
      setProfileImage(imageUrls);
      //   setOrganizationInfo((prev) => ({
      //     ...prev,
      //     profilePhoto: imageUrls,
      //   }));
    }
  };
  // profile image

  var theme = useTheme();
  var orange = theme.palette.customColors.orange;
  var white = theme.palette.customColors.primaryWhite;
  return (
    <>
      <Typography variant="h4" sx={{ margin: "2% 0" }}>
        Organizer Details
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box>
          <Box
            sx={{
              width: "50px",
              // height: '50vh',
              minHeight: "50px",
              // margin: { md: "0%", xs: "0% auto 6%" },
              backgroundImage: profileImage
                ? `url(${profileImage})`
                : `url(${uploadImage.src})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover",
              border: `1px solid ${white}`,
              // backgroundBlendMode: "overlay",
              borderRadius: "50%",
              transition: "all 0.1s linear",
              position: "relative",
              "&:hover": {
                cursor: "pointer",
                // transform:'scale(1.1)'
                boxShadow: "0px 0px 19px 20px rgba(255,145,77,0.12)",
                border: `1px solid ${white}`,
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
                    background: "transparent",
                    // border: `1px solid ${orange}`,
                    color: orange,
                    borderRadius: "10px",
                  }}
                  variant="contained"
                  onClick={() => setProfileImage(null)}
                >
                  <PanoramaIcon sx={{ color: white, fontSize: "15px" }} />
                </Button>
              ) : (
                <>
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    <CloudUploadIcon sx={{ color: white, fontSize: "15px" }} />
                  </label>
                  <input
                    id="file-upload"
                    style={{
                      border: `1px solid ${white}`,
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
        <Box sx={{ width: "100%" }}>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            label="venue Name"
            size="small"
            variant="outlined"
            name="venueName"
            //   value={formData.venueName}
            //   onChange={handleChange}
            sx={{
              // background: "rgba( 255, 145, 77, 0.25 )",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.2
              )}`,
              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
              )}`,
              backdropFilter: "blur( 4px )",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                fontFamily: "Arial",
                fontWeight: "noraml",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.customColors.primaryWhite,
                  borderWidth: "1px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: theme.palette.customColors.primaryWhite,
                fontWeight: "normal",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default OrgDetails;
