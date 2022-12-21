import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Rent.css";
import rentHeader from "../../assets/images/rent/rent-header.png";

const RentHeader = () => {
  return (
    <div className="rent-header-container">
      <Link to="/Home">
        <div className="back-home" aria-label="home button"></div>
      </Link>
      <img alt="rent header" src={rentHeader} />
    </div>
  );
};

export default RentHeader;
