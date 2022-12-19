import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Suite.css";
import createRule from "../../assets/images/suites/create_rule.png";
import addButton from "../../assets/images/suites/add-button.png";

const AddHouseRuleModal = (props) => {
  const { onConfirm, onChange, onDismiss } = props;

  return (
    <div>
      <button
        className="dismiss-new-rule-modal"
        aria-label="dismiss new house rule modal"
        onClick={onDismiss}
      >
        back
      </button>
      <form onSubmit={onConfirm}>
        <input
          className="new-rule-input"
          placeholder="Your rule here"
          type="text"
          id="new-rule"
          name="new-rule"
          onChange={onChange}
        />
        <input type="image" src={addButton} className="add-rule" alt="Submit" />
      </form>
      <img src={createRule} alt="create rule modal" />
    </div>
  );
};

export default AddHouseRuleModal;
