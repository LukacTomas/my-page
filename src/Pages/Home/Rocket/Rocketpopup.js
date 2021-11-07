import React from "react";
import { styled } from "@mui/system";

const PopUp = styled("div")({
  backgroundColor: "#424242",
  borderRadius: "25px",
  boxShadow: "15px 5px 1px 2px #212121",
  padding: "2rem",
  position: "relative",
  top: "-50px",
  left: "25px",
  animation: "upDown2 5s ease-in-out 1s infinite, appear ease-in-out 250ms",
  "&: before": {
    backgroundColor: "#424242",
    content: '""',
    borderRadius: "25px",
    boxShadow: "15px 5px 1px 2px #212121",
    display: "block",
    minHeight: "15px",
    minWidth: "50px",
    position: "absolute",
    top: "125px",
    left: "-0.05rem",
    animation: "upDown1 5s ease-in-out infinite",
    "@keyframes upDown1": {
      "0%": {
        lineHeight: " 30px",
        transform: "translatey(0px)",
      },
      "25%": {
        transform: "translateY(-20px)",
      },
      "50%": {
        lineHeight: "10px",
      },
      "100%": {
        lineHeight: "10px",
      },
    },
  },
  "&: after": {
    backgroundColor: "#424242",
    content: '""',
    display: "block",
    borderRadius: "25px",
    boxShadow: "15px 5px 1px 2px #212121",
    minHeight: "15px",
    minWidth: "25px",
    position: "absolute",
    top: "150px",
    left: "-0.05rem",
    animation: "upDown2 5s ease-in-out infinite",
  },
  "@keyframes upDown2": {
    "0%": {
      transform: "translatey(0px)",
    },

    "50%": {
      transform: "translatey(-20px)",
    },
    "100%": {
      transform: "translatey(0px)",
    },
  },
  "@keyframes appear": {
    "0%": {
      opacity: 0,
      transform: "scale(0.1)",
    },
    "25%": {
      opacity: 0.5,
      transform: "scale(0.3)",
    },

    "50%": {
      opacity: 0.75,
      transform: "scale(0.6)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  "@keyframes disAppear": {
    "0%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "25%": {
      opacity: 0.75,
      transform: "scale(0.6)",
    },

    "50%": {
      opacity: 0.5,
      transform: "scale(0.3)",
    },
    "100%": {
      opacity: 0,
      transform: "scale(0)",
      display: "none",
    },
  },
});

const useChangePosition = (position, amount = 15) => {
  const regexStartOfEndText = new RegExp("[a-z]+$");
  const indexOfStartText = position.search(regexStartOfEndText);
  const number = Number(position.slice(0, indexOfStartText));
  const extension = position.slice(indexOfStartText);
  const newPosition = `${number - amount}${extension}`;
  return newPosition;
};

export const Rocketpopup = ({ popupRef, popupText = "Hey", position }) => {
  const positionTop = useChangePosition(position.top, 10);

  return (
    <div
      style={{
        position: "absolute",
        top: positionTop,
        left: position.left,
        zIndex: 5,
      }}
    >
      <PopUp ref={popupRef} className="PopUp">
        {popupText} <br />
        <i>
          window.
          <span style={{ color: "rgb(130, 170, 250)" }}>rocketSpeed</span>
        </i>
      </PopUp>
    </div>
  );
};
