import React, { useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useLanguage } from "Hooks";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const MyLink = styled(Link)(({ theme }) => ({
  borderRadius: "2rem",
  boxShadow: `0 0 15px ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  textShadow: `0 0 0px ${theme.palette.primary.main}`,
  height: 48,
  fontSize: "1.5rem",
  margin: "2vw",
  padding: "15px 25px",
  textDecoration: "none",
  transition: "all 300ms",

  "&:hover": {
    boxShadow: `0 0 35px ${theme.palette.primary.hover}`,
    textShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
}));

export const LearnMore = ({ ButtonText }) => {
  const lang = useLanguage();
  const divRef = useRef();
  const select = gsap.utils.selector(divRef);
  const timeline = useRef();

  const theme = useTheme();

  React.useEffect(() => {
    timeline.current = gsap
      .timeline({ delay: 2, repeat: -1, ease: "elastic" })
      .to(select(".arrow"), {
        color: theme.palette.primary.main,
        textShadow: `0 0 55px ${theme.palette.primary.main}`,
        duration: 1.5,
      })
      .to(select(".MyLink"), {
        boxShadow: `0 0 55px ${theme.palette.primary.hover}`,
        duration: 1.5,
      })
      .to(select(".arrow"), {
        y: 0,
        x: -50,
        duration: 1.5,
      })
      .to(select(".arrow"), {
        color: "white",
        textShadow: `0 0 35px ${theme.palette.primary.hover}`,
        duration: 0.5,
      })

      .to(select(".arrow"), {
        y: 0,
        x: 0,
        duration: 0.5,
      })
      .to(
        select(".arrow"),
        {
          y: 0,
          x: -20,
          duration: 0.5,
        },
        "<1"
      )
      .to(select(".MyLink"), {
        boxShadow: `0 0 15px ${theme.palette.primary.hover}`,
        duration: 0.5,
      })
      .to(select(".arrow"), {
        y: 0,
        x: 0,
        duration: 0.25,
      })
      .to(select(".arrow"), {
        textShadow: "none",
        duration: 1.5,
      });
  }, [select, theme.palette]);

  return (
    <Typography variant="h4" component="div" sx={{ mt: "5vh" }}>
      <div ref={divRef}>
        <span style={{ display: "inline-block" }} className="arrow">
          🠖
        </span>
        <MyLink id="LearnMore" className="MyLink" to={`/${lang}/resume/`}>
          {ButtonText}
        </MyLink>
      </div>
    </Typography>
  );
}
