import { Link } from "react-router-dom";
import '../assets/css/Home.css';
import partyicon from '../assets/images/partyicon.png';
import quiethoursicon from '../assets/images/quiethoursicon.png';
import renticon2 from '../assets/images/renticon2.png';

const HomeEventsPane = () => {
    return (
      <div className="HomeEvents">

        <div>
          <p className="HomeEvents-Title">Upcoming Events</p>
          <Link to="/calendar"><p class="HomeEvents-CalLink">View Calendar</p></Link>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="HomeEvents-Events">
          <div className="Event">
          </div>
          <div className="Event">
          </div>
          <div className="Event">
          </div>
        </div>
      
      </div>
    );
  };
  
export default HomeEventsPane;