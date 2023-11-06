import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assests/login2.jpg";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [userNameErr, setUserNameErr] = useState("");

  function handleLogin() {
    let hasErrors = false;
    setUserNameErr("");
    setUserNameErr("");
    if (userName === "") {
      hasErrors = true;
      setUserNameErr("Please Enter User Name");
    }
    if (password === "") {
      hasErrors = true;
      setPasswordErr("Please Enter User Name");
    }
    if (!hasErrors) {
      setPassword("");
      setUserName("");
      navigate("/welcome", { state: userName });
    }
  }

  return (
    <div className="container">
      <div className="img">
        <img src={login} alt="login" />
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <div className="inputs">
          <TextField
            error={userNameErr !== "" && true}
            id="outlined-error-helper-text"
            label="Enter username"
            helperText={userNameErr !== "" && userNameErr}
            size="small"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            error={passwordErr !== "" && true}
            id="outlined-error-helper-text"
            label="Enter passowrd"
            type="password"
            helperText={passwordErr !== "" && passwordErr}
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
}

export default Login;
