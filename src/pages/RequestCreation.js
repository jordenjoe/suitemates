import { Link } from "react-router-dom";
import "../assets/css/Calendar.css";
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from "../assets/images/statusbar.png";
import createrequest from "../assets/images/calendar/requests/requestcreationcomponents.png";

const RequestCreation = (props) => {
  return (
    <div className="App">
      <img alt="status bar for phone" src={statusbar} />
      <input
        className="Gray-Input"
        placeholder="Your Request"
        type="text"
        id="fname"
        name="fname"
        style={{
          position: "absolute",
          color: "rgba(90, 90, 90, 1)",
          left: 25,
          top: 100,
          height: 0.5,
          width: 270,
          padding: "19px 27px",
        }}
      ></input>

      <input
        className="Gray-Input"
        defaultValue="00"
        type="text"
        id="fname"
        name="fname"
        style={{
          position: "absolute",
          color: "rgba(90, 90, 90, 1)",
          left: 147,
          top: 550,
          height: 28,
          width: 28,
          padding: "0px 0px",
          paddingTop: "2px",
          paddingLeft: "10px",
          background: "rgba(255, 255, 255, 1)",
          outline: "1px solid rgb(179, 215, 250)",
          borderRadius: 3,
          fontStyle: "normal",
        }}
      ></input>

      <input
        className="Gray-Input"
        defaultValue="00"
        type="text"
        id="fname"
        name="fname"
        style={{
          position: "absolute",
          color: "rgba(90, 90, 90, 1)",
          left: 147,
          top: 590,
          height: 28,
          width: 28,
          padding: "0px 0px",
          paddingTop: "2px",
          paddingLeft: "10px",
          background: "rgba(255, 255, 255, 1)",
          outline: "1px solid rgb(179, 215, 250)",
          borderRadius: 3,
          fontStyle: "normal",
        }}
      ></input>

      <img
        alt="request creation"
        src={createrequest}
        style={{
          marginTop: "30px",
        }}
      />

      <Link to="/createrequestsuccess">
        <button
          className="Calendar-Button"
          style={{
            cursor: "pointer",
            marginTop: "32px",
            marginBottom: "47px",
          }}
        >
          Complete Request
        </button>
      </Link>

      <Navbar />
    </div>
  );
};

export default RequestCreation;
