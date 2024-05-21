import React from "react";
import "./Unlock.css";
import unlockImage from "../../../../Assets/Images/rafiki.png";
import { NavLink } from "react-router-dom";

function UnlockSection() {
  return (
    <div className="unlock_section container">
      <div className="unlock_container">
        <div className="unlock_image">
          <img src={unlockImage} alt="unlock image" />
        </div>
        <div className="unlock_info">
          <div className="unlock_text">
            <h3 className="unlock_heading">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="unlock_subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <button className="unlock_button ">
            <NavLink>Learn More</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnlockSection;
