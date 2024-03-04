import { useEffect, useState } from "react";
import "../adduser/add.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Add() {
  const { id } = useParams();
  const Navigate = useNavigate();

  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [user, setuser] = useState(users);

  // handle input change
  const handlechange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/getone/${id}`
        );
        console.log(response.data);
        setuser(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchdata();
  }, [id]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/api/update/${id}`, user);
    } catch (error) {
      console.log(error);
    }
    toast.success("User Updated Successfully", { position: "top-right" });
    Navigate("/");
  };

  return (
    <div className="adduser">
      <Link to={"/"} className="backbtn">
        Back
      </Link>
      <h3>Update User</h3>
      <form className="adduserform" onSubmit={handlesubmit}>
        <div className="inputgroup">
          <label>First name</label>
          <input
            type="text"
            value={user.fname}
            name="fname"
            placeholder="Enter first name"
            autoComplete="off"
            onChange={handlechange}
          />
        </div>
        <div className="inputgroup">
          <label>Last name</label>
          <input
            type="text"
            value={user.lname}
            id="lname"
            name="lname"
            placeholder="Enter Last name"
            autoComplete="off"
            onChange={handlechange}
          />
        </div>
        <div className="inputgroup">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            id="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={handlechange}
          />
        </div>
        <div className="inputgroup">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  );
}
