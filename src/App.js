import "./styles.css";
import Login from "./LoginPages/login";
import NavigationBar from "./components/navbar";
// import CropPlan from "./components/CropPlan";
import CropPlan from "./components/CropPlan";
import Onion from "./components/onion";
import Tomato from "./components/tomato";
// import Weather from "./components/pages/weather";
import Dashboard from "./components/dashboard";
import Brinjal from "./components/brinjal";
import Weather from "./components/weather";
import Input from "./components/input";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/input" element={<Input/>} />
          <Route path="/onion" element={<Onion />} />
          <Route path="/tomato" element={<Tomato />} />
          <Route path="/Cropplan" element={<CropPlan/>} />
          <Route path="/Brinjal" element={<Brinjal />} />
          <Route path="/Input" element={<Input />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
