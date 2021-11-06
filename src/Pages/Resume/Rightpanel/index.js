import * as React from "react";
import Typography from "@mui/material/Typography";
import { Timeline } from "./Timeline";
import { styled } from "@mui/system";
import { Link } from "@mui/material";

const MyLink = styled(Link)({
  color: "white",
  fontSize: "1rem",
  padding: "0 5px",
  margin: "0",
  textDecoration: "none",
});

export default function RightPanel({ data }) {
  const { title, jobs, school } = data;
  return (
    <>
      <Typography align="center" component="h1" variant="h3">
        {title}
      </Typography>
      <Typography align="center" component="h2" variant="h5">
        📫 lukactv@gmail.com
      </Typography>
      <Typography align="center" component="h2" variant="h5">
        <MyLink href="https://github.com/LukacTomas" target="_blank">
          github/LukacTomas
        </MyLink>
      </Typography>
      <div style={{ padding: "1em" }}>
        <Timeline data={jobs} />
        <Timeline data={school} />
      </div>
    </>
  );
}