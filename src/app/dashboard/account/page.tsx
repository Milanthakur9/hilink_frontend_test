"use client";
import React, { useState } from "react";
// icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
// import PanoramaIcon from '@mui/icons-material/Panorama';
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
// import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from "next/navigation";
import CreatorHeader from "@/app/creator/events/dashboard/components/CreatorHeader";
import CreatorFooter from "@/app/creator/events/dashboard/components/CreatorFooter";

function AccountPage() {
  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette.customColors.orange;
  //   const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;

  const [AccountImage, setAccountImage] = useState<string | null>(null);
  const handleAccountImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrls = URL.createObjectURL(file);
      setAccountImage(imageUrls);
    }
  };

  const btnData = [
    {
      icon: <VisibilityIcon sx={{ fontSize: "28px !important" }} />,
      name: "View Profile",
      link: "/profile",
    },
    {
      icon: <SettingsIcon sx={{ fontSize: "28px !important" }} />,
      name: "Account Settings",
      link: "/dashboard/account/settings",
    },
    {
      icon: <AddCircleIcon sx={{ fontSize: "28px !important" }} />,
      name: "Throw Your Own Event",
      link: "/eventType/",
    },
    {
      icon: <LogoutIcon sx={{ fontSize: "28px !important" }} />,
      name: "Logout",
      link: "/",
    },
  ];

  const personData = [
    {
      icon: <EmailIcon />,
      name: "gills1enterprises@gmail.com",
      link: "/",
    },
    {
      icon: <PersonAddIcon />,
      name: "Joined November 2024",
      link: "/",
    },
    {
      icon: <PhoneIcon />,
      name: "15862653825",
      link: "/",
    },
  ];

  return (
    <>
      <CreatorHeader />
      <Box sx={{ background: "#151618", padding: "5%" }}>
        {/* account page image start  */}
        {/* <Box sx={{ width: { md: "50%", xs: "90%" }, margin: "0 auto" }}>
          <Box
            sx={{
              width: "100%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "150px",
                minHeight: "150px",
                padding: "5%",
                backgroundImage: AccountImage
                  ? `url(${AccountImage})`
                  : `linear-gradient(to right bottom,${orange},${dark2})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
                borderRadius: "50%",
                transition: "all 0.1s linear",
                position: "relative",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: dark1,
                  opacity: "0.6",
                },
              }}
            >
              profile image end 
            </Box>
            <Box sx={{ width: "fit-content", marginLeft: "-20px" }}>
              {AccountImage ? (
                <Button
                  sx={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: orange,
                    borderRadius: "10px",
                    "&:hover": { boxShadow: "none" },
                  }}
                  variant="contained"
                  onClick={() => setAccountImage(null)}
                >
                  <PhotoCameraIcon sx={{ fontSize: "25px" }} />
                </Button>
              ) : (
                <>
                  <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                    <CloudUploadIcon sx={{ color: orange, fontSize: "25px" }} />
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
                    onChange={handleAccountImage}
                  />
                </>
              )}
            </Box>
          </Box>
          account page image end 
          
          <Typography
            sx={{
              fontSize: "40px",
              textTransform: "capitalize",
              fontWeight: "bold",
              textAlign: "center",
              margin: "1% 0",
            }}
          >
            Sartaj Gill
          </Typography>

          <Box sx={{ width: "100%" }}>
            <Divider
              sx={{ background: orange, opacity: 0.4, margin: "3% 0%" }}
            />

            {btnData.map((item) => {
              return (
                <Button
                  onClick={() => router.push(`${item.link}`)}
                  startIcon={item.icon}
                  key={item.name}
                  sx={{
                    background: orange,
                    color: "#fff",
                    width: "100%",
                    marginBlock: "5px",
                    transition: "all .1s linear",
                    "&:hover": { cursor: "pointer", transform: "scale(1.02)" },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}

            <Divider
              sx={{ background: orange, opacity: 0.4, margin: "3% 0%" }}
            />
          </Box>
          {personData.map((item) => {
            return (
              <Box
                key={item.name}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& svg": {
                    color: "#fff",
                    marginRight: "10px",
                    "&:hover": { color: orange, cursor: "pointer" },
                  },
                }}
              >
                {item.icon}
                <Typography sx={{ margin: "5px 0px" }}>{item.name}</Typography>
              </Box>
            );
          })}
        </Box> */}

        <Box
          sx={{
            width: { md: "80%", xs: "95%" },
            margin: "0 auto",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "center",
            alignItems: "flex-end",
            padding: "4%",
            borderRadius: "40px",
            background: theme.palette.customColors.primaryDark2,
          }}
        >
          <Box
            sx={{
              width: { md: "fit-content", xs: "100%" },
              marginRight: { md: "20px", xs: "0px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  width: "220px",
                  // height: '50vh',
                  minHeight: "220px",
                  // margin:'0 auto',
                  padding: "5%",
                  // margin: { md: "0%", xs: "0% auto 6%" },
                  backgroundImage: AccountImage
                    ? `url(${AccountImage})`
                    : `linear-gradient(to right bottom,${orange},${dark2})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  objectFit: "cover",
                  borderRadius: "50%",
                  transition: "all 0.1s linear",
                  position: "relative",
                  "&:hover": {
                    cursor: "pointer",
                    // transform:'scale(1.1)'
                    // boxShadow:'0px 0px 19px 20px rgba(255,145,77,0.12)',
                    // border:'1px solid #ff914d',
                    backgroundColor: dark1,
                    // backgroundBlendMode:'hard-light',
                    opacity: "0.6",
                  },
                }}
              >
                {/* profile image end  */}
              </Box>
              <Box sx={{ width: "fit-content", marginLeft: "-20px" }}>
                {AccountImage ? (
                  <Button
                    sx={{
                      background: "transparent",
                      border: "none",
                      boxShadow: "none",
                      color: orange,
                      borderRadius: "10px",
                      "&:hover": { boxShadow: "none" },
                    }}
                    variant="contained"
                    onClick={() => setAccountImage(null)}
                  >
                    <PhotoCameraIcon sx={{ fontSize: "25px" }} />
                  </Button>
                ) : (
                  <>
                    <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                      <CloudUploadIcon
                        sx={{ color: orange, fontSize: "25px" }}
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
                      onChange={handleAccountImage}
                    />
                  </>
                )}
              </Box>
            </Box>

            {personData.map((item) => {
              return (
                <Box
                  key={item.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { md: "left", xs: "center" },
                    background: theme.palette.customColors.primaryDark1,
                    padding: "15px",
                    borderRadius: "10px",
                    marginTop: "15px",
                    "& svg": {
                      color: "#fff",
                      marginRight: "10px",
                      "&:hover": { color: orange, cursor: "pointer" },
                    },
                  }}
                >
                  {item.icon}
                  <Typography
                    // variant="subtitle1"
                    sx={{
                      margin: "5px 0px",
                      //   fontFamily: "arial",
                      fontSize: { md: "1.4em", xs: "1em" },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              width: {
                md: "48%",
                xs: "100%",
              },
              margin: { md: "0 0", xs: "4% 0 0 !important" },
            }}
          >
            {btnData.map((item) => {
              return (
                <Button
                  onClick={() => router.push(`${item.link}`)}
                  startIcon={item.icon}
                  key={item.name}
                  sx={{
                    background: orange,
                    color: "#fff",
                    width: "100%",
                    fontSize: "18px",
                    marginBlock: "5px",
                    transition: "all .1s linear",
                    padding: "15px",
                    "&:hover": { cursor: "pointer", transform: "scale(1.02)" },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Box>
      <CreatorFooter />
    </>
  );
}

export default AccountPage;
