import { Link } from "react-router-dom";
import '../assets/css/navbar.css';
import homeiconblue from '../assets/images/homeicon.png';
import calendaricon from '../assets/images/calendariconblue.png';
import choresicon from '../assets/images/choresicon.png';
import renticon from '../assets/images/renticon.png';
import suiteicon from '../assets/images/suiteicon.png';



const Navbar = () => {
  return (
    <div className="Navbar" style={{
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0
    }}>
      <Link to="/home"><img alt='homeiconblue' src={homeiconblue} /></Link>
      <Link to="/calendar"><img alt='calendaricon' src={calendaricon} /></Link>
      <Link to="/chores"><img alt='choresicon' src={choresicon} /></Link>
      <Link to="/rent"><img alt='renticon' src={renticon} /></Link>
      <Link to="/suite"> <img alt='suiteicon' src={suiteicon} /></Link>
    </div>
  );
};

export default Navbar;