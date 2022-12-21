import React from "react";
import "../../assets/css/Rent.css";
import nudgeRoommateModal from "../../assets/images/rent/nudge-roommate.png";
import roommateNudged from "../../assets/images/rent/roommate-nudged.png";

const NudgeRoommate = (props) => {
  const { onDismiss, onConfirm, nudged } = props;

  return (
    <div>
      <button
        className="dismiss-nudge"
        aria-label="dimiss nudge modal"
        onClick={onDismiss}
      >
        x
      </button>

      <button className="nudge" aria-label="nudge roommate" onClick={onConfirm}>
        x
      </button>

      {!nudged && (
        <img
          src={nudgeRoommateModal}
          alt="modal for nudging roommate"
          className="nudge-roommate-modal"
        />
      )}
      {nudged && (
        <img
          src={roommateNudged}
          alt="modal displaying that your roommate has been nudged"
          className="nudge-roommate-modal"
        />
      )}
    </div>
  );
};

export default NudgeRoommate;
