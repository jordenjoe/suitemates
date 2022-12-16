import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import eye from '../assets/images/login/eye.png';
import buildingicon from '../assets/images/login/buildingicon.png';



const Signin = () => {
    return (
    <div className="App">
         <img alt='status bar for phone' src={statusbar}/>
         <img alt='status bar for phone' src={buildingicon}/>
         <Suitemates />
         <div className="Login-Body">
         <p className="Small-Gray-Text">Please sign in to continue.</p>
         <div className='Gray-Button'>www.test@columbia.edu</div>
         <div className='Gray-Button'>*********&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<img src={eye}/></div>
         <div className='Align-Right'>
         <p className='Small-Turqoise-Text'>Forgot Password?</p>
         </div>
         <Link to="/home">
            <div className='Turquoise-Button-Login'>Sign In</div>
         </Link>
         
         <p><span className='Small-Gray-Text'>Don't have an account? </span><Link to="/signup"><span className='Small-Turqoise-Text'>Sign up</span></Link></p>
         </div>
         

     </div>
    );
  };
  
export default Signin;