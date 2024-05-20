import React from "react";
import "./Community.css";
import communityIcon1 from "../../Assets/Icons/Icon (1).png";
import communityIcon2 from "../../Assets/Icons/Icon (2).png";
import communityIcon3 from "../../Assets/Icons/Icon (3).png";

function Community() {
  return (
    <div className="community_section container">
      <div className="community_container">
        <div className="community_text">
          <h3>
            Manage your entire community <br></br> in a single system
          </h3>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="community_cards">
          <div className="community_card">
            <div>
              <img src={communityIcon1} />
            </div>
            <div className="community_card-text">
              <h3 className="community_card-heading">
                Membership Organisations
              </h3>
              <p className="community_card-subheading">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="community_card">
            <div>
              <img src={communityIcon2} />
            </div>
            <div className="community_card-text">
              <h3 className="community_card-heading">
                Membership Organisations
              </h3>
              <p className="community_card-subheading">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="community_card">
            <div>
              <img src={communityIcon3} />
            </div>
            <div className="community_card-text">
              <h3 className="community_card-heading">
                Membership Organisations
              </h3>
              <p className="community_card-subheading">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
