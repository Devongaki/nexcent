import React from 'react'
import "./Hero.css"
import { NavLink } from 'react-router-dom';
import HerImage from "../../Assets/Images/Illustration.png"

function Hero() {
  return (
    <div className="hero_section">
      <div className="hero_container container">
        <div hero_text>
          <div className="hero_title">
            <h1>Lessons and insights from 8 years</h1>
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
        <div hero_image>
          <img src={HerImage} alt='Hero image' />
        </div>
      </div>
    </div>
  );
}

export default Hero

