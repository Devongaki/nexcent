import React from "react";
import "./Client.css";
import clientLogo1 from "../../Assets/Icons/Clientlogo 1.png";
import clientLogo2 from "../../Assets/Icons/Clientlogo2.png";
import clientLogo3 from "../../Assets/Icons/Clientlogo3.png";
import clientLogo4 from "../../Assets/Icons/Clientlogo4.png";
import clientLogo5 from "../../Assets/Icons/Clientlogo5.png";
import clientLogo6 from "../../Assets/Icons/Clientlogo6.png";
import clientLogo7 from "../../Assets/Icons/Clientlogo7.png";

function Client() {
  return (
    <div className="client_section container">
      <div className="client_text">
        <h4>Our Clients</h4>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="client_icons">
        <img src={clientLogo1} alt="clientLogo" />
        <img src={clientLogo2} alt="clientLogo" />
        <img src={clientLogo3} alt="clientLogo" />
        <img src={clientLogo4} alt="clientLogo" />
        <img src={clientLogo5} alt="clientLogo" />
        <img src={clientLogo6} alt="clientLogo" />
        <img src={clientLogo7} alt="clientLogo" />
      </div>
    </div>
  );
}

export default Client;
