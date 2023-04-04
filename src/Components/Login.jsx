import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Container">
      <div className="header">
        <h1>THE RICK AND MORTY</h1>
        <nav>
          <Link style={{ textDecoration: "none" }} to="/diracter">
            <h1>character</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Location">
            <h1>location</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/episode">
            <h1>episode</h1>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Login;
