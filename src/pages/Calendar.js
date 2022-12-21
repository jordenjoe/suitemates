import { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import view from '../assets/images/calendar/weekview.png';
import defaultview from '../assets/images/calendar/requestview.png';
import acceptedview from '../assets/images/calendar/neweventpermanentview.png';
import rejectedview from '../assets/images/calendar/emptyweekview.png';
import header from '../assets/images/calendar/header.png';

function getView(str) {
  switch (str) {
    case 'default':
      return defaultview;
    case 'accepted':
      return acceptedview;
    case 'rejected':
      return rejectedview;
    default:
      return null;
  }
}

const Calendar = (props) => {
  const [calendarView] = useState(sessionStorage.getItem("calendar-view") ? getView(sessionStorage.getItem("calendar-view")) : defaultview);

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
        <img alt='1 day calendar view' src={calendarView} />
        {calendarView === defaultview && <Link to="/reviewrequest">
          <button style={{
            position: "absolute",
            left: 100,
            right: 50,
            top: 45,
            bottom: 215,
            background: "rgba(255, 0, 0, 0)",
            border: "none",
            cursor: "pointer"
          }} />
        </Link>}

      </div>
      {/*  invisible button on the png */}
      <Link to="/nextweekcalendar">
        <button style={{
          position: "absolute",
          left: 325,
          right: 45,
          top: 200,
          bottom: 615,
          background: "rgba(255, 0, 0, .0)",
          cursor: "pointer",
          border: "none"
        }} />
      </Link>

      <Link to="/home">
        <button style={{
          position: "absolute",
          left: 30,
          right: 310,
          top: 50,
          bottom: 750,
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

export default Calendar;