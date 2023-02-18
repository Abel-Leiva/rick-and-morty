import { useState } from "react";
import validate from "./validate";
export default function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, SetErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChangue = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    SetErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChangue}
      />
      {errors.username && <p style={{ color: "" }}>{errors.username}</p>}
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleInputChangue}
      />
      {errors.password && <p style={{ color: "white" }}> {errors.password}</p>}
      <button>Login</button>
    </form>
  );
}
