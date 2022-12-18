import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import invitecode from '../assets/images/login/invitecode.png';
import buildingicon from '../assets/images/login/buildingicon.png';



const NewSuite = () => {
    return (
    <div className="App">
         <img alt='status bar for phone' src={statusbar}/>
         <img src={buildingicon}/>
         <Suitemates />
         <div className="Login-Body">
         <p className="Medium-Pink-Text">Suite 307Besties Created! 🥳</p>
         <Link to="/home">
            <div className='Turquoise-Button-Login'>Go to homepage</div>
         </Link>
         <img src={invitecode}/>
         </div>
         

     </div>
    );
  };
  
export default NewSuite;