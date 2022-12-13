import '../assets/css/Home.css';
import {useState} from 'react';
import accept from '../assets/images/CheckIcon.png';
import close from '../assets/images/CloseIcon.png';
import roomie1 from '../assets/images/roomie1.png';
import quiethour from '../assets/images/quiethour.png';
import groceries from '../assets/images/shopping.jpg';
import party from '../assets/images/party.png';
import roomie2 from '../assets/images/roomie2.png';
import roomie3 from '../assets/images/roomie3.png';
import roomie4 from '../assets/images/roomie4.png';


const HomeRequestsPane = () => {
    const [showResults, setShowResults] = useState(true)
    const onClick = () => setShowResults(false)
    const [showResults2, setShowResults2] = useState(true)
    const onClick2 = () => setShowResults2(false)
    const [showResults3, setShowResults3] = useState(true)
    const onClick3 = () => setShowResults3(false)
    const [showResults4, setShowResults4] = useState(true)
    const onClick4 = () => setShowResults4(false)
    return (
      <div class="scrollmenu">
      { showResults ? <div> 
      <img className="HomeRequests-Image" alt='quiet hour image' src={quiethour}/>
      <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie3}/> Quiet Hours - <i>12/14</i></p>
      <button onClick={onClick} className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
      <button onClick={onClick} className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
      </div> 
      : null }
      { showResults2 ? <div>
        <img className="HomeRequests-Image"  alt='party image' src={party}/>
        <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie1}/> Party - <i>12/25</i></p>
        <button onClick={onClick2} className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
        <button onClick={onClick2} className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
       </div>
       : null }
      { showResults3 ? <div>
        <img className="HomeRequests-Image"  alt='quiet hour image' src={groceries}/>
      <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie4}/> Groceries - <i>12/20</i></p>
      <button onClick={onClick3} className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
        <button onClick={onClick3} className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
       </div>
       : null }
       { showResults4 ? <div>
        <img className="HomeRequests-Image" alt='quiet hour image' src={quiethour}/>
        <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie2}/> Quiet Hours - <i>10/31</i></p>
        <button onClick={onClick4} className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
        <button onClick={onClick4} className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
      </div>
      : null }
      { !showResults && !showResults2 && !showResults3 && !showResults4 ?
      <div className="Events-Empty"> 
        No requests at this time!
      </div> 
      : null}
    </div>
    );
  };

  
export default HomeRequestsPane;