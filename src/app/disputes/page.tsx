"use client"
import { Box, Typography,Divider, useTheme} from '@mui/material'
import React from 'react'
// import { styled } from "@mui/material/styles";
// import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { useRouter } from 'next/navigation';


const txtdata = [
    {
        name:'Dispute'
    },
    {
        name:'Order'
    },
    {
        name:'Customer Name'
    },
    {
        name:'Tracking Link'
    },
    {
        name:'Disputed Amount'
    },
    {
        name:'Dispute Fee'
    },
    {
        name:'Dispute Status'
    },
    {
        name:'Curator Status'
    }
]

function Page() {
    const theme = useTheme()
    const router = useRouter()
    const orange = theme.palette.customColors.orange;
    const white = theme.palette?.customColors.primaryWhite;
  return (
    <div>
        <Box sx={{width:{md:'80%',xs:'95%'},margin:'0 auto'}}>
            <Typography onClick={()=>router.back()} sx={{margin:'2% 0',textDecoration:`underline solid ${white}`,cursor:'pointer'}}>← Back to Finance</Typography>

            <Box>
                <Typography variant='h1' sx={{fontWeight:'bold'}}>Disputes</Typography>
            </Box>

            <Divider sx={{background:orange,opacity:0.4,margin:'2% 0'}}></Divider>

            <Typography>Posh automatically fights disputes (chargebacks) for you. View their status and other info below.</Typography>

            <Box sx={{display:'flex',justifyContent:'space-between',margin:'2% 0',flexWrap:'wrap'}}>

                {
                    txtdata.map((item)=>{
                        return(
                            <Typography key={item.name}>{item.name}</Typography>
                        )
                    })
                }

            </Box>

        </Box>
      
    </div>
  )
}

export default Page
