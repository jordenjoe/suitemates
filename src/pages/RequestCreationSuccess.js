import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import createrequest from '../assets/images/calendar/requests/requestSuccessNoNavHomeStatus.png';



const RequestCreationSuccess = (props) => {

    return (
        <div className="App">
            <img alt='status bar for phone' src={statusbar} />

            <div style={{ position: "relative" }}>
                <img alt='request creation' src={createrequest} style={{
                    marginTop: "30px",
                    marginBottom: "42px"
                }} />
                <Link to="/calendar" style={{
                    position: "absolute",
                    left: 45,
                    right: 35,
                    top: 523,
                    bottom: 152,
                    background: "rgba(0, 0, 0, 0)",
                    border: "none"
                }}>

                </Link>
            </div>


            <Navbar />
        </div>
    );
};

export default RequestCreationSuccess;