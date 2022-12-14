import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import monthview from '../assets/images/calendar/monthview.png';
import header from '../assets/images/calendar/header.png';




const Home = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <img alt='header' src={header}/>
        <Link to="/calendar">
          <button className="Calendar-Button">
            &#60; &#8194;&#8194;&#8194;Monthly View &#8194;&#8194;&#8194; &#62;
            </button>
        </Link>
        <img className="Calendar-Month" alt='month calendar view' src={monthview}/>
       <Navbar />
      </div>
    );
  };
  
export default Home;