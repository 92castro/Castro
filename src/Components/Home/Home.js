import "../Home/Home.css";
import React from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../Assets/me-2.png";

export default function Home() {
  return (
    <div className="main">
      <section className="home">
        <Box>
          <div class="flyinTxtCont">
            <h1 class="flyIn lineOne">Celin Castro</h1>
            <Typography>An Intrepid Human Being</Typography>
          </div>
        </Box>
        <Box>
          <img className="photo" src={photo} />
        </Box>
      </section>
    </div>
  );
}
