import React from "react";
import "../../assets/css/Suite.css";
import { Link } from "react-router-dom";
import houseRules from "../../assets/images/suites/house_rules.png";

const HouseRules = () => {
  return (
    <div>
      <img alt="house rules" src={houseRules} />
    </div>
  );
};

export default HouseRules;
