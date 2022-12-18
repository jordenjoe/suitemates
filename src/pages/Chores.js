import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import '../assets/css/Chores.css';
import Navbar from "../components/NavbarChoresBlue";
import statusbar from '../assets/images/statusbar.png';



const Home = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <h1>Chores</h1>
        <Link to="/Home">
            <button className="Turquoise-Button">Assign Chore</button>
        </Link>
        <Navbar />
      </div>
    );
  };
  
export default Home;
