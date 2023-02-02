import "./styles.css";
import NavigationBar from "./components/navbar";
// import CropPlan from "./components/CropPlan";
import CropPlan from "./components/CropPlan";
import Onion from "./components/onion";
import Tomato from "./components/tomato";
// import Weather from "./components/pages/weather";
import Dashboard from "./components/dashboard";

import Weather from "./components/weather";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/onion" element={<Onion />} />
          <Route path="/tomato" element={<Tomato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
