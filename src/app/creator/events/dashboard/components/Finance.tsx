import { Box, Button, Divider, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import Image from "next/image";
import UsFlag from "../../../../../../us-flag.png";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from 'next/navigation';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const viewInfo = [
  {
    name :'Name',
  },
  {
    name :'Address',
  },
  {
    name :'Phone Number',
  },
  {
    name :'Date of Birth',
  },
  {
    name :'ID Verification',
  },
  {
    name :'Business Website',
  },
  {
    name :'Business Industry',
  },
  {
    name :'Terms of Service Acceptance',
  },
  {
    name :'Business Statement Descriptor (Business Name)',
  },
]

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

function Finance() {
  const theme = useTheme()
  const router = useRouter()

  const [isView,setIsView] = React.useState(false);
  // const handleOpenView = () => setIsView(true);
  // const handleCloseView = () => setIsView(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [custom,setCustom] = React.useState(false);
  const handleCustomOpen = () => setCustom(true);
  const handleCustomClose = () => setCustom(false);

  // select 
  // const [age, setAge] = React.useState('');
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };


  return (
    <Box sx={{ width: { md: "80%", xs: "95%" }, margin: "2% auto" }}>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ width: { md: "40%", xs: "100%" } }}>
            {/* account start  */}
            <Box
              sx={{
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                Account Status
              </Typography>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
              />

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>Sell Tickets</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    sx={{
                      border: "1px solid #ff914d",
                      borderRadius: "25px",
                      color: "#ff914d",
                      padding: "5px 20px",
                    }}
                  >
                    disabled
                  </Button>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>
                    Transfer Balance
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    sx={{
                      border: "1px solid #ff914d",
                      borderRadius: "25px",
                      color: "#ff914d",
                      padding: "5px 20px",
                    }}
                  >
                    disabled
                  </Button>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
              </Box>
              {/* disabled box end */}

              <Typography
              onClick={()=>setIsView((prev)=>!prev)}
                sx={{
                  color: "#fff",
                  textDecoration: "underline 1px solid",
                  textAlign: "center",
                  margin: "25px 0px 20px",
                  cursor: "pointer",
                }}
              >
                View Info Requirements
              </Typography>

              { isView && <Box>
                {
                  viewInfo.map((item)=>{
                    return(
                      <Typography key={item.name} sx={{marginTop:'5px',display:'flex',alignItems:'center'}}> <span style={{fontSize:'5px',marginRight:'13px'}}>⚪</span> {item.name}</Typography>
                    )
                  })
                }
              </Box>}

              <Button
                sx={{
                  borderRadius: "5px",
                  color: "#fff",
                  background: "#ff914d",
                  width: "100%",
                  padding: "5px",
                  textTransform: "capitalize",
                  fontSize: "18px",
                  margin:'20px 0 0'
                }}
              >
                Submit Required Info
              </Button>
            </Box>
            {/* account end  */}

            {/* balance start  */}
            <Box
              sx={{
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "3%",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                Balance
              </Typography>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
              />

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>Available</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                  {/* <HelpIcon sx={{color:'#fff',fontSize:'30px',marginLeft:'5px'}}/> */}
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>Pending</Typography>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>
                    Instant Available
                  </Typography>
                  <HelpIcon
                    sx={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>$0.00</Typography>
                </Box>
              </Box>
              {/* disabled box end */}
            </Box>
            {/* balance end  */}

            {/* setting start  */}
            <Box
              sx={{
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "3%",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                Settings
              </Typography>
              <Divider
                sx={{ background: "#ff914d", opacity: 0.4, margin: "3% 0%" }}
              />

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>Country</Typography>
                </Box>
                <Box>
                  <Image
                    src={UsFlag}
                    alt="mailchimp-logo"
                    height={30}
                    width={30}
                  ></Image>
                  {/* <Typography sx={{color:'#fff'}}>$0.00</Typography> */}
                  {/* <HelpIcon sx={{color:'#fff',fontSize:'30px',marginLeft:'5px'}}/> */}
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>Currency</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>USD</Typography>
                </Box>
              </Box>
              {/* disabled box end */}

              {/* disabled box start  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "3% 0%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "#fff" }}>
                    Instant Available
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>EVENTS BY TEST</Typography>
                </Box>
              </Box>
              {/* disabled box end */}

              <Typography
                sx={{ color: "#fff", textAlign: "center", marginTop: "20px" }}
              >
                Payout Schedule: Manual
              </Typography>
            </Box>
            {/* setting end  */}

            {/* FinanceBtnCard start  */}
            <Box
              sx={{
                minHeight: "200px",
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "3%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                BANKS & DEBIT CARDS
              </Typography>
              <Box>
                <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
                <Button
                onClick={handleOpen}
                  sx={{
                    width: "100%",
                    background: "#ff914d",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "5px",
                    borderRadius: "5px",
                    marginTop: "15px",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  + Add Bank Account
                </Button>

          {/* Popup end  */}
              </Box>
            </Box>
            {/* FinanceBtnCard end  */}

            {/* FinanceBtnCard start  */}
            <Box
              sx={{
                minHeight: "200px",
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "3%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                Custom Fees
              </Typography>
              <Box>
                <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
                <Button 
                onClick={handleCustomOpen}
                  sx={{ 
                    width: "100%",
                    background: "#ff914d",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "5px",
                    borderRadius: "5px",
                    marginTop: "15px",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  Add Custom Fee
                </Button>
              </Box>
            </Box>
            {/* FinanceBtnCard end  */}

            {/* FinanceBtnCard start  */}
            <Box
              sx={{
                minHeight: "200px",
                border: "1px solid #ff914d",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "3%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                DISPUTES
              </Typography>
              <Box>
                <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
                <Button 
                onClick={()=>router.push(`/disputes`)}
                
                  sx={{
                    width: "100%",
                    background: "#ff914d",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "5px",
                    borderRadius: "5px",
                    marginTop: "15px",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  Check Disputes
                </Button>
              </Box>
            </Box>
            {/* FinanceBtnCard end  */}
          </Box>
          <Box sx={{ width: { md: "55%", xs: "100%" } }}>
            <Box
              sx={{
                minHeight: "280px",
                border: "1px solid #ff914d",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}
              >
                PAYOUTS
              </Typography>
              <Box>
                <Divider sx={{ background: "#ff914d", opacity: 0.4 }} />
                <Typography
                  sx={{ color: "#fff", textAlign: "center", margin: "2% 0%" }}
                >
                  You currently have no payment history.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

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
                      {" "}
                      Add Bank Account
                    </Typography>

                    {/* Account Holder name start */}
                    <Box sx={{marginTop:'3%'}}>
                      <TextField
                        autoComplete="off"
                        id="outlined-basic"
                        // label="venue Name"
                        placeholder="Account Holder Name"
                        size="small"
                        variant="outlined"
                        sx={{
                          // background: "rgba( 32, 37, 36, 0.25 )",
                          // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                          background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
                    {/* Account Holder name end  */}

                    {/* Routing Number start */}
                    <Box sx={{marginTop:'3%'}}>
                      <TextField
                        autoComplete="off"
                        id="outlined-basic"
                        // label="venue Name"
                        placeholder="Routing Number"
                        size="small"
                        variant="outlined"
                        sx={{
                          background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
                    {/* Routing Number end  */}

                    {/* Account Number start */}
                    <Box sx={{marginTop:'3%'}}>
                      <TextField
                        autoComplete="off"
                        id="outlined-basic"
                        // label="venue Name"
                        placeholder="Account Number"
                        size="small"
                        variant="outlined"
                        sx={{
                          background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                          boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                          // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
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
                    {/* Account Number end  */}


                    <Button
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
                        marginTop:'3%'
                      }}
                      variant="contained"
                      //   align="center"
                      //   mb={4}
                    >
                      Add Bank Account
                    </Button>
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
                </Modal>
                {/* modal 1 end  */}

                {/* model 2  */}
                <Modal
                  open={custom}
                  onClose={handleCustomClose}
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
                      Add Custom Fees
                    </Typography>
                    <Typography sx={{margin:'20px 0',textAlign:'center'}}>This fee will be active for all events under this group.</Typography>  
                    {/* Account Holder name start */}
                    <Box sx={{marginTop:'3%'}}>
                      <TextField
                        autoComplete="off"
                        id="outlined-basic"
                        // label="venue Name"
                        placeholder=" Name of Fee"
                        size="small"
                        variant="outlined"
                        sx={{
                          // background: "rgba( 32, 37, 36, 0.25 )",
                          // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                          background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                          backdropFilter: "blur( 4px )",
                          width: "100%",
                          "& .MuiOutlinedInput-root": {
                            color: "#ff914d",
                            fontFamily: "Arial",
                            fontWeight: "noraml",
                            borderRadius:'25px',
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
                    </Box>
                    {/* Account Holder name end  */}

                    <Box sx={{margin:'3% 0',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:{md:'row',xs:'column'}}}>
                      <Box sx={{width:{md:'10%',xs:'100%'}}}>
                      <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                        <Select sx={{background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              border:`1px solid ${theme.palette.customColors.orange}`,borderRadius:'20PX'}} 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          // label="Age"
                          size="small"
                          // onChange={handleChange}
                        >
                          <MenuItem value='%'>%</MenuItem>
                          <MenuItem value='$'>$</MenuItem>
                        </Select>
                      </FormControl>
                      </Box>
                      <Box sx={{width:{md:'88%',xs:'100%'}}}>
                        <TextField
                          autoComplete="off"
                          id="outlined-basic"
                          // label="venue Name"
                          placeholder=" Name of Fee"
                          size="small"
                          variant="outlined"
                          sx={{
                            // background: "rgba( 32, 37, 36, 0.25 )",
                            // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                           
                                // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                            backdropFilter: "blur( 4px )",
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                              background: `${hexToRGBA(theme.palette.customColors.primaryDark1,0.2)}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                              color: "#ff914d",
                              fontFamily: "Arial",
                              fontWeight: "noraml",
                              borderRadius:'25px',
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
                      </Box>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:{md:'row',xs:'column'}}}>
                      <Box sx={{width:{md:'48%',xs:'100%'}}}>
                        <Button
                        sx={{
                          color: theme.palette.customColors.primaryWhite,
                          background: theme.palette.customColors.orange,
                          backdropFilter: "blur( 4px )",
                          textTransform: "uppercase",
                          width: "100%",
                          mb: 4,
                          align: "center",
                          marginTop:'3%'
                        }}
                        variant="contained"
                        //   align="center"
                        //   mb={4}
                      >
                        cancle
                        </Button>
                      </Box>
                      <Box sx={{width:{md:'48%',xs:'100%'}}}>
                        <Button
                        sx={{
                          color: theme.palette.customColors.primaryWhite,
                          background: theme.palette.customColors.orange,
                          backdropFilter: "blur( 4px )",
                          textTransform: "uppercase",
                          width: "100%",
                          mb: 4,
                          align: "center",
                          marginTop:'3%'
                        }}
                        variant="contained"
                        //   align="center"
                        //   mb={4}
                      >
                        create fee
                      </Button>
                      </Box>
                    </Box>

                  




                    <CloseIcon
                      onClick={handleCustomClose}
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
                {/* model 2 end */}
      </div>
    </Box>
  );
}

export default Finance;
