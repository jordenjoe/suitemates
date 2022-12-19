import { Link } from "react-router-dom";
import '../assets/css/Chores.css';
import Navbar from "../components/NavbarChoresBlue";
import statusbar from '../assets/images/statusbar.png';
import ChoresHeader from '../assets/images/chores/ChoresHeader.png';
import Chores1022Cal from '../assets/images/chores/Chores1022Cal.png';
import BathroomComplete from '../assets/images/chores/BathroomComplete.png';
import ReminderSent from '../assets/images/chores/ReminderSent.png';
import BackIcon from '../assets/images/chores/BackIcon.png';
import AddIcon from '../assets/images/chores/AddIcon.png';

const ReminderSuccess = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <div className="Header">
            <Link to="/Home">
                <img className="Back_Icon" src={BackIcon}/>
            </Link>
            <div className="HeaderFont">Chores</div>
            <Link to="/AssignChore">
                <img className="Add_Icon" src={AddIcon}/>
            </Link>
        </div>
        <img alt='chores header, Oct 22' src={Chores1022Cal}/>
        <h3>Chores To Do</h3>        
        <Link to="/Chores">
            <img alt='POV chore Complete' src={BathroomComplete}/>
        </Link>
        <img alt='Suitemate Reminder Sent' src={ReminderSent}/>
        <div className="NavPadding-Lounge"><Navbar /></div>
      </div>
    );
  };
  
export default ReminderSuccess;
