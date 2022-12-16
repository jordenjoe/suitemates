import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import eye from '../assets/images/login/eye.png';
import profileicon from '../assets/images/login/profileicon.png';
import buildingicon from '../assets/images/login/buildingicon.png';



const Signup = () => {
    return (
      <div className="App">
      <img alt='status bar for phone' src={statusbar}/>
      <img alt='status bar for phone' src={buildingicon}/>
      <Suitemates />
      <div className="Login-Body">
      <p className="Small-Gray-Text">Sign up for Suitemates</p>
      <div className='Gray-Button'>Jake Smith</div>
      <div className='Gray-Button'>testemail@columbia.edu</div>
      <div className='Gray-Button'>*********&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<img src={eye}/></div>
     <img src={profileicon}/>
      
      </div>
      <Link to="/joinsuite">
         <div className='Turquoise-Button-Login'>Sign Up</div>
      </Link>
      <p><span className='Small-Gray-Text'>Already have an account? </span><Link to="/signin"><span className='Small-Turqoise-Text'>Sign in</span></Link></p>


      </div>
    );
  };
  
export default Signup;