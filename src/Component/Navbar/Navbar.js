import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import LogoImage from "../../Assets/Logo/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav_logo">
          <img src={LogoImage} alt="Logo" />
        </NavLink>

        <div className="nav_toggle" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>

        <div className={`nav_menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav_list">
            <li className="nav_item">
              <NavLink to="/" className="nav_link">
                Home
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/features" className="nav_link">
                Features
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/community" className="nav_link">
                Community
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/blog" className="nav_link">
                Blog
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/pricing" className="nav_link">
                Pricing
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/register" className="nav_link nav_cta">
                Register Now
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
