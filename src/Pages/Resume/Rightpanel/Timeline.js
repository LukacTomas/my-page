import * as React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

const Div = styled(Paper)(({ theme }) => ({
  padding: "1em",
  margin: "0.5em",
  boxShadow: "0px 0px 13px -5px #0869ad, 5px 0 5px #292a41",
  animate: "all 1300ms",
  "&:hover": {
    boxShadow: "0px 0px  15px #ef0e39, 5px 0 5px #292a41",
    transform: "scale(1.05)",
  },
  "&:hover h5": {
    textShadow: "0px 0px  15px #bec925, 5px 0 5px #292a41",
  },
}));

export default function Timeline({ data }) {
  return (
    <>
      {data.map((data) => (
        <Div key={data.title}>
          <Typography variant="h5">
            {data.title} - {data.supervisor.name} ({data.supervisor.location})
          </Typography>
          <Typography>
            {data.date.from} - {data.date.to}
          </Typography>
          <Typography align="justify">{data.description}</Typography>
        </Div>
      ))}
    </>
  );
}
