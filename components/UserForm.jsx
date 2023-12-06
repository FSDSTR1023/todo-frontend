import React, { useState } from "react";
import usePostUsers from "../hooks/usePostUsers";
import "./styles/taskform.css";

const UserForm = ({ onUserCreated }) => {
  const [postUsers, setPostUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const { postUser } = usePostUsers();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPostUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postUser(postUsers);
    setPostUser({
      firstname: "",
      lastname: "",
      email: "",
    });
    if (onUserCreated) {
      onUserCreated();
    }
  };

  return (
    <div className="form-container" style={{marginBottom: 20}}>
      <h2>Create User</h2>
      <form className="form-main" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={postUsers.firstname}
          onChange={handleOnChange}
          placeholder="Firstname"
          required
        />
        <input
          type="text"
          name="lastname"
          value={postUsers.lastname}
          onChange={handleOnChange}
          placeholder="Lastname"
        />
        <input
          type="text"
          name="email"
          value={postUsers.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
