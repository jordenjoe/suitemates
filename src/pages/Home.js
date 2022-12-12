import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import Navbar from "../components/NavbarHomeBlue";
import statusbar from '../assets/images/statusbar.png';
import Suitemates from "../components/Suitemates";
import coverdivider from '../assets/images/divider.png';
import HomeRequestsPane from "../components/HomeRequestsPane";
import HomeEventsPane from "../components/HomeEventsPane";


const Home = () => {
  const scrollContainer = document.querySelector("main");

    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <Suitemates />
        <HomeRequestsPane />
        <div className='Divider'><img alt='divider' src={coverdivider}/></div>
        <HomeEventsPane />
        <Navbar />
      </div>
    );
  };
  
export default Home;