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

const Suite = () => {
  //State variables
  const [modalActive, setModalActive] = useState(false);
  const [ruleModal, setRuleModal] = useState(false);
  const [codeModal, setCodeModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [roommateRemoved, setRoommateRemoved] = useState(false);

  //Functions
  const showRuleModal = () => {
    setModalActive(true);
    setRuleModal(true);
  };

  const dismissRuleModal = () => {
    setModalActive(false);
    setRuleModal(false);
  };

  const showCodeModal = () => {
    setModalActive(true);
    setCodeModal(true);
  };

  const dismissCodeModal = () => {
    setModalActive(false);
    setCodeModal(false);
  };

  const showRemoveModal = () => {
    setModalActive(true);
    setRemoveModal(true);
  };

  const dismissRemoveModal = () => {
    setModalActive(false);
    setRemoveModal(false);
    console.log("bro!!!");
  };

  const handleRoommateRemoved = () => {
    setRoommateRemoved(true);
    console.log("bro!!!");
    console.log(roommateRemoved);
  };

  return (
    <div className="App">
      <div>
        <span className={modalActive ? "modal-background" : ""}>
          {ruleModal && <div class="modal-container">hey</div>}
          {codeModal && (
            <div class="modal-container">
              <CopyInviteCode onDismiss={dismissCodeModal} />
            </div>
          )}
          {removeModal && (
            <div class="modal-container">
              <RemoveRoommates
                onDismiss={dismissRemoveModal}
                onDelete={handleRoommateRemoved}
                deleted={roommateRemoved}
              />
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

export default Suite;
