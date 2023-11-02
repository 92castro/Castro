import "../Projects/Projects.css";
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Projects() {
  return (
    <div className="main">
      <section className="projects">
        <Typography className="title" fontSize={"50px"}>
          My Projects
        </Typography>
        <Grid>
          <Box className="timeline">
            <VerticalTimeline lineColor="black">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#000000e1",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  white",
                }}
                // date="2011 - present"
                iconStyle={{ background: "orange", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h1 className="vertical-timeline-element-title">
                  Golden Goose Finance
                </h1>
                <a
                  href="https://golden-goose-finance.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="vertical-timeline-element-subtitle"
                >
                  DEMO|
                </a>
                <a
                  href="https://github.com/92castro/Financial_Tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="vertical-timeline-element-subtitle"
                >
                  CODE
                </a>
                <p>
                  A mobile-friendly MERN full-stack web application that
                  provides users with a convenient and intuitive solution for
                  tracking and managing their finances. Golden Goose Finance
                  also includes a secure login feature, allowing users to easily
                  add their monthly expenses, monthly bills and track their
                  spending with ease.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#000000e1",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  white",
                }}
                // date="2010 - 2011"
                iconStyle={{ background: "pink", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h1 className="vertical-timeline-element-title">
                  Fermentations
                </h1>
                <a
                  href="https://fermentationsdemo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="vertical-timeline-element-subtitle"
                >
                  DEMO|
                </a>
                <a
                  href="https://github.com/92castro/wine-site"
                  target="_blank"
                  rel="noreferrer"
                  className="vertical-timeline-element-subtitle"
                >
                  CODE
                </a>
                <p>
                  A visually appealing and user-friendly website. Its mobile
                  optimization and easily operated navigation provides users
                  with information about the homebrewing store, including the
                  store's location and contact information. Users can also read
                  more about the owners and the classes they offer.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#000000e1",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  white",
                }}
                // date="2008 - 2010"
                iconStyle={{ background: "green", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h1 className="vertical-timeline-element-title">
                  Overland Baseball
                </h1>
                <a
                  href="https://overlandbaseball.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="vertical-timeline-element-subtitle"
                >
                  DEMO|
                </a>
                <a
                  href="https://github.com/ChristianBega/Overland-Baseball-Website"
                  target="_blank"
                  rel="noreferrer"
                  className="vertical-timeline-element-subtitle"
                >
                  CODE
                </a>
                <p>
                  This modern application is designed to have much information
                  about the Overland baseball team. It has intuitive navigation
                  for users to explore the application and get to know the
                  players, the schedule of the games, and learn about future
                  events.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Box>
        </Grid>
      </section>
    </div>
  );
}
