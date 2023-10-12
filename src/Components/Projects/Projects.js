import "../Projects/Projects.css";
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import AliceCarousel from "react-alice-carousel";

//  images
import goldengoose from "../../Assets/goldengoosef.PNG";
import fermentations from "../../Assets/Fermentations.PNG";
import overland from "../../Assets/overland.PNG";
// import security from "../../assets/sponsors/security.png";
// import usbank from "../../assets/sponsors/usbank.png";
// import zynex from "../../assets/sponsors/zynex.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <img
    src={goldengoose}
    alt="Golden Goose"
    className="item"
    data-value="1"
    style={
      {
        // width: "300px",
        // display: "flex",
        // margin: "auto",
        // paddingTop: "50px",
      }
    }
  />,
  <img
    src={fermentations}
    alt="Fermentations"
    className="item"
    data-value="2"
    // style={{ width: "300px", display: "flex", margin: "auto" }}
  />,
  <img
    src={overland}
    alt="Overland Baseball"
    className="item"
    data-value="3"
    // style={{ width: "300px", display: "flex", margin: "auto" }}
  />,
  // <img src={security} alt="security credit union" className="item" data-value="4" style={{ width: "300px", display: "flex", margin: "auto" }} />,
  // <img src={usbank} alt="usbank" className="item" data-value="5" style={{ width: "300px", display: "flex", margin: "auto" }} />,
  // <img src={zynex} alt="zynex" className="item" data-value="6" style={{ width: "300px", display: "flex", margin: "auto" }} />,
];

export default function Projects() {
  return (
    <div className="main">
      <Grid className="carousel">
        <Box>
          <AliceCarousel
            autoPlay
            disableDotsControls
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            infinite
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={3000}
          />
        </Box>
      </Grid>
    </div>
  );
}
