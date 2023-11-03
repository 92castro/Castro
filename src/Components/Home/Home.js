import "../Home/Home.css";
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../Assets/me-2.png";

export default function Home() {
  const el = useRef(null);
  let typed = null;

  useEffect(() => {
    const options = {
      strings: [
        "DEVELOPER",
        "SALES PROFESSIONAL",
        "INTREPID",
        "HIKER",
        "GAMER",
        "BREWER",
      ],
      startDelay: 300,
      typeSpeed: 120,
      backDelay: 300,
      fadeOut: true,
      showCursor: false,
      loop: true,
    };
    // eslint-disable-next-line
    typed = new Typed(el.current, options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);
  return (
    <div className="main">
      <section className="home">
        <Box>
          <div class="flyinTxtCont">
            <h1 class="flyIn lineOne">Celin Castro</h1>
          </div>
          <Typography>
            <span className="type" ref={el}></span>
          </Typography>
        </Box>
        <Box>
          <img className="photo" src={photo} alt="profilepic" />
        </Box>
      </section>
    </div>
  );
}
