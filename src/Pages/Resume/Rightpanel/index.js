import React, { Suspense } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "@mui/material";
import badge from "Static/python-badge.png";
import Loading from "Shared/Loading";
//import { Timeline } from "./Timeline";
const Timeline = React.lazy(() => import("./Timeline"));

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
        <MyLink
          href="https://www.coursera.org/account/accomplishments/professional-cert/DTKBUW97PK4Q"
          target="_blank"
        >
          <img
            src={badge}
            alt="Google IT Automation with Python Certificate"
            loading="lazy"
            style={{
              width: "100%",
              maxWidth: "150px",
              display: "block",
              margin: "0  auto",
            }}
          />
        </MyLink>
      </Typography>
      <div style={{ padding: "1em" }}>
        <Suspense fallback={<Loading />}>
          <Timeline data={jobs} />
          <Timeline data={school} />
        </Suspense>
      </div>
    </>
  );
}

//export default RightPanel;
