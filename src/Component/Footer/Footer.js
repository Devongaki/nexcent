import React from 'react';
import "./Footer.css";
import footerLogo from "../../Assets/Logo/Logolight.png";

function Footer() {
  return (
    <div className='footer_section container'>
      <div className='footer_container'>
        <div className='footer_left'>
          <div className='footer_logo'>
           <img src={footerLogo} />
          </div>
          <div className=''></div>
          <div className=''></div>
        </div>
        <div className='footer_right'></div>
      </div>
    </div>
  )
}

export default Footer