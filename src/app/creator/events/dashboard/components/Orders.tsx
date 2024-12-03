import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  Typography,
  useTheme
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
// icon
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from '@mui/icons-material/Close';

// import { FontSize } from 'mui-tiptap';
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

// modal 

const checkData = [
  {
    name:'Financed Orders'
  },
  {
    name:'Refunded Orders'
  },
  {
    name:'Scanned Orders'
  },
  {
    name:'Disputed Orders'
  },
  {
    name:'Table Orders'
  },
  {
    name:'Canceled Orders'
  },
  {
    name:'Kickback Orders'
  },
]

import Modal from '@mui/material/Modal';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "30%", xs: "100%" },
  bgcolor: "#151618",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function Orders() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();
  const theme = useTheme()
  const orange = theme.palette.customColors.orange
  const white = theme.palette.customColors.primaryWhite

  return (
    <div>


      {/* modal start  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{textAlign:'center'}}>
                <Typography variant="h2">Apply Filter</Typography>
            </Box>
            <Box sx={{margin:'3% 0'}}>
                {
                  checkData.map((item)=>{
                    return(
                      <FormGroup key={item.name}>
                        <FormControlLabel control={<Checkbox sx={{color:orange}} />} label={item.name} />
                      </FormGroup>
                    )
                  })
                }
            </Box>
            <Box sx={{textAlign:'center'}}>
            <Button sx={{background:orange,paddingInline:'20px',color:white}}>Confirm</Button>
            </Box>
            <CloseIcon onClick={handleClose} sx={{position:'absolute',right:'5%',top:'5%',color:white,'&:hover':{color:orange,cursor:'pointer'}}}/>
        </Box>
      </Modal>
      {/* modal end  */}

    {/*  */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "3% auto",
          width: "80%",
        }}
      >
        <Box onClick={() => router.push("/creator/events/dashboard")}>
          <ArrowCircleLeftIcon
            sx={{
              color: "#ff914d",
              fontSize: "45px",
              marginRight: "20px",
              cursor: "pointer",
            }}
          />
        </Box>
        <Typography
          variant="h2"
          sx={{ color: "#fff", fontSize: "35px", fontWeight: "bold" }}
        >
          Orders
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: { md: "15%", xs: "100%" },
            margin: { md: "0", xs: "3% 0" },
          }}
        >
          <Button
            onClick={handleOpen}
            sx={{
              width: "100%",
              background:
                "linear-gradient(to right bottom, #22ccee, #36bffa, #a4bcfd, #d444f1, #ba24d5)",
              color: "#fff",
              padding: "8px 20px",
              fontSize: "18px",
            }}
          >
            FILTER
          </Button>
        </Box>
        <Box sx={{ width: "80%" }}>
          {/* search bar start  */}
          <Box
            sx={{
              p: "2px 14px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "1px solid #ff914d",
              //   margin: "2% auto 0",
              borderRadius: "20px",
              background: "rgba( 255, 145, 77, 0.25 )",
              //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
            }}
          >
            {/* <IconButton sx={{ p: '10px' }} aria-label="menu"> */}
            {/* <MenuIcon /> */}
            <SearchIcon sx={{ color: "#fff" }} />
            {/* </IconButton> */}
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#ff914d" }}
              placeholder="Search (Event Name,Email,Order #)"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>
          {/* search bar end  */}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          background: "#151618",
          padding: "15px",
          borderRadius: { md: "100px", xs: "10px" },
          width: "80%",
          margin: { md: "3% auto", xs: "5% auto 10%" },
        }}
      >
        <Box sx={{ width: { md: "25%", xs: "45%" } }}>
          <Avatar
            sx={{
              bgcolor: "#202524",
              margin: { md: "0", xs: "0 auto 12%" },
              marginBottom: "3%",
              width: "150px",
              height: "150px",
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              transition: "all .3s linear",
              "&:hover": {
                transform: "scale(0.8)",
              },
            }}
          >
            <PersonIcon sx={{ color: "#ff914d", fontSize: "18vh" }} />
          </Avatar>
        </Box>
        <Box
          sx={{ width: { md: "75%", xs: "80%" }, cursor: "pointer" }}
          onClick={() => router.push("/creator/events/dashboard/attendee")}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Order #7314206 - 11/13/2024, 11:18 AM test
          </Typography>
          <Divider
            sx={{ background: "#ff914d", opacity: 0.2, margin: "1px 0%" }}
          />
          <Typography
            sx={{
              color: "#fff",
              textAlign: { md: "left", xs: "center" },
              fontSize: "24px",
            }}
          >
            Sartaj Gill
          </Typography>
          <Typography
            sx={{ color: "#fff", textAlign: { md: "left", xs: "center" } }}
          >
            $0.00
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Orders;
