import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { axiosInstance } from "@/interceptor/axiosInterceptor";
import { useRouter } from "next/navigation";

interface OrganizationInfoType {
  id: number;
  name: string;
  Biography: string;
  coverPhoto: string;
  profilePhoto: string;
  instagramLink: string;
  twitterLink: string;
  websiteLink: string;
  linkedInLink: string;
  createdAt?: string;
  updatedAt?: string;
}

const organizationInfoTextfieldKeys = {};

function Profile() {
  const [name, setName] = useState<string>("");
  const [biography, setBiography] = useState<string>("");
  const [instagramLink, setInstagramLink] = useState<string>("");
  const [twitterLink, setTwitterLink] = useState<string>("");
  const [websiteLink, setWebsiteLink] = useState<string>("");
  const [linkedInLink, setLinkedInLink] = useState<string>("");
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationInfoType>({
      id: 0,
      name: "",
      Biography: "",
      coverPhoto: "",
      profilePhoto: "",
      instagramLink: "",
      twitterLink: "",
      websiteLink: "",
      linkedInLink: "",
      createdAt: "",
      updatedAt: "",
    });

  const theme = useTheme();
  const router = useRouter();
  const orange = theme.palette.customColors.orange;
  const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;
  const dark2 = theme.palette.customColors.primaryDark2;

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

  // get
  const fetchOrganizations = async () => {
    try {
      const response = await axiosInstance.get("v1/organization/info/1");

      console.log(response.data);

      setOrganizationInfo(response.data.organization); // Assuming the list of organizations is in `data.data`
      if (response.data.success) {
      } else {
        setError(response.data.message || "Failed to fetch organizations.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, [refresh]);

  // update
  const updateOrganizationProfile = async () => {
    const {
      name,
      Biography,
      instagramLink,
      twitterLink,
      websiteLink,
      linkedInLink,
    } = organizationInfo;

    try {
      const requestData = {
        name: name,
        biography: Biography,
        instagramLink: instagramLink,
        twitterLink: twitterLink,
        websiteLink: websiteLink,
        linkedInLink: linkedInLink,
        profilePhoto:
          "https://images.hdqwalls.com/wallpapers/bthumb/novitec-mclaren-750s-twin-turbocharged-v8-zg.jpg",
        coverPhoto:
          "https://images.hdqwalls.com/wallpapers/bthumb/novitec-mclaren-750s-twin-turbocharged-v8-zg.jpg",
      };
      const response = await axiosInstance.put(
        `v1/organization/update/profile/1`,
        requestData
      );

      setRefresh((prev) => !prev);

      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
      // console.error(
      //   "Error updating profile:",
      //   error.response?.data || error.message
      // );
    }
  };

  const handleProfileInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const currentField = e.target.name;

    setOrganizationInfo((prev) => {
      return {
        ...prev,
        [currentField]: e.target.value,
      };
    });
  };

  // updateOrganizationProfile();

  return (
    <>
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
            border: `1px solid ${orange}`,
            backgroundColor: dark1,
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
                background: dark2,
                border: `1px solid ${orange}`,
                color: orange,
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
                <CloudUploadIcon sx={{ color: orange, fontSize: "35px" }} />
              </label>
              <input
                id="file-upload1"
                style={{
                  border: `1px solid ${orange}`,
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
          padding: "0 0 5%",
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
                border: `1px solid ${orange}`,
                // backgroundBlendMode: "overlay",
                borderRadius: "50%",
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
            <Button
              onClick={() => router.push(`/g`)}
              sx={{
                width: { md: "100%", xs: "200px" },
                color: white,
                background: orange,
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
              value={organizationInfo?.name}
              onChange={handleProfileInfoChange}
              name="name"
              sx={{
                backdropFilter: "blur( 4px )",
                width: "50%",
                "& .MuiOutlinedInput-root": {
                  background: `${hexToRGBA(
                    theme.palette.customColors.primaryDark1,
                    0.2
                  )}`,
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.12
                  )}`,
                  border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                  color: orange,
                  borderColor: orange,
                  borderRadius: "25px",
                  fontFamily: "Arial",
                  fontWeight: "noraml",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: "1px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "",
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
          <Divider
            sx={{ background: orange, opacity: 0.4, margin: "10px 0% 0" }}
          />
          <Typography
            variant="h2"
            sx={{
              margin: "12px 0% 3%",

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
              <Typography sx={{ margin: { md: 0, xs: "10px 0px" } }}>
                Biography
              </Typography>
            </Box>
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <TextField
                value={organizationInfo?.Biography}
                onChange={handleProfileInfoChange}
                name="Biography"
                multiline
                rows={4}
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Biography Username"
                size="small"
                variant="outlined"
                sx={{
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    border: `1px solid ${theme.palette.customColors.orange}`,
                    color: orange,
                    borderColor: orange,
                    borderRadius: "25px",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "",
                      // borderWidth: "1px",
                      // borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "",
                    // fontWeight: "normal",
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
                value={organizationInfo?.instagramLink}
                onChange={handleProfileInfoChange}
                name="instagramLink"
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Instagram Username"
                size="small"
                variant="outlined"
                sx={{
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    border: `1px solid ${theme.palette.customColors.orange}`,
                    color: orange,
                    borderColor: orange,
                    borderRadius: "25px",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "",
                      borderWidth: "1px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "",
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
                value={organizationInfo?.twitterLink}
                onChange={handleProfileInfoChange}
                name="twitterLink"
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Twitter Username"
                size="small"
                variant="outlined"
                sx={{
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    border: `1px solid ${theme.palette.customColors.orange}`,
                    color: orange,
                    borderColor: orange,
                    borderRadius: "25px",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "",
                      borderWidth: "1px",
                      // borderRadius: "30px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "",
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
                value={organizationInfo?.linkedInLink}
                onChange={handleProfileInfoChange}
                name="linkedInLink"
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Linkdin Username"
                size="small"
                variant="outlined"
                sx={{
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    border: `1px solid ${theme.palette.customColors.orange}`,
                    color: orange,
                    borderColor: orange,
                    borderRadius: "25px",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "",
                      borderWidth: "1px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "",
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
                value={organizationInfo?.websiteLink}
                onChange={handleProfileInfoChange}
                name="websiteLink"
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Website URL "
                size="small"
                variant="outlined"
                sx={{
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    border: `1px solid ${theme.palette.customColors.orange}`,
                    color: orange,
                    borderColor: orange,
                    borderRadius: "25px",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "",
                      borderWidth: "1px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
          {/* Website URL      */}

          {/* Custom Links      */}

          {/* Organization Profile URL      */}
          {/* <Box
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
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.12
                    )}`,
                    border: `1px solid ${theme.palette.customColors.orange}`,
                    color: orange,
                    borderColor: orange,
                    borderRadius: "25px",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "",
                      borderWidth: "1px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box> */}
          {/* Organization Profile URL      */}
          <Box
            sx={{
              // position: "fixed",
              // left: "10%",
              // bottom: "2%",
              // width: "fit-content",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "5px 40px",
              marginTop: "70px",
              backdropFilter: "blur(5px) saturate(180%)", // You can adjust the value here to control the blur effect
              // background: `${hexToRGBA(dark2, 0.8)}`,
              background: `linear-gradient(to right,${hexToRGBA(
                dark1,
                0.9
              )},${hexToRGBA(white, 0.2)},${hexToRGBA(dark1, 0.2)})`,
            }}
          >
            <Typography sx={{ margin: "2% 0%" }}>
              Would you like to save your changes?
            </Typography>
            <Box sx={{ display: "flex", gap: 2, marginLeft: "20px" }}>
              <Button
                sx={{
                  background: white,
                  color: dark1,
                  paddingInline: "20px",
                  "&:hover": { color: white },
                }}
              >
                DISCARD
              </Button>
              <Button
                onClick={() => updateOrganizationProfile()}
                sx={{
                  background: orange,
                  color: white,
                  paddingInline: "20px",
                }}
              >
                SAVE CHANGES
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
