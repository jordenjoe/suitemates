import { Link } from "react-router-dom";
import "../assets/css/Login.css";
import "../assets/css/Chores.css";
import CloseButton from "../assets/images/chores/CloseButton.png";
import EmptyBigCal from "../assets/images/chores/EmptyBigCal.png";
import statusbar from "../assets/images/statusbar.png";
import Navbar from "../components/NavbarChoresBlue";
import AssignButton from "../assets/images/chores/AssignButton.png";
import ChoreBigCalendar from "../assets/images/chores/ChoreBigCalendar.png";
import React, { useState } from "react";
import PopUp from "../components/AssignedPopUp";

const AssignChore = () => {
  //State variables
  const [modalActive, setModalActive] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [calClicked, setCalClicked] = useState(false);

  //Functions
  const showChoresModal = () => {
    setPopUp(true);
    setModalActive(true);
  };

  return (
    <div className="App">
      <span className={modalActive ? "modal-background" : ""}>
        {popUp && <PopUp />}
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
      {!calClicked && (
        <button
          alt="click to assign chores on a date"
          onClick={setCalClicked}
          className="chores-calendar-button"
        >
          <img
            alt="Chore Calendar Big"
            src={EmptyBigCal}
            className="chores-calendar"
          />
        </button>
      )}
      {calClicked && (
        <img
          alt="Chore Calendar Big"
          src={ChoreBigCalendar}
          className="chores-calendar"
        />
      )}
      <img
        onClick={calClicked && showChoresModal}
        alt="assign button cannot be pressed until you finish filling the form"
        src={AssignButton}
      />
      <div className="NavPadding-Assign">
        <Navbar />
      </div>
    </div>
  );
};

export default AssignChore;
