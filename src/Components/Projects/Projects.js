import "../Projects/Projects.css";
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

//  images
// import goldengoose from "../../Assets/goldengoosef.PNG";
// import fermentations from "../../Assets/Fermentations.PNG";
// import overland from "../../Assets/overland.PNG";

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

// const items = [
//   <a
//     href="https://golden-goose-finance.herokuapp.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <img
//       src={goldengoose}
//       alt="Golden Goose"
//       className="item"
//       data-value="1"
//       style={{
//         width: "700px",
//         display: "flex",
//         margin: "auto",
//         paddingTop: "50px",
//       }}
//     />
//   </a>,
//   <a
//     href="https://fermentationsdemo.netlify.app/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <img
//       src={fermentations}
//       alt="Fermentations"
//       className="item"
//       data-value="2"
//       style={{
//         width: "700px",
//         display: "flex",
//         margin: "auto",
//         paddingTop: "50px",
//       }}
//     />
//   </a>,
//   <a
//     href="https://overlandbaseball.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <img
//       src={overland}
//       alt="Overland Baseball"
//       className="item"
//       data-value="3"
//       style={{
//         width: "700px",
//         display: "flex",
//         margin: "auto",
//         paddingTop: "50px",
//       }}
//     />
//   </a>,
// ];

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
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2011 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h1 className="vertical-timeline-element-title">
                  Golden Goose Finance
                </h1>
                <h4 className="vertical-timeline-element-subtitle">
                  DEMO/CODE
                </h4>
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
                date="2010 - 2011"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h1 className="vertical-timeline-element-title">
                  Fermentations
                </h1>
                <h4 className="vertical-timeline-element-subtitle">
                  DEMO/CODE
                </h4>
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
                date="2008 - 2010"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h1 className="vertical-timeline-element-title">
                  Overland Baseball
                </h1>
                <h4 className="vertical-timeline-element-subtitle">
                  DEMO/CODE
                </h4>
                <p>
                  This modern application is designed to have much information
                  about the Overland baseball team. It has intuitive navigation
                  for users to explore the application and get to know the
                  players, the schedule of the games, and learn about future
                  events.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
            {/* <AliceCarousel
              animationType="fadeout"
              animationDuration={800}
              disableButtonsControls
              infinite
              items={items}
              mouseTracking
            /> */}
          </Box>
        </Grid>
      </section>
    </div>
  );
}
