'use client'
import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

function Page() {
    const theme = useTheme();
    const orange = theme.palette.customColors.orange;
    const white = theme.palette.customColors.primaryWhite;
    // const dark1 = theme.palette.customColors.primaryDark1;
    const dark2 = theme.palette.customColors.primaryDark2;

  return (
    <Box sx={{position:'relative'}}>
        <Box sx={{width:'100%',zIndex:23,padding:'50px',position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
            <Typography variant='h1' sx={{fontSize:{md:'10vh',xs:'5vh'},textAlign:'center'}}>
                Finally, a global hub for changemakers <span style={{background:`linear-gradient(to bottom,${orange},${dark2})`,backgroundClip:'text',color:'transparent'}}> advancing climate action </span>
            </Typography>
        </Box>
        {/* wrapper start */}
        <Box sx={{width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-4.6rem',
        display: 'flex',
        overflow:'hidden',
        position: 'relative',
        padding:'15% 0'}}>
            {/* circle 1 */}
            <Box sx={{width:` 30.625rem`,
                height: `30.625rem`,
                border: `4px dotted ${orange}`,
                borderRadius: '100%',
                flex: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                animation: 'rotation_left 180s infinite linear',
                '@keyframes rotation_left':{
                    'from' : {
                        transform: 'rotate(0deg)'
                      },
                      'to' : {
                        transform: 'rotate(359deg)'
                      }
                }}}>
            </Box>
            {/* circle 1 */}

            {/* circle 2 */}
            <Box sx={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                position: 'absolute',
                top: '0%',
                bottom: '0%',
                left:' 0%',
                right: '0%'
            }}>
                <Box sx={{
                    width: '42.625rem',
                    height: '42.625rem',
                    border: `4px dotted ${white}`,
                    borderRadius: '100%',
                    flex: 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    animation: 'rotation_right 110s infinite linear',
                    '@keyframes rotation_right':{
                        'from' : {
                            transform: 'rotate(0deg)'
                          },
                          'to' : {
                            transform: 'rotate(-359deg)'
                          }
                    }
                }}></Box>
            </Box>
            {/* circle 2 */}

            {/* circle 3 */}
            <Box sx={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                position: 'absolute',
                top: '0%',
                bottom: '0%',
                left:' 0%',
                right: '0%'
            }}>
                <Box sx={{
                    width: '53.5rem',
                    height: '53.5rem',
                    border: `4px dotted #cbc1fc`,
                    borderRadius: '100%',
                    flex: 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    animation: 'rotation_left 110s infinite linear',
                    '@keyframes rotation_left':{
                        'from' : {
                            transform: 'rotate(0deg)'
                          },
                          'to' : {
                            transform: 'rotate(359deg)'
                          }
                    }
                }}></Box>
            </Box>
            {/* circle 2 */}

        </Box>
        {/* wrapper end */}

    </Box>
  ) 
}

export default Page