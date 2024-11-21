import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// Switch
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";
// switch start
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({}) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#ff914d",
      "& + .MuiSwitch-track": {
        backgroundColor: "#151618",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      // color: theme.palette.grey[100],
      // ...theme.applyStyles('dark', {
      //   color: theme.palette.grey[600],
      // }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#ff914d",
    opacity: 1,
  },
}));

// switch end

// icon
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PanoramaIcon from "@mui/icons-material/Panorama";
// import styled from '@emotion/styled';

function Profile() {
  const [profileBackgroundImage, setProfileBackgroundImage] = useState<
    string | null
  >(null);
  const handleProfileImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileBackgroundImage(imageUrl);
    }
  };

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const handleProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrls = URL.createObjectURL(file);
      setProfileImage(imageUrls);
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: { md: "100%", xs: "100%" },
          // height: '50vh',
          minHeight: { md: "450px", xs: "250px" },
          // margin: { md: "0%", xs: "0% auto 6%" },
          backgroundImage: profileBackgroundImage
            ? `url(${profileBackgroundImage})`
            : `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          // backgroundBlendMode: "overlay",
          borderRadius: "25px",
          transition: "all 0.1s linear",
          position: "relative",
          "&:hover": {
            cursor: "pointer",
            // transform:'scale(1.1)'
            boxShadow: "0px 0px 19px 20px rgba(255,145,77,0.12)",
            border: "1px solid #ff914d",
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
          {/* <Button sx={{background:'#202524',border:'1px solid #ff914d',borderRadius:'25px',textTransform:'capitalize',fontSize:'20px'}} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<AddCircleIcon sx={{color:'#fff',margin:{md:0,xs:'10px 0px'}}}/>}
                            >
                              Upload Poster <sup>*</sup>
                              <VisuallyHiddenInput
                                type="file"
                                onChange={(event) => console.log(event.target.files)}
                                multiple
                              />
                            </Button> */}
          {profileBackgroundImage ? (
            <Button
              sx={{
                background: "#202524",
                border: "1px solid #ff914d",
                color: "#ff914d",
                borderRadius: "10px",
              }}
              variant="contained"
              onClick={() => setProfileBackgroundImage(null)}
              // sx={{ position: 'absolute', bottom: '20px' }}
            >
              <PanoramaIcon />
            </Button>
          ) : (
            <>
              <label htmlFor="file-upload1" style={{ cursor: "pointer" }}>
                {/* Upload Poster <sup>*</sup> */}
                <CloudUploadIcon sx={{ color: "#ff914d", fontSize: "35px" }} />
              </label>
              <input
                id="file-upload1"
                style={{
                  border: "1px solid #ff914d",
                  width: "150px",
                  display: "none",
                  padding: "5px 25px",
                }}
                type="file"
                accept="image/*"
                onChange={handleProfileImageUpload}
              />
            </>
          )}
        </Box>
      </Box>
      {/* event by test  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          width: { md: "70%", xs: "95%" },
          margin: "0 auto",
        }}
      >
        <Box sx={{ width: "20%", margin: { md: "0", xs: "0 auto" } }}>
          <Box
            sx={{
              marginTop: "-80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* profile image start  */}
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
                border: "1px solid #ff914d",
                // backgroundBlendMode: "overlay",
                borderRadius: "50%",
                transition: "all 0.1s linear",
                position: "relative",
                "&:hover": {
                  cursor: "pointer",
                  // transform:'scale(1.1)'
                  boxShadow: "0px 0px 19px 20px rgba(255,145,77,0.12)",
                  border: "1px solid #ff914d",
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
                      border: "1px solid #ff914d",
                      color: "#ff914d",
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
                        sx={{ color: "#ff914d", fontSize: "35px" }}
                      />
                    </label>
                    <input
                      id="file-upload"
                      style={{
                        border: "1px solid #ff914d",
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
            <Button
              sx={{
                width: { md: "100%", xs: "200px" },
                color: "#fff",
                background: "#ff914d",
                paddingInline: "20px",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              view Profile
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: { md: "75%", xs: "100%" } }}>
          <Box sx={{ marginTop: "6%" }}>
            <TextField
              autoComplete="off"
              id="outlined-basic"
              // label="venue Name"
              placeholder="Test"
              size="small"
              variant="outlined"
              sx={{
                background: "rgba( 32, 37, 36, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 4px )",
                width: "50%",
                "& .MuiOutlinedInput-root": {
                  color: "#ff914d",
                  fontFamily: "Arial",
                  fontWeight: "noraml",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff914d",
                    borderWidth: "1px",
                    borderRadius: "30px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "#ff914d",
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
          <Divider
            sx={{ background: "#ff914d", opacity: 0.4, margin: "10px 0% 0" }}
          />
          <Typography
            variant="h2"
            sx={{
              margin: "12px 0% 3%",
              color: "#fff",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Profile Info
          </Typography>

          {/* Biography      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Biography
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <TextField
                multiline
                rows={4}
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Biography Username"
                size="small"
                variant="outlined"
                sx={{
                  background: "rgba( 32, 37, 36, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "1px",
                      borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
          {/* Biography      */}

          {/* instagram      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Instagram
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Instagram Username"
                size="small"
                variant="outlined"
                sx={{
                  background: "rgba( 32, 37, 36, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "1px",
                      borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
          {/* instagram      */}

          {/* Twitter      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Twitter
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Twitter Username"
                size="small"
                variant="outlined"
                sx={{
                  background: "rgba( 32, 37, 36, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "1px",
                      borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
          {/* Twitter      */}

          {/* Linkdin      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Linkdin
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Linkdin Username"
                size="small"
                variant="outlined"
                sx={{
                  background: "rgba( 32, 37, 36, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "1px",
                      borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
          {/* Linkdin      */}

          {/* Website URL      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Website URL
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Website URL "
                size="small"
                variant="outlined"
                sx={{
                  background: "rgba( 32, 37, 36, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "1px",
                      borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
          {/* Website URL      */}

          {/* Custom Links      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Custom Links
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <Button
                sx={{
                  width: { md: "100%", xs: "100%" },
                  background: "#ff914d",
                  borderRadius: "30px",
                  color: "#fff",
                  fontSize: "12px",
                  transition: "all .1s linear",
                  "&:hover": { transform: "scale(1.051)" },
                }}
              >
                + Add Links To Your Profile
              </Button>
            </Box>
          </Box>
          {/* Custom Links      */}

          {/* Organization Profile URL      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Organization Profile URL
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Organization Profile URL "
                size="small"
                variant="outlined"
                sx={{
                  background: "rgba( 32, 37, 36, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "1px",
                      borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
          {/* Organization Profile URL      */}

          {/* Display Number of Attendees      */}
          <Box
            sx={{
              margin: "2% 0%",
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "48%", xs: "100%" } }}>
              <Typography
                sx={{ color: "#fff", margin: { md: 0, xs: "10px 0px" } }}
              >
                Display Number of Attendees
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              />
            </Box>
          </Box>
          {/* Display Number of Attendees      */}
        </Box>
      </Box>
    </div>
  );
}

export default Profile;
