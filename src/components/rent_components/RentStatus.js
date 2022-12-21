import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Rent.css";
import oldRent from "../../assets/images/rent/old-rent.png";
import newRent from "../../assets/images/rent/new-rent.png";
import rentPaid from "../../assets/images/rent/rent-paid.png";

const RentStatus = (props) => {
  const { rentStatus, setRentStatus } = props;

  const handleRent = () => {
    setRentStatus(3);
  };

  return (
    <div className="rent-container">
      <button className="pay-rent-button" onClick={handleRent}>
        pay
      </button>
      {rentStatus === 1 && <img src={oldRent} alt="rent before modifying" />}
      {rentStatus === 2 && <img src={newRent} alt="rent after modifying" />}
      {rentStatus === 3 && <img src={rentPaid} alt="rent is paid" />}
    </div>
  );
};

export default RentStatus;
