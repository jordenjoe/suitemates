import { Link } from "react-router-dom";
import '../assets/css/Chores.css';
import Navbar from "../components/NavbarChoresBlue";
import statusbar from '../assets/images/statusbar.png';
import ChoresHeader from '../assets/images/chores/ChoresHeader.png';
import Cal1025 from '../assets/images/chores/Cal1025.png';
import BackIcon from '../assets/images/chores/BackIcon.png';
import AddIcon from '../assets/images/chores/AddIcon.png';
import NewReminderSent from '../assets/images/chores/NewReminderSent.png';

const NewChoreAssigned = () => {
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
        <img alt='chores header, Oct 25' src={Cal1025}/>
        <h3>Chores To Do</h3>
        <img alt='New Chore reminder sent' src={NewReminderSent}/>
        <Navbar />
      </div>
    );
  };
  
export default NewChoreAssigned;