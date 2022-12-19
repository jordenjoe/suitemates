import React from 'react';
import'../assets/css/Chores.css';
import jess from '../assets/images/chores/Jess.png';
import {Link} from "react-router-dom";
import okbutton from '../assets/images/chores/okbutton.png';
import AssignButton from '../assets/images/chores/AssignButton.png';

const PopUp = props => {
    const {setPopUp} = props

    return(
        <div className="PopUp-Chores">
            <div className="PopUpContent-Chores">
                <h1>SUCCESS</h1>
                <p>Jess has been asked to Clean Table by 10/25/2022</p>
                <div className="PopUpIcons-Chores"><img alt='jess' src={jess}/></div>
                <div className="PopUpIcons-Chores">
                    <Link to="/NewChoreAssigned">
                        <img alt='ok' src={okbutton}/>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default PopUp;
