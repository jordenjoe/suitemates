import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Suite.css";
import suiteHeader from "../../assets/images/suites/suite_header.png";

const SuiteHeader = () => {
  return (
    <div className="suite-header-container">
      <Link to="/Home">
        <div className="back-home" aria-label="home button"></div>
      </Link>
      <img alt="suite header" src={suiteHeader} />
    </div>
  );
};

export default SuiteHeader;
