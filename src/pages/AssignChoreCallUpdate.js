import { Link } from "react-router-dom";
import "../assets/css/Chores.css";
import CloseButton from "../assets/images/chores/CloseButton.png";
import ChoreBigCalendar from "../assets/images/chores/ChoreBigCalendar.png";
import statusbar from "../assets/images/statusbar.png";
import Navbar from "../components/NavbarChoresBlue";
import AssignButton from "../assets/images/chores/AssignButton.png";
import React, { useState } from "react";
import PopUp from "../components/AssignedPopUp";

const AssignChore = () => {
  //State variables
  const [modalActive, setModalActive] = useState(false);
  const [popUp, setPopUp] = useState(false);

  //Functions
  const showChoresModal = () => {
    setPopUp(true);
    setModalActive(true);
  };

  const dismissChoresModal = () => {
    setPopUp(false);
    setModalActive(false);
  };

  return (
    <div className="App">
      <span className={modalActive ? "modal-background" : ""}>
        {popUp && <PopUp onDismiss={dismissChoresModal} />}
      </span>
      <img alt="status bar for phone" src={statusbar} />
      <div className="Single-Icon-Header">
        <div className="Single-Icon-Header-Font">Assign Chore</div>
        <Link to="/Chores">
          <img className="Close_Icon" alt="Close button" src={CloseButton} />
        </Link>
      </div>
      <p>Chore Name</p>
      <input
        className="Gray-Input-Chores"
        placeholder="Enter Chore"
        type="text"
        id="fname"
        name="fname"
      ></input>
      <p>Assign To</p>
      <input
        className="Gray-Input-Chores"
        placeholder="Enter SuiteMate"
        type="text"
        id="fname"
        name="fname"
      ></input>
      <p>Complete By</p>
      <img alt="Chore Calendar Big" src={ChoreBigCalendar} />
      <img
        onClick={() => setPopUp(true)}
        alt="assign button"
        src={AssignButton}
      />
      {popUp && <PopUp setPopUp={setPopUp} />}
      <div className="NavPadding-Assign">
        <Navbar />
      </div>
    </div>
  );
};

export default AssignChore;
