"use client";
import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import SettingHeader from "../SettingHeader";

// icon 
import ShareIcon from '@mui/icons-material/Share';
import CodeIcon from '@mui/icons-material/Code';
// import UncontrolledRte from '@/components/richTextEditor/UncontrolledRte';
const buttonData = [
  {
    name : 'Share',
    icon : <ShareIcon/>,
    link : '/'
  },
  {
    name : 'Embed Code',
    icon : <CodeIcon/>,
    link : '/'
  },
]
function Page() {
  const theme = useTheme();
  const router = useRouter();
  const white = theme.palette?.customColors.primaryWhite;
  return (
    <div>
      <Box
        sx={{
          width: { md: "80%", xs: "95%" },
          margin: "0 auto",
          padding: "3% 0",
        }}
      >
        <SettingHeader />
        <Typography
          onClick={() => router.back()}
          sx={{
            textDecoration: `underline solid ${white}`,
            margin: "20px 0px",
            "&:hover": { cursor: "pointer" },
          }}
        >
          ← Back to Settings
        </Typography>
        <Typography sx={{ margin: "3% 0%" }}>
          Use the code below to embed checkout for this event on another
          website. To fine tune how the ticket types are displayed, edit the
          height and width attributes.
        </Typography>
        <Box
          sx={{
            background: theme.palette.customColors.primaryDark2,
            fontSize: '2.5vh',
            padding: "30px",
            borderRadius: "20px",
            margin: "3% 0",
            boxShadow: `0 8px 102px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.18
            )}`,
          }}
        >
          &lt; iframe <br />
          &nbsp;&nbsp;&nbsp;
          {`src="https://embed.Hilink/ticket-iframe/673396227a3f627167ddb765/"`}{" "}
          <br />
          &nbsp;&nbsp;&nbsp; {`height='600px'`} <br />
          &nbsp;&nbsp;&nbsp; {`width='100%'`} <br />
          &nbsp;&nbsp;&nbsp; {`style="border: none"`} <br />
          &gt; &lt; /iframe &gt; <br />
        </Box>
        <Box sx={{display:'flex',gap:2,flexDirection:{md:'row',xs:'column'}}}>
        {
          buttonData.map((item)=>{
            return(
                <Button  key={item.name} startIcon={item.icon} sx={{paddingInline:'20px',borderRadius:'5px',background:theme.palette.customColors.orange,color:theme.palette.customColors.primaryWhite,width:{md:'fit-content',xs:'fit-content'}}}>{item.name}</Button>
              )
            })
          }
        </Box>
      </Box>
    </div>
  );
}

export default Page;
