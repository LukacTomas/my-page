import React, { useState } from "react";
import { styled } from "@mui/system";

// Styles for underscore
const Console = styled("span")((props) => ({
  display: "inline",
  opacity: 0,
  animationName: "animation",
  animationDuration: "750ms",
  animationFillMode: "forwards",
  animationIterationCount: "infinite",
  "@keyframes animation": {
    "0%": {
      opacity: 0,
    },
    "25%": {
      opacity: 1,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
}));
// Styles for text
const Text = styled("span")(({ color }) => ({
  color: color,
  textShadow: `0 0 5px ${color}`,
}));

export const Jobs = ({ jobs }) => {
  const [jobIndex, setJobIndex] = useState(0);
  const [wordCalculation, setWordCalculation] = useState({
    direction: "up",
    index: 0,
  });
  // Interval for every word
  const timeInterval = React.useRef(5000);
  const colors = React.useMemo(
    () => ["#90293e", "#f79271", "#e5882b", "#c0513e"],
    []
  );

  // For changing words
  React.useEffect(() => {
    const changeInterval = timeInterval.current;
    const jobInterval = setInterval(() => {
      setJobIndex((index) => (index === jobs.length - 1 ? 0 : index + 1));
      setWordCalculation({ direction: "up", index: 0 });
    }, changeInterval);
    return () => clearInterval(jobInterval);
  }, [jobs, jobIndex]);

  // For changing letters
  React.useEffect(() => {
    const currentJob = jobs[jobIndex];
    const letterInterval = setInterval(() => {
      setWordCalculation((calculation) => {
        let direction = calculation.direction,
          index = 0;
        if (calculation.index > currentJob.length) {
          direction = "down";
        }
        if (calculation.index < 0) {
          direction = "halt";
        }
        if (direction === "up") {
          index = calculation.index + 1;
        }
        if (direction === "down") {
          index = calculation.index - 1;
        }
        return {
          direction,
          index,
        };
      });
    }, timeInterval.current / (2 * currentJob.length + 2));
    return () => clearInterval(letterInterval);
  }, [jobIndex, jobs]);

  return (
    <>
      <Text
        color={colors[colors.length % jobIndex]}
        className="console-container"
      >
        {jobs[jobIndex].slice(0, wordCalculation.index)}
      </Text>

      <Console>_</Console>
    </>
  );
};
