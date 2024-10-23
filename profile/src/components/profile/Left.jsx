import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Home.css"
const Left = () => {
  return (
    <div>
      <div className="left">
        <ul className="ul">
          <Link className="link" to={"/"}>
            <li>Profile</li>
          </Link>
          <Link to={"/message"}className="link">
            <li>Message</li>
          </Link>
          <Link to={"/settings"}className="link">
            <li>Settings</li>
          </Link>
          <Link to={"/blog"}className="link">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Left;
