"use client";

import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

interface Props {
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
