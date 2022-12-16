import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import eye from '../assets/images/login/eye.png';
import profileicon from '../assets/images/login/profileicon.png';



const Signup = () => {
    return (
      <div className="App">
      <img alt='status bar for phone' src={statusbar}/>
      <Suitemates />
      <div className="Login-Body">
        <h1>Sign up</h1>
      <div className='Gray-Button'>Jake Smith</div>
      <div className='Gray-Button'>testemail@columbia.com</div>
      <div className='Gray-Button'>*********&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<img src={eye}/></div>
     <img src={profileicon}/>
      
      </div>
      <Link to="/home">
         <div className='Turquoise-Button-Login'>Sign Up</div>
      </Link>
      <p><span className='Small-Gray-Text'>Already have an account? </span><Link to="/signin"><span className='Small-Turqoise-Text'>Sign in</span></Link></p>


      </div>
    );
  };
  
export default Signup;