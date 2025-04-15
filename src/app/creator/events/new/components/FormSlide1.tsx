"use client";
// |import { useTheme } from "@mui/material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
// import HMBG from "../../hmbg.png";
import HMBG from "../../../../../../hmbg.png";
import uploadImage from "../../../../../assets/background_patterns/uploadImage.webp";
// import  Grid from '@mui/material';
import Grid from "@mui/material/Grid";
// import Drop from "./components/Drop";
// import TestSlider from "../new/components/TestSlider";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";
import EmailIcon from "@mui/icons-material/Email";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import ApartmentIcon from "@mui/icons-material/Apartment";
import RoomIcon from "@mui/icons-material/Room";
// import Tiptap from "../backup/Tiptap";
// import Editor from "../backup/Editor";
// import TxtEditor from "./TxtEditor";
// import Drop from "./Drop";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "@mui/material/Link";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import TuneIcon from "@mui/icons-material/Tune";
import Modal from "@mui/material/Modal";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import DeleteIcon from '@mui/icons-material/Delete';
// import Grid from '@mui/material';

// image list
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// popup 2
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// offcanvas mate
import Drawer from "@mui/material/Drawer";
import Checkbox from "@mui/material/Checkbox";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareIcon from "@mui/icons-material/Square";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch, { SwitchProps } from "@mui/material/Switch";
// import Stack from "@mui/material/Stack";

// import SwitchP from "./Switch";
// import dayjs, { Dayjs } from "dayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { Margin } from "@mui/icons-material";

import { styled } from "@mui/material/styles";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import withAuth from "../../../../context/hoc/withAuth";
// phone number field
const PhoneInputStyled = styled(PhoneInput)(({ theme }) => ({
  "& .form-control": {
    width: "100%",
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1, 0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(
      theme.palette.customColors.orange,
      0.12
    )}`,
    color: theme.palette.customColors.primaryWhite,
    border: `1px solid ${theme.palette.customColors.primaryWhite}`,
  },
  "& .flag-dropdown": {
    // background: 'transparent',
    background: `${hexToRGBA(theme.palette.customColors.primaryDark1, 0.2)}`,
    boxShadow: `0 8px 32px 0 ${hexToRGBA(
      theme.palette.customColors.orange,
      0.12
    )}`,
    color: theme.palette.customColors.primaryWhite,
    border: `1px solid ${theme.palette.customColors.primaryWhite}`,
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  "& .country-list": {
    background: "black",
  },
  "& .country-list li:hover": {
    color: "black",
  },
  '& .country-list li[aria-selected="true"]': {
    color: "black",
  },
}));

// interface Country {
// code: string;
// name: string;
// }

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#151618",
    color: "#ff914d",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #ff914d",
  },
}));

// tooltip end for image popup message

const names = [
  "Inter-Bold",
  "Armino",
  "Barlow",
  "Bitter",
  "Dosis",
  "Heebo",
  "Hindi",
  "Inconsolata",
  "Inter",
  "Kanit",
  "Karla",
  "Lato",
  "Lora",
  "Manrope",
  "Montserrat",
  "Mukta",
  "Mulish",
  "Nunito",
  "Oswald",
  "Poppins",
  "Quicksand",
  "Raleway",
  "Roboto",
  "Rubik",
  "Ubuntu",
];

import {
  // AppBar,
  // CssBaseline,
  IconButton,
  // ThemeProvider,
  // Toolbar,
  // createTheme,
  // useMediaQuery,
  // type PaletteMode,
} from "@mui/material";
import Image from "next/image";
import UncontrolledRte from "@/components/richTextEditor/UncontrolledRte";
import { useRouter } from "next/navigation";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import { axiosInstance } from "@/interceptor/axiosInterceptor";
interface OrganizationInfoType {
  organizationId: number;
  eventStatus: string;
  isRsvp: boolean;
  eventCapacity: number;
  eventName: string;
  startDateAndTime: string;
  endDateAndTime: string;
  venueName: string;
  address: string;
  category: string;
  description: string;
  email: string;
  phoneNo: string;
  youtubeVideoLink: string;
  showOnExplore: boolean;
  eventPassword: string;
  showGuestList: boolean;
  activity: boolean;
  eventPoster: string;
  galleryImages: [];
  createdAt?: string;
  updatedAt?: string;
}
// const currencies = [
//   {
//     value: "Festival",
//     label: "Festival",
//   },
//   {
//     value: "Nightlife",
//     label: "Nightlife",
//   },
//   {
//     value: "Individual",
//     label: "Individual",
//   },
//   {
//     value: "Crusie",
//     label: "Crusie",
//   },
//   {
//     value: "Business / Card",
//     label: "Business / Card",
//   },
// ];

// popup style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "60%", xs: "100%" },
  bgcolor: "#151618",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

interface Image {
  src: string;
}

const createStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "fit-content", xs: "90%" },
  bgcolor: `repeating-linear-gradient(80deg, rgba(0,0,0,0.1) 100%,rgba(0,0,0,0.1) 50%,rgba(0,0,0,0.4),rgba(0,0,0,0.4) 70%)`,
  border: "none",
  outline: "none",
  borderRadius: "10px",
  backdropFilter: "blur(5px)",
  boxShadow: 24,
  textAlign: "center",
  p: 8,
};

function EventPage() {
  const [create, setCreate] = React.useState(false);
  const handleOpenCreate = () => setCreate(true);
  const handleCloseCreate = () => setCreate(false);

  const [launch, setLaunch] = React.useState(false);
  const handleOpenLaunch = () => setLaunch(true);
  const handleCloseLaunch = () => setLaunch(false);

  // const theme = useTheme();
  const router = useRouter();
  const theme = useTheme();
  // theme.palette.customColors.orange
  // hexToRGBA(theme.palette.customColors.orange,0.2)

  const [images, setImages] = useState<Image[]>([]);

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // const newImages =
      Array.from(event.target.files).map((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prevImages) => [
            ...prevImages,
            { src: reader.result as string },
          ]);
        };
        reader.readAsDataURL(file); // Convert the file to a base64 URL
        return { src: reader.result as string };
      });
    }
  };

  const handleDeleteImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  // offcanvas DrawerList start
  const [Canvas, setCanvas] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setCanvas(newOpen);
  };

  const [isSalePeriod, setIsSalePeriod] = React.useState<boolean>(false);
  const [isValidForm, setIsValidForm] = React.useState<boolean>(false);
  const [isLimitQty, setIsLimitQty] = React.useState<boolean>(false);
  const [isRquireApproval, setIsRquireApproval] =
    React.useState<boolean>(false);
  const [isPass, setIsPass] = React.useState<boolean>(false);

  const DrawerList = (
    <Box
      sx={{
        "& .MuiDrawer-paper": {
          width: { sm: "50%", xs: "100%" }, // Ensure the drawer paper width is also responsive
        },
        background: "rgba( 32, 37, 36, 0.95 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8.5px )",
        padding: "10px",
      }}
      role="presentation"
    >
      <CloseIcon
        onClick={() => setCanvas(false)}
        sx={{
          position: "absolute",
          right: "2%",
          top: "2%",
          "&:hover": { cursor: "pointer" },
        }}
      />
      <Typography variant="h4" sx={{ fontSize: "20px", margin: "10px 0px" }}>
        Edit Tickts
      </Typography>
      {/* textfeild start  */}
      <TextField
        autoComplete="off"
        sx={{
          width: "100%",
          "& .MuiInput-root": {
            color: theme.palette.customColors.primaryWhite,
            fontFamily: "Arial",
            fontWeight: "normal",
          },
          // Label
          "& .MuiInputLabel-standard": {
            color: "#ff914d",
            fontWeight: "normal",
          },
        }}
        id="standard-basic"
        // label="Search for Gifs"
        placeholder="Ticket Details"
        variant="standard"
      />
      {/* textfeild end  */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2% 0% 0 0",
        }}
      >
        <Box sx={{ width: { md: "65%", xs: "100%" } }}>
          <Typography
            sx={{ fontSize: "20px", margin: "0px 0px", color: "#fff" }}
          >
            Name
          </Typography>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            // label="My Event"
            variant="outlined"
            size="small"
            sx={{
              background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.2
              )}`,
              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
              )}`,
              backdropFilter: "blur( 4px )",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: theme.palette.customColors.primaryWhite,
                fontFamily: "Arial",
                fontWeight: "noraml",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.customColors.primaryWhite,
                  borderWidth: "1px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#ff914d",
                fontWeight: "normal",
              },
            }}
          />
        </Box>
        <Box sx={{ width: { md: "30%", xs: "100%" } }}>
          <Typography
            sx={{ fontSize: "20px", margin: "5px 0px 0 0", color: "#fff" }}
          >
            Qty
          </Typography>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            // label="My Event"
            variant="outlined"
            size="small"
            sx={{
              background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.2
              )}`,
              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
              )}`,
              backdropFilter: "blur( 4px )",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: theme.palette.customColors.primaryWhite,
                fontFamily: "Arial",
                fontWeight: "noraml",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.customColors.primaryWhite,
                  borderWidth: "1px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: theme.palette.customColors.primaryWhite,
                fontWeight: "normal",
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: { md: "3% 0% 0 0", xs: "0%" },
        }}
      >
        <Box sx={{ width: { md: "fit-content", xs: "100%" } }}>
          <Typography
            sx={{ fontSize: "20px", margin: "10px 0px", color: "#fff" }}
          >
            Price
          </Typography>
        </Box>
        <Box sx={{ width: { md: "90%", xs: "100%" } }}>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            label="$"
            variant="outlined"
            size="small"
            sx={{
              background: `${hexToRGBA(
                theme.palette.customColors.primaryDark1,
                0.2
              )}`,
              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                theme.palette.customColors.orange,
                0.22
              )}`,
              backdropFilter: "blur( 4px )",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: theme.palette.customColors.primaryWhite,
                fontFamily: "Arial",
                fontWeight: "noraml",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.customColors.primaryWhite,
                  borderWidth: "1px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: theme.palette.customColors.primaryWhite,
                fontWeight: "normal",
              },
            }}
          />
        </Box>
      </Box>

      {/* Sale Period start  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: isSalePeriod ? { md: "48%", xs: "100%" } : "100%" }}>
          <Box sx={{ display: "flex", marginTop: "25px" }}>
            <Box sx={{ marginRight: "10px" }}>
              <Checkbox
                value={isSalePeriod}
                onChange={() => setIsSalePeriod((prev) => !prev)}
                sx={{ color: theme.palette.customColors.primaryWhite }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={
                  <SquareIcon
                    sx={{ color: theme.palette.customColors.primaryWhite }}
                  />
                }
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "18px", margin: "0px 0px", color: "#fff" }}
              >
                Sale Period
              </Typography>
              <Typography
                sx={{ fontSize: "16px", margin: "0px 0px", color: "#fff" }}
              >
                When can the customer purchase this ticket?
              </Typography>
            </Box>
          </Box>
        </Box>
        {isSalePeriod && (
          <Box sx={{ width: { md: "48%", xs: "100%" } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  margin: "2% 0",
                }}
              >
                <Box sx={{ width: "48%" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem label="">
                      <MobileDateTimePicker
                        sx={{
                          // Custom styling for the TextField
                          "& .MuiInputBase-root": {
                            width: "100%",
                            color: theme.palette.customColors.primaryWhite, // Change input text color
                            background: `${hexToRGBA(
                              theme.palette.customColors.primaryDark1,
                              0.2
                            )}`,
                            boxShadow: `0 8px 32px 0 ${hexToRGBA(
                              theme.palette.customColors.orange,
                              0.22
                            )}`,
                            borderRadius: "35px",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Change border color
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Hover effect
                          },
                        }}
                        defaultValue={dayjs("2022-04-17T15:30")}
                      />
                    </DemoItem>
                  </LocalizationProvider>
                </Box>
                <Box sx={{ width: "48%" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem label="">
                      <MobileDateTimePicker
                        sx={{
                          // Custom styling for the TextField
                          "& .MuiInputBase-root": {
                            width: "100%",
                            color: theme.palette.customColors.primaryWhite, // Change input text color
                            background: `${hexToRGBA(
                              theme.palette.customColors.primaryDark1,
                              0.2
                            )}`,
                            boxShadow: `0 8px 32px 0 ${hexToRGBA(
                              theme.palette.customColors.orange,
                              0.22
                            )}`,
                            borderRadius: "35px",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Change border color
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Hover effect
                          },
                        }}
                        defaultValue={dayjs("2022-04-17T15:30")}
                      />
                    </DemoItem>
                  </LocalizationProvider>
                </Box>
              </Box>
            </LocalizationProvider>
          </Box>
        )}
      </Box>
      {/* Sale Period end  */}

      {/* Valid From start */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: isValidForm ? { md: "48%", xs: "100%" } : "100%" }}>
          <Box sx={{ display: "flex", marginTop: "25px" }}>
            <Box sx={{ marginRight: "10px" }}>
              <Checkbox
                value={isValidForm}
                onChange={() => setIsValidForm((prev) => !prev)}
                sx={{ color: theme.palette.customColors.primaryWhite }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={
                  <SquareIcon
                    sx={{ color: theme.palette.customColors.primaryWhite }}
                  />
                }
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "18px", margin: "0px 0px", color: "#fff" }}
              >
                Valid From
              </Typography>
              <Typography
                sx={{ fontSize: "16px", margin: "0px 0px", color: "#fff" }}
              >
                When can the customers use these tickets?
              </Typography>
            </Box>
          </Box>
        </Box>
        {isValidForm && (
          <Box sx={{ width: { md: "48%", xs: "100%" } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  margin: "2% 0",
                }}
              >
                <Box sx={{ width: "48%" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem label="">
                      <MobileDateTimePicker
                        sx={{
                          // Custom styling for the TextField
                          "& .MuiInputBase-root": {
                            width: "100%",
                            color: theme.palette.customColors.primaryWhite, // Change input text color
                            background: `${hexToRGBA(
                              theme.palette.customColors.primaryDark1,
                              0.2
                            )}`,
                            boxShadow: `0 8px 32px 0 ${hexToRGBA(
                              theme.palette.customColors.orange,
                              0.22
                            )}`,
                            borderRadius: "35px",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Change border color
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Hover effect
                          },
                        }}
                        defaultValue={dayjs("2022-04-17T15:30")}
                      />
                    </DemoItem>
                  </LocalizationProvider>
                </Box>
                <Box sx={{ width: "48%" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem label="">
                      <MobileDateTimePicker
                        sx={{
                          // Custom styling for the TextField
                          "& .MuiInputBase-root": {
                            width: "100%",
                            color: theme.palette.customColors.primaryWhite, // Change input text color
                            background: `${hexToRGBA(
                              theme.palette.customColors.primaryDark1,
                              0.2
                            )}`,
                            boxShadow: `0 8px 32px 0 ${hexToRGBA(
                              theme.palette.customColors.orange,
                              0.22
                            )}`,
                            borderRadius: "35px",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Change border color
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite, // Hover effect
                          },
                        }}
                        defaultValue={dayjs("2022-04-17T15:30")}
                      />
                    </DemoItem>
                  </LocalizationProvider>
                </Box>
              </Box>
            </LocalizationProvider>
          </Box>
        )}
      </Box>
      {/* Valid From end */}

      {/* TxtEditor start */}
      <Box sx={{ margin: "2% 0 0 0" }}>
        <Typography
          sx={{ fontSize: "20px", margin: "10px 0px", color: "#fff" }}
        >
          Description
        </Typography>
        <UncontrolledRte />
        {/* <TxtEditor /> */}
      </Box>
      {/* TxtEditor end  */}

      {/* Accordion start 1 */}
      <Box sx={{ margin: "3% 0 0 0" }}>
        <Accordion
          defaultExpanded
          sx={{
            color: theme.palette.customColors.primaryWhite, // Change input text color
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.2
            )}`,
            boxShadow: `0 8px 32px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.22
            )}`,
            backdropFilter: "blur( 4px )",
            border: `1px solid ${theme.palette.customColors.primaryWhite}`,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: theme.palette.customColors.primaryWhite }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Ticket Options</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* data 1 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{ width: isLimitQty ? { md: "48%", xs: "100%" } : "100%" }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: "10px" }}>
                    <Checkbox
                      value={isLimitQty}
                      onChange={() => setIsLimitQty((prev) => !prev)}
                      sx={{ color: theme.palette.customColors.primaryWhite }}
                      {...label}
                      icon={<CropSquareIcon />}
                      checkedIcon={
                        <SquareIcon
                          sx={{
                            color: theme.palette.customColors.primaryWhite,
                          }}
                        />
                      }
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        margin: "0px 0px",
                        color: "#fff",
                      }}
                    >
                      Limit Purchase Qty
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        margin: "0px 0px",
                        color: "#fff",
                      }}
                    >
                      How many tickets can customers buy?
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {isLimitQty && (
                <Box sx={{ width: { md: "48%", xs: "100%" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "2% 0",
                    }}
                  >
                    {/* min part start */}
                    <Box sx={{ width: "48%" }}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          color: theme.palette.customColors.primaryWhite, // Change input text color
                          background: `${hexToRGBA(
                            theme.palette.customColors.primaryDark1,
                            0.2
                          )}`,
                          boxShadow: `0 8px 32px 0 ${hexToRGBA(
                            theme.palette.customColors.orange,
                            0.22
                          )}`,
                          backdropFilter: "blur( 4px )",
                          border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                          padding: "10px 5px",
                          borderRadius: "8px",
                        }}
                      >
                        <Box sx={{ width: "48%" }}>
                          <Typography sx={{ color: "#fff" }}>Min</Typography>
                        </Box>
                        <Box sx={{ width: "48%" }}>
                          <input
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            pattern="^-?[0-9]\d*(\.\d+)?$"
                            style={{
                              width: "100%",
                              background: "transparent",
                              color: "#ff914d",
                              outline: "none",
                              border: "none",
                              textAlign: "right",
                            }}
                            placeholder="0"
                            type="number"
                          />
                        </Box>
                      </Box>
                      {/* min part end */}
                    </Box>
                    <Box sx={{ width: "48%" }}>
                      {/* max part start  */}
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          color: theme.palette.customColors.primaryWhite, // Change input text color
                          background: `${hexToRGBA(
                            theme.palette.customColors.primaryDark1,
                            0.2
                          )}`,
                          boxShadow: `0 8px 32px 0 ${hexToRGBA(
                            theme.palette.customColors.orange,
                            0.22
                          )}`,
                          backdropFilter: "blur( 4px )",
                          border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                          padding: "10px 5px",
                          borderRadius: "8px",
                        }}
                      >
                        <Box sx={{ width: "48%" }}>
                          <Typography sx={{ color: "#fff" }}>Max</Typography>
                        </Box>
                        <Box sx={{ width: "48%" }}>
                          <input
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            pattern="^-?[0-9]\d*(\.\d+)?$"
                            style={{
                              width: "100%",
                              background: "transparent",
                              color: "#ff914d",
                              outline: "none",
                              border: "none",
                              textAlign: "right",
                              appearance: "none",
                            }}
                            placeholder="0"
                            type="number"
                          />
                        </Box>
                      </Box>
                      {/* max part end  */}
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
            {/* data  2 */}
            <Box sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ marginRight: "0px" }}>
                {/* <Checkbox sx={{color:'#ff914d'}} {...label} icon={<CropSquareIcon />} checkedIcon={<SquareIcon sx={{color:'#ff914d'}} />} /> */}
                {/* <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  // label="iOS style"
                /> */}
              </Box>
              <Box>
                <Typography sx={{ fontSize: "18px", margin: "0px 0px" }}>
                  Hide Tier
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", margin: "0px 0px", color: "#fff" }}
                >
                  Customers will not see this ticket
                </Typography>
              </Box>
            </Box>
            {/* data 3 */}
            <Box sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ marginRight: "0px" }}>
                {/* <Checkbox sx={{color:'#ff914d'}} {...label} icon={<CropSquareIcon />} checkedIcon={<SquareIcon sx={{color:'#ff914d'}} />} /> */}
                {/* <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  // label="iOS style"
                /> */}
              </Box>
              <Box sx={{ margin: "2% 0%" }}>
                <Typography
                  sx={{ fontSize: "18px", margin: "0px 0px", color: "#fff" }}
                >
                  Hide Price
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", margin: "0px 0px", color: "#fff" }}
                >
                  Customers will not see the price of this ticket
                </Typography>
              </Box>
            </Box>
            {/* data  4  */}
            <Box sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ marginRight: "0px" }}>
                {/* <Checkbox sx={{color:'#ff914d'}} {...label} icon={<CropSquareIcon />} checkedIcon={<SquareIcon sx={{color:'#ff914d'}} />} /> */}
                {/* <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  // label="iOS style"
                /> */}
              </Box>
              <Box>
                <Typography sx={{ fontSize: "18px", margin: "0px 0px" }}>
                  Disable Ticket
                </Typography>
                <Typography sx={{ fontSize: "16px", margin: "0px 0px" }}>
                  Ticket remains visible but customers will not be able to
                  purchase this ticket
                </Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Accordion end  1 */}

      {/* Accordion start  2 */}
      <Accordion
        sx={{
          color: theme.palette.customColors.primaryWhite, // Change input text color
          background: `${hexToRGBA(
            theme.palette.customColors.primaryDark1,
            0.2
          )}`,
          boxShadow: `0 8px 32px 0 ${hexToRGBA(
            theme.palette.customColors.orange,
            0.22
          )}`,
          backdropFilter: "blur( 4px )",
          border: `1px solid ${theme.palette.customColors.primaryWhite}`,
          // backdropFilter: "blur( 4px )",
          // border: "1px solid #ff914d",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: theme.palette.customColors.primaryWhite }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ color: "#fff" }}>
            Ticket Privacy Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography sx={{color:'#ff914d'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography> */}
          {/* data 1 */}
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "20px" }}>
              <Checkbox
                sx={{ color: theme.palette.customColors.primaryWhite }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={
                  <SquareIcon
                    sx={{
                      color: theme.palette.customColors.primaryWhite,
                      borderRadius: "200px",
                    }}
                  />
                }
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "18px", margin: "0px 0px", color: "#fff" }}
              >
                Require Approval
              </Typography>
              <Typography
                sx={{ fontSize: "16px", margin: "0px 0px", color: "#fff" }}
              >
                Customers must be approved by you before purchasing this ticket
              </Typography>
            </Box>
          </Box>
          {/* data 2 */}
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "20px" }}>
              <Checkbox
                value={isRquireApproval}
                onChange={() => setIsRquireApproval((prev) => !prev)}
                sx={{ color: theme.palette.customColors.primaryWhite }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={
                  <SquareIcon
                    sx={{
                      color: theme.palette.customColors.primaryWhite,
                      borderRadius: "200px",
                    }}
                  />
                }
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "18px", margin: "0px 0px" }}>
                Password Protected
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  margin: "0px 0px 10px 0px",
                }}
              >
                Customers must enter a password on the event page to purchase
                this ticket
              </Typography>
              <TextField
                autoComplete="off"
                id="outlined-basic"
                // label="My Event"
                variant="outlined"
                placeholder="Password"
                size="small"
                sx={{
                  color: theme.palette.customColors.primaryWhite, // Change input text color
                  background: `${hexToRGBA(
                    theme.palette.customColors.primaryDark1,
                    0.2
                  )}`,
                  boxShadow: `0 8px 32px 0 ${hexToRGBA(
                    theme.palette.customColors.orange,
                    0.22
                  )}`,
                  backdropFilter: "blur( 4px )",
                  // border: `1px solid ${theme.palette.customColors.primaryWhite}`,
                  transformOrigin: "center top",
                  transition: "all 0.5s linear",
                  transform: isRquireApproval ? "scale(1)" : "scale(0)",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    // color: ,
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.customColors.primaryWhite,
                      borderWidth: "1px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* Accordion end  2 */}

      <Box sx={{ display: "flex", justifyContent: "end", padding: "5% 0" }}>
        <Button
          sx={{
            color: theme.palette.customColors.primaryWhite, // Change input text color
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.2
            )}`,
            boxShadow: `0 8px 32px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.22
            )}`,
            backdropFilter: "blur( 4px )",
            border: `1px solid ${theme.palette.customColors.primaryWhite}`,
            padding: "9px 25px",
            // color: "#ff914d",
            borderRadius: "25px",
            marginRight: "15px",
          }}
        >
          Cancle
        </Button>
        <Button
          sx={{
            color: theme.palette.customColors.primaryWhite, // Change input text color
            background: `${hexToRGBA(
              theme.palette.customColors.primaryDark1,
              0.2
            )}`,
            boxShadow: `0 8px 32px 0 ${hexToRGBA(
              theme.palette.customColors.orange,
              0.22
            )}`,
            backdropFilter: "blur( 4px )",
            border: `1px solid ${theme.palette.customColors.primaryWhite}`,
            padding: "9px 25px",
            // color: "#fff",
            borderRadius: "25px",
          }}
        >
          Create New Ticket
        </Button>
      </Box>
    </Box>
  );

  // offcanvas DrawerList end

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: "100%",
  });

  const [phone, setNumberPhone] = React.useState<string>("");
  const handlePhoneNumberChange = (value: any, country: any) => {
    console.log(value, country);
    setNumberPhone(value);
  };

  const [isPhone, setPhone] = useState(false);
  // const [isEmail, setEmail] = useState();
  // const [date, setDate] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isAdvanceSetting, setIsAdvanceSetting] =
    React.useState<boolean>(false);

  const handleOpenAdvanceSetting = () => {
    setIsAdvanceSetting(true);
  };

  const handleHideAdvanceSetting = () => {
    setIsAdvanceSetting(false);
  };

  const [isYoutube, setYoutube] = React.useState<boolean>(false);

  const handleOpenYoutube = () => {
    setYoutube(true);
  };

  const handleCloseYoutube = () => {
    setYoutube(false);
  };

  const [isAddEvent, setAddEvent] = React.useState<boolean>(false);

  const handleOpenAddEvent = () => {
    setAddEvent(true);
  };
  const handleCloseAddEvent = () => {
    setAddEvent(false);
  };

  const [isGallery, setGallery] = React.useState<boolean>(false);

  const handleOpenGallery = () => {
    setGallery(true);
  };
  const handleCloseGallery = () => {
    setGallery(false);
  };

  const [isVisible, setIsVisible] = React.useState(true);
  const handleOpenVisible = () => {
    setIsVisible(true);
  };
  const handleCloseVisible = () => {
    setIsVisible(false);
  };

  const [isOpacity, setIsOpacity] = React.useState(true);
  const handleOpenOpacity = () => {
    setIsOpacity(true);
  };
  const handleCloseOpacity = () => {
    setIsOpacity(false);
  };

  const [isTitle, setIsTitle] = React.useState<string>("");

  const [showTitle, setShowTitle] = React.useState(false);
  // const handleOpenTitle = () => {
  //   setShowTitle(true);
  // };

  // const handleCloseTitle = () =>{
  //   setShowTitle(false)
  // }
  // }

  const [open2, setOpen2] = React.useState(false);
  // const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  // const [value, setValue] = React.useState("one");

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  // popup 2
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange2 = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  // popup 2 switch

  // post request

  const [eventName, setEventName] = React.useState<string | null>(null);
  const [startDate, setStartDate] = React.useState<string | null>(null);
  const [endDate, setEndDate] = React.useState<string | null>(null);
  const [venue, setVenue] = React.useState<string | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = React.useState<string | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationInfoType>({
      organizationId: 0,
      eventStatus: "",
      isRsvp: true,
      eventCapacity: 200,
      eventName: "",
      startDateAndTime: "",
      endDateAndTime: "",
      venueName: "",
      address: "",
      category: "",
      description: "",
      email: "",
      phoneNo: "",
      youtubeVideoLink: "",
      showOnExplore: false,
      eventPassword: "",
      activity: true,
      showGuestList: true,
      eventPoster: "",
      galleryImages: [],
      createdAt: "",
      updatedAt: "",
    });

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { name, value } = e.target;
      setOrganizationInfo((prev) => ({ ...prev, [name]: value }));
    } catch (error) {
      console.error("Error handling input change:", error);
    }
  };

  const updateOrganizationProfile = async () => {
    try {
      const response = await axiosInstance.post(
        `v1/event/create`,
        organizationInfo
      );
      console.log("Event posted successfully:", response.data);
    } catch (error: any) {
      console.error(
        "Error posting event:",
        error.response?.data || error.message
      );
    }
  };

  // const updateOrganizationProfile = async () => {
  //   const {
  //     eventStatus,
  //     organizationId,
  //     isRsvp,
  //     eventCapacity,
  //     eventName,
  //     startDateAndTime,
  //     endDateAndTime,
  //     venueName,
  //     address,
  //     category,
  //     description,
  //     activity,
  //     email,
  //     phoneNo,
  //     youtubeVideoLink,
  //     showOnExplore,
  //     eventPassword,
  //     showGuestList,
  //     eventPoster,
  //     galleryImages,
  //   } = organizationInfo;

  //   try {
  //     const requestData = {
  //       organizationId,
  //       eventStatus: eventStatus,
  //       isRsvp: isRsvp,
  //       eventCapacity: eventCapacity,
  //       eventName: eventName,
  //       startDateAndTime: startDateAndTime,
  //       endDateAndTime: endDateAndTime,
  //       venueName: venueName,
  //       address: address,
  //       category: category,
  //       description: description,
  //       email: email,
  //       phoneNo: phoneNo,
  //       activity: activity,
  //       youtubeVideoLink: youtubeVideoLink,
  //       showOnExplore: showOnExplore,
  //       eventPassword: eventPassword,
  //       showGuestList: showGuestList,
  //       galleryImages: galleryImages,
  //       eventPoster:
  //         "https://images.hdqwalls.com/wallpapers/bthumb/novitec-mclaren-750s-twin-turbocharged-v8-zg.jpg",
  //       // coverPhoto:
  //       //   "https://images.hdqwalls.com/wallpapers/bthumb/novitec-mclaren-750s-twin-turbocharged-v8-zg.jpg",
  //     };
  //     const response = await axiosInstance.post(`v1/event/create`, requestData);

  //     setRefresh((prev) => !prev);

  //     console.log("event post  successfully:", response.data);
  //   } catch (error) {
  //     console.error("event post Error updating profile:", error);
  //     // console.error(
  //     //   "Error updating profile:",
  //     //   error.response?.data || error.message
  //     // );
  //   }
  // };

  // post request

  // yup validation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string, value: Dayjs | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value ? value.toISOString() : "",
    }));
  };

  const handleSubmit = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      alert("Event created successfully!");
      setErrors({});
    } catch (validationErrors: any) {
      const validationErrorsMap: { [key: string]: string } = {};
      validationErrors.inner.forEach((err: any) => {
        validationErrorsMap[err.path] = err.message;
      });
      setErrors(validationErrorsMap);
    }

    console.log({ formData });
  };

  interface FormData {
    eventName: string;
    startTime: string;
    endTime: string;
    venueName: string;
    eventAddress: string;
    email: string;
    phone: string;
    // eventPoster: string;
  }

  const defaultValues: FormData = {
    eventName: "",
    startTime: "",
    endTime: "",
    venueName: "",
    eventAddress: "",
    email: "",
    phone: "",
    // eventPoster: "",
  };

  const schema = yup.object().shape({
    eventName: yup.string().required("Please enter your event name"),
    startTime: yup.string().required("Please enter the start time"),
    endTime: yup.string().required("Please enter the end time"),
    venueName: yup.string().required("Please enter the venue name"),
    eventAddress: yup.string().required("Please enter the event address"),
    email: yup.string().email("Invalid email format").optional(),
    phone: yup.string().optional(),
    // eventPoster: yup.string().optional(),
  });

  const [formData, setFormData] = useState<FormData>(defaultValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // yup validation

  return (
    <>
      {/* main start */}
      <Box
        sx={{
          backgroundImage: backgroundImage
            ? `repeating-linear-gradient(80deg, rgba(0,0,0,0.1) 100%,rgba(0,0,0,0.1) 50%,rgba(0,0,0,0.4),rgba(0,0,0,0.4) 70%),url(${backgroundImage})`
            : `repeating-linear-gradient(80deg, rgba(0,0,0,0.1) 100%,rgba(0,0,0,0.1) 50%,rgba(0,0,0,0.4),rgba(0,0,0,0.4) 70%),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.1) 100%,rgba(0,0,0,0.1) 70%)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
          backdropFilter: "blur(500px)",
          width: "100%",
          padding: { md: "0% 0%", xs: "2% 0 % 0%" },
        }}
      >
        {/* section start      */}
        <Box
          sx={{
            width: "100%",
            backdropFilter: "blur(2px)",
            padding: { md: "2% 0%", xs: "2% 0% 5% 0%" },
          }}
        >
          {/* container      */}
          <Box sx={{ width: { md: "100%", xs: "90%" }, margin: "0px auto" }}>
            {/* mn start  */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                padding: "5% 0px 10px 0",
                color: "#fff",
              }}
            >
              Event Details
            </Typography>
            <Box
              sx={{
                width: { md: "100%", xs: "100%" },
                display: "flex",
                flexDirection: { md: "row", xs: "column-reverse" },
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: { md: "100%", xs: "100%" } }}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="My Event"
                  variant="outlined"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  sx={{
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.22
                    )}`,
                    // background: "rgba( 21, 22, 24, 0.25 )",
                    // boxShadow: "0 8px 32px 0 rgba(255,145,77,0.32)",
                    backdropFilter: "blur( 14px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.customColors.primaryWhite,
                        borderWidth: "1px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      // color: "#ff914d",
                      fontWeight: "normal",
                    },
                  }}
                />
                {errors.eventName && (
                  <p style={{ color: "red" }}>{errors.eventName}</p>
                )}
                {/* inner main  */}
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    padding: "15px 0px",
                  }}
                >
                  {/* left */}
                  <Box sx={{ width: "49%" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoItem label="Start Time">
                        <MobileDateTimePicker
                          sx={{
                            // Custom styling for the TextField
                            "& .MuiInputBase-root": {
                              width: "100%",
                              color: theme.palette.customColors.primaryWhite, // Change input text color
                              background: `${hexToRGBA(
                                theme.palette.customColors.primaryDark1,
                                0.2
                              )}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                                theme.palette.customColors.orange,
                                0.22
                              )}`,
                              borderRadius: "5px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor:
                                theme.palette.customColors.primaryWhite, // Change border color
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor:
                                theme.palette.customColors.primaryWhite, // Hover effect
                            },
                          }}
                          //   defaultValue={dayjs("2022-04-17T15:30")}
                          name="startTime"
                          value={dayjs(formData.startTime)}
                          // onChange={handleChange}
                          //   onChange={(newValue) =>
                          //     handleDateChange("startTime", newValue)
                          //   }
                          onChange={(newValue) =>
                            handleDateChange("startTime", newValue)
                          }
                        />
                      </DemoItem>
                    </LocalizationProvider>
                    {errors.startTime && (
                      <p style={{ color: "red" }}>{errors.startTime}</p>
                    )}
                  </Box>
                  {/* right */}
                  <Box sx={{ width: "49%" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoItem label="End Time">
                        <MobileDateTimePicker
                          sx={{
                            // Custom styling for the TextField
                            "& .MuiInputBase-root": {
                              width: "100%",
                              color: theme.palette.customColors.primaryWhite, // Change input text color
                              background: `${hexToRGBA(
                                theme.palette.customColors.primaryDark1,
                                0.2
                              )}`,
                              boxShadow: `0 8px 32px 0 ${hexToRGBA(
                                theme.palette.customColors.orange,
                                0.22
                              )}`,
                              borderRadius: "5px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor:
                                theme.palette.customColors.primaryWhite, // Change border color
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor:
                                theme.palette.customColors.primaryWhite, // Hover effect
                            },
                          }}
                          //   defaultValue={dayjs("2022-04-17T15:30")}
                          value={dayjs(formData.endTime)}
                          name="endTime"
                          //   label="End Time"
                          // onChange={handleChange}
                          onChange={(newValue) =>
                            handleDateChange("endTime", newValue)
                          }
                          //   format="End Time"
                          //   onChange={(newValue) =>
                          //     handleDateChange("End Time", newValue)
                          //   }
                        />
                      </DemoItem>
                    </LocalizationProvider>
                    {errors.endTime && (
                      <p style={{ color: "red" }}>{errors.endTime}</p>
                    )}
                  </Box>
                </Box>
                {/* inner main  */}

                {/* venue Name */}
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="venue Name"
                  size="small"
                  variant="outlined"
                  name="venueName"
                  value={formData.venueName}
                  onChange={handleChange}
                  sx={{
                    // background: "rgba( 255, 145, 77, 0.25 )",
                    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    boxShadow: `0 8px 32px 0 ${hexToRGBA(
                      theme.palette.customColors.orange,
                      0.22
                    )}`,
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    margin: "1% 0 2%",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.customColors.primaryWhite,
                        borderWidth: "1px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: theme.palette.customColors.primaryWhite,
                      fontWeight: "normal",
                    },
                  }}
                />
                {errors.venueName && (
                  <p style={{ color: "red" }}>{errors.venueName}</p>
                )}
                {/* venue Name */}

                {/* Address */}
                <TextField
                  id="outlined-basic"
                  label="Address"
                  size="small"
                  variant="outlined"
                  name="eventAddress"
                  value={formData.eventAddress}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <RoomIcon
                          sx={{
                            color: theme.palette.customColors.primaryWhite,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mt: 2,
                    background: `${hexToRGBA(
                      theme.palette.customColors.primaryDark1,
                      0.2
                    )}`,
                    // boxShadow: `0 8px 32px 0 ${hexToRGBA(theme.palette.customColors.orange,0.22)}`,
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.customColors.primaryWhite,
                        borderWidth: "1px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: theme.palette.customColors.primaryWhite,
                      fontWeight: "normal",
                    },
                  }}
                />
                {errors.eventAddress && (
                  <p style={{ color: "red" }}>{errors.eventAddress}</p>
                )}
                {/* Address         */}

                {/* select start  */}
                {/* <Drop /> */}
                {/* select end   */}

                {/* <TxtEditor /> */}

                <UncontrolledRte />
                {/* text editor  */}

                {/* Email of phone number start  */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "50px",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#fff",
                      }}
                    >
                      Email or Phone Number
                    </Typography>
                  </Box>
                  <Box
                    onClick={() => setPhone((prev) => !prev)}
                    sx={{ cursor: "pointer" }}
                  >
                    <EmailIcon sx={{ color: "#fff" }} />
                    <ChangeCircleIcon
                      sx={{
                        transform: "translate(-10px , 5px)",
                        fontSize: "25px",
                        color: "#fff",
                      }}
                    />
                  </Box>
                </Box>
                {isPhone ? (
                  <>
                    <TextField
                      autoComplete="off"
                      id="outlined-basic"
                      // label="Email or Phone Number"
                      placeholder="Email "
                      size="small"
                      variant="outlined"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{
                        background: `${hexToRGBA(
                          theme.palette.customColors.primaryDark1,
                          0.2
                        )}`,
                        // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                        marginTop: "8px",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          color: "#fff",
                          fontFamily: "Arial",
                          fontWeight: "noraml",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor:
                              theme.palette.customColors.primaryWhite,
                            borderWidth: "1px",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          // color: "#ff914d",
                          fontWeight: "normal",
                        },
                      }}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                  </>
                ) : (
                  <PhoneInputStyled
                    sx={{ width: "100%" }}
                    country={"us"}
                    value={phone}
                    // onChange={phone => setPhone(phone)}
                    onChange={handlePhoneNumberChange}
                    countryCodeEditable={false}
                    disableCountryCode={false}
                  />
                )}
                {/* Email of phone number end */}
              </Box>
            </Box>

            {/* mn end  */}
          </Box>
          {/* container end  */}
        </Box>
        {/* section end  */}
      </Box>
      {/* main end  */}
    </>
  );
}

export default EventPage;
// export default withAuth(EventPage);
