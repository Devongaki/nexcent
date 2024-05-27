import React from "react";
import "./Footer.css";
import footerLogo from "../../Assets/Logo/Logolight.png";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoFacebook,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_section container">
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_logo">
            <img src={footerLogo} />
          </div>
          <div className="footer_copyright">
            <p>
              Copyright © 2020 Landify UI Kit.
              <br></br>
              All rights reserved
            </p>
          </div>
          <div className="footer_icons">
            <IoLogoInstagram />
            <IoLogoTwitter />
            <IoLogoYoutube />
            <IoLogoFacebook />
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_company">
            <NavLink className="footer_title" to="/">
              Company
            </NavLink>
            <ul>
              <li className="nav_link">
                <NavLink to="/">About us</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/register">Contact us</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/community">Community</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_company">
            <NavLink className="footer_title" to="/">
              Support
            </NavLink>
            <ul>
              <li className="nav_link">
                <NavLink to="/">Help center</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/">Terms and services</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/">Legal</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/">Privacy policy</NavLink>
              </li>
              <li className="nav_link">
                <NavLink to="/">Status</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_input">
            <h4 className="footer_title">Stay up to date</h4>
            <form>
              <input placeholder="Your emeil address" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
