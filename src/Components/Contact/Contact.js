import "../Contact/Contact.css";
import React, { useState } from "react";
import { Grid, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_vddk9b4";
    const templateID = "template_skelebm";
    const userID = "V1fsMPBOw0PCjPJUs";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setEmailSent(false);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="main">
      <section className="contact">
        <h1 id="cont">Connect With Me</h1>
        <Grid className="socials">
          <Button
            style={{
              transform: "scale(3)",
              margin: "50px",
            }}
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/celin-castro/"
            target="_blank"
          />
          <Button
            style={{ transform: "scale(3)", margin: "50px" }}
            startIcon={<GitHubIcon />}
            href="https://github.com/92castro"
            target="_blank"
          />
          <Button
            style={{ transform: "scale(3)", margin: "50px" }}
            startIcon={<EmailIcon />}
            href="mailto:celin92castro@gmail.com"
            target="_blank"
          />
        </Grid>
        <div className="resume-download">
          <IconButton
            color="primary"
            href="https://docs.google.com/document/d/1eeSkEXFhzWfAYgD25m5lDbpA6HZZjQzfIElrB84ate0/edit?usp=sharing"
            target="_blank"
          >
            <ContactPageRoundedIcon />
          </IconButton>
          <KeyboardDoubleArrowUpRoundedIcon className="uparrow" />
          <KeyboardDoubleArrowLeftRoundedIcon className="arrow" />
          <h2 id="resume">Check out my Resume & learn about my experiences</h2>
        </div>
        {emailSent ? (
          <div className="email-sent-message">Email sent successfully!</div>
        ) : (
          <div className="contact-form">
            <h2>Let's Collaborate!</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
