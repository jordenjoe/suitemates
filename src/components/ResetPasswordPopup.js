import React from 'react';
// styling
import '../assets/css/Login.css';
// images
import email from '../assets/images/login/email.png';
import { Link } from "react-router-dom";



const ResetPasswordPopup = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
            
            <div onClick={()=> setPopUp(false)}  className="PopUp-Content-CreateSuite">
                <img src={email}/>
                <p> We have sent password reset instructionns to your email.
                </p>
            </div>
        </div>
    );
}

export default ResetPasswordPopup;