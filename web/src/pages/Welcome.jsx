import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./welcome.css";
import TextField from "@mui/material/TextField";

const Welcome = () => {
  const location = useLocation();
  const userName = location.state;

  const [userInput, setUserInput] = useState("");

  return (
    <div className="welcome-container">
      <h1>Welcome {userName}!</h1>
      <div className="user-input">
        {userInput.trim() && (
          <>
            <h2>User Input</h2>
            <p>{userInput}</p>
          </>
        )}
        <TextField
          id="outlined-error-helper-text"
          label="User Input"
          size="small"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Welcome;
