import { useState } from "react";
import { Box } from "@mui/material";
import { X, Plus, Menu } from "lucide-react";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box className="navbar">
      <Box className="container navbar-container">
        <a href="/" className="logo">
          <span className="logo-icon">M</span>
          <span>
            Morocco<span className="logo-highlight">Hub</span>
          </span>
        </a>

        <nav className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Categories
          </a>

          <a href="#cities" onClick={() => setMenuOpen(false)}>
            Cities
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </nav>

        <Box className="navbar-actions">
          {/* <button className="add-button">
            <Plus size={18} />
            Add Listing
          </button> */}

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
