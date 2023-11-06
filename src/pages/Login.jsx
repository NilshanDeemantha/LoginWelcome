import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assests/login2.jpg";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const testUserName = "testUser";
const testPassword = "abc123";

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
    if (userName.trim() === "") {
      hasErrors = true;
      setUserNameErr("Please Enter User Name");
    } else if (userName.trim() !== testUserName) {
      hasErrors = true;
      setUserNameErr("Invalid User Name");
    }
    if (password.trim() === "") {
      hasErrors = true;
      setPasswordErr("Please Enter Passowrd");
    }else if (password.trim() !== testPassword){
        hasErrors = true;
        setPasswordErr("Invalid Password"); 
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
