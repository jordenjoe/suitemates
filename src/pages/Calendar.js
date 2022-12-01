import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import Navbar from "../components/NavbarCalendarBlue";


const Home = () => {
    return (
      <div className="App">
        <h1>Calendar stuff</h1>
       <Navbar />
      </div>
    );
  };
  
export default Home;