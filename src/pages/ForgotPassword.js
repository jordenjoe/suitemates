import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import eye from '../assets/images/login/eye.png';
import buildingicon from '../assets/images/login/backandbuilding.png';
import React, {useState} from 'react';
import PopUp from '../components/ResetPasswordPopup';


const ForgotPassword = () => {
  const [popUp, setPopUp] = useState(false)
  // adds class to darken background color
  const duringPopUp = popUp ? " during-popup" : ""
  return (
    <div className={"App" + duringPopUp}>
    <img className={duringPopUp} alt='status bar for phone' src={statusbar}/>
    <Link to="/signin">
      <div className="Login-Building-Icon">
      <img src={buildingicon}/>
      </div>
    </Link>
    <Suitemates />
    <div className="Login-Body">
    <div className='Align-Left'>
    <p><span className='Small-Gray-Text'>Please enter your email account to reset your password.</span></p>
    </div>
    <input className='Gray-Input' placeholder="myemail@email.com" type="text"></input>
    </div>
    <div onClick={()=>setPopUp(true)}  className='Turquoise-Button-Login'>Reset Password</div>
    {popUp && <PopUp setPopUp={setPopUp}/>}   
    </div>
  );
};
  
export default ForgotPassword;
