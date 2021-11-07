import { styled } from "@mui/system";
import React from "react";

const BackgroundDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100vw",
  height: "100%",
  top: 0,
  //left: "50vw",
  backgroundColor: theme.palette.background.backgroundDiv.first,

  [theme.breakpoints.up("xs")]: {
    background: `linear-gradient(10deg, ${theme.palette.background.backgroundDiv.first} 0%,
      ${theme.palette.background.backgroundDiv.first} 20%, 
      ${theme.palette.background.backgroundDiv.second} 80%,
      ${theme.palette.background.backgroundDiv.third} 96%)`,
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
