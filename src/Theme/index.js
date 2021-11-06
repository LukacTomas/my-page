import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  SayHi,
  Mouseeffect,
  Background,
  BackgroundParticles as Particles,
  Cookieusage,
  Routes,
} from "./Components/";

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
      backgroundDiv: {
        first: "#121212",
        second: "#212121",
        third: "#2d2d42",
      },
    },
    text: {
      primary: "#ffffff",
    },
    ringOfFire: {
      add20: {
        first: "#af2312",
        second: "#af0160",
      },
      add60: {
        first: "#ca2312",
        second: "#ca00a0",
      },
      add80: {
        first: "#aa0055",
        second: "#ca0050",
      },
    },
  },
});

export const Theme = ({ language, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      {children}
      <Background />
      <Cookieusage />
      <Particles />
      <Mouseeffect />
      <SayHi />
    </ThemeProvider>
  );
};
