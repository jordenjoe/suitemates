import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Suite.css";
import inviteCode from "../../assets/images/suites/invite-code-modal.png";

const CopyInviteCode = (props) => {
  const { onDismiss } = props;
  return (
    <div>
      <button
        className="dismiss-invite"
        aria-label="dimiss invite code modal"
        onClick={onDismiss}
      >
        x
      </button>
      <Link to="/message">
        <div
          className="send-invite"
          aria-label="send invite code to message"
        ></div>
      </Link>

      <img src={inviteCode} alt="copy invite code modal" />
    </div>
  );
};

export default CopyInviteCode;
