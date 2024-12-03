import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Divider, { dividerClasses } from "@mui/material/Divider";
import Image from "next/image";
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// phone number field 
const PhoneInputStyled = styled(PhoneInput)(({ theme }) => ({
  '& .form-control': {
    width:'100%',
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
    color: theme.palette.customColors.orange,
    border:`1px solid ${theme.palette.customColors.orange}`,
  },
  '& .flag-dropdown': {
    // background: 'transparent',
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
    color: theme.palette.customColors.orange,
    border:`1px solid ${theme.palette.customColors.orange}`,
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  '& .country-list': {
    background: 'black'
  },
  '& .country-list li:hover': {
    color: 'black'
  },
  '& .country-list li[aria-selected="true"]': {
    color: 'black'
  }
}))

// interface Country {
// code: string;
// name: string;
// }


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "50%", xs: "80%" },
  bgcolor: "#151618",
  // border: '2px solid #000',

  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  borderRadius: "25px",
  p: 4,
};

const EventsByTestTeam = () => {

  const theme = useTheme()
    // const router = useRouter()

  // number field mate 
  const [phone, setNumberPhone] = React.useState<string>('')
  const handlePhoneNumberChange = (value: any, country: any) => {
    console.log(value, country)
    setNumberPhone(value)
  }


  const [isEmail,setIsEmail] = React.useState(true)
  // const handleOpenEmail = () => setIsEmail(true);
  // const handleCloseEmail = () => setIsEmail(false);

  //   model 1
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   model 2
  const [isNonHilink, setIsNonHiLink] = React.useState(false);
  const handleOpenNonHilink = () => {
    setIsNonHiLink(true);
  };

  //modal 3
  const [isSelectRole, setIsSelectRole] = React.useState(false);
  const handleOpenRole = () => {
    setIsSelectRole(true);
  };
  const handleCloseRole = () => {
    setIsSelectRole(false);
  };

  const handleCloseNonHilink = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setIsNonHiLink(false), setOpen(false);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid item xs={12} md={8} lg={6}>
        <Box sx={{ textAlign: "center", margin: "4% 0% 10% 0" }}>
          <Typography
            sx={{ color: "#fff", fontWeight: "Bold" }}
            variant="h4"
            align="center"
            mb={4}
          >
            Events by test Team
          </Typography>
          <Typography
            sx={{ color: "#fff" }}
            variant="body1"
            align="center"
            mb={4}
          >
            These people are part of your group. They are added to all of your
            events by default.
          </Typography>
          <Button
            onClick={handleOpen}
            sx={{
              color: "#fff",
              background: "#202524",
              border: "1px solid #ff914d",
              mb: 4,
              align: "center",
            }}
            variant="contained"
          >
            + Add Team Member
          </Button>
          {/* Popup start  */}
          {/* model 1  */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                sx={{
                  fontSize: "5.2vh",
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Add a Team Member to your <br /> Organization
              </Typography>
              {/* Email & phone start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "3% 0%",
                  [`& .${dividerClasses.root}`]: { mx: 2 },
                }}
              >
                <Box
                onClick={()=>setIsEmail(true)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      cursor: "pointer",
                      borderBottom: "1px solid #fff",
                    },
                  }}
                >
                  <EmailIcon
                  
                    sx={{
                      color: "#fff",
                      marginRight: "8px",
                      "&:hover": { color: "#ff914d" },
                    }}
                  />
                  <Typography sx={{ color: "#fff" }} variant="h6">
                    Email
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ background: "#fff" }}
                />
                <Box
                 onClick={()=>setIsEmail(false)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      cursor: "pointer",
                      borderBottom: "1px solid #fff",
                    },
                  }}
                >
                  <PhoneIphoneIcon
                 
                    sx={{
                      color: "#fff",
                      marginRight: "8px",
                      "&:hover": { color: "#ff914d" },
                    }}
                  />
                  <Typography sx={{ color: "#fff" }} variant="h6">
                    Phone
                  </Typography>
                </Box>
              </Box>
              {/* Email & phone end  */}

              {/* search by email  */}
             
             {isEmail ? <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="venue Name"
                placeholder="Search by email"
                size="small"
                variant="outlined"
                sx={{
                  // background: "rgba( 32, 37, 36, 0.25 )",
                  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              borderRadius:'25px',
                              color: theme.palette.customColors.orange,
                              // border: 1px solid ${theme.palette.customColors.primaryWhite},
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "1px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            :
              <PhoneInputStyled sx={{width:'100%'}}
                      country={'us'}
                      value={phone}
                      // onChange={phone => setPhone(phone)}
                      onChange={handlePhoneNumberChange}
                      countryCodeEditable={false}
                      disableCountryCode={false}
                    />
              }
              {/* search by email end  */}
              <Box sx={{ textAlign: "center", margin: "5% 0%" }}>
                <Button
                  onClick={handleOpenNonHilink}
                  sx={{
                    color: "#fff",
                    background: "#ff914d",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    border: "1px solid #ff914d",
                    textTransform: "none",
                    width: "100%",
                    mb: 4,
                    align: "center",
                  }}
                  variant="contained"
                >
                  + Add a Non-Hilink User
                </Button>

                {/* model 2 start  */}
                <Modal
                  open={isNonHilink}
                  onClose={handleCloseNonHilink}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      sx={{
                        fontSize: "5.2vh",
                        color: "#fff",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {" "}
                      Add Details for Team Member
                    </Typography>
                    {/* first & last name start  */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "3% 0%",
                      }}
                    >
                      <Box sx={{ width: "48%" }}>
                        <TextField
                          autoComplete="off"
                          id="outlined-basic"
                          // label="venue Name"
                          placeholder="First Name"
                          size="small"
                          variant="outlined"
                          sx={{
                            // background: "rgba( 32, 37, 36, 0.25 )",
                            // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              borderRadius:'25px',
                              color: theme.palette.customColors.orange,
                              backdropFilter: "blur( 4px )",
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
                      <Box sx={{ width: "48%" }}>
                        <TextField
                          autoComplete="off"
                          id="outlined-basic"
                          // label="venue Name"
                          placeholder="Last Name"
                          size="small"
                          variant="outlined"
                          sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              borderRadius:'25px',
                              color: theme.palette.customColors.orange,
                              backdropFilter: "blur( 4px )",
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
                    {/* first & last name end  */}
                    {/* Email start */}
                    <Box>
                      <TextField
                        autoComplete="off"
                        id="outlined-basic"
                        // label="venue Name"
                        placeholder="Email"
                        size="small"
                        variant="outlined"
                        sx={{
                          width: "100%",
                          "& .MuiOutlinedInput-root": {
                            background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                            boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                            borderRadius:'25px',
                            color: theme.palette.customColors.orange,
                            backdropFilter: "blur( 4px )",
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
                    {/* Email end  */}

                 
                    <Box sx={{margin:'2% 0'}}>
                      <PhoneInputStyled sx={{width:'100%'}}
                      country={'us'}
                      value={phone}
                      // onChange={phone => setPhone(phone)}
                      onChange={handlePhoneNumberChange}
                      countryCodeEditable={false}
                      disableCountryCode={false}
                    />
                    </Box>
                    {/* Phone Number end  */}

                    <Button
                      onClick={handleOpenRole}
                      sx={{
                        color: "#fff",
                        background: "#ff914d",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                        border: "1px solid #ff914d",
                        textTransform: "none",
                        width: "100%",
                        mb: 4,
                        align: "center",
                      }}
                      variant="contained"
                      //   align="center"
                      //   mb={4}
                    >
                      Continue
                    </Button>
                    <CloseIcon
                      onClick={handleCloseNonHilink}
                      sx={{
                        color: "#fff",
                        position: "absolute",
                        right: "3%",
                        top: "5%",
                        fontSize: "30px",
                        "&:hover": { color: "#ff914d", cursor: "pointer" },
                      }}
                    />
                  </Box>
                </Modal>
                {/* model 2 end  */}
              </Box>

              <CloseIcon
                onClick={handleClose}
                sx={{
                  color: "#fff",
                  position: "absolute",
                  right: "3%",
                  top: "5%",
                  fontSize: "30px",
                  "&:hover": { color: "#ff914d", cursor: "pointer" },
                }}
              />
            </Box>
            {/* model 1  end */}
          </Modal>
          {/* Popup end  */}

          {/* modal 3  */}
          <Modal
            open={isSelectRole}
            onClose={handleCloseRole}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ display: "flex", justifyContent: "space-between",padding:'5% 0' }}>
                <Box sx={{ width: "30%", textAlign: "center",padding:'10px','&:hover':{cursor:'pointer',border:`1px solid ${theme.palette.customColors.primaryWhite}`,borderRadius:'20px',boxShadow:`0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`} }}>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Doorman
                  </Typography>
                  <Image
                    style={{
                      filter: "invert(100%)",
                      margin: "4% auto",
                      padding: "2%",
                    }}
                    src="https://posh.vip/images/doorman.png"
                    height={100}
                    width={100}
                    alt="doorman"
                  ></Image>
                  <Typography >
                    Doorpeople can scan tickets and view the guestlist of any
                    group event.
                  </Typography>
                </Box>
                <Box sx={{ width: "30%", textAlign: "center",padding:'10px','&:hover':{cursor:'pointer',border:`1px solid ${theme.palette.customColors.primaryWhite}`,borderRadius:'20px',boxShadow:`0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`}  }}>
                  <Typography
                    sx={{  fontSize: "20px", fontWeight: "bold" }}
                  >
                    Host
                  </Typography>
                  <Image
                    style={{
                      filter: "invert(100%)",
                      margin: "4% auto",
                      padding: "2%",
                    }}
                    src="https://posh.vip/images/dance.png"
                    height={100}
                    width={100}
                    alt="dance"
                  ></Image>
                  <Typography >
                    {
                      `Hosts can view their sales and any revenue they've generated
                    for events they're added to.`
                    } 
                  </Typography>
                </Box>
                <Box sx={{ width: "30%", textAlign: "center",padding:'10px','&:hover':{cursor:'pointer',border:`1px solid ${theme.palette.customColors.primaryWhite}`,borderRadius:'20px',boxShadow:`0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`}  }}>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Admin
                  </Typography>
                  <Image
                    style={{
                      filter: "invert(100%)",
                      margin: "4% auto",
                      padding: "2%",
                    }}
                    src="https://posh.vip/images/admin-with-cogwheels.png"
                    height={100}
                    width={100}
                    alt="Admin"
                  ></Image>
                  <Typography >
                    Admins can view all analytics and edit any details for any
                    event they are added to.
                  </Typography>
                </Box>
              </Box>
              <CloseIcon
                onClick={handleCloseRole}
                sx={{
                  color: "#fff",
                  position: "absolute",
                  right: "3%",
                  top: "5%",
                  fontSize: "30px",
                  "&:hover": { color: "#ff914d", cursor: "pointer" },
                }}
              />
            </Box>
          </Modal>
          {/* modal 3  end  */}
        </Box>
        <Grid container justifyContent="center" alignItems="center" mb={4}>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{
                padding: "20%",
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                transition: "all .3s linear",
                borderRadius: "10px",
                "&:hover": {
                  transform: "scale(1.1)",
                  // boxShadow:'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;',
                  // border:'1px solid #ff914d'
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#202524",
                  marginBottom: "3%",
                  width: 120,
                  height: 120,
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  transition: "all .3s linear",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <PersonIcon sx={{ color: "#ff914d", fontSize: "80px" }} />
              </Avatar>
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                align="center"
                mt={2}
              >
                Sartaj Gill
              </Typography>
              <Typography
                sx={{ color: "#fff" }}
                variant="body2"
                align="center"
                mt={1}
              >
                Owner
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: "17px",
                }}
                variant="caption"
                align="center"
                mt={1}
              >
                Last Login: A day ago
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventsByTestTeam;
