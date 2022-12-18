import { Link } from "react-router-dom";
import '../assets/css/Chores.css';
import Navbar from "../components/NavbarChoresBlue";
import statusbar from '../assets/images/statusbar.png';
import Chores1022Cal from '../assets/images/chores/Chores1022Cal.png';
import BathroomComplete from '../assets/images/chores/BathroomComplete.png';
import LoungeIncomplete from '../assets/images/chores/LoungeIncomplete.png';
import BackIcon from '../assets/images/chores/BackIcon.png';
import AddIcon from '../assets/images/chores/AddIcon.png';

const Home = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <div className="Header">
            <Link to="/Home">
                <img className="Back_Icon" src={BackIcon}/>
            </Link>
            <div className="HeaderFont">Chores</div>
            <img className="Add_Icon" src={AddIcon}/>
        </div>
        <img alt='chores header, Oct 22' src={Chores1022Cal}/>
        <h3>Chores To Do</h3>
        <Link to="/Chores">
            <img alt='POV chore Complete' src={BathroomComplete}/>
        </Link>
        <img alt='Suitemate chore incomplete' src={LoungeIncomplete}/>
        <Navbar />
      </div>
    );
  };
  
export default Home;
