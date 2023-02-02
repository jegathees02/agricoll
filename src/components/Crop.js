import React from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Route } from "react-router-dom";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import '../src/Crop.css';
import '../components/css/Crop.css';
// onion import
import Onion from "./onion";
import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
function Crop(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="maincrop" id="card">
        <p className="success-rate" style={{ backgroundColor: props.colo }}>
          Success rate : {props.badg}
        </p>
        <div id="card-img">
          <img src={props.imag} alt="image" ></img>
        </div>
        <div id="card-content">
          <h2>{props.name}</h2>
          <table>
            <tr>
              <td>Days for Germination</td>
              <td>: {props.gem}</td>
            </tr>
            <tr>
              <td>Days for Maturation</td>
              <td>: {props.matu}</td>
            </tr>
            <tr>
              {/* <button className="crop-plan-button">Get Plan</button> */}
              {/* <Link to={props.path} >GET PLAN</Link> */}
              <Button variant="contained" color="success" className="getplan-button" onClick={() => {
                navigate("/tomato")
              }} >Get Plan</Button>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Crop;
