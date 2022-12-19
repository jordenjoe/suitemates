import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Suite.css";
//Components
import Navbar from "../components/NavbarSuiteBlue";
import SuiteHeader from "../components/suite_components/SuiteHeader";
import HouseRules from "../components/suite_components/HouseRules";
import CopyInviteCode from "../components/suite_components/CopyInviteCode";
import RemoveRoommates from "../components/suite_components/RemoveRoommates";
//Images
import statusbar from "../assets/images/statusbar.png";
import removeRoomates from "../assets/images/suites/remove_roommates.png";
import inviteCode from "../assets/images/suites/invite_code.png";

const Home = () => {
  //State variables
  const [modalActive, setModalActive] = useState(false);
  const [ruleModal, setRuleModal] = useState(false);
  const [codeModal, setCodeModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  //Functions
  const showRuleModal = () => {
    setModalActive(true);
    setRuleModal(true);
  };

  const showCodeModal = () => {
    setModalActive(true);
    setCodeModal(true);
  };

  const showRemoveModal = () => {
    setModalActive(true);
    setRemoveModal(true);
  };

  return (
    <div className="App">
      <div>
        <span className={modalActive ? "modal-background" : ""}>
          {ruleModal && <div class="modal-container">hey</div>}
          {codeModal && (
            <div class="modal-container">
              <CopyInviteCode />
            </div>
          )}
          {removeModal && (
            <div class="modal-container">
              <RemoveRoommates />
            </div>
          )}
        </span>
        <img alt="status bar for phone" src={statusbar} />
        <SuiteHeader />
        <HouseRules />
        <div className="suite-buttons-container">
          <button onClick={showCodeModal} className="suite-buttons">
            <img alt="copy invite code" src={inviteCode} />
          </button>
          <button onClick={showRemoveModal} className="suite-buttons">
            <img
              alt="remove roommates"
              className="remove-roommates-button"
              src={removeRoomates}
            />
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
