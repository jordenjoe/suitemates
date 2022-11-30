import './assets/css/App.css';
import coverimg from './assets/images/coverimg.png';
import coverdivider from './assets/images/divider.png';


function App() {
  return (
    <div className="App">
       <div className='Cover-Image'><img src={coverimg}/></div>
        <h1>Make suite management <span>easy</span></h1>
        <p>Get rent reminders, create house rules,
          request quiet times, and manage a schedule
            with all your suitemates!</p>
            <div className='Divider'><img src={coverdivider}/></div>
          <button className='Turquoise-Button'>Get started</button>
    </div>
  );
}

export default App;
