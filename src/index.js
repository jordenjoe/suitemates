import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/Login.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import CalendarMonthly from "./pages/CalendarMonthly";
import CalendarWithRequest from "./pages/CalendarWithRequest";
import Chores from "./pages/Chores";
import Rent from "./pages/Rent";
import Suite from "./pages/Suite";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="suitemates" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="calendarmonthly" element={<CalendarMonthly />} />
          <Route path="calendarwithrequest" element={<CalendarWithRequest />} />
          <Route path="chores" element={<Chores />} />
          <Route path="rent" element={<Rent />} />
          <Route path="suite" element={<Suite />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();
