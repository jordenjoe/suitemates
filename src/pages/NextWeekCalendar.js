import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import view from '../assets/images/calendar/weekview.png';
import nextweek from '../assets/images/calendar/nextweek.png';
import header from '../assets/images/calendar/header.png';



const NextWeekCalendar = (props) => {

  return (
    <div className="App">
      <img alt='status bar for phone' src={statusbar} />
      <img alt='header' src={header} />
      <Link to="/calendarmonthly">
        <button className="Calendar-Button">
          &#60;&#8194;&#8194;&#8194;Weekly View &#8194;&#8194;&#8194; &#62;
        </button>
      </Link>
      <img alt='7 day calendar view' src={view} />

      <div style={{ position: "relative" }} >
        <img alt='1 day calendar view' src={nextweek} />
        {<Link to="/reviewrequest">
          <button style={{
            position: "absolute",
            left: 100,
            right: 50,
            top: 45,
            bottom: 215,
            background: "rgba(255, 0, 0, 0)",
            border: "none"
          }} />
        </Link>}

      </div>
      {/*  invisible button on the png */}
      <Link to="/calendar">
        <button style={{
          position: "absolute",
          left: 290,
          right: 70,
          top: 200,
          bottom: 615,
          background: "rgba(255, 0, 0, .0)",
          cursor: "pointer",
          border: "none"
        }} />
      </Link>

      <Link to="/createrequest">
        <button className="Calendar-Button">Add a Request</button>
      </Link>
      <Navbar />
    </div>
  );
};

export default NextWeekCalendar;