import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const navigateTo = (path) => {
    setMenuOpen(false);
    navigate(path);
  };
  // Check if user is logged in
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    // Check when Header first loads
    checkLogin();

    // Listen for login/logout changes
    window.addEventListener("authChanged", checkLogin);

    return () => {
      window.removeEventListener("authChanged", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    // Remove authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Update header immediately
    setIsLoggedIn(false);

    // Close mobile menu
    setMenuOpen(false);

    // Go to home page
    navigate("/");
  };
  return (
    <Box className="navbar">
      <Box className="container navbar-container">
        {/* Logo */}
        <button className="logo" onClick={() => navigateTo("/")}>
          <span className="logo-icon">M</span>
          <span>
            Morocco<span className="logo-highlight">Hub</span>
          </span>
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
          <button onClick={() => navigateTo("/")}>Home</button>

          <button onClick={() => navigateTo("/#categories")}>Categories</button>

          <button onClick={() => navigateTo("/#cities")}>Cities</button>

          <button onClick={() => navigateTo("/#about")}>About</button>

          <button onClick={() => navigateTo("/#contact")}>Contact Us</button>

          {/* Mobile authentication buttons */}
          <div className="mobile-auth-buttons">
            {isLoggedIn ? (
              <>
                <button
                  className="profile-button"
                  onClick={() => navigateTo("/profile")}
                >
                  Profile
                </button>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="login-button"
                  onClick={() => navigateTo("/login")}
                >
                  Login
                </button>

                <button
                  className="register-button"
                  onClick={() => navigateTo("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </nav>

        {/* Right side */}
        <Box className="navbar-actions">
          {/* Desktop authentication */}
          <div className="desktop-auth-buttons">
            {isLoggedIn ? (
              <>
                <button
                  className="profile-button"
                  onClick={() => navigateTo("/profile")}
                >
                  Profile
                </button>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="login-button"
                  onClick={() => navigateTo("/login")}
                >
                  Login
                </button>

                <button
                  className="register-button"
                  onClick={() => navigateTo("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile menu */}
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
