import React from "react";
import { styled } from "@mui/system";

const RING_OFFSET_Y = 10;

const RingOfFire = styled("div")(({ theme }) => ({
  display: "none",
  position: "absolute",
  width: "50px",
  height: "50px",
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
      boxShadow: `0 0 5px ${theme.palette.ringOfFire.add20.first}, 
                  inset 0 0 25px ${theme.palette.ringOfFire.add20.second}`,
    },
    "60%": {
      boxShadow: `0 0 5px ${theme.palette.ringOfFire.add60.first}, 
                  inset 0 0 25px ${theme.palette.ringOfFire.add60.second}`,
    },
    "80%": {
      boxShadow: `0 0 5px ${theme.palette.ringOfFire.add80.first}, 
                  inset 0 0 25px ${theme.palette.ringOfFire.add80.second}`,
    },

    "100%": {
      boxShadow: `0 0 20px ${theme.palette.primary.hover}, inset 0 0 5px ${theme.palette.primary.main}`,
    },
  },
}));

export default function Mouseeffect() {
  const ringRef = React.useRef(null);

  /**
   * handleMousemove -
   * ring tracking every mouse move
   *
   * @param: event - mouseEvent
   *
   */
  const handleMousemove = React.useCallback((event) => {
    if (!ringRef) return;

    const position = {
      x: event.pageX,
      y: event.pageY,
    };

    const ringRefStyles = ringRef.current.style;
    ringRefStyles.display = "block";
    ringRefStyles.top = position.y + RING_OFFSET_Y + "px";
    ringRefStyles.left = position.x + "px";
  }, []);

  /**
   * useEffect that adds evendlistener to mousemove
   * handleMousemove function is called
   *
   */
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
}
