import React from 'react';
import "./Achievements.css";
import ArchiveImage1 from "../../../../Assets/Icons/Archievments/Vector.png"

function Achievements() {
  return (
    <div className="achievements_section container">
      <div className="achievements_container">
        <div className="archievment_heading">
          <h3>
            Helping a local <span>business reinvent itself</span>{" "}
          </h3>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="archievment_icons">
          <div className="archievment_icon">
            <img src={ArchiveImage1} alt="Archievment icon" />
            <div className="archievment_icon-info">
              <p>2,245,341</p>
              <p>Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements