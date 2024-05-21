import React from "react";
import "./Achievements.css";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaHandshakeSolid } from "react-icons/lia";
import { PiHandTap } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";

function Achievements() {
  return (
    <div className="achievements_section container">
      <div className="achievements_container">
        <div className="archievment_heading">
          <h3>
            Helping a local 
            <br></br>
            <span>business reinvent itself</span>
          </h3>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="achievement_icons-items">
          <div className="achievement_icons-item">
            <div className="achievment_icon">
              <IoPeopleOutline />
            </div>
            <div className="achievment_icon-info">
              <p className="achievment_icon-number">2,245,341</p>
              <p className="achievment_icon-name">Members</p>
            </div>
          </div>
          <div className="achievement_icons-item">
            <div className="achievment_icon">
              <LiaHandshakeSolid />
            </div>
            <div className="achievment_icon-info">
              <p className="achievment_icon-number">46,328</p>
              <p className="achievment_icon-name">Clubs</p>
            </div>
          </div>
          <div className="achievement_icons-item">
            <div className="achievment_icon">
              <PiHandTap />
            </div>
            <div className="achievment_icon-info">
              <p className="achievment_icon-number">828,867</p>
              <p className="achievment_icon-name">Event Bookings</p>
            </div>
          </div>
          <div className="achievement_icons-item">
            <div className="achievment_icon">
              <MdOutlinePayment />
            </div>
            <div className="achievment_icon-info">
              <p className="achievment_icon-number">1,926,436</p>
              <p className="achievment_icon-name">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
