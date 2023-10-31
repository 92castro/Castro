import "../Home/Home.css";
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../Assets/me-2.png";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "DEVELOPER",
        "SALES PROFESSIONAL",
        "INTREPID",
        "HIKER",
        "GAMER",
        "BREWER",
      ],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      fadeOut: true,
      showCursor: false,
      loop: true,
    });
  });
  return (
    <div className="main">
      <section className="home">
        <Box>
          <div class="flyinTxtCont">
            <h1 class="flyIn lineOne">Celin Castro</h1>
          </div>
          <Typography>
            |<span ref={el}></span>
          </Typography>
        </Box>
        <Box>
          <img className="photo" src={photo} />
        </Box>
      </section>
    </div>
  );
}
