import React from "react";
import "../Nav/Mobile.css";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";

const closeMenu = () => {
  // Close the menu when a link is clicked
  document.querySelector(".bm-burger-button button").click();
};

export default function Mobile() {
  return (
    <Menu className="mobile">
      <Link className="menu-item" to="home" onClick={closeMenu}>
        Home
      </Link>
      <Link className="menu-item" to="about" onClick={closeMenu}>
        About
      </Link>
      <Link className="menu-item" to="projects" onClick={closeMenu}>
        Projects
      </Link>
      {/* <Link className="menu-item" to="resume">
        Resume
      </Link> */}
      <Link className="menu-item" to="contact" onClick={closeMenu}>
        Contact
      </Link>
    </Menu>
  );
}
