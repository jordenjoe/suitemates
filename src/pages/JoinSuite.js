import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import eye from '../assets/images/login/eye.png';
import buildingicon from '../assets/images/login/buildingicon.png';
import React, {useState} from 'react';
import PopUp from './CreateSuitePopup';


const JoinSuite = () => {
    const [popUp, setPopUp] = useState(false)
    // adds class to darken background color
    const duringPopUp = popUp ? " during-popup" : ""
    return (
      <div className={"App" + duringPopUp}>
      <img className={duringPopUp} alt='status bar for phone' src={statusbar}/>
      <img alt='status bar for phone' src={buildingicon}/>
      <Suitemates />
      <p><span className='Small-Gray-Text'>You are not currently in a suite.</span></p>
      <div className="Login-Body">
      <div className='Align-Left'>
      <p><span className='Small-Gray-Text'>Enter your invite code 🎉</span></p>
      </div>
      <input className='Gray-Input' placeholder="XHUISDH23S" type="text" id="fname" name="fname"></input>
      </div>
      <Link to="/home">
         <div className='Turquoise-Button-Login'>Join Suite</div>
      </Link>
      <p><span className='Small-Gray-Text'>No suite yet? </span><span onClick={()=>setPopUp(true)} className={'Small-Turqoise-Text' + duringPopUp}>Create a new suite!</span></p>
      {popUp && <PopUp setPopUp={setPopUp}/>}   
      </div>
    );
  };
  
export default JoinSuite;