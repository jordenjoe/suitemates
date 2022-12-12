import '../assets/css/Home.css';
import HomeRequests from "../components/HomeRequests";



const HomeRequestsPane = () => {
    return (
    <div className="HomeRequestsPane">
      <div><HomeRequests /></div>
      <div><HomeRequests /></div>
      <div><HomeRequests /></div>
    </div>
    );
  };
  
export default HomeRequestsPane;