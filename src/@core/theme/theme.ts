"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";

// Extend the MUI Theme to include custom colors
declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      primaryMain: string;
      primaryDark: string;
      white: string;
      backgroundDark: string;
    };
  }
  // Allow configuration using `createTheme`
  interface ThemeOptions {
    customColors?: {
      primaryMain?: string;
      primaryDark?: string;
      white?: string;
      backgroundDark?: string;
    };
  }
}

const colors = {
  primaryMain: "#FF914D",
  primaryDark: "#151618",
  white: "#FFFFFF",
  backgroundDark: "#202524",
};

const theme: ThemeOptions = createTheme({
  typography: {
    fontFamily: "var(--font-DroidSans) , var(--font-DroidSans-Bold)",
    h2: {
      fontFamily: "var(--font-DroidSans-Bold)",
    },
  },
  palette: {
    primary: {
      main: "#FF914D",
    },
  },
  customColors: {
    ...colors,
  },
});

export default theme;
