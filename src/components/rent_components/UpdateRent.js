import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Rent.css";
import updateRentModal from "../../assets/images/rent/update-rent-modal.png";

const UpdateRent = (props) => {
  const { onDismiss, onConfirm } = props;

  return (
    <div>
      <button
        className="dismiss-rent-update"
        aria-label="dimiss rent update modal"
        onClick={onDismiss}
      >
        x
      </button>

      <form onSubmit={onConfirm}>
        <input
          className="new-rent-input"
          placeholder="Rent amount"
          type="text"
          id="new-rule"
          name="new-rule"
        />
        <input
          className="new-date-input"
          placeholder="Due date"
          type="text"
          id="new-rule"
          name="new-rule"
        />
        <input type="submit" className="confirm-rent-update" alt="Submit" />
      </form>

      <img src={updateRentModal} alt="modal for updating rent" />
    </div>
  );
};

export default UpdateRent;
