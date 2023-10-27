import React from "react";
import "../Nav/Mobile.css";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";

export default function Mobile() {
  return (
    <Menu className="mobile">
      <Link className="menu-item" to="home">
        Home
      </Link>
      <Link className="menu-item" to="about">
        About
      </Link>
      <Link className="menu-item" to="projects">
        Projects
      </Link>
      {/* <Link className="menu-item" to="resume">
        Resume
      </Link> */}
      <Link className="menu-item" to="contact">
        Contact
      </Link>
    </Menu>
  );
}
