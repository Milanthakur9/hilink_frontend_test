"use client";
import {
  Box,
  Button,
  Container,
  Divider,
//   InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import Image from "next/image";
import Logo from "../../assets/branding/HL_Clean_Transparent_white.svg";
import CarouselComponent from '../e/slider'
// icon
import PlaceIcon from "@mui/icons-material/Place";
import Buy from "./Buy";
// import CustomCursor from '../homepage/FluidCursor' 
// import FluidCursor from "../homepage/FluidCursor";
// import type { StaticImageData } from 'next/image';
import eImage from "../../assets/background_patterns/eimage.webp"
import guest1 from "../../assets/background_patterns/guest1.webp"
import guest2 from "../../assets/background_patterns/guest2.webp"
import guest3 from "../../assets/background_patterns/guest3.webp"
import guest4 from "../../assets/background_patterns/guest4.webp"
import guest5 from "../../assets/background_patterns/guest5.webp"
// slider 
// import React, { useState } from "react";


interface EventListType {
  title: string;
  subtitle?: string;
  mark?: string;
  location: string;
  event: string;
  name: string;
  address: string;
  rsvpLink?: string;
  ticketLink?: string;
}

const typoData = [
  {
    name : 'Our Annual Santa Con party is back and we’re doing it bigger than last year at HK Hall ! 1000+ in attendance'
  },
  {
    name : 'Live Aerial Performance at Midnight'
  },
  {
    name : 'December 13th'
  },
  {
    name : '11:30-4M'
  },
  {
    name : '18+ to enter 21+ to drink, Physical goverment ID Required'
  },
  {
    name : 'Santa Hats are strongly Encouraged'
  },
  {
    name : 'Tickets will be sold out so locks yours in now ;)'
  },
  {
    name : 'Early arrival is recomended for expedited entry'
  },
]

const imageList = [
  {
    path:guest1
  },
  {
    path:guest2
  },
  {
    path:guest3
  },
  {
    path:guest4
  },
  {
    path:guest5
  },
  {
    path:guest1
  },
  {
    path:guest2
  },
  {
    path:guest3
  },
  {
    path:guest4
  },
  {
    path:guest5
  },
  {
    path:guest1
  },
  {
    path:guest2
  },
  {
    path:guest3
  },
  {
    path:guest4
  },
  {
    path:guest5
  },
  {
    path:guest1
  },
  {
    path:guest2
  },
  {
    path:guest3
  },
  {
    path:guest4
  },
  {
    path:guest5
  },
  {
    path:guest1
  },
  {
    path:guest2
  }
]


function Page() {
    const theme = useTheme();
    const orange = theme.palette.customColors.orange;
    const white = theme.palette.customColors.primaryWhite;
    const dark1 = theme.palette.customColors.primaryDark1;
  return (
    <div>
 
      {/* <FluidCursor /> */}
        <Box>
      <Box
        sx={{
          background:`url(${eImage.src})`,
            backgroundColor:dark1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode:'soft-light',
        }}
      >
        <Box
          sx={{ backdropFilter: "blur(35px)", width: "100%", padding: "5% 0%" }}
        >
          <Box
            sx={{
              width: { md: "80%", xs: "95%" },
              margin: "0 auto",
              display: "flex",
              flexDirection: { md: "row", xs: "column-reverse" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <Typography
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: `underline solid ${white}`,
                  },
                }}
              >
                Events by test
              </Typography>
              <Typography variant='h1' sx={{  fontWeight: "bold" }}>
              The Santa Con Christmas Party
              </Typography>
              <Typography sx={{ fontSize: "20px", margin: "2% 0 4% 0" }}>
              HK Hall <br></br> Fri, Dec 13 at 11:30 PM - 4:00 AM (EST)
              </Typography>
              <Typography sx={{ fontSize: "20px", margin: "2% 0 2% 0" }}>
                {" "}
                <PlaceIcon
                  sx={{ color: theme.palette.customColors.primaryWhite }}
                />{" "}
                607 West 48th Street, New York, NY, USA
              </Typography>
              <Typography>Santa Con Christmas 2024 Festival 1500+ in attendance : Santa Hats Encouraged ; Sounds By: Dj Exxtra , TDR & More</Typography>
            </Box>
            <Box sx={{ width: { md: "45%", xs: "380px", padding: "35px" } }}>
              <Image
                src={eImage}
                style={{
                  width: "100%",
                  height: "inherit",
                  borderRadius: "20px",
                }}
                alt="dance-gif"
                height={100}
                width={100}
              ></Image>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "0% 0%",
        }}
      >


        <Box sx={{margin:'4% 0'}}>
            <Box sx={{width:{md:'60%',xs:'99%'},margin:'0 auto',background:dark1,borderRadius:'20px',padding:'20px',boxShadow: `${hexToRGBA(theme.palette.customColors.orange,0.6)} 0px 10px 20px -10px, ${hexToRGBA(theme.palette.customColors.orange,0.6)} 0px 30px 20px -45px, ${hexToRGBA(theme.palette.customColors.orange,0.6)}  0px -2px 6px 0px inset `}}>

                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Typography sx={{textDecoration:`line-through solid ${white}`}}>Pre Sale</Typography>
                    <Typography>Sold Out</Typography>
                </Box> 

                {/* buy tickets start  */}
                <Buy title='General Admission ( Will be sold out )' price={16} subtitle='Will be sold out get your tickest ASAP'/>    
                {/* buy tickets end  */}

                {/* buy tickets start  */}
                <Buy title='GA + Santa Hat ( Will be sold out !)' price={18} subtitle='General Admission + Santa Hat'/>    
                {/* buy tickets end  */}

                {/* buy tickets start  */}
                <Buy title='Ladies Group Order Good for 3' price={45} subtitle='Good for 3 Ladies'/>    
                {/* buy tickets end  */}

                {/* buy tickets start  */}
                <Buy title='VIP BALCONY TABLE & BOTTLE DM @212Groupnyc on Insta' price={350} subtitle='500Minimum spend + Tax & Gratuity DM @212Groupnyc'/>    
                {/* buy tickets end  */}

            </Box>
        </Box>

      {/* iframe part start  */}
       <Box sx={{width:{md:'70%',xs:'95%'},margin:'7% auto'}}>
       <iframe frameBorder='0' style={{width:'100%',background:dark1,borderRadius:'20px',padding:'2px',boxShadow: `${hexToRGBA(theme.palette.customColors.orange,0.6)} 0px 10px 20px -10px, ${hexToRGBA(theme.palette.customColors.orange,0.6)} 0px 30px 20px -45px, ${hexToRGBA(theme.palette.customColors.orange,0.6)}  0px -2px 6px 0px inset `}} width="957" height="402" src="https://www.youtube.com/embed/uWsLkHcYpPo" title="Y2K Halloween Party @ The Brooklyn Monarch"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       </Box>
      {/* iframe part end  */}

      {/* description start  */}
      <Box>
        {
          typoData.map((item)=>{
            return(
              <Typography variant="subtitle1" sx={{margin:'10px 0px',opacity:0.7}} key={item.name}>{item.name}</Typography>
            )
          })
        }
      </Box>
      {/* description end  */}

        <Box sx={{margin:'5% 0 2% 0'}}>
          <Divider sx={{background:`linear-gradient(to right,${orange},${dark1})`,height:'1.6px',opacity:0.4}}></Divider>
        </Box> 

        <Box>
          <Typography variant="h3">GUESTLIST</Typography>
          <Box sx={{display:'flex',justifyContent:'center',alignContent:'space-evenly',flexWrap:'wrap',gap:4,margin:'4% 0'}}>
              {
                imageList.map((item,i)=>{
                  return(
                  <Box sx={{width:'100px',height:'100px',marginTop:'10px'}} key={i}>
                        <Image style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "inherit",
                          }} height={20} width={20} src={item.path} alt="guestlist-image"></Image>
                  </Box>
                  )
                })
              }
          </Box>
        </Box>

        <Box sx={{margin:'5% 0 2% 0'}}>
          <Divider sx={{background:`linear-gradient(to right,${orange},${dark1})`,height:'1.6px',opacity:0.4}}></Divider>
          <Typography variant="h3" sx={{margin:'1% 0 4% 0'}}>PERFORMANCES</Typography>
        </Box> 

        <Box sx={{padding:'1% 0 7% 0'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
              <Box sx={{width:'120px',height:'120px'}}>
                  <Image style={{width: "100%",borderRadius: "100%",height: "100%"}} src='https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://posh-images-originals-production.s3.amazonaws.com/673ca090f8e3e1316da0b224' alt="" height={20} width={20}/>
              </Box>
              <Box sx={{marginLeft:'15px'}}>
                <Typography variant="h2">Live Aerialist</Typography>
                <Typography>View More</Typography>
                <Typography>12:59 AM - 2:00 AM</Typography>
              </Box>
            </Box>
        </Box>

        <Box>
          <Divider sx={{background:`linear-gradient(to right,${orange},${dark1})`,height:'1.6px',opacity:0.4,margin: "3% 0"}}></Divider>
          <Typography variant="h3">HK HALL</Typography>
          <Typography sx={{margin:'2% 0'}}>607 West 48th Street, New York, NY, USA</Typography>
          <Button startIcon={<PlaceIcon/>} sx={{background:orange,color:white,paddingInline:'20px'}}>OPEN IN MAPS</Button>
        </Box>  

        {/* slider start      */}
        <Box sx={{margin:'5% auto'}}>
          <CarouselComponent/>
        </Box>
        {/* slider end     */}


        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              "&:hover": {
                cursor: "pointer",
                textDecoration: `underline solid ${white}`,
              },
            }}
          >
            Events by test
          </Typography>
          <Button
            sx={{
              background: orange,
              margin: "1% 0%",
              fontWeight: "100",
              paddingInline: "20px",
              transition: "all .1s linear",
              "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
              color: `${white}`,
            }}
          >
            Contact Events by test
          </Button>
        </Box>
       
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            padding:'2% 0',
            alignItems: "center",
            justifyContent: "space-between",
            margin:{md:'0',xs:'5% 0'}
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
            }}
          >
            <Image src={Logo} alt="logo" width={100}></Image>
            <Typography
              sx={{
                textTransform: "uppercase",
                margin: { md: "0 0 0 15px", xs: "10px 0px 0" },
              }}
            >
              Terms Of Service
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                margin: { md: "0 0 0 15px", xs: "10px 0px" },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                background: theme.palette.customColors.orange,
                margin: "1% 0%",
                fontWeight: "100",
                paddingInline: "20px",
                transition: "all .1s linear",
                "&:hover": { cursor: "pointer", transform: "scale(1.05)" },
                color: `${theme.palette.customColors.primaryWhite}`,
              }}
            >
              Create Your Own Event
            </Button>
          </Box>
        </Box>

   

      </Box>
    </Box>
    </div>
  )
}

export default Page