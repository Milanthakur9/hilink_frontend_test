"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { themeOptions } from "./ThemeOptions";
// import { themeDetails } from './utils/theme';

// Extend the MUI Theme to include custom colors
// declare module "@mui/material/styles" {
//   interface Theme {
//     customColors: {
//       primaryMain: string;
//       primaryDark: string;
//       white: string;
//       backgroundDark: string;
//     };
//   }
//   // Allow configuration using `createTheme`
//   interface ThemeOptions {
//     customColors?: {
//       primaryMain?: string;
//       primaryDark?: string;
//       white?: string;
//       backgroundDark?: string;
//     };
//   }
// }

const theme: ThemeOptions = createTheme(themeOptions);

export default theme;
