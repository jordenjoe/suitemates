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
import AddHouseRuleModal from "../components/suite_components/AddHouseRuleModal";

const Suite = () => {
  //State variables
  const [modalActive, setModalActive] = useState(false);
  const [newRuleModal, setNewRuleModal] = useState(false);
  const [editRules, setEditRules] = useState(true);
  const [ruleDeleted, setRuleDeleted] = useState(false);
  const [codeModal, setCodeModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [roommateRemoved, setRoommateRemoved] = useState(false);
  const [newRule, setNewRule] = useState("");
  const [newRuleFilled, setNewRuleFilled] = useState(false);

  //Functions
  const showNewRuleModal = () => {
    setModalActive(true);
    setNewRuleModal(true);
  };

  const dismissRuleModal = () => {
    setModalActive(false);
    setNewRule("");
    setNewRuleModal(false);
  };

  const editRuleModal = () => {
    setEditRules(false);
  };

  const dismissEditRuleModal = () => {
    setEditRules(true);
  };

  const deleteRule = () => {
    setRuleDeleted(true);
    setNewRule("");
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
  };

  const handleRoommateRemoved = () => {
    setRoommateRemoved(true);
  };

  const handleSetNewRule = (e) => {
    e.preventDefault();
    setNewRule(e.target.value);
  };

  const confirmSetNewRule = () => {
    setRuleDeleted(false);
    setNewRuleFilled(true);
    setModalActive(false);
    setNewRuleModal(false);
  };

  return (
    <div className="App">
      <div>
        <span className={modalActive ? "modal-background" : ""}>
          {newRuleModal && (
            <div className="modal-container">
              <AddHouseRuleModal
                onDismiss={dismissRuleModal}
                onChange={handleSetNewRule}
                onConfirm={confirmSetNewRule}
              />
            </div>
          )}
          {codeModal && (
            <div className="modal-container">
              <CopyInviteCode onDismiss={dismissCodeModal} />
            </div>
          )}
          {removeModal && (
            <div className="modal-container">
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
        <HouseRules
          onEdit={editRuleModal}
          onDismissEdit={dismissEditRuleModal}
          onDelete={deleteRule}
          onCreate={showNewRuleModal}
          showEditButton={editRules}
          deleted={ruleDeleted}
          newRuleFilled={newRuleFilled}
          newRule={newRule}
        />
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
