import React, { useState } from "react";
import "./add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function add() {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [user, setuser] = useState(users);
  let navigate = useNavigate();

  const handlechange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/create", user);
    } catch (error) {
      console.log(error);
    }
    toast.success("User Added Successfully", { position: "top-right" });
    navigate("/");
  };

  return (
    <div className="adduser">
      <Link to={"/"} className="backbtn">
        Back
      </Link>
      <h3>Add New User</h3>
      <form className="adduserform" onSubmit={handlesubmit}>
        <div className="inputgroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter first name"
            autoComplete="off"
            onChange={handlechange}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Enter Last name"
            autoComplete="off"
            onChange={handlechange}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={handlechange}
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            autoComplete="off"
            onChange={handlechange}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Add user</button>
        </div>
      </form>
    </div>
  );
}
