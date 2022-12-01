import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import Navbar from "../components/NavbarHomeBlue";


const Home = () => {
    return (
      <div className="App">
        <h1>Home stuff</h1>
       <Navbar />
      </div>
    );
  };
  
export default Home;