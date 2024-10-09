import React, { useContext, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./Home.css";
import Nave from "../components/profile/Nave";
import Left from "../components/profile/Left";
import Profile from "../pages/Profile";
import Message from "./Message";
import Settings from "./Settings";
import Blog from "./Blog";
// import { Usercontext } from "../App";
const Home = () => {
  // const { user, handleUser } = useContext(Usercontext);
  // const [count, setCount] = useState(2);
  // console.log(user);

  // const handleClick = () => {
  //   handleUser(count);
  //   setCount(count + 1);
  // };

  return (
    <div>
      {/* <button onClick={handleClick}>change user</button>
      <h1>{user}</h1> */}
      <Nave />
      <div className="main">
        <Left />
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
