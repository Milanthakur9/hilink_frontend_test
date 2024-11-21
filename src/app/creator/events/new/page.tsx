"use client";
// |import { useTheme } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
// import HMBG from "../../hmbg.png";
import HMBG from "../../../../../hmbg.png";
// import  Grid from '@mui/material';
import Grid from "@mui/material/Grid";

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
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { Margin } from "@mui/icons-material";

import { styled } from "@mui/material/styles";

// const schema = yup.object().shape({
//   eventName: yup.string().required("Please enter your event name"),
//   startTime: yup.string().required(),
//   endTime: yup.string().required(),
//   venueName: yup.string().required(),
//   eventAddress: yup.string().required(),
//   email: yup.string().email().optional(),
//   phone: yup.string().optional(),
// });

// interface FormData {
//   eventName: string;
//   startTime: string;
//   endTime: string;
//   venueName: string;
//   eventAddress: string;
//   email: string;
//   phone: string;
// }

// const defaultValues: FormData = {
//   eventName: "",
//   eventAddress: "",
//   startTime: "",
//   endTime: "",
//   venueName: "",
//   email: "",
//   phone: "",
// };

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

// const IOSSwitch = styled((props: SwitchProps) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   "& .MuiSwitch-switchBase": {
//     padding: 0,
//     margin: 2,
//     transitionDuration: "300ms",
//     "&.Mui-checked": {
//       transform: "translateX(16px)",
//       color: "#ff914d",
//       "& + .MuiSwitch-track": {
//         backgroundColor: "#151618",
//         opacity: 1,
//         border: 0,
//         ...theme.applyStyles("dark", {
//           backgroundColor: "#2ECA45",
//         }),
//       },
//       "&.Mui-disabled + .MuiSwitch-track": {
//         opacity: 0.5,
//       },
//     },
//     "&.Mui-focusVisible .MuiSwitch-thumb": {
//       color: "#33cf4d",
//       border: "6px solid #fff",
//     },
//     "&.Mui-disabled .MuiSwitch-thumb": {
//       color: theme.palette.grey[100],
//       ...theme.applyStyles("dark", {
//         color: theme.palette.grey[600],
//       }),
//     },
//     "&.Mui-disabled + .MuiSwitch-track": {
//       opacity: 0.7,
//       ...theme.applyStyles("dark", {
//         opacity: 0.3,
//       }),
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxSizing: "border-box",
//     width: 22,
//     height: 22,
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 26 / 2,
//     backgroundColor: "#ff914d",
//     opacity: 1,
//     transition: theme.transitions.create(["background-color"], {
//       duration: 500,
//     }),
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#39393D",
//     }),
//   },
// }));

// tooltip start for image popup message

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
function EventPage() {
  // const theme = useTheme();
  const router = useRouter();

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

  // const [bgImage, setBgImage] = useState<string | null>(null);
  // console.log(bgImage);
  // const handleBgImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setBgImage(imageUrl);
  //   }
  // };

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
      <Typography
        variant="h4"
        sx={{ fontSize: "20px", margin: "10px 0px", color: "#fff" }}
      >
        Edit Tickts
      </Typography>
      {/* textfeild start  */}
      <TextField
        autoComplete="off"
        sx={{
          width: "100%",
          "& .MuiInput-root": {
            color: "#ff914d",
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
              background: "rgba( 255, 145, 77, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: "#ff914d",
                fontFamily: "Arial",
                fontWeight: "noraml",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff914d",
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
              background: "rgba( 255, 145, 77, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: "#ff914d",
                fontFamily: "Arial",
                fontWeight: "noraml",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff914d",
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
              background: "rgba( 255, 145, 77, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 4px )",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: "#ff914d",
                fontFamily: "Arial",
                fontWeight: "noraml",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff914d",
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
                sx={{ color: "#ff914d" }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={<SquareIcon sx={{ color: "#ff914d" }} />}
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
                    <DateTimePicker
                      // slotProps={{ field: { size: "small" } }}
                      enableAccessibleFieldDOMStructure
                      sx={{
                        svg: { color: "#ff914d", opacity: "0.4" },
                        label: { color: "#ff914d", opacity: "0.4" },
                        width: "100%",
                        color: "#ff914d",
                        border: "1px solid #ff914d",
                        borderRadius: "5px",
                        background: "rgba( 255, 145, 77, 0.25 )",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#ff914d",
                        }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          "&:hover > fieldset": { borderColor: "" },
                          height: "48px",
                          borderRadius: "6px",
                        },
                      }}
                      label="Start Time"
                    />
                  </LocalizationProvider>
                </Box>
                <Box sx={{ width: "48%" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      // slotProps={{ field: { size: "small" } }}
                      enableAccessibleFieldDOMStructure
                      sx={{
                        svg: { color: "#ff914d", opacity: "0.4" },
                        label: { color: "#ff914d", opacity: "0.4" },
                        width: "100%",
                        color: "#ff914d",
                        border: "1px solid #ff914d",
                        borderRadius: "5px",
                        background: "rgba( 255, 145, 77, 0.25 )",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#ff914d",
                        }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          "&:hover > fieldset": { borderColor: "" },
                          height: "48px",
                          borderRadius: "6px",
                        },
                      }}
                      label="End Time"
                    />
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
                sx={{ color: "#ff914d" }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={<SquareIcon sx={{ color: "#ff914d" }} />}
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
                    <DateTimePicker
                      // slotProps={{ field: { size: "small" } }}
                      enableAccessibleFieldDOMStructure
                      sx={{
                        svg: { color: "#ff914d", opacity: "0.4" },
                        label: { color: "#ff914d", opacity: "0.4" },
                        width: "100%",
                        color: "#ff914d",
                        border: "1px solid #ff914d",
                        borderRadius: "5px",
                        background: "rgba( 255, 145, 77, 0.25 )",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#ff914d",
                        }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          "&:hover > fieldset": { borderColor: "" },
                          height: "48px",
                          borderRadius: "6px",
                        },
                      }}
                      label="Start Time"
                    />
                  </LocalizationProvider>
                </Box>
                <Box sx={{ width: "48%" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      // slotProps={{ field: { size: "small" } }}
                      enableAccessibleFieldDOMStructure
                      sx={{
                        svg: { color: "#ff914d", opacity: "0.4" },
                        label: { color: "#ff914d", opacity: "0.4" },
                        width: "100%",
                        color: "#ff914d",
                        border: "1px solid #ff914d",
                        borderRadius: "5px",
                        background: "rgba( 255, 145, 77, 0.25 )",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#ff914d",
                        }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          "&:hover > fieldset": { borderColor: "" },
                          height: "48px",
                          borderRadius: "6px",
                        },
                      }}
                      label="End Time"
                    />
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
            background: "rgba( 255, 145, 77, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
            border: "1px solid #ff914d",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ color: "#fff" }}>Ticket Options</Typography>
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
                      sx={{ color: "#ff914d" }}
                      {...label}
                      icon={<CropSquareIcon />}
                      checkedIcon={<SquareIcon sx={{ color: "#ff914d" }} />}
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
                          background: "#202524",
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
                          background: "#202524",
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
                <Typography
                  sx={{ fontSize: "18px", margin: "0px 0px", color: "#fff" }}
                >
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
              <Box>
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
                <Typography
                  sx={{ fontSize: "18px", margin: "0px 0px", color: "#fff" }}
                >
                  Disable Ticket
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", margin: "0px 0px", color: "#fff" }}
                >
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
          background: "rgba( 255, 145, 77, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          border: "1px solid #ff914d",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
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
                sx={{ color: "#ff914d" }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={
                  <SquareIcon
                    sx={{ color: "#ff914d", borderRadius: "200px" }}
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
                sx={{ color: "#ff914d" }}
                {...label}
                icon={<CropSquareIcon />}
                checkedIcon={
                  <SquareIcon
                    sx={{ color: "#ff914d", borderRadius: "200px" }}
                  />
                }
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "18px", margin: "0px 0px", color: "#fff" }}
              >
                Password Protected
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  margin: "0px 0px 10px 0px",
                  color: "#fff",
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
                  background: "rgba( 255, 145, 77, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  transformOrigin: "center top",
                  transition: "all 0.5s linear",
                  transform: isRquireApproval ? "scale(1)" : "scale(0)",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "noraml",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
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
            background: "#151618",
            border: "1px solid #ff914d",
            padding: "9px 25px",
            color: "#ff914d",
            borderRadius: "25px",
            marginRight: "15px",
          }}
        >
          Cancle
        </Button>
        <Button
          sx={{
            background: "#ff914d",
            padding: "9px 25px",
            color: "#fff",
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
  const handleOpen2 = () => setOpen2(true);
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

  return (
    <>
      {/* main start */}

      <Box
        sx={{
          // height: '100vh',
          // backgroundImage: `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${HMBG.src}),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${HMBG.src})`,
          backgroundImage: backgroundImage
            ? `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${backgroundImage}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${backgroundImage}),url(${backgroundImage}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${backgroundImage})`
            : `repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,#f99d63 50%,rgba(0,0,0,0.6),#f99d63 70%),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.6) 70%),url(${HMBG.src}),url(${HMBG.src}),repeating-linear-gradient(80deg, rgba(0,0,0,0.3) 100%,rgba(0,0,0,0.3) 70%),url(${HMBG.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
          backdropFilter: "blur(500px)",
          padding: { md: "2% 0%", xs: "2% 0 % 0%" },
        }}
      >
        {/* header start  */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 25px",
            position: "fixed",
            top: "0",
            zIndex: "66",
            background: "rgba( 21, 22, 24, 0.45 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
          }}
        >
          <Box>
            <Button
              sx={{
                background: "#202524",
                padding: "9px 25px",
                color: "#ff914d",
                borderRadius: "15px",
              }}
              onClick={() => router.push("/")}
            >
              Exit Event Creator
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "40%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "30%",
                background: "#ff914d",
                height: "15px",
                borderRadius: "5px",
              }}
            ></Box>
            <Box
              sx={{
                width: "30%",
                background: "#202524",
                height: "15px",
                borderRadius: "5px",
              }}
            ></Box>
            <Box
              sx={{
                width: "30%",
                background: "#202524",
                height: "15px",
                borderRadius: "5px",
              }}
            ></Box>
          </Box>
          <Box>
            <Button
              sx={{
                background: "#202524",
                padding: "9px 25px",
                color: "#ff914d",
                borderRadius: "15px",
              }}
            >
              Create Event
            </Button>
          </Box>
        </Box>
        {/* header end  */}

        {/* section start      */}
        <Box
          sx={{
            backdropFilter: "blur(5px)",
            padding: { md: "5% 0%", xs: "2% 0% 85% 0%" },
          }}
        >
          {/* container      */}
          <Box sx={{ width: { md: "65%", xs: "90%" }, margin: "15px auto 0" }}>
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
                width: "100%",
                display: "flex",
                flexDirection: { md: "row", xs: "column-reverse" },
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: { md: "48%", xs: "100%" } }}>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  label="My Event"
                  variant="outlined"
                  sx={{
                    background: "rgba( 255, 145, 77, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff914d",
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
                      <DateTimePicker
                        slotProps={
                          {
                            // field: { size: "small", color: "#ff914d" },
                          }
                        }
                        enableAccessibleFieldDOMStructure
                        sx={{
                          svg: { color: "#ff914d" },
                          label: { color: "#ff914d" },
                          width: "100%",
                          // color:'#ff914d !important',
                          border: "1px solid #ff914d",
                          borderRadius: "5px",
                          background: "rgba( 255, 145, 77, 0.25 )",
                          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                          backdropFilter: "blur( 4px )",
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#ff914d",
                          }, //styles the label
                          "& .MuiOutlinedInput-root": {
                            "&:hover > fieldset": { borderColor: "" },
                            height: "48px",
                            borderRadius: "6px",
                          },
                        }}
                        label="Start Time"
                      />
                    </LocalizationProvider>
                  </Box>
                  {/* right */}
                  <Box sx={{ width: "49%" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        // slotProps={{ field: { size: "small" } }}
                        enableAccessibleFieldDOMStructure
                        sx={{
                          svg: { color: "#ff914d" },
                          label: { color: "#ff914d" },
                          width: "100%",
                          color: "#ff914d",
                          border: "1px solid #ff914d",
                          borderRadius: "5px",
                          background: "rgba( 255, 145, 77, 0.25 )",
                          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                          backdropFilter: "blur( 4px )",
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#ff914d",
                          }, //styles the label
                          "& .MuiOutlinedInput-root": {
                            "&:hover > fieldset": { borderColor: "" },
                            height: "48px",
                            borderRadius: "6px",
                          },
                        }}
                        label="End Time"
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                {/* inner main  */}

                {/* venue Name */}
                <TextField
                  id="outlined-basic"
                  label="venue Name"
                  size="small"
                  variant="outlined"
                  sx={{
                    background: "rgba( 255, 145, 77, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff914d",
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
                {/* venue Name */}

                {/* Address */}
                <TextField
                  id="outlined-basic"
                  label="Address"
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <RoomIcon sx={{ color: "#ff914d" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mt: 2,
                    background: "rgba( 255, 145, 77, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff914d",
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
                {/* Address         */}

                {/* select start  */}
                {/* <TextField
                id="outlined-select-currency"
                select
                label="choose a category (optional)"
                placeholder="choose a category (optional)"
                defaultValue="EUR"
                size="small"
                sx={{
                  background: "rgba( 255, 145, 77, 0.25 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 4px )",
                  width: "100%",
                  mt: 2,
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    color: "#ff914d",
                    fontFamily: "Arial",
                    fontWeight: "normal",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff914d",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#ff914d",
                    fontWeight: "normal",
                  },
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> */}
                {/* <Drop /> */}
                {/* select end  */}
                {/* text editor  */}

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
                  <TextField
                    id="outlined-basic"
                    // label="Email or Phone Number"
                    placeholder="Email or Phone Number"
                    size="small"
                    variant="outlined"
                    sx={{
                      background: "rgba( 255, 145, 77, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                      marginTop: "8px",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        fontFamily: "Arial",
                        fontWeight: "noraml",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ff914d",
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
                ) : (
                  <TextField
                    id="outlined-basic"
                    // label="Email or Phone Number"
                    placeholder="Email"
                    size="small"
                    variant="outlined"
                    type="tel"
                    sx={{
                      background: "rgba( 255, 145, 77, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                      marginTop: "8px",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        fontFamily: "Arial",
                        fontWeight: "noraml",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ff914d",
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
                )}
                {/* Email of phone number end */}
              </Box>

              {/* image part start */}
              <Box
                sx={{
                  width: { md: "48%", xs: "80%" },
                  // height: '50vh',
                  minHeight: "450px",
                  margin: { md: "0%", xs: "0% auto 6%" },
                  // backgroundImage:  `url(${HMBG.src})`,
                  // backgroundImage: `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
                  backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  objectFit: "cover",
                  // backgroundBlendMode: "overlay",
                  borderRadius: "25px",
                  transition: "all 0.1s linear",
                  position: "relative",
                  "&:hover": {
                    // transform:'scale(1.1)'
                    boxShadow: "0px 0px 19px 20px rgba(255,145,77,0.12)",
                    border: "1px solid #ff914d",
                  },
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%,-50%)",
                    color: "#fff",
                    fontFamily: "impact",
                    fontSize: { md: "5vh", xs: "3vh" },
                    textAlign: "center",
                    lineHeight: "4.8vh",
                    letterSpacing: "2px",
                    fontStyle: "italic",
                  }}
                >
                  DESIGN YOUR EVENT PAGE
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  {backgroundImage ? (
                    <Button
                      sx={{
                        background: "#202524",
                        border: "1px solid #ff914d",
                        color: "#ff914d",
                        borderRadius: "25px",
                      }}
                      variant="contained"
                      onClick={() => setBackgroundImage(null)}
                      // sx={{ position: 'absolute', bottom: '20px' }}
                    >
                      Upload Poster
                    </Button>
                  ) : (
                    <>
                      <label
                        htmlFor="file-upload"
                        style={{
                          background: "#202524",
                          border: "1px solid #ff914d",
                          color: "#ff914d",
                          padding: "12px 25px",
                          borderRadius: "25px",
                          fontSize: "1.8vh",
                          cursor: "pointer",
                        }}
                      >
                        Upload Poster <sup>*</sup>
                      </label>
                      <input
                        id="file-upload"
                        style={{
                          border: "1px solid #ff914d",
                          width: "150px",
                          display: "none",
                          padding: "5px 25px",
                        }}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </>
                  )}
                </Box>
                {/* search bar start  */}
                <Box
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "95%",
                    border: "1px solid #ff914d",
                    margin: "4% auto 0",
                    borderRadius: "10px",
                    background: "rgba( 255, 145, 77, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                  }}
                >
                  {/* <IconButton sx={{ p: '10px' }} aria-label="menu"> */}
                  {/* <MenuIcon /> */}
                  <Image
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
                    alt=""
                    style={{ height: "20px" }}
                    height={20}
                    width={20}
                  />
                  {/* </IconButton> */}
                  <InputBase
                    sx={{ ml: 1, flex: 1, color: "#ff914d" }}
                    placeholder="Search Google Maps"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <SearchIcon sx={{ color: "#ff914d" }} />
                </Box>
                {/* search bar end  */}

                <Box
                  sx={{
                    width: { md: "90%", xs: "90%" },
                    margin: "0px auto 0",
                    display: "flex",
                    justifyContent: "space-between",
                    position: "absolute",
                    bottom: "3%",
                    left: "0%",
                    right: "0%",
                  }}
                >
                  {/* popup 3 */}
                  <Modal
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                      {/* Tickets start */}

                      <Typography
                        variant="h2"
                        sx={{
                          mt: 2,
                          color: "#ff914d",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Admission Settings
                      </Typography>

                      <TextField
                        autoComplete="off"
                        sx={{
                          width: "100%",
                          marginTop: "10px",
                          "& .MuiInput-root": {
                            color: "#ff914d",
                            fontFamily: "Arial",
                            fontWeight: "normal",
                            borderBottom: "1px solid #ff914d",
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

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "20px",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h2"
                            sx={{
                              display: "flex",
                              mt: 2,
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            Admission Settings{" "}
                            <Typography
                              sx={{ color: "#ff914d", marginLeft: "15px" }}
                            >
                              $10.00
                            </Typography>
                          </Typography>
                        </Box>
                        <Box>
                          <ContentCopyIcon
                            sx={{
                              color: "#fff",
                              background: "#ff914d",
                              padding: "10px",
                              boxShadow:
                                "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                              fontSize: "40px",
                              borderRadius: "50%",
                              marginRight: "15px",
                            }}
                          />
                          <EditIcon
                            sx={{
                              color: "#fff",
                              background: "#ff914d",
                              padding: "10px",
                              boxShadow:
                                "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                              fontSize: "40px",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                      </Box>

                      {/* button part start  */}
                      <Box
                        sx={{
                          paddingTop: "7%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Link href="#" color="#ff914d">
                            Switch to RSVP Event
                          </Link>
                          {/* <Link href="#">Link</Link> */}
                        </Box>
                        <Box>
                          <Button
                            sx={{
                              background: "#151618",
                              border: "1px solid #ff914d",
                              padding: "9px 25px",
                              color: "#ff914d",
                              borderRadius: "25px",
                              marginRight: "15px",
                              "&:hover": {
                                cursor: "pointer",
                                background: "#ff914d",
                                color: "#fff",
                              },
                            }}
                          >
                            Cancle
                          </Button>
                          <Button
                            sx={{
                              background: "#ff914d",
                              padding: "9px 25px",
                              color: "#fff",
                              borderRadius: "25px",
                              "&:hover": {
                                cursor: "pointer",
                                background: "#151618",
                                color: "#ff914d",
                                border: "1px solid #ff914d",
                              },
                            }}
                          >
                            Create New Ticket
                          </Button>
                        </Box>
                      </Box>
                      {/* button part end */}
                    </Box>
                  </Modal>

                  {/* popup 3 end */}

                  {/* popup 2 start */}

                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography
                          sx={{ textAlign: "center" }}
                          color="inherit"
                        >
                          Customize your event font, accent color, and
                          light/dark mode.
                        </Typography>
                      </React.Fragment>
                    }
                  >
                    <Button>
                      <TuneIcon
                        onClick={handleOpen2}
                        sx={{
                          background: "#ff914d",
                          color: "#fff",
                          fontSize: "40px",
                          padding: "5px",
                          transform: "rotate(180deg)",
                          transition: "all 0.21s linear",
                          borderRadius: "50%",
                          "&:hover": {
                            cursor: "pointer",
                            transform: "rotate(90deg)",
                          },
                        }}
                      />
                    </Button>
                  </HtmlTooltip>

                  <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ color: "#fff" }}
                      >
                        Event Page Design
                      </Typography>
                      <Typography
                        sx={{ color: "#fff" }}
                        id="modal-modal-title"
                        variant="subtitle1"
                      >
                        Event Title Font
                      </Typography>

                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <InputLabel id="demo-multiple-name-label">
                          Name
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-name-label"
                          id="demo-multiple-name"
                          multiple
                          value={personName}
                          onChange={handleChange2}
                          sx={{
                            width: "100%",
                            border: "1px solid #ff914d",
                            borderRadius: "35px",
                            overflow: "auto",
                            "& .MuiSvgIcon-root": { color: "#ff914d" },
                          }}
                          // input={<OutlinedInput label="Name" />}
                          // MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              // style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      {/* color picker & switch start */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ color: "#fff" }}>Accent color</Box>
                        <Box>{/* <SwitchP /> */}</Box>
                      </Box>
                      {/* color picker & switch end */}
                    </Box>
                  </Modal>

                  {/* popup 2 end  */}

                  {/* popup 1 start */}

                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography
                          sx={{ textAlign: "center" }}
                          color="inherit"
                        >
                          Choose an image from your gallery or search for
                          GIFs/images online for your events flyer
                        </Typography>
                      </React.Fragment>
                    }
                  >
                    <Button>
                      <InsertPhotoIcon
                        onClick={handleOpen}
                        sx={{
                          background: "#ff914d",
                          color: "#fff",
                          fontSize: "40px",
                          padding: "5px",
                          borderRadius: "50%",
                          "&:hover": { cursor: "pointer" },
                        }}
                      />
                    </Button>
                  </HtmlTooltip>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      {/* Tickets start */}
                      <Box
                        sx={{
                          padding: "5% 0% 0%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "25px",
                        }}
                      >
                        {/* Tickets left start */}
                        <Box
                          sx={{
                            borderBottom: "1px solid #ff914d",
                            width: "75%",
                          }}
                        >
                          {/* <Typography variant='h6' sx={{fontWeight:'Normal',fontSize:'30px',margin:'10px 0px'}}>Search for Gifs</Typography> */}
                          <TextField
                            sx={{
                              width: "100%",
                              "& .MuiInput-root": {
                                color: "#ff914d",
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
                            label="Search for Gifs"
                            placeholder="Search for Gifs"
                            variant="standard"
                          />
                        </Box>
                        {/* Tickets left end */}
                        {/* Tickets right start */}
                        <Box>
                          {/* <Button sx={{background:'#ff914d',padding:'9px 25px',color:'#fff',borderRadius:'35px'}}>Edit Tickets</Button> */}
                          {/* <Button
                          sx={{
                            padding: "9px 25px",
                            color: "#fff",
                            borderRadius: "35px",
                            background: "rgba( 255, 145, 77, 0.45 )",
                            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                            fontSize:'1.8vh',
                            backdropFilter: "blur( 4px )",
                          }}
                          variant="contained"
                          startIcon={<ArrowOutwardIcon />}
                        >
                          use your own
                        </Button> */}

                          {backgroundImage ? (
                            <Button
                              sx={{
                                background: "#202524",
                                border: "1px solid #ff914d",
                                color: "#ff914d",
                                borderRadius: "25px",
                              }}
                              variant="contained"
                              onClick={() => setBackgroundImage(null)}
                              // sx={{ position: 'absolute', bottom: '20px' }}
                            >
                              Upload Poster
                            </Button>
                          ) : (
                            <>
                              <label
                                htmlFor="file-upload"
                                style={{
                                  background: "#202524",
                                  border: "1px solid #ff914d",
                                  color: "#ff914d",
                                  padding: "12px 25px",
                                  borderRadius: "25px",
                                  fontSize: "2vh",
                                  cursor: "pointer",
                                }}
                              >
                                Use your own
                              </label>
                              <input
                                id="file-upload"
                                style={{
                                  border: "1px solid #ff914d",
                                  width: "150px",
                                  display: "none",
                                  padding: "5px 25px",
                                }}
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                              />
                            </>
                          )}
                        </Box>
                        {/* Tickets right end */}
                      </Box>
                      {/* Tickets end */}

                      <ImageList
                        sx={{
                          width: "60%",
                          height: 400,
                          margin: "0 auto",
                          "&::-webkit-scrollbar": {
                            width: "5px",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "#151618",
                            // borderRadius:'5px'
                          },
                          "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#ff914d",
                            // borderRadius:'5px'
                          },
                        }}
                        variant="quilted"
                        cols={4}
                        rowHeight={125}
                      >
                        {itemData.map((item) => (
                          <ImageListItem
                            key={item.img}
                            cols={item.cols || 1}
                            rows={item.rows || 1}
                          >
                            <Image
                              {...srcset(item.img, 121, item.rows, item.cols)}
                              alt={item.title}
                              loading="lazy"
                              height={20}
                              width={20}
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Box>
                  </Modal>

                  {/* popup 1 end  */}
                </Box>
              </Box>
              {/* image part end  */}
            </Box>

            {/* Tickets start */}
            <Box
              sx={{
                borderBottom: "1px solid #ff914d",
                padding: "5% 0% 0%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Tickets left start */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    margin: "10px 0px",
                    color: "#fff",
                  }}
                >
                  Tickets
                </Typography>
              </Box>
              {/* Tickets left end */}
              {/* Tickets right start */}
              <Box>
                {/* <Button sx={{background:'#ff914d',padding:'9px 25px',color:'#fff',borderRadius:'35px'}}>Edit Tickets</Button> */}
                <Button
                  onClick={handleOpen3}
                  sx={{
                    padding: "9px 25px",
                    color: "#fff",
                    borderRadius: "35px",
                    background: "rgba( 255, 145, 77, 0.45 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                  }}
                  variant="contained"
                  startIcon={<ArrowOutwardIcon />}
                >
                  Edit Tickets
                </Button>
              </Box>
              {/* Tickets right end */}
            </Box>
            {/* Tickets end */}

            {/* Default Tickets start */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#ff914d",
                borderRadius: "15px",
                padding: "2%",
                margin: "6% 0%",
              }}
            >
              {/* Default Tickets left start  */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontWeight: "normal",
                    fontSize: "20px",
                    margin: "10px 0px 0px",
                    color: "#fff",
                  }}
                >
                  Default Tickets
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "normal",
                    fontSize: "20px",
                    margin: "10px 0px",
                    color: "#fff",
                  }}
                >
                  $ 10
                </Typography>
              </Box>
              {/* Default Tickets left end  */}

              {/* Default Tickets right start  */}
              <Box>
                {/* offcanvas add */}
                <Button onClick={toggleDrawer(true)}>
                  <EditIcon
                    sx={{
                      color: "#ff914d",
                      background: "#151618",
                      padding: "10px",
                      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                      fontSize: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Button>
                <Drawer open={Canvas} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
                {/* offcanvas add */}
              </Box>
              {/* Default Tickets right end  */}
            </Box>
            {/* Default Tickets end */}

            {/* looking start */}
            <Box
              sx={{
                display: "flex",
                overflow: "scroll",
                margin: "20px 0px",
                paddingBottom: "15px",
                // scrollbarWidth: 'thin',
                "&::-webkit-scrollbar": {
                  width: "5px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#151618",
                  borderRadius: "5px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#FF914D",
                  borderRadius: "5px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#ff914d",
                  cursor: "grab",
                },
                overflowY: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {/* looking box  1 */}
              <Box
                sx={{
                  background: "#ff914d",
                  padding: "30px 10px",
                  marginRight: "20px",
                  borderRadius: "15px",
                  Width: "48%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* looking box left  */}
                <Box
                  sx={{
                    width: { md: "400px", xs: "300px" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "10px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    Looking for a venue?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px,",
                      color: "#fff",
                    }}
                  >
                    {`We'll help you find one!`}
                  </Typography>
                  <Button
                    sx={{
                      background: "#151618",
                      padding: "9px 25px",
                      color: "#ff914d",
                      borderRadius: "35px",
                      display: "flex",
                      width: "fit-content",
                      margin: "10px 0 0 0",
                    }}
                    variant="contained"
                  >
                    Book A Venue
                  </Button>
                </Box>
                {/* looking box left  */}
                {/* looking box right  */}
                <Box sx={{ width: "40%" }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src="https://assets.posh.vip/b2/freelancericons/Venue.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                </Box>
                {/* looking box right  */}
              </Box>
              {/* looking box 1 */}

              {/* looking box  2 */}
              <Box
                sx={{
                  background: "#ff914d",
                  padding: "30px 10px",
                  marginRight: "20px",
                  borderRadius: "15px",
                  Width: "48%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* looking box left  */}
                <Box
                  sx={{
                    width: { md: "400px", xs: "300px" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "10px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    Looking for a DJ?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "0px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    {`Let's get one in the mix!`}
                  </Typography>
                  <Button
                    sx={{
                      background: "#151618",
                      padding: "9px 25px",
                      color: "#ff914d",
                      borderRadius: "35px",
                      display: "flex",
                      width: "fit-content",
                      margin: "10px 0 0 0",
                    }}
                    variant="contained"
                  >
                    Book A DJ
                  </Button>
                </Box>
                {/* looking box left  */}
                {/* looking box right  */}
                <Box sx={{ width: "40%" }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/b2/freelancericons/DJ.png"
                    alt="dj"
                    width={20}
                    height={20}
                  />
                </Box>
                {/* looking box right  */}
              </Box>
              {/* looking box 2 */}

              {/* looking box  3 */}
              <Box
                sx={{
                  background: "#ff914d",
                  padding: "30px 10px",
                  marginRight: "20px",
                  borderRadius: "15px",
                  Width: "48%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* looking box left  */}
                <Box
                  sx={{
                    width: { md: "400px", xs: "300px" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "10px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    Need a photographer?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "0px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    We got shooters.
                  </Typography>
                  <Button
                    sx={{
                      background: "#151618",
                      padding: "9px 25px",
                      color: "#ff914d",
                      borderRadius: "35px",
                      display: "flex",
                      width: "fit-content",
                      margin: "10px 0 0 0",
                    }}
                    variant="contained"
                  >
                    Book A Photographer
                  </Button>
                </Box>
                {/* looking box left  */}
                {/* looking box right  */}
                <Box sx={{ width: "40%" }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/b2/freelancericons/Photographer.png"
                    alt="Photographer"
                    width={20}
                    height={20}
                  />
                </Box>
                {/* looking box right  */}
              </Box>
              {/* looking box 3 */}

              {/* looking box  4 */}
              <Box
                sx={{
                  background: "#ff914d",
                  padding: "30px 10px",
                  marginRight: "20px",
                  borderRadius: "15px",
                  Width: "48%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* looking box left  */}
                <Box
                  sx={{
                    width: { md: "400px", xs: "300px" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "10px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    Security an issue?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "0px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    {`Let's get you some muscle!`}
                  </Typography>
                  <Button
                    sx={{
                      background: "#151618",
                      padding: "9px 25px",
                      color: "#ff914d",
                      borderRadius: "35px",
                      display: "flex",
                      width: "fit-content",
                      margin: "10px 0 0 0",
                    }}
                    variant="contained"
                  >
                    Book A Security Guard
                  </Button>
                </Box>
                {/* looking box left  */}
                {/* looking box right  */}
                <Box sx={{ width: "40%" }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/b2/freelancericons/Security.png"
                    alt="Security"
                    width={20}
                    height={20}
                  />
                </Box>
                {/* looking box right  */}
              </Box>
              {/* looking box 4 */}

              {/* looking box  5 */}
              <Box
                sx={{
                  background: "#ff914d",
                  padding: "30px 10px",
                  borderRadius: "15px",
                  Width: "48%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* looking box left  */}
                <Box
                  sx={{
                    width: { md: "400px", xs: "300px" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "10px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    Would cocktails be nice?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "normal",
                      fontSize: "20px",
                      margin: "0px 0px 0px",
                      color: "#fff",
                    }}
                  >
                    We know a guy...
                  </Typography>
                  <Button
                    sx={{
                      background: "#151618",
                      padding: "9px 25px",
                      color: "#ff914d",
                      borderRadius: "35px",
                      display: "flex",
                      width: "fit-content",
                      margin: "10px 0 0 0",
                    }}
                    variant="contained"
                  >
                    Book A Bartender
                  </Button>
                </Box>
                {/* looking box left  */}
                {/* looking box right  */}
                <Box sx={{ width: "40%" }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/b2/freelancericons/Bartender.png"
                    alt="Bartender"
                    width={20}
                    height={20}
                  />
                </Box>
                {/* looking box right  */}
              </Box>
              {/* looking box 5 */}
            </Box>
            {/* looking end */}

            {/* link start */}
            <Box sx={{ textAlign: "center", marginTop: "5%" }}>
              <Typography
                onClick={handleOpenAdvanceSetting}
                color="#fff"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline 2px #fff",
                  },
                }}
              >
                Show Advance Settings
              </Typography>
            </Box>
            {/* link end */}
            {/* Show Advance settings */}
            {isAdvanceSetting && (
              <Box>
                {/* event setting start */}
                <Box
                  sx={{ borderBottom: "2px solid #ff914d", margin: "10px 0px" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontSize: "18px", color: "#fff" }}
                  >
                    Event Settings
                  </Typography>
                </Box>
                <Typography sx={{ color: "#fff" }}>
                  Increase sales by driving organic discovery and list your
                  event on the Posh Explore Page
                </Typography>
                {/* event setting end */}

                {/* data 1   */}
                <Box sx={{ display: "flex", marginTop: "15px" }}>
                  <Box sx={{ marginRight: "20px" }}>
                    <Checkbox
                      sx={{ color: "#ff914d" }}
                      {...label}
                      icon={<CropSquareIcon />}
                      checkedIcon={
                        <SquareIcon
                          sx={{ color: "#ff914d", borderRadius: "200px" }}
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
                      Show on Explore
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        margin: "0px 0px",
                        color: "#fff",
                      }}
                    >
                      This lists your event publicly on the Posh Explore Page
                    </Typography>
                  </Box>
                </Box>
                {/* data 1   */}
                {/* data 2   */}
                <Box sx={{ display: "flex", marginTop: "15px" }}>
                  <Box sx={{ marginRight: "20px" }}>
                    <Checkbox
                      value={isPass}
                      onChange={() => setIsPass((prev) => !prev)}
                      sx={{ color: "#ff914d" }}
                      {...label}
                      icon={<CropSquareIcon />}
                      checkedIcon={
                        <SquareIcon
                          sx={{ color: "#ff914d", borderRadius: "200px" }}
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
                      Password Protected Event
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        margin: "0px 0px",
                        color: "#fff",
                      }}
                    >
                      Attendees will need a password to access the event page
                    </Typography>
                  </Box>
                </Box>
                <TextField
                  autoComplete="off"
                  id="outlined-basic"
                  // label="My Event"
                  variant="outlined"
                  placeholder="Password"
                  size="small"
                  sx={{
                    background: "rgba( 255, 145, 77, 0.25 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 4px )",
                    transformOrigin: "center top",
                    transition: "all 0.5s linear",
                    transform: isPass ? "scale(1)" : "scale(0)",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      color: "#ff914d",
                      fontFamily: "Arial",
                      fontWeight: "noraml",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff914d",
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
                {/* data 2   */}

                {/* Guestlist start */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "5% 0",
                  }}
                >
                  {/* Guestlist left  */}
                  <Box sx={{ width: { md: "48%", xs: "95%" } }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #fff",
                        paddingBottom: "10px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          Guestlist
                        </Typography>
                      </Box>
                      <Box>
                        {/* <VisibilityIcon sx={{color:'#fff',"&:hover": { cursor: "pointer"}}}/> */}
                        {!isVisible && (
                          <VisibilityIcon
                            onClick={handleOpenVisible}
                            sx={{
                              color: "#fff",
                              "&:hover": { cursor: "pointer" },
                            }}
                          />
                        )}

                        {isVisible && (
                          <VisibilityOffIcon
                            onClick={handleCloseVisible}
                            sx={{
                              color: "#fff",
                              "&:hover": { cursor: "pointer" },
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "#fff", marginTop: "5px" }}>
                      Your guestlist will appear here
                    </Typography>
                  </Box>
                  {/* Guestlist left  */}
                  {/* Guestlist right */}
                  <Box sx={{ width: { md: "48%", xs: "95%" } }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #fff",
                        paddingBottom: "10px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          Activity
                        </Typography>
                      </Box>
                      <Box>
                        {/* <VisibilityIcon sx={{color:'#fff',"&:hover": { cursor: "pointer"}}}/> */}
                        {!isOpacity && (
                          <VisibilityIcon
                            onClick={handleOpenOpacity}
                            sx={{
                              color: "#fff",
                              "&:hover": { cursor: "pointer" },
                            }}
                          />
                        )}

                        {isOpacity && (
                          <VisibilityOffIcon
                            onClick={handleCloseOpacity}
                            sx={{
                              color: "#fff",
                              "&:hover": { cursor: "pointer" },
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "#fff", marginTop: "5px" }}>
                      Guest comments will appear here
                    </Typography>
                  </Box>
                  {/* Guestlist right */}
                </Box>
                {/* Guestlist end */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: { md: "row", xs: "column" },
                    marginBottom: "5%",
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "48%", xs: "95%" },
                      transition: "all .5s linear",
                      transform: isVisible ? "scale(1)" : "scale(0)",
                    }}
                  >
                    {/* GuestImages start  */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 2,
                      }}
                    >
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "20%" }}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{
                            width: "100%",
                            borderRadius: "100%",
                            height: "100%",
                          }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                    </Box>
                    {/* GuestImages start  */}
                  </Box>
                  <Box
                    sx={{
                      width: { md: "48%", xs: "95%" },
                      transition: "all .5s linear",
                      transform: isOpacity ? "scale(1)" : "scale(0)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "3%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "15%",
                          borderRadius: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          alt=""
                          height={20}
                          width={20}
                          style={{ width: "100%", height: "100%" }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "75%", paddingLeft: "20px" }}>
                        <Typography sx={{ color: "#fff" }}>
                          Eli Taylor-Lemiere
                        </Typography>
                        <Typography sx={{ color: "#fff" }}>
                          so excited for this event!!
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "3%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "15%",
                          borderRadius: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          alt=""
                          height={20}
                          width={20}
                          style={{ width: "100%", height: "100%" }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "75%", paddingLeft: "20px" }}>
                        <Typography sx={{ color: "#fff" }}>
                          Kendall Jenner
                        </Typography>
                        <Typography sx={{ color: "#fff" }}>
                          {`OMG you're going Eli???`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "3%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "15%",
                          borderRadius: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          style={{ width: "100%", height: "100%" }}
                          src="https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/images/721b7cc6-6637-4cc9-bd3a-eebf63d9d42c.jpg"
                        />
                      </Box>
                      <Box sx={{ width: "75%", paddingLeft: "20px" }}>
                        <Typography sx={{ color: "#fff" }}>
                          David Davidov
                        </Typography>
                        <Typography sx={{ color: "#fff" }}>
                          Anyone wanna meet up before the event? 👀
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Gallery popup start  */}
                {isGallery && (
                  <Box sx={{ margin: "6% 0%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #fff",
                        paddingBottom: "10px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          Gallery
                        </Typography>
                      </Box>
                      <Box>
                        <AddCircleIcon
                          sx={{
                            color: "#fff",
                            "&:hover": { cursor: "pointer" },
                            marginRight: "8px",
                          }}
                        />
                        <DeleteIcon
                          onClick={handleCloseGallery}
                          sx={{
                            color: "#fff",
                            "&:hover": { cursor: "pointer" },
                          }}
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        border: "2px dashed #fff",
                        padding: "20px",
                        borderRadius: "20px",
                        margin: "3% 0%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%,-50%)",
                          zIndex: 88,
                          transition: "background .3s linear",
                          "&:hover": {
                            background: "#151618",
                            padding: "5px 20px",
                            borderRadius: "30px",
                            color: "#ff914d",
                          },
                        }}
                      >
                        Drop an image here or click
                        <Button
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          sx={{ background: "none", boxShadow: "none" }}
                        >
                          {/* Upload files */}
                          <AddCircleIcon />
                          <VisuallyHiddenInput
                            type="file"
                            onChange={handleAddImage}
                            multiple
                          />
                        </Button>
                        to add photos
                      </Typography>

                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        mt={5}
                      >
                        {/* <Grid container spacing={2} sx={{ border: '1px dashed black', padding: '10px' }}> */}
                        {images.map((image, index) => (
                          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Box
                              sx={{
                                width: "100%",
                                height: 200,
                                backgroundColor: "grey",
                                backgroundImage: `url(${image.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                borderRadius: "8px",
                                gap: 1,
                                transition: "all .2s linear",
                                "&:hover": { transform: "scale(1.1)" },
                              }}
                            >
                              <IconButton
                                onClick={() => handleDeleteImage(index)}
                                sx={{
                                  position: "absolute",
                                  top: 5,
                                  right: 5,
                                  backgroundColor: "white",
                                  borderRadius: "100%",
                                  opacity: 0.8,
                                  "&:hover": {
                                    background: "#fff",
                                    color: "#ff914d",
                                  },
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </Grid>
                        ))}

                        {/* </Grid> */}
                        {/* </Grid> */}
                      </Grid>
                    </Box>
                  </Box>
                )}
                {/* Gallery popup end  */}

                {/* add event feature popup start  */}
                {isAddEvent && (
                  <Box>
                    <Box sx={{ margin: "3% 0%" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid #fff",
                          paddingBottom: "10px",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "22px",
                              fontWeight: "bold",
                            }}
                          >
                            {isTitle ? isTitle : "Lineup"}
                          </Typography>
                        </Box>
                        <Box>
                          <AddCircleIcon
                            sx={{
                              color: "#fff",
                              "&:hover": { cursor: "pointer" },
                              marginRight: "8px",
                            }}
                          />
                          <DeleteIcon
                            onClick={handleCloseAddEvent}
                            sx={{
                              color: "#fff",
                              "&:hover": { cursor: "pointer" },
                            }}
                          />
                        </Box>
                      </Box>

                      <Box>
                        <Typography
                          onClick={() => setShowTitle((prev) => !prev)}
                          sx={{
                            color: "#fff",
                            margin: "5px 0px",
                            "&:hover": {
                              cursor: "pointer",
                              color: "#ff914d",
                              textDecoration: "underline 1px solid",
                            },
                          }}
                        >
                          <Checkbox
                            sx={{ color: "#ff914d" }}
                            {...label}
                            icon={<CropSquareIcon />}
                            checkedIcon={
                              <SquareIcon
                                sx={{ color: "#ff914d", borderRadius: "200px" }}
                              />
                            }
                          />{" "}
                          {`Customize this section's title`}
                        </Typography>

                        {showTitle && (
                          <TextField
                            autoComplete="off"
                            onChange={(e) => setIsTitle(e.target.value)}
                            value={isTitle}
                            id="outlined-basic"
                            // label="venue Name"
                            placeholder="Lineup section title"
                            size="small"
                            variant="outlined"
                            sx={{
                              background: "rgba( 255, 145, 77, 0.25 )",
                              boxShadow:
                                "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                              backdropFilter: "blur( 4px )",
                              width: "100%",
                              margin: "2% 0% 0%",
                              "& .MuiOutlinedInput-root": {
                                color: "#fff",
                                fontFamily: "Arial",
                                fontWeight: "noraml",
                                // Class for the border around the input field
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#ff914d",
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
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        width: { md: "60%", xs: "100%" },
                        background: "#202524",
                        padding: "20px",
                        border: "5px solid #ff914d",
                        borderRadius: "25px",
                      }}
                    >
                      {/* up start  */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ width: "20%" }}>
                          <Button
                            sx={{
                              color: "#ff914d",
                              padding: { md: "25px  ", xs: "10px" },
                              fontSize: "50px",
                              borderRadius: "50%",
                              border: "1px solid #ff914d",
                              background: "rgba( 255, 145, 77, 0.25 )",
                              boxShadow:
                                "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                              backdropFilter: "blur( 4px )",
                            }}
                          >
                            <EditIcon
                              sx={{
                                border: "1px solid #ff914d",
                                color: "#ff914d",
                                padding: "10px",
                                fontSize: "50px",
                                borderRadius: "50%",
                                background: "rgba( 32, 37, 36, 0.95 )",
                                boxShadow:
                                  "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                backdropFilter: "blur( 4px )",
                              }}
                            />
                          </Button>
                        </Box>
                        <Box sx={{ width: "75%" }}>
                          <TextField
                            autoComplete="off"
                            id="outlined-basic"
                            // label="venue Name"
                            placeholder="Name"
                            size="small"
                            variant="outlined"
                            sx={{
                              background: "rgba( 255, 145, 77, 0.25 )",
                              boxShadow:
                                "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                              backdropFilter: "blur( 4px )",
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                color: "#ff914d",
                                fontFamily: "Arial",
                                fontWeight: "noraml",
                                // Class for the border around the input field
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#ff914d",
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
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "2% 0",
                              }}
                            >
                              <Box sx={{ width: "48%" }}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DateTimePicker
                                    // slotProps={{ field: { size: "small" } }}
                                    enableAccessibleFieldDOMStructure
                                    sx={{
                                      svg: { color: "#ff914d", opacity: "0.4" },
                                      label: {
                                        color: "#ff914d",
                                        opacity: "0.4",
                                      },
                                      width: "100%",
                                      color: "#ff914d",
                                      border: "1px solid #ff914d",
                                      borderRadius: "5px",
                                      background: "rgba( 255, 145, 77, 0.25 )",
                                      boxShadow:
                                        "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                      backdropFilter: "blur( 4px )",
                                      "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#ff914d",
                                      }, //styles the label
                                      "& .MuiOutlinedInput-root": {
                                        "&:hover > fieldset": {
                                          borderColor: "",
                                        },
                                        height: "48px",
                                        borderRadius: "6px",
                                      },
                                    }}
                                    label="Start Time"
                                  />
                                </LocalizationProvider>
                              </Box>
                              <Box sx={{ width: "48%" }}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DateTimePicker
                                    // slotProps={{ field: { size: "small" } }}
                                    enableAccessibleFieldDOMStructure
                                    sx={{
                                      svg: { color: "#ff914d", opacity: "0.4" },
                                      label: {
                                        color: "#ff914d",
                                        opacity: "0.4",
                                      },
                                      width: "100%",
                                      color: "#ff914d",
                                      border: "1px solid #ff914d",
                                      borderRadius: "5px",
                                      background: "rgba( 255, 145, 77, 0.25 )",
                                      boxShadow:
                                        "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                      backdropFilter: "blur( 4px )",
                                      "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#ff914d",
                                      }, //styles the label
                                      "& .MuiOutlinedInput-root": {
                                        "&:hover > fieldset": {
                                          borderColor: "",
                                        },
                                        height: "48px",
                                        borderRadius: "6px",
                                      },
                                    }}
                                    label="End Time"
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Box>
                          </LocalizationProvider>
                        </Box>
                      </Box>
                      {/* up end  */}
                      <TextField
                        autoComplete="off"
                        id="outlined-basic"
                        // label="venue Name"
                        placeholder="Link"
                        size="small"
                        variant="outlined"
                        sx={{
                          background: "rgba( 255, 145, 77, 0.25 )",
                          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                          backdropFilter: "blur( 4px )",
                          width: "100%",
                          marginTop: "2%",
                          "& .MuiOutlinedInput-root": {
                            color: "#ff914d",
                            fontFamily: "Arial",
                            fontWeight: "noraml",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ff914d",
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

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5% 0",
                        }}
                      >
                        <Button
                          onClick={handleCloseAddEvent}
                          sx={{
                            width: "49%",
                            background: "#ff914d",
                            padding: "9px 25px",
                            color: "#fff",
                            borderRadius: "25px",
                          }}
                          variant="contained"
                          startIcon={<DeleteIcon />}
                        >
                          {" "}
                          Cancle{" "}
                        </Button>
                        <Button
                          sx={{
                            width: "49%",
                            background: "#151618",
                            border: "1px solid #ff914d",
                            padding: "9px 25px",
                            color: "#fff",
                            borderRadius: "25px",
                          }}
                        >
                          save
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                )}
                {/* add event feature popup end  */}

                {/* youtube popup start */}
                {isYoutube && (
                  <Box sx={{ margin: "6% 0%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #fff",
                        paddingBottom: "10px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          YouTube Video
                        </Typography>
                      </Box>
                      <Box>
                        <DeleteIcon
                          onClick={handleCloseYoutube}
                          sx={{
                            color: "#fff",
                            "&:hover": { cursor: "pointer" },
                          }}
                        />
                      </Box>
                    </Box>

                    {/* search bar start  */}
                    <Box
                      sx={{
                        p: "2px 10px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        border: "1px solid #ff914d",
                        margin: "2% auto 0",
                        borderRadius: "10px",
                        background: "rgba( 32, 37, 36, 0.45 )",
                        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        backdropFilter: "blur( 4px )",
                      }}
                    >
                      <YouTubeIcon sx={{ color: "#ff0033" }} />
                      {/* </IconButton> */}
                      <InputBase
                        sx={{ ml: 1, flex: 1, color: "#ff914d" }}
                        placeholder="Search Google Maps"
                        inputProps={{ "aria-label": "search google maps" }}
                      />
                      <SearchIcon sx={{ color: "#fff" }} />
                    </Box>
                    {/* search bar end  */}
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      {`By adding a YouTube video, you agree to YouTube's`}{" "}
                      <Link href="#" color="#ff914d">
                        terms of service
                      </Link>
                    </Typography>
                  </Box>
                )}
                {/* youtube popup end */}

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    padding: "5% 0%",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      minHeight: "180px",
                      width: { md: "45%", xs: "100%" },
                      padding: "25px",
                      border: "1px solid #ff914d",
                      borderRadius: "12px",
                      background: "rgba( 255, 145, 77, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                    }}
                  >
                    <Typography sx={{ color: "#fff", margin: "3% 0%" }}>
                      Embed a YouTube video to give guests a preview of what to
                      expect.
                    </Typography>
                    <Button
                      onClick={handleOpenYoutube}
                      sx={{
                        background: "#202524",
                        border: "1px solid #ff914d",
                        color: "#ff914d",
                        borderRadius: "25px",
                        padding: "9px 25px",
                        textTransform: "capitalize",
                      }}
                      variant="outlined"
                      startIcon={<YouTubeIcon sx={{ color: "#fff" }} />}
                      endIcon={<ArrowRightAltIcon sx={{ color: "#fff" }} />}
                    >
                      Add Youtube Video
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      minHeight: "180px",
                      width: { md: "45%", xs: "100%" },
                      padding: "25px",
                      border: "1px solid #ff914d",
                      borderRadius: "12px",
                      background: "rgba( 255, 145, 77, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                    }}
                  >
                    <Typography sx={{ color: "#fff", margin: "3% 0%" }}>
                      {`From DJs to sponsors, showcase your event's key players.`}
                    </Typography>
                    <Button
                      onClick={handleOpenAddEvent}
                      sx={{
                        background: "#202524",
                        border: "1px solid #ff914d",
                        color: "#ff914d",
                        borderRadius: "25px",
                        padding: "9px 25px",
                        textTransform: "capitalize",
                      }}
                      variant="outlined"
                      startIcon={<StarIcon sx={{ color: "#fff" }} />}
                      endIcon={<ArrowRightAltIcon sx={{ color: "#fff" }} />}
                    >
                      Add Event Features
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      minHeight: "180px",
                      width: { md: "45%", xs: "100%" },
                      padding: "25px",
                      border: "1px solid #ff914d",
                      borderRadius: "12px",
                      background: "rgba( 255, 145, 77, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                    }}
                  >
                    <Typography sx={{ color: "#fff", margin: "3% 0%" }}>
                      {`Add images to showcase your event's vibe.`}
                    </Typography>
                    <Button
                      onClick={handleOpenGallery}
                      sx={{
                        background: "#202524",
                        border: "1px solid #ff914d",
                        color: "#ff914d",
                        borderRadius: "25px",
                        padding: "9px 25px",
                        textTransform: "capitalize",
                      }}
                      variant="outlined"
                      startIcon={<CollectionsIcon sx={{ color: "#fff" }} />}
                      endIcon={<ArrowRightAltIcon sx={{ color: "#fff" }} />}
                    >
                      Add a Gallery
                    </Button>
                  </Box>
                </Box>

                {/* link start */}
                <Box sx={{ textAlign: "center", marginTop: "5%" }}>
                  <Link
                    onClick={handleHideAdvanceSetting}
                    href="#"
                    color="#fff"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underline 2px #fff",
                      },
                    }}
                  >
                    Hide Advance Settings
                  </Link>
                </Box>
                {/* link end */}
              </Box>
            )}
            {/* Show Advance settings */}

            {/* mn end  */}
          </Box>
          {/* container end  */}
        </Box>
        {/* section end  */}

        {/* mobile header start  */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column-reverse",
            width: { xs: "100%" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 25px",
            position: "fixed",
            bottom: "0",
            background: "rgba( 255, 145, 77, 0.45 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 10px )",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{
                background: "#151618",
                padding: "9px 25px",
                color: "#ff914d",
                borderRadius: "15px",
              }}
            >
              Exit Event Creator
            </Button>
            <Button
              sx={{
                background: "#151618",
                padding: "9px 25px",
                color: "#ff914d",
                borderRadius: "15px",
              }}
            >
              Create Event
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "60%",
              justifyContent: "space-between",
              margin: "20px 0px",
            }}
          >
            <Box
              sx={{
                width: "30%",
                background: "#ff914d",
                height: "15px",
                borderRadius: "5px",
              }}
            ></Box>
            <Box
              sx={{
                width: "30%",
                background: "#151618",
                height: "15px",
                borderRadius: "5px",
              }}
            ></Box>
            <Box
              sx={{
                width: "30%",
                background: "#151618",
                height: "15px",
                borderRadius: "5px",
              }}
            ></Box>
          </Box>
        </Box>
        {/* mobile header end  */}
      </Box>
      {/* main end  */}
    </>
  );
}

export default EventPage;
