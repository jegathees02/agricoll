import "./styles.css";
import NavigationBar from "./components/navbar";
// import CropPlan from "./components/CropPlan";
import CropPlan from "./components/CropPlan";
import Onion from "./components/onion";
import Tomato from "./components/tomato";
// import Weather from "./components/pages/weather";
import Dashboard from "./components/dashboard";

import Weather from "./components/weather";

export default function App() {
  return (
    <div className="App">
      {/* <NavigationBar/> */}
      {/* <Weather/> */}
      {/* <Dashboard/> */}
      {/* <Onion /> */}
      <Tomato/>
      {/* <CropPlan/> */}
      {/* <CropPlan/> */}
    </div>
  );
}
