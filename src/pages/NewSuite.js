import { Link } from "react-router-dom";
import React, {useState} from 'react';
import '../assets/css/Login.css';
import Suitemates from "../components/Suitemates";
import statusbar from '../assets/images/statusbar.png';
import invitecode from '../assets/images/login/invitecode.png';
import buildingicon from '../assets/images/login/buildingicon.png';
import PopUp from './CopyInviteCodePopup';



const NewSuite = () => {
    const [popUp, setPopUp] = useState(false)
    // adds class to darken background color
    const duringPopUp = popUp ? " during-popup" : ""
    return (
    <div className={"App" + duringPopUp}>
         <img alt='status bar for phone' src={statusbar}/>
         <img src={buildingicon}/>
         <Suitemates />
         <div className="Login-Body">
         <p className="Medium-Pink-Text">Suite 307Besties Created! 🥳</p>
         <Link to="/home">
            <div className='Turquoise-Button-Login'>Go to homepage</div>
         </Link>
         <img onClick={()=>setPopUp(true)} src={invitecode}/>
         {popUp && <PopUp setPopUp={setPopUp}/>}   
         </div>
         

     </div>
    );
  };
  
export default NewSuite;