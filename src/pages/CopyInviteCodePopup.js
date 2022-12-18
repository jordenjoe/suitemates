import React from 'react';
// styling
import '../assets/css/Login.css';
// images
import invitecodecopied from '../assets/images/login/invitecodecopied.png';
import { Link } from "react-router-dom";



const PopUp = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
            <div className="PopUp-Content">
                <img onClick={()=> setPopUp(false)} src={invitecodecopied}/>
            </div>
        </div>
    );
}

export default PopUp;