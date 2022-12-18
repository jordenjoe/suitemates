import { Link } from "react-router-dom";
import '../assets/css/Chores.css';
import Navbar from "../components/NavbarChoresBlue";
import statusbar from '../assets/images/statusbar.png';
import ChoresHeader from '../assets/images/chores/ChoresHeader.png';
import Chores1022Cal from '../assets/images/chores/Chores1022Cal.png';
import BathroomIncomplete from '../assets/images/chores/BathroomIncomplete.png';
import LoungeIncomplete from '../assets/images/chores/LoungeIncomplete.png';

const Home = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <img alt='chores header' src={ChoresHeader}/>
        <img alt='chores header, Oct 22' src={Chores1022Cal}/>
        <h2>Chores To Do</h2>        
        <img alt='POV chore incomplete' src={BathroomIncomplete}/>
        <img alt='Suitemate chore incomplete' src={LoungeIncomplete}/>
        <Link to="/Home">
            <button className="Turquoise-Button">Assign Chore</button>
        </Link>
        <Navbar />
      </div>
    );
  };
  
export default Home;
