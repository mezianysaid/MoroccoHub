import { useState } from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "./Footer.css";
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  const now = new Date();
  return (
    <Box className="footer" id="contact">
      <Box className="container">
        <Box className="footer-grid">
          <Box className="footer-brand">
            <a href="/" className="logo footer-logo">
              <span className="logo-icon">M</span>
              <span>
                Morocco<span className="logo-highlight">Hub</span>
              </span>
            </a>

            <p>
              Your guide to discovering universities, companies, hotels and
              hospitals across Morocco.
            </p>

            <Box className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </Box>
          </Box>

          <Box className="footer-column">
            <h3>Explore</h3>
            <a href="#categories">Universities</a>
            <a href="#categories">Companies</a>
            <a href="#categories">Hotels</a>
            <a href="#categories">Hospitals</a>
          </Box>

          <Box className="footer-column">
            <h3>Popular Cities</h3>
            <a href="#cities">Casablanca</a>
            <a href="#cities">Rabat</a>
            <a href="#cities">Marrakech</a>
            <a href="#cities">Tangier</a>
          </Box>

          <Box className="footer-column">
            <h3>MoroccoHub</h3>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Add Listing</a>
            <a href="#contact">Privacy Policy</a>
          </Box>
        </Box>

        <Box className="footer-bottom">
          <Typography className="rights">
            © {now.getFullYear()} MoroccoHub. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;
