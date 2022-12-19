import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import createrequest from '../assets/images/calendar/requests/reviewrequest.png';



const ReviewRequest = (props) => {

    return (
        <div className="App">
            <img alt='status bar for phone' src={statusbar} />
            <img alt='request creation' src={createrequest} style={{
                marginTop: "30px"
            }} />
            <Link to="/createrequestsuccess">
                <button className="Calendar-Button" style={{
                    marginTop: "32px",
                    marginBottom: "47px"
                }}>Complete Request</button>
            </Link>

            {/* accept button below */}
            <Link to="/acceptrequest">
                <button style={{
                    position: "absolute",
                    left: 57,
                    right: 60,
                    top: 455,
                    bottom: 356,
                    background: "rgba(255, 0, 0, 0.0)",
                    border: "none"
                }}
                > </button>
            </Link>

            {/* reject button below */}
            <Link to="/rejectrequest">
                <button style={{
                    position: "absolute",
                    left: 57,
                    right: 60,
                    top: 500,
                    bottom: 310,
                    background: "rgba(255, 0, 0, 0.0)",
                    border: "none"
                }}
                > </button>
            </Link>

            {/* cancel button below */}
            <Link to="/calendar">
                <button style={{
                    position: "absolute",
                    left: 57,
                    right: 60,
                    top: 547,
                    bottom: 264,
                    background: "rgba(255, 0, 0, 0)",
                    border: "none"
                }}
                > </button>
            </Link>

            <Navbar />
        </div>
    );
};

export default ReviewRequest;