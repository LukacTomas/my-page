import { styled } from "@mui/system";
import React from "react";
const BackgroundDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "50vw",
  height: "150vh",
  top: 0,
  left: "50vw",
  backgroundColor: "rgb(18,18,18)",
  background:
    "linear-gradient(to right, rgba(18,18,18,1) 0%, rgba(33,33,33,1) 54%, rgba(45,45,66,1) 90%)",
  zIndex: -1,
}));

export const Background = () => {
  return <BackgroundDiv />;
};
