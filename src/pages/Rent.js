import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Rent.css";
//Components
import Navbar from "../components/NavbarRentBlue";
import RentHeader from "../components/rent_components/RentHeader";
import RentStatus from "../components/rent_components/RentStatus";
import UpdateRent from "../components/rent_components/UpdateRent";
import NudgeRoommate from "../components/rent_components/NudgeRoommate";
//Images
import statusbar from "../assets/images/statusbar.png";
import updateRentButton from "../assets/images/rent/update-rent-button.png";
import nudgeButton from "../assets/images/rent/nudge-button.png";
import optOut from "../assets/images/rent/opt-out-rent.png";

const Home = () => {
  //State variables
  const [modalActive, setModalActive] = useState(false);
  const [nudgeModalActive, setNudgeModalActive] = useState(false);
  const [updateModalActive, setUpdateModalActive] = useState(false);
  //1 = original, 2 = modified, 3 = paid
  const [rentStatus, setRentStatus] = useState(1);
  const [nudged, setNudged] = useState(false);

  //Functions
  const showNudgeModal = () => {
    setModalActive(true);
    setNudgeModalActive(true);
  };

  const dismissNudgeModal = () => {
    setModalActive(false);
    setNudgeModalActive(false);
  };

  const showUpdateModal = () => {
    setModalActive(true);
    setUpdateModalActive(true);
  };

  const dismissUpdateModal = () => {
    setModalActive(false);
    setUpdateModalActive(false);
  };

  const confirmUpdateModal = (e) => {
    e.preventDefault();
    setRentStatus(2);
    dismissUpdateModal();
  };

  const confirmNudgeModal = () => {
    setNudged(true);
  };

  return (
    <div className="App">
      <span className={modalActive ? "modal-background" : ""}>
        {updateModalActive && (
          <div className="modal-container">
            <UpdateRent
              onDismiss={dismissUpdateModal}
              onConfirm={confirmUpdateModal}
            />
          </div>
        )}
        {nudgeModalActive && (
          <div className="modal-container">
            <NudgeRoommate
              onDismiss={dismissNudgeModal}
              onConfirm={confirmNudgeModal}
              nudged={nudged}
            />
          </div>
        )}
      </span>

      <img alt="status bar for phone" src={statusbar} />
      <RentHeader />

      <RentStatus rentStatus={rentStatus} setRentStatus={setRentStatus} />

      <div className="rent-buttons-container">
        <button className="update-rent-button" onClick={showUpdateModal}>
          <img src={updateRentButton} alt="update rent button" />
        </button>
        <button className="nudge-button" onClick={showNudgeModal}>
          <img src={nudgeButton} alt="nudge roommate button" />
        </button>
        <img src={optOut} alt="opt out notifications" />
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
