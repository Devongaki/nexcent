import React from "react";
import "./Footer.css";
import footerLogo from "../../Assets/Logo/Logolight.png";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoFacebook,
} from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_section container">
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_logo">
            <img src={footerLogo} alt="footer Logo" />
          </div>
          <div className="footer_copyright">
            <p>
              Copyright © 2020 Landify UI Kit.
              <br />
              All rights reserved
            </p>
          </div>
          <div className="footer_icons">
            <div className="footer_icon">
              <IoLogoInstagram />
            </div>
            <div className="footer_icon">
              <IoLogoTwitter />
            </div>
            <div className="footer_icon">
              <IoLogoYoutube />
            </div>
            <div className="footer_icon">
              <IoLogoFacebook />
            </div>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_text-links">
            <ul>
              <li className="nav_link">
                <h4 className="footer_title">Company</h4>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/">About us</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/register">Contact us</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/community">Community</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_text-links">
            <ul>
              <li className="nav_link">
                <h4 className="footer_title">Support</h4>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/">Help center</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/">Terms and services</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/">Legal</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/">Privacy policy</NavLink>
              </li>
              <li className="footer_link nav_link">
                <NavLink to="/">Status</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_input">
            <ul>
              <li className="footer_link nav_link">
                <h4 className="footer_title">Stay up to date</h4>
                <form className="footer_form">
                  <div className="input_container">
                    <input placeholder="Your email address" />
                    <FiSend className="input_icon" />
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
