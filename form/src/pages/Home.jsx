import React, { useContext, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// import "./Home.css";
import Form from "../components/form/Form";
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div
        style={{
          height: "500px",
          width: "500px",
          backgroundColor: "beige",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Link to={<Form/>}>
     <h1>form</h1>
     </Link> */}
     <h1>form</h1>
      </div>
    </div>
  );
};

export default Home;
