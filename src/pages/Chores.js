import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import '../assets/css/Chores.css';
import Navbar from "../components/NavbarChoresBlue";
import statusbar from '../assets/images/statusbar.png';
import ChoresHeader from '../assets/images/chores/ChoresHeader.png';
import Chores1022Cal from '../assets/images/chores/Chores1022Cal.png';

const Home = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <img alt='chores header' src={ChoresHeader}/>
        <img alt='chores header, Oct 22' src={Chores1022Cal}/>
        <h1>Chores</h1>
        <Link to="/Home">
            <button className="Turquoise-Button">Assign Chore</button>
        </Link>
        <Navbar />
      </div>
    );
  };
  
export default Home;
