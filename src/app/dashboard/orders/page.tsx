'use client'
import CreatorFooter from '@/app/creator/events/dashboard/components/CreatorFooter'
import CreatorHeader from '@/app/creator/events/dashboard/components/CreatorHeader'
import { Box, Divider, Typography,useTheme } from '@mui/material'
import React from 'react'
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
// icon
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import WalletIcon from '@mui/icons-material/Wallet';
import InfoIcon from '@mui/icons-material/Info';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
// image 
import recentEvent from '../../../assets/background_patterns/Recentevent.webp'
import recentEvent2 from '../../../assets/background_patterns/event5.webp'
import Image from 'next/image';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { useRouter } from 'next/navigation';

var eventOrder = [
    {   
        eventImg:recentEvent,
        eventName : 'Weekend Unwind',
        eventId:'#7679425',
        eventType:'Rsvp',
        eventRsvp:0.00,
        eventPrice:0.00,
        eventTkitIcn:<ConfirmationNumberIcon/>,
        WalletIcn:<WalletIcon sx={{fontSize:'35px',cursor:'pointer'}}/>,
        InfoIcn:<InfoIcon sx={{fontSize:'35px',cursor:'pointer'}}/>,
        link:'/e/view'
    },
    {   
        eventImg:recentEvent2,
        eventName : 'Weekend Unwind',
        eventId:'#7679429',
        eventType:'Rsvp',
        eventRsvp:1.00,
        eventPrice:5.00,
        eventTkitIcn:<ConfirmationNumberIcon/>,
        WalletIcn:<WalletIcon sx={{fontSize:'35px',cursor:'pointer'}}/>,
        InfoIcn:<InfoIcon sx={{fontSize:'35px',cursor:'pointer'}}/>,
        link:'/e/view'
    },
]

function Page() {
    const theme = useTheme()
    const router = useRouter()
    var dark1 = theme.palette.customColors.primaryDark1
    var orange = theme.palette.customColors.orange
  return (
    <>
    <Box sx={{position:'fixed',right:'5%',top:'70%',width:'fit-content',display:'flex',gap:3}}>
        <Box onClick={()=>router.push(`/eventType/`)} sx={{width:'fit-content',zIndex:4}}>
        <Tooltip  title="Create New Event" arrow componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontSize: 14,
                            p: 2,
                            borderRadius: 1,
                        },
                    },
                    arrow: {
                        sx: {
                            color: 'primary.main', // Ensures arrow matches the tooltip background
                        },
                    },
                }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        </Box>
        {/* <Box onClick={()=>router.push(`/owner/groups/tickets/edit/`)} sx={{width:'fit-content',zIndex:4}}>
        <Tooltip  title="Edit Events" arrow componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontSize: 14,
                            p: 2,
                            borderRadius: 1,
                        },
                    },
                    arrow: {
                        sx: {
                            color: 'primary.main', // Ensures arrow matches the tooltip background
                        },
                    },
                }}>
            <Fab color="primary" aria-label="add">
                <EditIcon />
            </Fab>
        </Tooltip>
        </Box> */}
    </Box>

    <CreatorHeader/>
    <Box sx={{width:'90%',margin:'0 auto',padding:'5% 0 10%'}}>
    <Typography variant='h1' sx={{margin:'0% 0 3%'}}>My Orders</Typography>

        <Box sx={{display:'flex',gap:6,flexWrap:'wrap'}}>
            {
                eventOrder.map((item)=>{
                    return(
                        <Box key={item.eventId} sx={{width:{md:'33%',xs:'95%'},height:'450px',overflow:'hidden',borderRadius:'55px',position:'relative',boxShadow:`${hexToRGBA(orange, 0.3)} 0px 10px 100px -20px, ${hexToRGBA(dark1, 0.3)} 0px 30px 60px -30px, ${hexToRGBA(dark1, 0.35)} 0px -2px 6px 0px inset`,transition:'all .31s linear','&:hover':{transform:'translateY(20px)'}}}>
                            <Image style={{width:'100%',height:'inherit',objectFit:'cover',objectPosition:'center'}} src={item.eventImg} alt='recentEvent image' height={100} width={100}/>
                            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',position:'absolute',width:'100%',height:'100%',backdropFilter:'blur(10px)',left:'0',top:'0',background:`linear-gradient(180deg,${hexToRGBA(dark1, 0.094)},${hexToRGBA(dark1, 1)})`,padding:'50px 30px'}}>
                                <Box sx={{textAlign:'center'}}>
                                    <Typography variant='subtitle1' sx={{textTransform:'uppercase',letterSpacing:'2px'}}>{item.eventName}</Typography>
                                    <Typography variant='h2' sx={{margin:'4% 0'}}>Order {item.eventId}</Typography>
                                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                        <Typography variant='subtitle1' sx={{display:'flex',alignItems:'center',gap:1,fontSize:'22px'}}>  {item.eventTkitIcn} RSVP</Typography>
                                        <Typography variant='subtitle1' sx={{fontSize:'22px'}}>$ {item.eventRsvp}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{textAlign:'center'}}>
                                    <Typography variant='h2'>${item.eventPrice}</Typography>
                                    <Divider sx={{margin:'3% 0'}}></Divider>
                                    <Box sx={{display:'flex',justifyContent:'space-around'}}>
                                    <Typography>{item.WalletIcn}</Typography>
                                    <Typography onClick={()=>router.push(`${item.link}`)}>{item.InfoIcn}</Typography>
                                    </Box>
                                </Box>
                            </Box>    
                        </Box> 
                    )
                })
            }
        </Box>
    </Box>
    <CreatorFooter/>
    </>
  )
}

export default Page