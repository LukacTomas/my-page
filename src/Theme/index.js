import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./theme.css";
import { SayHi } from "./Components/Sayhi";
import { Mouseeffect } from "./Components/Mouseeffect";
import { Background } from "./Components/Background";
import { BackgroundParticles as Particles } from "./Components/Particles";

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

export default function IndexLang({ language, children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
      <Particles />
      <Background />
      <Mouseeffect />
      <SayHi />
    </ThemeProvider>
  );
}
