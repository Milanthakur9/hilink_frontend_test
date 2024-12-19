"use client";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useCallback, useEffect, useRef, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from "@mui/material";

import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import SearchIcon from "@mui/icons-material/Search";
import CustomTextField from "@/@core/components/mui/text-field";
// import LinkWithUnderline from "@/@core/components/links/LinkWithUnderline";
import Grid from "@mui/material/Grid2";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Icon from "@/@core/components/icon";
import { showAxiosError } from "@/lib/helper";
import axios from "axios";
import { useDebounce } from "use-debounce";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/navigation";

const drawerWidth = 340;

// const fakeEvents = [
//   {
//     id: 1,
//     time: "7:00PM",
//     day: "Fri",
//     image: "https://example.com/image1.jpg",
//   },
//   {
//     id: 2,
//     time: "11:00PM",
//     day: "Sat",
//     image: "https://example.com/image2.jpg",
//   },
//   {
//     id: 3,
//     time: "10:00PM",
//     day: "Sun",
//     image: "https://example.com/image3.jpg",
//   },
//   {
//     id: 4,
//     time: "9:00PM",
//     day: "Mon",
//     image: "https://example.com/image4.jpg",
//   },
//   {
//     id: 5,
//     time: "9:00PM",
//     day: "Mon",
//     image: "https://example.com/image4.jpg",
//   },
//   {
//     id: 6,
//     time: "9:00PM",
//     day: "Mon",
//     image: "https://example.com/image4.jpg",
//   },
//   {
//     id: 7,
//     time: "9:00PM",
//     day: "Mon",
//     image: "https://example.com/image4.jpg",
//   },
//   {
//     id: 8,
//     time: "9:00PM",
//     day: "Mon",
//     image: "https://example.com/image4.jpg",
//   },
//   {
//     id: 11,
//     time: "7:00PM",
//     day: "Fri",
//     image: "https://example.com/image1.jpg",
//   },
//   {
//     id: 22,
//     time: "11:00PM",
//     day: "Sat",
//     image: "https://example.com/image2.jpg",
//   },
//   {
//     id: 33,
//     time: "10:00PM",
//     day: "Sun",
//     image: "https://example.com/image3.jpg",
//   },
//   {
//     id: 44,
//     time: "9:00PM",
//     day: "Mon",
//     image: "https://example.com/image4.jpg",
//   },
// ];

const priceMarks = [
  { value: 0, label: "Free", actualValue: 0 },
  { value: 1, label: "$10", actualValue: 10 },
  { value: 2, label: "$20", actualValue: 20 },
  { value: 3, label: "$50", actualValue: 50 },
  { value: 4, label: "$100", actualValue: 100 },
  { value: 5, label: "$200", actualValue: 200 },
  { value: 6, label: "∞", actualValue: 300 },
];
const priceValues = [0, 10, 20, 50, 100, 200, Infinity];

const formatValue = (value: number) => {
  return value === 6 ? "∞" : `$${priceValues[value]}`;
};

const eventSkeletonGroupList = (numberOfSkeleton: number) => {
  return Array.from({ length: numberOfSkeleton }, (_, index) => (
    <Grid
      key={index}
      size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
      sx={{ position: "relative" }}
    >
      <Skeleton
        variant="rounded"
        animation="wave"
        height={260}
        sx={{ minHeight: "260px", borderRadius: "40px" }}
      />
    </Grid>
  ));
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up("md")]: {
          marginLeft: `${drawerWidth}px`,
        },
      },
    },
  ],
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "100px",
    justifyContent: "center",
    paddingInline: "20px",
    width: "fit-content",
    display: "inline-block",
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        [theme.breakpoints.up("md")]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
        },
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const CustomSliderForFilter = styled(Slider)(({ theme }) => ({
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: "18px",
    width: "15px",
    clipPath: "polygon(50% 100%, 100% 69%, 100% 0px, 0px 0px, 0px 69%)",
    position: "absolute",
    top: "0",
    borderRadius: 0,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
    },

    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-mark": {
    height: "20px",
    width: "1px",
  },
  "& .MuiSlider-track": {
    height: 0,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 2,
    ...theme.applyStyles("dark", {
      color: "#bfbfbf",
      opacity: undefined,
    }),
  },
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CustomSliderThumbComponentProps
  extends React.HTMLAttributes<unknown> {}

function CustomThumbComponent(props: CustomSliderThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <Icon icon="tabler:currency-dollar" fontSize={"1.4rem"} />
    </SliderThumb>
  );
}

const EventList = ({ isSticky }: { isSticky: boolean }) => {
  // const [eventList, setEventList] = useState(fakeEvents);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedRange, setSelectedRange] = useState<number[]>([0, 6]); // Default to $0 - infinity
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[] | null>(null);
  const [currentPageNo, setCurrentPageNo] = useState<number>(1);
  // const [hasMore, setHasMore] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText] = useDebounce(searchText, 200);
  const filterOptions = ["Trending", "Largest", "Newest"];
  const timelineOptions = ["Right Now", "Today", "This Week", "This Month"];
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[3]);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    filterOptions[0]
  );
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const handleEventFilter = (event: SelectChangeEvent) => {
    setSelectedFilter(event.target.value);
  };

  const handleTimelineFilter = (event: SelectChangeEvent) => {
    setSelectedTimeline(event.target.value);
  };

  useEffect(() => {
    setData([]);
  }, [searchText]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments??_page=${currentPageNo}&_limit=10`,
          {
            cancelToken: source.token,
          }
        );

        setLoading(false);
        // setHasMore();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newData = data.map((item: any) => item.email);

        setData((prev) => {
          if (prev) {
            return [...prev, ...newData];
          }
          return null;
        });
      } catch (error) {
        setLoading(false);
        showAxiosError(error);
      }
    };

    fetchData();

    return () => {
      source.cancel("Request canceled");
    };
  }, [currentPageNo, debouncedSearchText]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastEventRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current?.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        console.log(entries, "entries");
        if (entries[0].isIntersecting) {
          setCurrentPageNo((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },

    [loading]
  );

  const lowestTicketPrice =
    priceMarks.find(
      (price) =>
        selectedRange[0] === price.value &&
        selectedRange[0] < priceMarks.length - 1
    )?.actualValue || "no lower limit";

  const highestTicketPrice =
    priceMarks.find(
      (price) =>
        selectedRange[1] === price.value &&
        selectedRange[1] < priceMarks.length - 1
    )?.actualValue || "no upper limit";

  console.log({ lowestTicketPrice, highestTicketPrice });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSliderChange = (_event: any, newValue: number | number[]) => {
    if (typeof newValue == "number") return;
    setSelectedRange(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* search and filter section */}
        <AppBar
          id="app-bar"
          position={!isSticky ? "static" : "fixed"}
          open={open}
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: 2, md: 3 },
            pb: { xs: 8, md: isSticky ? 2 : 8 },
            px: { xs: 2, md: 4 },
            background: !isSticky
              ? "transparent"
              : theme.palette.customColors.primaryDark1,
            boxShadow: !isSticky ? 0 : "",
            zIndex: 3,
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              maxWidth: "650px",
              display: "flex",
              gap: { xs: 2, md: 4 },
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="filter"
              onClick={() => setOpen((prev) => !prev)}
              edge="start"
              sx={[
                {
                  backgroundColor: "primary.main",
                  color: theme.palette.customColors.primaryWhite,
                  flexGrow: 0,

                  "&:hover": {
                    backgroundColor: hexToRGBA(
                      theme.palette.customColors.primaryMain || "primary.main",
                      0.8
                    ),
                  },
                  "& svg": {
                    transform: { xs: "scale(1)", md: "scale(1.4)" },
                  },
                },
              ]}
            >
              <FilterAltIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, position: "relative" }}>
              <CustomTextField
                fullWidth
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Events near you"
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: theme.palette.customColors.primaryDark2,
                    p: { xs: 1, md: 1.2 },
                  },
                }}
              />
              <Box
                sx={{
                  mt: 2,
                  width: "100%",
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  flexWrap: "wrap",
                  gap: { xs: 2, md: 4 },
                  "&>a": {
                    fontSize: "12px",
                  },
                }}
              >
                {/* <LinkWithUnderline linkTitle="Trending Events" link="/" /> */}
                {/* <LinkWithUnderline linkTitle="Concerts" link="/" /> */}
                {/* <LinkWithUnderline linkTitle="Pop-Ups" link="/" /> */}
                <Box>
                  <FormControlStyled variant="outlined">
                    <Select
                      labelId="event-filter-label"
                      id="event-filter"
                      disableUnderline
                      value={selectedFilter}
                      onChange={(e) => handleEventFilter(e)}
                      label="Filter Events"
                      variant="standard"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: theme.palette.customColors.primaryWhite,
                          marginRight: "20px",
                        },
                      }}
                    >
                      {filterOptions.map((option) => (
                        <MenuItem
                          key={option}
                          value={option}
                          disabled={option === selectedFilter}
                          sx={{
                            opacity: option === selectedFilter ? 0.5 : 1,
                            pointerEvents:
                              option === selectedFilter ? "none" : "auto",
                            padding: 2,
                            color: theme.palette.customColors.primaryWhite,
                          }}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControlStyled>
                </Box>
                <Box>
                  <FormControlStyled variant="outlined">
                    <Select
                      labelId="event-filter-label"
                      id="timeline-filter"
                      disableUnderline
                      value={selectedTimeline}
                      onChange={(e) => handleTimelineFilter(e)}
                      label="Filter timeline"
                      variant="standard"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: theme.palette.customColors.primaryWhite,
                          marginRight: "20px",
                        },
                      }}
                    >
                      {timelineOptions.map((option) => (
                        <MenuItem
                          key={option}
                          value={option}
                          disabled={option === selectedTimeline}
                          sx={{
                            opacity: option === selectedTimeline ? 0.5 : 1,
                            pointerEvents:
                              option === selectedTimeline ? "none" : "auto",
                            padding: 2,
                            color: theme.palette.customColors.primaryWhite,
                          }}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControlStyled>
                </Box>
              </Box>
            </Box>
            <IconButton
              color="inherit"
              aria-label="filter"
              edge="end"
              sx={[
                {
                  backgroundColor: "transparent",
                  color: theme.palette.customColors.primaryWhite,
                  flexGrow: 0,

                  "& svg": {
                    transform: { xs: "scale(1)", md: "scale(1.3)" },
                  },
                },
              ]}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* filter  */}
        <Box
          sx={{
            height: "100%",
            width: open ? { xs: "80%", sm: "60%", md: drawerWidth } : 0,
            overflow: "hidden",
            position: !isSticky ? "absolute" : "fixed",
            inset: !isSticky ? null : 0,
            padding: open ? 4 : 0,
            borderRight: open
              ? `1px solid ${hexToRGBA(
                  theme.palette.customColors.primaryWhite,
                  0.3
                )}`
              : "",
            background: theme.palette.customColors.primaryDark1,
            zIndex: 100,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <IconButton
              sx={{
                color: theme.palette.customColors.primaryWhite,
              }}
              size="small"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Icon icon="tabler:x" fontSize="1.8rem" />
            </IconButton>
          </Box>

          <Box
            sx={{
              width: open ? "100%" : 0,
              pt: 2,
            }}
          >
            <Typography
              color={theme.palette.customColors.primaryWhite}
              variant="h5"
              fontWeight={800}
              mb={2}
              ml={2.4}
              fontSize={"1.3rem"}
            >
              Price
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 6,
              }}
            >
              <CustomSliderForFilter
                value={selectedRange} // Two-handle slider
                onChange={handleSliderChange}
                min={0}
                max={6}
                step={1}
                marks={priceMarks}
                valueLabelFormat={(value) => formatValue(value)}
                sx={{ width: "90%" }}
                slots={{ thumb: CustomThumbComponent }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "end", mt: 10 }}>
            <Button variant="contained">Apply</Button>
          </Box>
        </Box>

        <Main open={open} sx={{ mt: { xs: 3, md: 5 } }}>
          {/* // make a new component for this */}
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 6 }}>
              {data?.map((event, index) => {
                return (
                  <Grid
                    ref={index === data.length - 1 ? lastEventRef : null}
                    key={index}
                    size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                    sx={{ position: "relative" }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "primary.main",
                        borderRadius: "40px",
                        minHeight: "280px",
                        cursor: "pointer",
                        // border: "1px solid green",
                        transition: "transform 300ms ease-in-out",
                        "&:hover": {
                          transform: "scale(1.04)",
                        },
                      }}
                      onClick={() => router.push(`/e/`)}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            sx={{
                              color: theme.palette.customColors.primaryWhite,
                              fontFamily:
                                theme.typography.fontFamily?.split(",")[1],
                              fontWeight: "bold",
                              fontSize: "16px",
                              textTransform: "uppercase",
                            }}
                          >
                            {event.time}
                          </Typography>
                          <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                              color: theme.palette.customColors.primaryDark1,
                              height: "42px",
                              width: "42px",
                              borderRadius: "50%",
                              background:
                                theme.palette.customColors.primaryWhite,
                              fontSize: "14px",
                              fontWeight: "bold",
                              textAlign: "center",
                              lineHeight: "42px",
                              textTransform: "uppercase",
                              letterSpacing: "-1px",
                            }}
                          >
                            {event.day}
                          </Typography>
                        </Box>

                        <Box sx={{ height: "100px", width: "100%" }} />
                        {/* <Box sx={{ height: '100px', width: '100%', background: 'url(https://example.com/background.jpg) no-repeat center center' }} /> */}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
              {loading && eventSkeletonGroupList(isSmallScreen ? 1 : 4)}
            </Grid>
          </Container>
        </Main>
      </Box>
    </>
  );
};

export default EventList;
