import { Link } from "react-router-dom";
import '../assets/css/Home.css';
import partevent from '../assets/images/home/partevent.png';
import payrentevent from '../assets/images/home/payrentevent.png';
import quiethoursevent from '../assets/images/home/quiethoursevent.png';

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
          <Link to="/calendar"><img className="Event-Image" alt='partyevent' src={partevent}/></Link>
          </div>
          <div className="Event">
          <Link to="/calendar"><img className="Event-Image" alt='payrentevent' src={payrentevent}/></Link>
          </div>
          <div className="Event">
          <Link to="/calendar"><img className="Event-Image" alt='quiethoursevent' src={quiethoursevent}/></Link>
          </div>
        </div>
      
      </div>
    );
  };
  
export default HomeEventsPane;