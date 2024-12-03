"use client"
import React, { useState } from 'react'
// icon
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import PanoramaIcon from '@mui/icons-material/Panorama';
import { Box, Button, Divider,Typography,useTheme } from '@mui/material';
// import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { useRouter } from 'next/navigation';

function AccountPage() {

  const theme = useTheme()
  const router = useRouter()
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
        icon:<VisibilityIcon/>,
        name:'View Profile',
        link:'/profile'
    },
    {
        icon:<SettingsIcon/>,
        name:'Account Settings',
        link:'/dashboard/account/settings'
    },
    {
        icon:<AddCircleIcon/>,
        name:'Throw Your Own Event',
        link:'/eventType/'
    },
    {
        icon:<LogoutIcon/>,
        name:'Logout',
        link:'/'
    },
  ]  

 const personData = [
    {
        icon:<EmailIcon/>,
        name:'gills1enterprises@gmail.com',
        link:'/'
    },{
        icon:<PersonAddIcon/>,
        name:'Joined November 2024',
        link:'/'
    },
    {
        icon:<PhoneIcon/>,
        name:'15862653825',
        link:'/'
    }
 ]


  return (
    <Box sx={{background:'#151618',padding:'5% 0%'}}>
        {/* account page image start  */}
        <Box sx={{width:{md:'50%',xs:'90%'},margin:'0 auto'}}>
            <Box sx={{width:'100%',margin:'0 auto',display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
                <Box  
                        sx={{
                            width: "150px",
                            // height: '50vh',
                            minHeight: "150px",
                            // margin:'0 auto',
                            padding:'5%',
                            // margin: { md: "0%", xs: "0% auto 6%" },
                            backgroundImage: AccountImage ? `url(${AccountImage})` : `linear-gradient(to right bottom,${orange},${dark2})`,
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            objectFit: "cover",
                            borderRadius: "50%",
                            transition: "all 0.1s linear",
                            position: "relative",
                            "&:hover": {
                                cursor:'pointer',
                                // transform:'scale(1.1)'
                                // boxShadow:'0px 0px 19px 20px rgba(255,145,77,0.12)',
                                // border:'1px solid #ff914d',
                                backgroundColor: dark1,
                                // backgroundBlendMode:'hard-light',
                                opacity:'0.6'
                            }
                        }}
                    >
                    
                    {/* profile image end  */}
                </Box>
                <Box sx={{width:'fit-content',marginLeft:'-20px'}}>
                                
                                {AccountImage ? (
                                <Button
                                sx={{background:'transparent',border:'none',boxShadow:'none',color:orange,borderRadius:'10px','&:hover':{ boxShadow:'none'}}}
                                    variant="contained"
                                    onClick={() => setAccountImage(null)}
                                >
                                    
                                    <PhotoCameraIcon sx={{fontSize:'25px'}}/>
                                </Button>
                                ) : (
                                <>
                                <label htmlFor="file-upload" style={{cursor:'pointer'}}>
                                <CloudUploadIcon sx={{color:orange,fontSize:'25px'}}/>
                                </label>
                                <input id="file-upload" style={{border:`1px solid ${orange}`,width:'150px',display:'none',padding:'5px 25px'}} type="file" accept="image/*" onChange={handleAccountImage} />
                                </>
                                )}
                </Box>
            </Box>
            {/* account page image end  */}
            <Typography sx={{fontSize:'40px',textTransform:'capitalize',fontWeight:'bold',textAlign:'center',margin:'1% 0'}}>Sartaj Gill</Typography>

            <Box sx={{width:'100%'}}>
            <Divider sx={{background:orange,opacity:0.4,margin:'3% 0%'}}/>

            {
                btnData.map((item)=>{
                    return(
                        <Button  onClick={() => router.push(`${item.link}`)} startIcon={item.icon} key={item.name} sx={{background:orange,color:'#fff',width:'100%',marginBlock:'5px',transition:'all .1s linear','&:hover':{cursor:'pointer',transform:'scale(1.02)'}}}>{item.name}</Button>
                    )
                })
            }
            
            <Divider sx={{background:orange,opacity:0.4,margin:'3% 0%'}}/>



            </Box>
            {
                personData.map((item)=>{
                    return(
                    <Box key={item.name} sx={{display:'flex',alignItems:'center','& svg':{color:'#fff',marginRight:'10px','&:hover':{color:orange,cursor:'pointer'}}}}>
                        {item.icon}
                        <Typography sx={{margin:'5px 0px'}}>{item.name}</Typography>
                    </Box>
                    )
                })
            }
        </Box>
    </Box>
  )
}

export default AccountPage