import React from "react";
import { styled } from "@mui/system";

const RingOfFire = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "50px",
  height: "50px",
  display: "none",
  filter: "url(#wavy)",

  ":before": {
    animation: "changeShadow 5s linear infinite",
    content: "''",
    position: "absolute",
    top: "5px",
    left: "5px",
    right: "5px",
    bottom: "5px",
    border: `0px solid ${theme.palette.primary.hover}`,
    borderRadius: "50%",

    boxShadow: `0 0 50px ${theme.palette.primary.hover}, inset 0 0 5px ${theme.palette.primary.main}`,
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  "@keyframes changeShadow": {
    "0%": {
      boxShadow: `0 0 20px ${theme.palette.primary.hover}, inset 0 0 5px ${theme.palette.primary.main}`,
    },
    "20%": {
      boxShadow: `0 0 5px #af2312, inset 0 0 25px #af0160`,
    },
    "60%": {
      boxShadow: `0 0 5px #ca2312, inset 0 0 25px #ca00a0`,
    },
    "80%": {
      boxShadow: `0 0 5px #aa0055, inset 0 0 25px #ca0050`,
    },
    "100%": {
      boxShadow: `0 0 20px ${theme.palette.primary.hover}, inset 0 0 5px ${theme.palette.primary.main}`,
    },
  },
}));

export const Mouseeffect = () => {
  const ringRef = React.useRef();
  const handleMousemove = React.useCallback((event) => {
    if (!ringRef) return;

    const position = {
      x: event.pageX,
      y: event.pageY,
    };
    const OFFSET_Y = 10;
    ringRef.current.style.display = "block";
    ringRef.current.style.position = "absolute";
    ringRef.current.style.top = position.y + OFFSET_Y + "px";
    ringRef.current.style.left = position.x + "px";
  }, []);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, [handleMousemove]);
  return (
    <>
      <RingOfFire ref={ringRef} />
      <svg width="0" height="0">
        <filter id="wavy">
          <feTurbulence
            x="5"
            y="5"
            baseFrequency="0.0051"
            numOctaves="15"
            seed="10"
          ></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    </>
  );
};
