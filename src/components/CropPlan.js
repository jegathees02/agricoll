// import { Badge } from '@mui/material';
import React, { useState } from "react";
// import Crop from "./Crop";
import Crop from "./Crop";
import { Link, Router, useNavigate } from "react-router-dom";
// import "./Crop.css";
import '../components/css/Crop.css';
// import { render } from "react-dom";
import Navbar from "./navbar";
function CropPlan() {
  const [Details, useDetails] = useState([
    {
      id: 1,
      name: "Tomato",
      badg: "93%",
      colo: "lightgreen",
      gem: "10-14",
      matu: "90-100",
      path:"",
      imag:
        "https://res.cloudinary.com/drdq84bcm/image/upload/v1670516463/vegetables/wp2030791-tomato-wallpapers_m5qifx.jpg"
    },
    {
      id: 2,
      badg: "88%",
      name: "Onion",
      colo: "lightgreen",
      gem: "7-10",
      matu: "150-160",
      path:"",
      imag:
        "https://res.cloudinary.com/drdq84bcm/image/upload/v1670519946/vegetables/wp8558290-winter-onion-wallpapers_pxkb6v.jpg"
    },
    {
      id: 3,
      name: "Brinjal",
      badg: "80%",
      colo: "orange",
      gem: "7-14",
      matu: "100-120",
      path:"",
      imag:
        "https://res.cloudinary.com/drdq84bcm/image/upload/v1670520410/vegetables/wp6686183-eggplant-wallpapers_u6ro12.jpg"
    },
    {
      id: 4,
      name: "Spinach",
      badg: "72%",
      colo: "orange",
      gem: "7-10",
      matu: "45-50",
      path:"",
      imag:
        "https://res.cloudinary.com/drdq84bcm/image/upload/v1670520791/vegetables/wp3145595-fresh-spinach-wallpapers_or73ta.jpg"
    },
    {
      id: 5,
      name: "Bitter Gourd",
      badg: "68%",
      colo: "orange",
      gem: "7-12",
      matu: "90-120",
      path:"",
      imag:
        "https://res.cloudinary.com/drdq84bcm/image/upload/v1670522396/vegetables/wp10276668-bitter-gourd-wallpapers_htpb8s.jpg"
    },
    {
      id: 6,
      name: "Okra",
      badg: "64%",
      colo: "red",
      gem: "7-10",
      matu: "55-60",
      path:"",
      imag:
        "https://res.cloudinary.com/drdq84bcm/image/upload/v1670521846/vegetables/wp10374810-okra-wallpapers_k0i6ic.jpg"
    }
  ]);
  // let navigate = useNavigate();
  function Det(pass) {
    alert(pass);
    return <h1>fwf</h1>;
  }
  return (
    <>
    <div className="crop-plan-nav-bar">
      <Navbar/>
    </div>
      <div id="container">
        <div className="sideBar">
          <h1 className="sideBar">We Care for your crop</h1>
        </div>
        <div className="cardHolder">
          <h1 className="heading-crop-plan">Your Plan</h1>
          <div className="cardHolder-card">
            {Details.map((e) => (
              <>
                <Crop
                  name={e.name}
                  badg={e.badg}
                  colo={e.colo}
                  gem={e.gem}
                  matu={e.matu}
                  imag={e.imag}
                ></Crop>
                {/* <button onClick={() => Det(e.id)}>ViewMore</button> */}
              </>
            ))}
            {/* <button onClick={Det}>fjebfkqhur</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CropPlan;
