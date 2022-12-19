import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/Login.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import CalendarMonthly from "./pages/CalendarMonthly";
import Chores from "./pages/Chores";
import Rent from "./pages/Rent";
import Suite from "./pages/Suite";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import JoinSuite from "./pages/JoinSuite";
import ChoresComplete from "./pages/ChoresComplete";
import AssignChore from "./pages/AssignChore";
import NewChoreAssigned from "./pages/NewChoreAssigned";
import ReminderSuccess from "./pages/ReminderSuccess";
import NewReminderSuccess from "./pages/NewReminderSuccess";
import NewSuite from "./pages/NewSuite";
import ForgotPassword from "./pages/ForgotPassword";
import Message from "./pages/Message";
import RequestCreation from "./pages/RequestCreation";
import RequestCreationSuccess from "./pages/RequestCreationSuccess";
import ReviewRequest from "./pages/ReviewRequest";
import AcceptRequest from "./pages/AcceptRequest";
import RejectRequest from "./pages/RejectRequest";
import NextWeekCalendar from "./pages/NextWeekCalendar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="suitemates" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="joinsuite" element={<JoinSuite />} />
        <Route path="newsuite" element={<NewSuite />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="calendarmonthly" element={<CalendarMonthly />} />
        <Route path="chores" element={<Chores />} />
        <Route path="rent" element={<Rent />} />
        <Route path="suite" element={<Suite />} />
        <Route path="assignchore" element={<AssignChore />} />
        <Route path="chorescomplete" element={<ChoresComplete />} />
        <Route path="newchoreassigned" element={<NewChoreAssigned />} />
        <Route path="remindersuccess" element={<ReminderSuccess />} />
        <Route path="newremindersuccess" element={<NewReminderSuccess />} />
        <Route path="message" element={<Message />} />
        <Route path="createrequest" element={<RequestCreation />} />
        <Route
          path="createrequestsuccess"
          element={<RequestCreationSuccess />}
        />
        <Route path="reviewrequest" element={<ReviewRequest />} />
        <Route path="acceptrequest" element={<AcceptRequest />} />
        <Route path="rejectrequest" element={<RejectRequest />} />
        <Route path="nextweekcalendar" element={<NextWeekCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
