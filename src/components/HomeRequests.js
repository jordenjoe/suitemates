import '../assets/css/Home.css';
import accept from '../assets/images/CheckIcon.png';
import close from '../assets/images/CloseIcon.png';
import roommateIcon1 from '../assets/images/RoommateIcon1.png';
import quiethour from '../assets/images/quiethour.png';



const HomeRequests = () => {
    return (
    <div className="HomeRequests">
      <img alt='quiet hour image' src={quiethour}/>
      <p> Quiet Hours - 10/31 <img alt='roommate icon' className="HomeRequests-Icon" src={roommateIcon1}/></p>
      <button className="HomeRequests-Button"><img alt='accept icon' src={accept}/></button>
      <button className="HomeRequests-Button"><img alt='close icon' src={close}/></button> 
    </div>
    );
  };
  
export default HomeRequests;