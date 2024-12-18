// import { Box, Typography } from '@mui/material'
// import Image from 'next/image'
// import React from 'react'

// const imageSlid = [
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 1',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 2',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 3',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 4',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 5',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 6',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 5',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 6',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 5',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 6',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 5',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 6',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 5',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 6',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 5',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 6',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 5',
//         link: '/'
//     },
//     {
//         img: 'https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1734250509~exp=1734254109~hmac=e04fd176143a136f94af3a851752af724ae65d35d08c380a9ec41ed32bc81395&w=826',
//         description: 'Test User 6',
//         link: '/'
//     },
// ]

// function ImgSlider() {
//   return (
//     <Box sx={{
//       display: 'flex',
//       flexDirection: 'row',
//       overflow: 'hidden',
//       width: '100%',
//       position: 'relative'
//     }}>
//       {/* The sliding container */}
//       <Box sx={{
//         display: 'flex',
//         animation: 'scroll 15s linear infinite',  // Scroll animation
//         animationDirection:'alternate',
//         justifyContent: 'flex-start',  // Ensure items align horizontally
//       }}>
//         {imageSlid.map((item, index) => (
//           <Box key={index} sx={{
//             minWidth: '30%',
//             height: '250px',
//             marginRight: 2,  // Adjust spacing between images
//             flexShrink: 0,
//             textAlign: 'center'
//           }}>
//             <a href={item.link} style={{ textDecoration: 'none' }}>
//               <Box sx={{
//                 width: '100%',
//                 height: '300px',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 borderRadius: 1,
//               }}>
//                 <Image 
//                   src={item.img} 
//                   alt={item.description} 
//                   layout="responsive" 
//                   width={100} 
//                   height={100} 
//                   style={{ objectFit: 'cover' }}
//                 />
//               </Box>
//               <Typography variant="body2" sx={{ marginTop: 1 }}>
//                 {item.description}
//               </Typography>
//             </a>
//           </Box>
//         ))}
//         {/* Duplicate the slider to create an infinite loop */}
//         {imageSlid.map((item, index) => (
//           <Box key={index + 6} sx={{
//             minWidth: '30%',
//             height: '250px',
//             marginRight: 2,
//             flexShrink: 0,
//             textAlign: 'center'
//           }}>
//             <a href={item.link} style={{ textDecoration: 'none' }}>
//               <Box sx={{
//                 width: '30%',
//                 height: '200px',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 borderRadius: 1,
//               }}>
//                 <Image 
//                   src={item.img} 
//                   alt={item.description} 
//                   layout="responsive" 
//                   width={100} 
//                   height={100} 
//                   style={{ objectFit: 'cover' }}
//                 />
//               </Box>
//               <Typography variant="body2" sx={{ marginTop: 1 }}>
//                 {item.description}
//               </Typography>
//             </a>
//           </Box>
//         ))}
//       </Box>

//       {/* CSS animation keyframes */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }
//       `}</style>
//     </Box>
//   )
// }

// export default ImgSlider;




import { Box, Typography,useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import event1 from '../../../assets/background_patterns/event1.webp'
import event2 from '../../../assets/background_patterns/event2.webp'
import event3 from '../../../assets/background_patterns/event3.webp'
import event4 from '../../../assets/background_patterns/event4.webp'
import event5 from '../../../assets/background_patterns/event5.webp'
import event6 from '../../../assets/background_patterns/event6.webp'
import event7 from '../../../assets/background_patterns/event7.webp'
import event8 from '../../../assets/background_patterns/event8.webp'

const imageSlid = [
    {
        img: event1,
        description: 'Holiday Party',
        link: '/'
    },
    {
        img: event2,
        description: 'Party',
        link: '/'
    },
    {
        img: event3,
        description: 'Annual Party',
        link: '/'
    },
    {
        img: event4,
        description: 'Freshers Party',
        link: '/'
    },
    {
        img: event5,
        description: 'Theme Party',
        link: '/'
    },
    {
        img: event6,
        description: 'New Year Party',
        link: '/'
    },
    {
        img: event7,
        description: 'Night Party',
        link: '/'
    },
    {
        img: event8,
        description: 'Event Party',
        link: '/'
    },
   
]

function ImgSlider() {
  const theme = useTheme();
  const white = theme.palette.customColors.primaryWhite;
  const dark1 = theme.palette.customColors.primaryDark1;
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      width: '100%',
      position: 'relative',
      marginTop:'-24%',
    }}>
      {/* The sliding container */}
      <Box sx={{
        display: 'flex',
        animation: 'scroll 15s linear infinite',  // Scroll animation
        animationDirection:'alternate',
        justifyContent: 'flex-start',  // Ensure items align horizontally
        alignItems:'center',
        '&:hover':{animationPlayState:'paused'}

      }}>
        {imageSlid.map((item, index) => (
          <Box key={index} sx={{
            width:'26%',
            minWidth: '26%', // Change this to 32%
            // height: {md:'250px',xs:'200'},
            marginRight: 4,  // Adjust spacing between images
            flexShrink: 0,
            textAlign: 'center',
                borderRadius: '25px',
                backgroundColor: white,
            marginTop: index % 2 === 0 ? '90px' : '0',
          }}>
            <a href={item.link} style={{ textDecoration: 'none' }}>
              <Box sx={{
                width: '100%',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                padding:'15px',
                borderRadius: '5px',
              }}>
                <Image 
                  src={item.img} 
                  alt={item.description} 
                  layout="responsive" 
                  width={100} 
                  height={100} 
                  style={{ objectFit: 'cover',height:'inherit',width:'100%',borderRadius:'25px' }}
                />
              </Box>
              <Typography variant="body2" sx={{ marginTop: 1,color:'#ff914d' }}>
                {item.description}
              </Typography>
            </a>
          </Box>
        ))}
        {/* Duplicate the slider to create an infinite loop */}
        {imageSlid.map((item, index) => (
          <Box key={index + 6} sx={{
            width:'26%',
            minWidth: '26%', // Change this to 32%
            // height: '200px',
            marginRight: 2,
            flexShrink: 0,
            textAlign: 'center'
          }}>
            <a href={item.link} style={{ textDecoration: 'none' }}>
              <Box sx={{
                width: '32%',
                // height: '200px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 1,
              }}>
                <Image 
                  src={item.img} 
                  alt={item.description} 
                  layout="responsive" 
                  width={100} 
                  height={100} 
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <Typography variant="body2" sx={{ marginTop: 1,color:`${dark1} !important` }}>
                {item.description}
              </Typography>
            </a>
          </Box>
        ))}
      </Box>

      {/* CSS animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  )
}

export default ImgSlider;

