import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/Login.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login";
import Login2 from "./pages/Login2";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="suitemates" element={<Login />} />
          <Route path="login2" element={<Login2 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();
