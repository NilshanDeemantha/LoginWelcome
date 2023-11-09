import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assests/login2.jpg";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [userNameErr, setUserNameErr] = useState("");

  const handleLogin = async () => {
    setUserNameErr("");
    setPasswordErr("");
    if (!userName.trim() && !password.trim()) {
      setUserNameErr("Please Enter User Name");
      setPasswordErr("Please Enter Passowrd");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (response.status === 200) {
        setPassword("");
        setUserName("");
        navigate("/welcome", { state: userName });
      } else if (response.status === 401) {
        const result = await response.json();
        if (result.msg === "Both Are invalid") {
          setUserNameErr(
            !userName.trim() ? "Please Enter User Name" : "Invalid User Name"
          );
          setPasswordErr(
            !password.trim() ? "Please Enter Passowrd" : "Invalid Password"
          );
        } else if (result.msg === "Username invalid") {
          setUserNameErr(
            !userName.trim() ? "Please Enter User Name" : "Invalid User Name"
          );
        } else if (result.msg === "Password invalid") {
          setPasswordErr(
            !password.trim() ? "Please Enter Passowrd" : "Invalid Password"
          );
        }
      }
    } catch (err) {}
  };

  return (
    <div className="container">
      <div className="img">
        <img src={login} alt="login" />
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <div className="inputs">
          <TextField
            error={!!userNameErr}
            className="outlined-error-helper-text"
            label="Enter username"
            helperText={userNameErr}
            size="small"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            error={!!passwordErr}
            className="outlined-error-helper-text"
            label="Enter passowrd"
            type="password"
            helperText={passwordErr}
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
