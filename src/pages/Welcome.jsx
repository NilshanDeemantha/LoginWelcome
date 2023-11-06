import React from "react";
import { useLocation } from "react-router-dom";
import "./welcome.css";

export function Welcome() {
  const location = useLocation();
  const userName = location.state;
  console.log(userName);
  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <h2>{userName}</h2>
    </div>
  );
}
