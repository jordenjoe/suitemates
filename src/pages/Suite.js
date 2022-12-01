import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import Navbar from "../components/NavbarSuiteBlue";


const Home = () => {
    return (
      <div className="App">
        <h1>Suite stuff</h1>
       <Navbar />
      </div>
    );
  };
  
export default Home;