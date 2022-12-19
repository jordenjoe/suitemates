import {Link} from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Chores.css';
import CloseButton from '../assets/images/chores/CloseButton.png';
import EmptyBigCal from '../assets/images/chores/EmptyBigCal.png';
import statusbar from '../assets/images/statusbar.png';
import Navbar from "../components/NavbarChoresBlue";
import AssignButton from '../assets/images/chores/AssignButton.png';
import React,{useState} from 'react';

const AssignChore = () => {
    return(
        <div className="App">
            <img alt='status bar for phone' src={statusbar}/>
            <div className="Single-Icon-Header">
                <div className="Single-Icon-Header-Font">Assign Chore</div>
                <Link to="/Chores">
                    <img className="Close_Icon" alt='Close button' src={CloseButton}/>
                </Link>
            </div>
            <p>Chore Name</p>
            <input className='Gray-Input-Chores' placeholder="Enter Chore" type="text" id="fname" name="fname"></input>
            <p>Assign To</p>
            <input className='Gray-Input-Chores' placeholder="Enter SuiteMate" type="text" id="fname" name="fname"></input>
            <p>Complete By</p>
            <Link to="/AssignChoreCalUpdate">
                <img alt='Chore Calendar Big' src={EmptyBigCal}/>
            </Link>
            <img alt='assign button' src={AssignButton}/>
            <div className="NavPadding-Assign"><Navbar/></div>
        </div>
    );

};

export default AssignChore;
