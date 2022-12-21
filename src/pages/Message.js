import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Suite.css";
import imessage from "../assets/images/suites/imessage.png";

const Message = () => {
  return (
    <div className="App">
      <Link to="/suite">
        <div
          className="back-home-from-message"
          aria-label="go back to to the Suitemate app from message"
        >
          Back
        </div>
      </Link>
      <img
        src={imessage}
        alt="Suitemate invite sent to message"
        className="i-message"
      />
    </div>
  );
};

export default Message;
