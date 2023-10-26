import "../Projects/Projects.css";
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//  images
import goldengoose from "../../Assets/goldengoosef.PNG";
import fermentations from "../../Assets/Fermentations.PNG";
import overland from "../../Assets/overland.PNG";
// import security from "../../assets/sponsors/security.png";
// import usbank from "../../assets/sponsors/usbank.png";
// import zynex from "../../assets/sponsors/zynex.jpg";

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

const items = [
  <a href="https://golden-goose-finance.herokuapp.com/">
    <img
      src={goldengoose}
      alt="Golden Goose"
      className="item"
      data-value="1"
      style={{
        width: "700px",
        display: "flex",
        margin: "auto",
        paddingTop: "50px",
      }}
    />
  </a>,
  <a href="https://fermentationsdemo.netlify.app/">
    <img
      src={fermentations}
      alt="Fermentations"
      className="item"
      data-value="2"
      style={{
        width: "700px",
        display: "flex",
        margin: "auto",
        paddingTop: "50px",
      }}
    />
  </a>,
  <a href="https://overlandbaseball.com/">
    <img
      src={overland}
      alt="Overland Baseball"
      className="item"
      data-value="3"
      style={{
        width: "700px",
        display: "flex",
        margin: "auto",
        paddingTop: "50px",
      }}
    />
  </a>,
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
            animationType="fadeout"
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
            // autoPlay
            // disableDotsControls
            // mouseTracking
            // items={items}
            // responsive={responsive}
            // controlsStrategy="alternate"
            // infinite
            // autoPlayStrategy="none"
            // autoPlayInterval={1000}
            // animationDuration={3000}
          />
        </Box>
      </Grid>
    </div>
  );
}
