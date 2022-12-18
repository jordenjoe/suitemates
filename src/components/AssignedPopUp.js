import React from 'react';
import'../assets/css/Chores.css';
import jess from '../assets/images/chores/Jess.png';
import {Link} from "react-router-dom";
import okbutton from '../assets/images/chores/okbutton.png';
import AssignButton from '../assets/images/chores/AssignButton.png';

const AssignedPopUp = props => {
    const {setPopUp} = props

    return(
        <div className="PopUp">
            <div className="PopUpContent">
                <h1>SUCCESS</h1>
                <p>Jess has been asked to Clean Table by 10/25/2022</p>
                <div className="PopUpIcons"><img alt='jess' src={jess}/></div>
                <div className="PopUpIcons">
                    <Link to="/NewChoreAssigned">
                        <img alt='ok' src={okbutton}/>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default AssignedPopUp;
