import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import createrequest from '../assets/images/calendar/requests/requestrejected.png';



const AcceptRequest = (props) => {
    function onButtonClick() {
        // console.log("yuhhh")
        sessionStorage.setItem("calendar-view", "rejected")
    }
    return (
        <div className="App">
            <img alt='status bar for phone' src={statusbar} />
            <img alt='request creation' src={createrequest} style={{
                marginTop: "30px"
            }} />

            <Link to="/calendar">
                <button style={{
                    position: "absolute",
                    left: 57,
                    right: 60,
                    top: 380,
                    bottom: 430,
                    background: "rgba(255, 0, 0, 0.0)",
                    border: "none"
                }}
                    onClick={onButtonClick}
                />
            </Link>

            <Navbar />
        </div>
    );
};

export default AcceptRequest;