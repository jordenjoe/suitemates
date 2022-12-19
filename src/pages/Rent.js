import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Rent.css";
//Components
import Navbar from "../components/NavbarRentBlue";
import RentHeader from "../components/rent_components/RentHeader";
//Images
import statusbar from "../assets/images/statusbar.png";
import oldRent from "../assets/images/rent/old-rent.png";
import newRent from "../assets/images/rent/new-rent.png";
import updateRentButton from "../assets/images/rent/update-rent-button.png";
import nudgeButton from "../assets/images/rent/nudge-button.png";
import nudgeRoommate from "../assets/images/rent/nudge-roommate.png";
import optOut from "../assets/images/rent/opt-out-rent.png";

const Home = () => {
  return (
    <div className="App">
      <img alt="status bar for phone" src={statusbar} />
      <RentHeader />
      <img src={oldRent} alt="rent before modifying it" />
      <img src={updateRentButton} alt="update rent button" />
      <img src={nudgeButton} alt="nudge roommate button" />
      <img src={optOut} alt="opt out notifications" />
      <Navbar />
    </div>
  );
};

export default Home;
