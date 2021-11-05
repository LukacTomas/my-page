import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./theme.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e5882b", // #e5882b
      hover: "#bc7754", // #bc7754
    },
    background: {
      paper: "#212121",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default function IndexLang({ language, children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
