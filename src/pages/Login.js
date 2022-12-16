import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import coverimg from '../assets/images/coverimg.png';
import coverdivider from '../assets/images/divider.png';
import statusbar from '../assets/images/statusbar.png';



const Login = () => {
    return (
    <div className="App">
        <div className='Cover-Image'><img alt='cover img' src={coverimg}/></div>
         <h1>Make suite management <span>easy</span></h1>
         <p>Get rent reminders, create house rules,
           request quiet times, and manage a schedule
             with all your suitemates!</p>
             <div className='Divider'><img alt='divider' src={coverdivider}/></div>
           <button className='Turquoise-Button'>
            <Link to="/Signin">
                <div className='Turquoise-Button-Text'>Get started</div>
            </Link>
            </button>
     </div>
    );
  };
  
export default Login;