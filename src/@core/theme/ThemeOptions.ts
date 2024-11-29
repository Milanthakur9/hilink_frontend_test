import { ThemeOptions } from "@mui/material/styles";
import Overrides from "./overrides";
import spacing from "./spacing";
import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      primaryMain: string;
      primaryDark1: string;
      primaryDark2: string;
      primaryWhite: string;
      orange: string;
      dark: string;
      main: string;
      light: string;
    };
  }
  interface PaletteOptions {
    customColors: {
      orange: string;
      primaryMain: string;
      primaryDark1: string;
      primaryDark2: string;
      primaryWhite: string;
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      trackBg?: string;
      avatarBg?: string;
      darkPaperBg?: string;
      lightPaperBg?: string;
      tableHeaderBg?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tonal: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides {
    tonal: true;
  }
}

export const themeOptions: ThemeOptions = {
  breakpoints: breakpoints(),
  ...spacing,
  typography: typography,
  palette: palette("dark"),
  components: Overrides(),
};
