import React from 'react'
import "./Hero.css"
import { NavLink } from 'react-router-dom';
import HerImage from "../../../../Assets/Images/Illustration.png";

function Hero() {
  return (
    <div className="hero_section container">
      <div className="hero_container">
        <div className="hero_text">
          <div className="hero_title">
            <h1>
              Lessons and insights <br />
              <span>from 8 years</span>
            </h1>
          </div>
          <div className="hero_sub-title">
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div className="hero_cta">
            <NavLink to="/">Register</NavLink>
          </div>
        </div>
        <div className="hero_image">
          <img src={HerImage} alt="Hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero

