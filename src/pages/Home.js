import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import Navbar from "../components/NavbarHomeBlue";
import statusbar from '../assets/images/statusbar.png';
import Suitemates from "../components/Suitemates";
import accept from '../assets/images/CheckIcon.png';
import close from '../assets/images/CloseIcon.png';
import roomie1 from '../assets/images/roomie1.png';
import quiethour from '../assets/images/quiethour.png';
import groceries from '../assets/images/shopping.jpg';
import party from '../assets/images/party.png';
import coverdivider from '../assets/images/divider.png';
import roomie2 from '../assets/images/roomie2.png';
import roomie3 from '../assets/images/roomie3.png';
import roomie4 from '../assets/images/roomie4.png';





const Home = () => {
  const scrollContainer = document.querySelector("main");

    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <Suitemates />
        <div class="scrollmenu">
          <div> 
            <img className="HomeRequests-Image" alt='quiet hour image' src={quiethour}/>
            <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie3}/> Quiet Hours - <i>12/14</i></p>
            <button className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
            <button className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
          </div>
          <div>
            <img className="HomeRequests-Image"  alt='party image' src={party}/>
            <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie1}/> Party - <i>12/25</i></p>
            <button className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
            <button className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
           </div>
          <div>
            <img className="HomeRequests-Image"  alt='quiet hour image' src={groceries}/>
          <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie4}/> Groceries - <i>12/20</i></p>
          <button className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
            <button className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
           </div>
          <div>
            <img className="HomeRequests-Image" alt='quiet hour image' src={quiethour}/>
            <p><img alt='roommate icon' className="HomeRequests-Icon" src={roomie2}/> Quiet Hours - <i>10/31</i></p>
            <button className="HomeRequests-Button accept"><img alt='accept icon' src={accept}/></button><br></br>
            <button className="HomeRequests-Button deny" ><img alt='close icon' src={close}/></button> 
          </div>
        </div>
        <div className='Divider'><img alt='divider' src={coverdivider}/></div>
       <Navbar />
      </div>
    );
  };
  
export default Home;