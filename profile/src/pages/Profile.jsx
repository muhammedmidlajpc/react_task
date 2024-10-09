import React from "react";
import p from "../assets/download.png";
import "./Profile.css";
const Right = () => {
  return (
    <div>
      <div className="profile">
        <h2 className="p-h">Profile</h2>

        <div className="r-u">
          <img src={p} className="img" />
          <div className="john">
            <h2>John Doe</h2>
            <p>john.doe@example.com</p>
          </div>
        </div>
        <div className="bio">
          <h3>Bio</h3>
          <p>
            A software developer with a passion for learning <br />
            technologies and improving coding akills
          </p>
          <button className="btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Right;
