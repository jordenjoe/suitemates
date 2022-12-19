import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import createrequest from '../assets/images/calendar/requests/requestcreationcomponents.png';



const RequestCreation = (props) => {

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

            <Navbar />
        </div>
    );
};

export default RequestCreation;