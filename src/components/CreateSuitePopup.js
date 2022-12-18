import React from 'react';
// styling
import '../assets/css/Login.css';
// images
import createsuite from '../assets/images/login/createsuite.png';
import { Link } from "react-router-dom";



const PopUp = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
            
            <div className="PopUp-Content-CreateSuite">
                <img onClick={()=> setPopUp(false)} src={createsuite}/>
                <p><input className='Popup-Input' placeholder="Suite Name" type="text"></input>
                <Link to="/newsuite">
                    <button className="Popup-Plus">+</button>
                </Link>
                </p>
            </div>
        </div>
    );
}

export default PopUp;