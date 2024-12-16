import React, { useState } from 'react'
import {
    Box,
    // Button,
    Typography,
    useTheme,
  } from "@mui/material";
//   import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
//   import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
  

function Buy(props:any) {
    const [number,setNumber] = useState(0)

    const [create, setCreate] = React.useState(false);
    // const handleOpenCreate = () => setCreate(true);
    // const handleCloseCreate = () => setCreate(false);

    const theme = useTheme();
    const orange = theme.palette.customColors.orange;
    const white = theme.palette.customColors.primaryWhite;
    const dark1 = theme.palette.customColors.primaryDark1;
  return (
    <div>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'5%'}}>
            <Box>
                <Typography variant="subtitle1">{props.title}</Typography>
                <Typography variant="subtitle1">${props.price}</Typography>
                <Typography variant="subtitle1">{props.subtitle}</Typography>
            </Box>
            <Box>
                 {/* <AddCircleIcon onClick={handleOpenCreate}  sx={{cursor:'pointer'}}/>    */}
                 {<><Box sx={{width:'fit-content',display:'flex',gap:2,justifyContent:'space-between',alignItems:'center'}}>
                    <AddCircleIcon  sx={{cursor:'pointer'}} onClick={()=>setNumber(number+1)}/>  
                    {number > 0 && <><Typography>{number}</Typography> 
                    <RemoveCircleIcon sx={{cursor:'pointer'}} onClick={()=>setNumber(number-1)}/></>}
                </Box>
              
                    {/* <Box sx={{position:'fixed',zIndex:29,left:'50%',right:'50%',transform:'translate(-50%,-50%)',bottom:'-1%',width:{md:'50%',xs:'95%'},backdropFilter:'blur(20px)',padding:'20px',borderRadius:'20px'}}>
                        <Box sx={{display:'flex',gap:2}}>
                            <ConfirmationNumberIcon/>
                            <Typography>{props.title}</Typography>
                        </Box>
                        <Box sx={{margin:'3% 0'}}>
                        <Button sx={{paddingInline:'20px',borderRadius:'25px',width:'100%',background:orange,color:white}}>CHECKOUT - ${number}.00</Button>
                        </Box>
                    </Box> */}
                
                </>
                }
            </Box>
            
        </Box>

       
    </div>
  )
}

export default Buy