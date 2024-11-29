// ** Type Imports
import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { Palette } from "@mui/material";
// import { Skin } from "src/@core/layouts/types";

const colors = {
  primaryMain: "#FFF",
  orange: "#ff914d",
  primaryDark1: "#151618",
  primaryDark2: "#202524",
  primaryWhite: "#FFFFFF",
};

const DefaultPalette = (mode: Palette["mode"]): Palette => {
  // ** Vars
  const whiteColor = "#FFF";
  const lightColor = "32,37,36";
  // const lightColor = "47, 43, 61";
  // const lightColor = "rgb(47, 43, 61)";
  const darkColor = "#fff";
  // const darkColor = "rgb(208, 212, 241)";
  const darkPaperBgColor = colors.primaryDark1;
  const mainColor = mode === "light" ? lightColor : darkColor;
  const darkBodyBackground = colors.primaryDark1;

  const defaultBgColor = () => {
    if (mode === "light") {
      return "#F8F7FA";
    } else {
      return darkBodyBackground;
    }
  };

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      orange: colors.orange,
      primaryMain: colors.primaryMain,
      primaryDark1: colors.primaryDark1,
      primaryDark2: colors.primaryDark2,
      primaryWhite: colors.primaryWhite,
    },
    mode: mode,
    common: {
      black: "#000",
      white: whiteColor,
    },
    primary: {
      light: "#ff9c5e",
      main: "#ff914d",
      dark: "#e58245",
      contrastText: whiteColor,
      // contrastText:"rgb(47, 43, 61)"
      // contrastText:"rgb(208, 212, 241)"
    },
    secondary: {
      light: "#B2B4B8",
      main: "#A8AAAE",
      dark: "#949699",
      contrastText: whiteColor,
    },
    error: {
      light: "#ED6F70",
      main: "#EA5455",
      dark: "#CE4A4B",
      contrastText: whiteColor,
    },
    warning: {
      light: "#FFAB5A",
      main: "#FF9F43",
      dark: "#E08C3B",
      contrastText: whiteColor,
    },
    info: {
      light: "#1FD5EB",
      main: "#00CFE8",
      dark: "#00B6CC",
      contrastText: whiteColor,
    },
    success: {
      light: "#42CE80",
      main: "#28C76F",
      dark: "#23AF62",
      contrastText: whiteColor,
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#F5F5F5",
      A200: "#EEEEEE",
      A400: "#BDBDBD",
      A700: "#616161",
    },
    text: {
      // primary: `rgba(${mainColor}, 0.78)`,
      // secondary: `rgba(${mainColor}, 0.68)`,
      // disabled: `rgba(${mainColor}, 0.42)`,
      primary: hexToRGBA(mainColor, 1),
      secondary: hexToRGBA(mainColor, 0.68),
      disabled: hexToRGBA(mainColor, 0.42),
    },
    // divider: `rgba(${mainColor}, 0.16)`,
    divider: hexToRGBA(mainColor, 0.16),
    background: {
      paper: mode === "light" ? whiteColor : darkPaperBgColor,
      default: defaultBgColor(),
    },
    action: {
      // active: `rgba(${mainColor}, 0.54)`,
      // hover: `rgba(${mainColor}, 0.05)`,
      // selected: `rgba(${mainColor}, 0.06)`,
      // selectedOpacity: 0.06,
      // disabled: `rgba(${mainColor}, 0.26)`,
      // disabledBackground: `rgba(${mainColor}, 0.12)`,
      // focus: `rgba(${mainColor}, 0.12)`,
      active: hexToRGBA(mainColor, 0.54),
      hover: hexToRGBA(mainColor, 0.05),
      selected: hexToRGBA(mainColor, 0.06),
      selectedOpacity: 0.06,
      disabled: hexToRGBA(mainColor, 0.26),
      disabledBackground: hexToRGBA(mainColor, 0.12),
      focus: hexToRGBA(mainColor, 0.12),
    },
  } as Palette;
};

export default DefaultPalette;
