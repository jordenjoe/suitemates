import { Link } from "react-router-dom";
import '../assets/css/Calendar.css';
import Navbar from "../components/NavbarCalendarBlue";
import statusbar from '../assets/images/statusbar.png';
import view from '../assets/images/calendar/weekview.png';
import requestview from '../assets/images/calendar/requestview.png';
import header from '../assets/images/calendar/header.png';




const Home = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <img alt='header' src={header}/>
        <Link to="/calendar">
          <button className="Calendar-Button">	
          &#60; &#8194;&#8194;&#8194;Weekly View &#8194;&#8194;&#8194; &#62;
          </button>
        </Link>
        <img alt='7 day calendar view' src={view}/>
        <img alt='1 day calendar view' src={requestview}/>
        <button className="Calendar-Button">Add a Request</button>
       <Navbar />
      </div>
    );
  };
  
export default Home;