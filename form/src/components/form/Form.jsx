import React, { useState } from "react";

import "./Form.css";
const Form = () => {
  const [submit, setsubmit] = useState({
    // fname: "",
    email: "",
    password: "",
  });
  const [formerror, setformerror] = useState({});
  const handleform = (e) => {
    const { name, value } = e.target;
    setsubmit({ ...submit, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setsubmit({
    //   // fname: "",
    //   email: "",
    //   password: "",
    // });
    const errors = validate(submit);

    console.log(Object.keys(errors).length);
    if (Object.keys(errors).length === 0) {
      console.log(submit);
      setformerror({});
    } else {
      setformerror(errors);
    }
  };
  const validate = (value) => {
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!value.email) {
      errors.email = "this feild canot be empty";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "enter a valied email";
    }
    if (!value.email) {
      errors.password = "this feild canot be empty";
    } else if (value.password.length < 8) {
      errors.password = "password must contain 8 characters";
    }
    return errors;
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        {/* <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          value={submit.fname}
          onChange={handleform}
          id="fname"
          name="fname"
          placeholder="First Name:"
        /> */}
        {/* <label htmlFor="password">Last Name:</label>
        <input
          type="text"
          value={submit.password}
          onChange={handleform}
          id="password"
          name="password"
          placeholder="Last Name:"
        /> */}
        <div className="div2">
          <label htmlFor="email" className="h1">
            Email:
          </label>
          <input
            type="text"
            value={submit.email}
            onChange={handleform}
            id="email"
            name="email"
            placeholder="E-mail"
            className="inp1"
          />
          {formerror.email && (
            <p style={{ color: "red", fontSize: "12px" }}>{formerror.email}</p>
          )}
          <label htmlFor="password" className="h1">
            password
          </label>
          <input
            type="password"
            value={submit.password}
            onChange={handleform}
            id="password"
            name="password"
            placeholder="password"
            className="inp1"
          />
          {formerror.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {formerror.password}
            </p>
          )}
          <input type="submit" className="inp1" />
        </div>
      </form>
    </div>
  );
};

export default Form;
