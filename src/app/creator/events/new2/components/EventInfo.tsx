import {
  Box,
  Button,
  FormControl,
  ImageList,
  ImageListItem,
  InputBase,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  useTheme,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import CustomTextFieldForRhf from "@/components/textField/CustomTextFieldForRhf";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { useContext, useState } from "react";
import { Dayjs } from "dayjs";
import CustomTextFieldWithIcon from "@/components/textField/CustomTextFieldWithIcon";
import ControlledRte from "@/components/richTextEditor/ControlledRte";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import Image from "next/image";
import { CreateEventContext } from "@/context/CreateEvent";
import { EventInfoDataType } from "@/context/type";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "@mui/material/Link";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import TuneIcon from "@mui/icons-material/Tune";

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

const schema = yup.object().shape({
  eventName: yup.string().required("Please enter your event name"),
  venueName: yup.string().required(),
  eventAddress: yup.string().required(),
  email: yup.string().email().optional(),
  phone: yup.string().optional(),
});
interface FormData {
  eventName: string;
  venueName: string;
  eventAddress: string;
  email: string;
  phone: string;
}

const defaultValues: FormData = {
  eventName: "",
  eventAddress: "",
  venueName: "",
  email: "",
  phone: "",
};

const EventInfo = () => {
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false);
  const [description, setDescription] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [admissionModalOpen, setAdmissionModalOpen] = useState<boolean>(false);
  const [eventPageDesignModalOpen, setEventPageDesignModalOpen] =
    useState<boolean>(false);
  const [uploadPosterModalOpen, setUploadPosterModalOpen] =
    useState<boolean>(false);
  const [fontNames, setFontNames] = useState<string[]>([]);

  const handleFontNameChange = (event: SelectChangeEvent<typeof fontNames>) => {
    const {
      target: { value },
    } = event;
    setFontNames(typeof value === "string" ? value.split(",") : value);
  };

  const theme = useTheme();
  const { setEventInfoData } = useContext(CreateEventContext);

  // text editor description
  const handleDescriptionChange = (editorState: EditorState) => {
    setDescription(editorState);
    const htmlContent = stateToHTML(editorState.getCurrentContent());
    console.log(htmlContent, "parent");
  };

  // image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
      setEventInfoData((prev: EventInfoDataType) => ({
        ...prev,
        poster: imageUrl,
      }));
    }
  };

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // const onSubmit = async (data: FormData) => {
  //   console.log(data);
  // };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          padding: "5% 0px 10px 0",
          color: "customColors.primaryWhite",
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
          <form
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12 }}>
                <CustomTextFieldForRhf
                  control={control}
                  errors={errors}
                  label="My Event"
                  placeHolder="Enter your event name"
                  name="eventName"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDateTimePicker
                    slotProps={
                      {
                        // field: { size: "medium", color: "#ff914d" },
                      }
                    }
                    enableAccessibleFieldDOMStructure
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    sx={{
                      "& .MuiPickersOutlinedInput-notchedOutline": {
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: 0,
                      },
                      // svg: { color: "#ff914d" },
                      label: { color: "" },
                      width: "100%",
                      // border: "1px solid #ff914d",
                      borderRadius: "0px",
                      // background: "rgba( 255, 145, 77, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                      "& .MuiInputLabel-root.Mui-focused": {}, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "&:hover > fieldset": { borderColor: "transparent" },
                        height: "48px",
                        // borderRadius: "6px",
                      },
                    }}
                    label="Start Time"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDateTimePicker
                    enableAccessibleFieldDOMStructure
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    sx={{
                      "& .MuiPickersOutlinedInput-notchedOutline": {
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: 0,
                      },
                      "&:hover": { border: "none" },
                      label: { color: "" },
                      width: "100%",
                      borderRadius: "0px",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                      "& .MuiInputLabel-root.Mui-focused": {}, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "&:hover > fieldset": { borderColor: "transparent" },
                        height: "48px",
                        borderRadius: "6px",
                      },
                    }}
                    label="End Time"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomTextFieldForRhf
                  control={control}
                  errors={errors}
                  name="venueName"
                  label="Venue"
                  placeHolder="Venue"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomTextFieldWithIcon
                  control={control}
                  errors={errors}
                  name="eventAddress"
                  label="Address"
                  placeHolder="Address"
                  iconName="tabler:map-pin"
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ minHeight: 150 }}>
                <ControlledRte
                  handleDescriptionChange={handleDescriptionChange}
                  value={description}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                    marginBottom: "5px",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        // color: ,
                      }}
                    >
                      Email or Phone Number
                    </Typography>
                  </Box>
                  <Box
                    onClick={() => setIsPhoneNumber((prev) => !prev)}
                    sx={{ cursor: "pointer" }}
                  >
                    {isPhoneNumber ? (
                      <EmailIcon
                        sx={{
                          color: "pink",
                          // color: theme.palette.customColors.primaryWhite
                        }}
                      />
                    ) : (
                      <LocalPhoneIcon
                        sx={{
                          color: "lightblue",
                          //  color: theme.palette.customColors.primaryWhite
                        }}
                      />
                    )}

                    <ChangeCircleIcon
                      sx={{
                        transform: "translate(-10px , 5px)",
                        fontSize: "20px",
                        color: theme.palette.customColors.primaryWhite,
                      }}
                    />
                  </Box>
                </Box>
                {isPhoneNumber ? (
                  <CustomTextFieldWithIcon
                    iconName="tabler:phone"
                    control={control}
                    errors={errors}
                    name="phone"
                    placeHolder="Enter Your phone number"
                    label="Phone Number"
                  />
                ) : (
                  <CustomTextFieldWithIcon
                    iconName="tabler:mail"
                    control={control}
                    errors={errors}
                    name="email"
                    placeHolder="Enter your email "
                    label="Email Address"
                  />
                )}
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box
          sx={{
            width: { md: "48%", xs: "80%" },
            // height: '50vh',
            minHeight: "450px",
            margin: { md: "0%", xs: "0% auto 6%" },
            undImage: `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : `url(https://posh.vip/cdn-cgi/image/quality=85,fit=scale-down,format=webp,width=1920/https://images.posh.vip/create-event-flyer-placeholders/Default_Flyer_Placeholder_2.webp)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            borderRadius: "25px",
            transition: "all 0.1s linear",
            position: "relative",
            "&:hover": {
              // transform:'scale(1.1)'
              boxShadow: `0px 0px 19px 20px ${hexToRGBA(
                theme.palette.primary.main,
                0.12
              )} `,
              border: `1px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              top: "40%",
              transform: "translate(-50%,-50%)",
              // color: "#fff",
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
              transform: "translate(-50%,-40%)",
            }}
          >
            {backgroundImage ? (
              <Button
                sx={{
                  background: theme.palette.customColors.primaryDark2,
                  border: `1px solid ${theme.palette.primary.main}`,
                  color: theme.palette.primary.main,
                  borderRadius: "25px",
                }}
                variant="contained"
                onClick={() => {
                  setBackgroundImage(null);
                  setEventInfoData((prev: EventInfoDataType) => ({
                    ...prev,
                    poster: null,
                  }));
                }}
                // sx={{ position: 'absolute', bottom: '20px' }}
              >
                Upload Poster
              </Button>
            ) : (
              <>
                <label
                  htmlFor="background-image"
                  style={{
                    background: theme.palette.customColors.primaryDark2,
                    border: `1px solid ${theme.palette.primary.main}`,
                    color: theme.palette.primary.main,
                    padding: "12px 25px",
                    borderRadius: "25px",
                    fontSize: "1.8vh",
                    cursor: "pointer",
                  }}
                >
                  Upload Poster <sup>*</sup>
                </label>
                <input
                  id="background-image"
                  style={{
                    border: `1px solid ${theme.palette.primary.main}`,
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
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Songs"
              inputProps={{ "aria-label": "search Songs" }}
            />
            <SearchIcon sx={{}} />
          </Box>

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
              open={admissionModalOpen}
              onClose={() => {
                setAdmissionModalOpen(false);
              }}
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
                    color: theme.palette.primary.main,
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
                      color: theme.palette.primary.main,
                      fontFamily: "Arial",
                      fontWeight: "normal",
                      borderBottom: `1px solid ${theme.palette.primary.main}`,
                    },
                    // Label
                    "& .MuiInputLabel-standard": {
                      color: theme.palette.primary.main,
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
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Admission Settings{" "}
                      <Typography sx={{ marginLeft: "15px" }}>
                        $10.00
                      </Typography>
                    </Typography>
                  </Box>
                  <Box>
                    <ContentCopyIcon
                      sx={{
                        // color: "#fff",
                        background: theme.palette.primary.main,
                        padding: "10px",
                        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                        fontSize: "40px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                    />
                    <EditIcon
                      sx={{
                        // color: ,
                        background: theme.palette.primary.main,
                        padding: "10px",
                        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
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
                    <Link href="#" color={theme.palette.primary.main}>
                      Switch to RSVP Event
                    </Link>
                    {/* <Link href="#">Link</Link> */}
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        background: theme.palette.customColors.primaryDark2,
                        border: `1px solid ${theme.palette.primary.main}`,
                        padding: "9px 25px",
                        color: theme.palette.primary.main,
                        borderRadius: "25px",
                        marginRight: "15px",
                        "&:hover": {
                          cursor: "pointer",
                          background: theme.palette.primary.main,
                          // color: "#fff",
                        },
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      sx={{
                        background: theme.palette.primary.main,
                        padding: "9px 25px",
                        // color: "#fff",
                        borderRadius: "25px",
                        "&:hover": {
                          cursor: "pointer",
                          background: "#151618",
                          color: theme.palette.primary.main,
                          border: `1px solid ${theme.palette.primary.main}`,
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
                <>
                  <Typography sx={{ textAlign: "center" }} color="inherit">
                    Customize your event font, accent color, and light/dark
                    mode.
                  </Typography>
                </>
              }
            >
              <Button>
                <TuneIcon
                  onClick={() => setEventPageDesignModalOpen(true)}
                  sx={{
                    background: theme.palette.primary.main,
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
              open={eventPageDesignModalOpen}
              onClose={() => setEventPageDesignModalOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  // sx={{ color: "#fff" }}
                >
                  Event Page Design
                </Typography>
                <Typography
                  // sx={{ color: "#fff" }}
                  id="modal-modal-title"
                  variant="subtitle1"
                >
                  Event Title Font
                </Typography>

                <FormControl sx={{ m: 1, width: "100%" }}>
                  <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={fontNames}
                    onChange={handleFontNameChange}
                    sx={{
                      width: "100%",
                      border: `1px solid ${theme.palette.primary.main}`,
                      borderRadius: "35px",
                      overflow: "auto",
                      // "& .MuiSvgIcon-root": { color: "#ff914d" },
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
                  <Box
                  //  sx={{ color: "#fff" }}
                  >
                    Accent color
                  </Box>
                  <Box>{/* <SwitchP /> */}</Box>
                </Box>
                {/* color picker & switch end */}
              </Box>
            </Modal>
            {/* popup 2 end  */}

            {/* popup 1 start */}
            <HtmlTooltip
              title={
                <>
                  <Typography sx={{ textAlign: "center" }} color="inherit">
                    Choose an image from your gallery or search for GIFs/images
                    online for your events flyer
                  </Typography>
                </>
              }
            >
              <Button>
                <InsertPhotoIcon
                  onClick={() => setUploadPosterModalOpen(true)}
                  sx={{
                    background: theme.palette.primary.main,
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
              open={uploadPosterModalOpen}
              onClose={() => setUploadPosterModalOpen(false)}
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
                      borderBottom: `1px solid ${theme.palette.primary.main}`,
                      width: "75%",
                    }}
                  >
                    {/* <Typography variant='h6' sx={{fontWeight:'Normal',fontSize:'30px',margin:'10px 0px'}}>Search for Gifs</Typography> */}
                    <TextField
                      sx={{
                        width: "100%",
                        "& .MuiInput-root": {
                          color: theme.palette.primary.main,
                          fontFamily: "Arial",
                          fontWeight: "normal",
                        },
                        // Label
                        "& .MuiInputLabel-standard": {
                          color: theme.palette.primary.main,
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
                          border: `1px solid ${theme.palette.primary.main}`,
                          color: theme.palette.primary.main,
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
                            border: `1px solid ${theme.palette.primary.main}`,
                            color: theme.palette.primary.main,
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
                            border: `1px solid ${theme.palette.primary.main}`,
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
                      backgroundColor: theme.palette.primary.main,
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
      </Box>
    </>
  );
};

export default EventInfo;
