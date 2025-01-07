"use client";
import React, { useEffect, useState } from "react";
// icon
import { Box, Typography, useTheme } from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import CreatorHeader from "../creator/events/dashboard/components/CreatorHeader";
import { axiosInstance } from "@/interceptor/axiosInterceptor";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";
interface OrganizationInfoType {
  id: number;
  name: string;
  location: string;
  Biography: string;
  coverPhoto: string;
  profilePhoto: string;
  instagramLink: string;
  twitterLink: string;
  websiteLink: string;
  linkedInLink: string;
  contactEmail: string | null;
  contactPhoneNo: string | null;
  type: string | null;
  createdAt: string;
  updatedAt: string;
}

function Page() {
  const theme = useTheme();
  const orange = theme.palette.customColors.orange;
  const dark2 = theme.palette.customColors.primaryDark2;
  const white = theme.palette.customColors.primaryWhite;

  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationInfoType | null>(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganizationInfo = async () => {
      try {
        const response = await axiosInstance.get("v1/organization/info/1");
        setOrganizationInfo(response.data.organization);
        console.log(response.data);
      } catch {
        console.log("error");
      }
    };

    fetchOrganizationInfo();
  }, []);

  return (
    <Box sx={{ padding: "0 0 5% 0" }}>
      <CreatorHeader />

      <Box
        sx={{
          width: { md: "99%", xs: "99%" },
          // height: '50vh',
          margin: "0 auto",
          minHeight: { md: "450px", xs: "250px" },
          // margin: { md: "0%", xs: "0% auto 6%" },
          backgroundImage: `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          // backgroundBlendMode: "overlay",
          // borderRadius: "25px",
          transition: "all 0.1s linear",
          position: "relative",
          "&:hover": {
            cursor: "pointer",
            // transform:'scale(1.1)'
            boxShadow: `0px 0px 19px 20px ${hexToRGBA(orange, 0.12)}`,
            border: `1px solid ${orange}`,
            backgroundColor: dark2,
            backgroundBlendMode: "soft-light",
          },
        }}
      ></Box>
      {/* event by test  */}
      {/* profile image start  */}
      <Box
        sx={{
          width: "250px",
          margin: "-150px auto 0",
          // height: '50vh',
          minHeight: "250px",
          // margin: { md: "0%", xs: "0% auto 6%" },
          backgroundImage: `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
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
            boxShadow: `0px 0px 19px 20px ${hexToRGBA(orange, 0.12)}`,
            border: `1px solid ${orange}`,
          },
        }}
      ></Box>
      {/* profile image end  */}

      <Box sx={{ margin: "1% 0", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {organizationInfo?.name}
        </Typography>
        {/* <Typography sx={{ margin: "10px" }}>@sartajgill165</Typography> */}
        <Typography sx={{ margin: "10px" }}>
          {organizationInfo?.Biography}
        </Typography>
        {/* LinkedIn */}
        <IconButton
          component="a"
          href={organizationInfo?.linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: dark2 }} // Example custom styling
        >
          <LinkedInIcon
            sx={{
              color: white,
              fontSize: "25px",
              transition: "all .2s linear",
              "&:hover": { color: orange, transform: "scale(1.20)" },
            }}
          />
        </IconButton>
        {/* LinkedIn */}
        {/* Instagram    */}
        <IconButton
          component="a"
          href={organizationInfo?.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: dark2 }} // Example custom styling
        >
          <InstagramIcon
            sx={{
              color: white,
              fontSize: "25px",
              transition: "all .2s linear",
              "&:hover": { color: orange, transform: "scale(1.20)" },
            }}
          />
        </IconButton>
        {/* Instagram    */}
        {/* twitter */}
        <IconButton
          component="a"
          href={organizationInfo?.twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: dark2 }} // Example custom styling
        >
          <XIcon
            sx={{
              color: white,
              fontSize: "25px",
              transition: "all .2s linear",
              "&:hover": { color: orange, transform: "scale(1.20)" },
            }}
          />
        </IconButton>
        {/* twitter */}
        {/* website     */}
        <IconButton
          component="a"
          href={organizationInfo?.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: dark2 }} // Example custom styling
        >
          <LanguageIcon
            sx={{
              color: white,
              fontSize: "25px",
              transition: "all .2s linear",
              "&:hover": { color: orange, transform: "scale(1.20)" },
            }}
          />
        </IconButton>
        {/* website     */}

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                margin: "10px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              21
            </Typography>
            <Typography sx={{ margin: "10px" }}>events</Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                margin: "10px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              2,447
            </Typography>
            <Typography sx={{ margin: "10px" }}>attended</Typography>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
}

export default Page;
