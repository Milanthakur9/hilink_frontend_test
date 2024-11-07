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
      dark: string;
      main: string;
      light: string;
    };
  }
  interface PaletteOptions {
    customColors: {
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

export const themeOptions: ThemeOptions = {
  breakpoints: breakpoints(),
  ...spacing,
  typography: typography,
  palette: palette("dark"),
  components: Overrides(),
};
