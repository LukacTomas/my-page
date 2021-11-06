import { styled } from "@mui/system";
import React from "react";
const BackgroundDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "50vw",
  height: "150vh",
  top: 0,
  left: "50vw",
  backgroundColor: theme.palette.background.backgroundDiv.first,
  background: `linear-gradient(to right, ${theme.palette.background.backgroundDiv.first} 0%, 
      ${theme.palette.background.backgroundDiv.second} 54%,
      ${theme.palette.background.backgroundDiv.third} 90%)`,
  zIndex: -1,
}));

export const Background = () => {
  return <BackgroundDiv />;
};
