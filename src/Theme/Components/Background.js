import { styled } from "@mui/system";
import React from "react";

const BackgroundDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100vw",
  height: "100%",
  top: 0,
  //left: "50vw",
  clipPath:
    "polygon(0% 0%, 100% 0%, 100% 100%, 40% 23%, 52% 31%, 63% 43%, 69% 56%, 77% 68%, 86% 80%)",
  backgroundColor: theme.palette.background.backgroundDiv.first,
  //backgroundColor: "red",
  [theme.breakpoints.up("xs")]: {
    background: `linear-gradient(32deg, ${theme.palette.background.backgroundDiv.first} 0%,
      ${theme.palette.background.backgroundDiv.first} 60%, 
      ${theme.palette.background.backgroundDiv.second} 70%,
      ${theme.palette.background.backgroundDiv.third} 100%)`,
  },
  zIndex: -1,
}));
/**
 * Background
 * - gradient background div that streches from
 *   second half of the screen to the end
 *
 * @returns BackgroundDiv
 */
export const Background = () => {
  return <BackgroundDiv />;
};
