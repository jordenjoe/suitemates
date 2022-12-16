import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import eye from '../assets/images/login/eye.png';
import buildingicon from '../assets/images/login/buildingicon.png';



const Signup = () => {
    return (
      <div className="App">
      <img alt='status bar for phone' src={statusbar}/>
      <img alt='status bar for phone' src={buildingicon}/>
      <Suitemates />
      <p><span className='Small-Gray-Text'>You are not currently in a suite.</span></p>
      <div className="Login-Body">
      <div className='Align-Left'>
      <p><span className='Small-Gray-Text'>Enter your invite code 🎉</span></p>
      </div>
      <div className='Gray-Button'>XHUISDH23S</div>
      </div>
      <Link to="/home">
         <div className='Turquoise-Button-Login'>Join Suite</div>
      </Link>

      </div>
    );
  };
  
export default Signup;