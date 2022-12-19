import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Suite.css";

import Navbar from "../NavbarSuiteBlue";
import backgroundBlur from "../../assets/images/suites/background_blur.png";
import createRule from "../../assets/images/suites/create_rule.png";

const AddHouseRuleModal = () => {
  return (
    <div className="App">
      <img src={createRule} alt="create rule modal" />
      <img src={backgroundBlur} />
      <Navbar />
    </div>
  );
};

export default AddHouseRuleModal;
