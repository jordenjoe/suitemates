import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Suite.css";
import removeRoommates from "../../assets/images/suites/remove-roommate-modal.png";
import roommateRemoved from "../../assets/images/suites/roommate-removed.png";

const RemoveRoommates = (props) => {
  const { onDismiss, onDelete, deleted } = props;

  return (
    <div>
      <button
        className="dismiss-remove"
        aria-label="dimiss remove roommates modal"
        onClick={onDismiss}
      >
        x
      </button>
      {!deleted && (
        <button
          className="remove-roommate"
          aria-label="remove roommate"
          onClick={onDelete}
        >
          -
        </button>
      )}
      {!deleted && <img src={removeRoommates} alt="remove roommates modal" />}
      {deleted && (
        <img src={roommateRemoved} alt="roommate successfully removed" />
      )}
    </div>
  );
};

export default RemoveRoommates;
