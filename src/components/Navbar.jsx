import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar_logo">
        <Link to="/" onClick={closeMenu}>
          <h2>TruthLens AI</h2>
        </Link>

        <span className="nav_badge">
          🚀 AI Powered
        </span>
      </div>

      <button
        className="menu_toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar_menu ${menuOpen ? "active" : ""}`}>

        <div className="navbar_links">

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/analyze" onClick={closeMenu}>
            Analyze
          </Link>

          {token && (
            <>
              <Link to="/dashboard" onClick={closeMenu}>
                Dashboard
              </Link>

              <Link to="/history" onClick={closeMenu}>
                History
              </Link>
            </>
          )}

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

        </div>

        <div className="navbar_buttons">

          {!token ? (
            <>
              <Link to="/login" onClick={closeMenu}>
                <button className="login_btn">
                  Login
                </button>
              </Link>

              <Link to="/register" onClick={closeMenu}>
                <button className="signup_btn">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button
              className="signup_btn"
              onClick={() => {
                closeMenu();
                handleLogout();
              }}
            >
              Logout
            </button>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;