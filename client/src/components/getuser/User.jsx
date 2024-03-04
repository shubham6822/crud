import { Link } from "react-router-dom";
import "./user.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function User() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:5000/api/getall");
      setuser(response.data);
    };
    fetchdata();
  }, []);

  const deleteuser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteuser/${userId}`);
      setuser((preuser) => preuser.filter((user) => user._id !== userId));
    } catch (error) {
      console.log(error);
    }
    toast.success("User Deleted Successfully", { position: "top-right" });
  };

  return (
    <div className="usertable">
      <Link to={"../add"} className="addbtn">
        Add user
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>User name</th>
            <th>User email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.fname} {user.lname}
                </td>
                <td>{user.email}</td>
                <td className="action_btns">
                  <button type="button" onClick={() => deleteuser(user._id)}>
                    Delete
                  </button>

                  <Link to={"/edit/" + user._id}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
