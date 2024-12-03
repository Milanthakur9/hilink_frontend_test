"use client"
import React from 'react'
import { Button, Box, Divider,Typography,TextField, useTheme } from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from "next/navigation";
// icon
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// Switch
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from '@emotion/styled';

// switch start 
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({  }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#ff914d',
      '& + .MuiSwitch-track': {
        backgroundColor: '#151618',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      // color: theme.palette.grey[100],
      // ...theme.applyStyles('dark', {
      //   color: theme.palette.grey[600],
      // }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#ff914d',
    opacity: 1,
  },
}));

// switch end 

// const switchData = [
//   {
//     name:'Public Profile',
//     link:'/'
//   },
//   {
//     name:'Hide Me From Guest Lists',
//     link:'/'
//   },
//   {
//     name:`Show events I'm attending`,
//     link:'/'
//   },
//   {
//     name:'Opt in for SMS updates',
//     link:'/'
//   },
// ]

function Page() {
  const router = useRouter();
  const theme = useTheme()
  const white = theme.palette.customColors.primaryWhite;
  const orangeColor = theme.palette.customColors.orange;
  // const bgColor = 
  return (
    <Box>
      <Box sx={{width:'80%',margin:'0 auto 2%'}}>
         <Box sx={{display:'flex',alignItems:'center',margin:'2% 0%'}}>
            <ArrowCircleLeftIcon onClick={() => router.back()} sx={{fontSize:'50px',color:orangeColor,marginRight:'20px','&:hover':{cursor:'pointer'}}}/>
            <Typography sx={{fontSize:'35px',fontWeight:'bold'}}>Account Settings</Typography>
         </Box>
         <Box sx={{marginTop:'3%'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>General Settings</Typography>
            <Divider sx={{margin:'1% 0%',background:`${hexToRGBA(theme.palette.customColors.orange,0.4)}`}}></Divider>
         </Box>
         {/* Email */}
         <Box>
            <Typography sx={{fontSize:'16px',fontWeight:'normal'}}>Email</Typography>
            <Box sx={{width:{md:'50%',xs:'100%'},margin:'1% 0%'}}>
              <TextField
                id="outlined-basic"
                // label="My Event"
                placeholder='gills1enterprises@gmail.com'
                variant="outlined"
                size="small"
                sx={{
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                  background: `${hexToRGBA(theme.palette.customColors.orange,0.1)}`,
                    color: theme.palette.customColors.orange,
                    borderRadius:'30px',
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
                    color:theme.palette.customColors.orange,
                    fontWeight: "normal",
                  },
                }}
              />  
            </Box>
         </Box>
         {/* Email */}

         {/* Phone */}
         <Box>
            <Typography sx={{fontSize:'16px',fontWeight:'normal'}}>Phone</Typography>
            <Box sx={{width:{md:'50%',xs:'100%'},margin:'1% 0%'}}>
              <TextField
                id="outlined-basic"
                // label="My Event"
                placeholder='Enter Your contact Number'
                variant="outlined"
                size="small"
                sx={{
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                  background: `${hexToRGBA(theme.palette.customColors.orange,0.1)}`,
                    color: theme.palette.customColors.orange,
                    borderRadius:'30px',
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
                    color:theme.palette.customColors.orange,
                    fontWeight: "normal",
                  },
                }}
              />  
            </Box>
         </Box>
         {/* Phone */}
         {/* Privacy Settings start*/}
         <Box sx={{marginTop:'3%'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Privacy Settings</Typography>
            <Divider sx={{margin:'1% 0%',background:`${hexToRGBA(theme.palette.customColors.orange,0.4)}`}} ></Divider>
         </Box>
         {/* Privacy Settings end */}
         
          <Box sx={{display:'flex',alignItems:'center'}}>
              <Typography>Public Profile</Typography>  
              <Box sx={{marginLeft:'25px'}}>
                  <FormControlLabel
                  label=''
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    // label="iOS style"
                  />
              </Box>
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
              <Typography>Hide Me From Guest Lists</Typography>  
              <Box sx={{marginLeft:'25px'}}>
                  <FormControlLabel
                  label=''
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    // label="iOS style"
                  />
              </Box>
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
              <Typography> {`Show events I'm attending`}</Typography>  
              <Box sx={{marginLeft:'25px'}}>
                  <FormControlLabel
                  label=''
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    // label="iOS style"
                  />
              </Box>
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
              <Typography>Opt in for SMS updates</Typography>  
              <Box sx={{marginLeft:'25px'}}>
                  <FormControlLabel
                  label=''
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    // label="iOS style"
                  />
              </Box>
          </Box>

         <Box sx={{marginTop:'3%'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Account Security</Typography>
            <Divider sx={{margin:'1% 0%',background:`${hexToRGBA(theme.palette.customColors.orange,0.4)}`}}></Divider>
         </Box>        
        {/* Current Password */}
         <Box>
            <Typography sx={{fontSize:'16px',fontWeight:'normal'}}>Current Password</Typography>
            <Box sx={{width:{md:'50%',xs:'100%'},margin:'1% 0%'}}>
              <TextField
                id="outlined-basic"
                // label="My Event"
                // placeholder='⚫⚫⚫⚫⚫'
                variant="outlined"
                size="small"
                sx={{
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                  background: `${hexToRGBA(theme.palette.customColors.orange,0.1)}`,
                    color: theme.palette.customColors.orange,
                    borderRadius:'30px',
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
                    color:theme.palette.customColors.orange,
                    fontWeight: "normal",
                  },
                }}
              />  
            </Box>
         </Box>
         {/* Current Password */}

          {/* New Password */}
          <Box>
            <Typography sx={{fontSize:'16px',fontWeight:'normal'}}>New Password</Typography>
            <Box sx={{width:{md:'50%',xs:'100%'},margin:'1% 0%'}}>
              <TextField
                id="outlined-basic"
                // label="My Event"
                // placeholder='Enter Your contact Number'
                variant="outlined"
                size="small"
                sx={{
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                  background: `${hexToRGBA(theme.palette.customColors.orange,0.1)}`,
                    color: theme.palette.customColors.orange,
                    borderRadius:'30px',
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
                    color:theme.palette.customColors.orange,
                    fontWeight: "normal",
                  },
                }}
              />  
            </Box>
         </Box>
         {/* New Password */}

          {/* Confirm New Password */}
          <Box>
            <Typography sx={{fontSize:'16px',fontWeight:'normal'}}>Confirm New Password</Typography>
            <Box sx={{width:{md:'50%',xs:'100%'},margin:'1% 0%'}}>
              <TextField
                id="outlined-basic"
                // label="My Event"
                // placeholder='Enter Your contact Number'
                variant="outlined"
                size="small"
                sx={{
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.12)}`,
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                  background: `${hexToRGBA(theme.palette.customColors.orange,0.1)}`,
                    color: theme.palette.customColors.orange,
                    borderRadius:'30px',
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
                    color:theme.palette.customColors.orange,
                    fontWeight: "normal",
                  },
                }}
              />  
            </Box>
         </Box>
         {/* Confirm New Password */}
         <Button sx={{color:white,background:orangeColor,borderRadius:'6px',marginTop:'25px'}}>Save Changes</Button>
      </Box>
    </Box>
  )
}

export default Page