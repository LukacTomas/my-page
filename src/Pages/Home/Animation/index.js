import React from "react";
import { styled } from "@mui/system";
import Rocket from "Static/rocket2.svg";

const animationDepth = 300;

const Image = styled("img")(() => ({
  position: "absolute",
  display: "block",
  top: -2 * animationDepth,
  left: -animationDepth,
  animation: "rocket 15000ms linear 1",

  "@keyframes rocket": {
    "0%": {
      top: 2 * animationDepth,
      left: -100,
      transform: "rotate(-270deg)",
    },
    "5%": {
      top: 2 * animationDepth,
      left: -20,
      transform: "rotate(-270deg)",
    },
    "10%": {
      top: 2 * animationDepth,
      left: -20,
      transform: "rotate(-270deg)",
    },
    "25%": {
      top: animationDepth / 2,
      left: animationDepth / 2,
      transform: "rotate(-315deg)",
    },
    "45%": {
      top: -animationDepth,
      left: (3 * animationDepth) / 2,
      transform: "rotate(-315deg)",
    },
    "50%": {
      top: 0,
      left: 2 * animationDepth,
      transform: "rotate(-180deg)",
    },
    "60%": {
      top: 0,
      left: 2 * animationDepth,
      transform: "rotate(-180deg)",
    },
    "75%": {
      top: 2 * animationDepth,
      left: -animationDepth,
      transform: "rotate(-90deg)",
    },
    "100%": {
      top: -animationDepth,
      left: 0,
      transform: "rotate(-450deg)",
      display: "none",
    },
  },
}));

export default function RocketAnimation() {
  /*const rocket = React.useRef();
  const select = gsap.utils.selector(rocket);
  const timeline = React.useRef();*/
  /*
  React.useEffect(() => {
    console.log(timeline);
    timeline.current = gsap
      .timeline({ delay: 2, ease: "elastic" })
      .to(select(".animatedRocket"), {
        x: -200,
        y: -300,
        duration: 0.5,
      });
  }, [select]);
*/
  return (
    <Image src={Rocket} width="100px" height="100px" alt="Rocket Animation" />
  );
}
