import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className="hero_section">
      <div className="hero_container container">
        <div hero_text>
          <div className="hero_title">
            <h1>Lessons and insights from 8 years</h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div className="hero_sub-title"></div>
          <div className="hero_cta"></div>
        </div>
        <div hero_image></div>
      </div>
    </div>
  );
}

export default Hero

