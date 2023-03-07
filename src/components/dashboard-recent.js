// import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link,Routes, Navigate } from 'react-router-dom';
import "../components/css/dashboardrecent.css";
import Tomato from "./tomato";
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap';
import { Button } from '@mui/material';
function DashBoardRecent() {
        const navigate=useNavigate();
    const ImageSize = {
        height: 75,
        width: 105
    }

    // const recentdata = [
    //     {
    //         Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167504/AGRICOL/Vegetable%20images/tomato_t2wvjr.jpg",
    //         Name: "Tomato",
    //         source: "<Tomato/>"
    //     },
    //     {
    //         Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167725/AGRICOL/Vegetable%20images/brinjal_ewudyw.jpg",
    //         Name: "Brinjal",
    //         source: "<Tomato/>"
    //     },
    //     {
    //         Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167784/AGRICOL/Vegetable%20images/onion_csgzzw.jpg",
    //         Name: "Onion",
    //         source: ""
    //     },
    //     {
    //         Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/raddish_bnptsy.jpg",
    //         Name: "Raddish",
    //         source: ""
    //     },
    //     {
    //         Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/groundnut_rhdkdd.jpg",
    //         Name: "Ground Nut",
    //         source: ""
    //     },
    //     {
    //         Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/beetroot_vlbh42.jpg",
    //         Name: "Beetroot",
    //         source: ""
    //     }
    // ];

    //     let navigate = useNavigate(props); 
    //   const routeChange = (props) =>{ 
    //     let path = {source}; 
    //     navigate(path);
    //   }
    // const tom = () => {
    //     window.location.href = "https://www.typescriptlang.org";
    //     console.log("end");
    //     console.log("end2");
    //   };
    return (
        <>
        {/* <Router> */}
            <div className="dash-recent-main">
                <h3 className="dash-recent-main-txt">Popular in your location</h3>

                {/* card */}
                {/* <div  className="dash-recent-card">
                    <div  className="dash-recent-card-img">

                    </div>
                    <div className="dash-recent-desc">

                    </div>
                </div> */}


                <>

                
                    <Row>
                        <Col sm={8} md={4} xs={1} className="dash-recent-card">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <img className="recent-card-img" style={ImageSize} src={"https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167504/AGRICOL/Vegetable%20images/tomato_t2wvjr.jpg"} alt='card' />
                                    <h5 className="h5">Tomato</h5>
                                    {/* <p className="card-text"></p> */}
                                    {/* <Router> */}
                                    <Button variant='contained' onClick={()=>{
                                        navigate("/tomato");
                                    }}>View Details
                                    </Button>
                    
                                    {/* </Router> */}
                                </div>
                            </div>
                        </Col>
                        <Col sm={8} md={4} xs={1} className="dash-recent-card">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <img className="recent-card-img" style={ImageSize} src={"https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167725/AGRICOL/Vegetable%20images/brinjal_ewudyw.jpg"} alt='card' />
                                    <h5 className="h5">Brinjal</h5>
                                    <Button variant='contained' onClick={()=>{
                                        navigate("/Brinjal");
                                    }}>View Details
                                    </Button>

                                </div>
                            </div>
                        </Col>
                        <Col sm={8} md={4} xs={1} className="dash-recent-card">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <img className="recent-card-img" style={ImageSize} src={"https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167784/AGRICOL/Vegetable%20images/onion_csgzzw.jpg"} alt='card' />
                                    <h5 className="h5">Onion</h5>
                                    {/* <p className="card-text">{props.Degree}</p> */}
                                    <Button variant='contained' onClick={()=>{
                                        navigate("/onion");
                                    }}>View Details
                                    </Button>
                                   
                                </div>
                            </div>
                        </Col>
                        <Col sm={8} md={4} xs={1} className="dash-recent-card">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <img className="recent-card-img" style={ImageSize} src={"https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/raddish_bnptsy.jpg"} alt='card' />
                                    <h5 className="h5">Raddish</h5>
                                    {/* <p className="card-text">{props.Degree}</p> */}
                                    <Button variant='contained' onClick={()=>{
                                        navigate("/tomato");
                                    }}>View Details
                                    </Button>
                                   
                                </div>
                            </div>
                        </Col>
                        <Col sm={8} md={4} xs={1} className="dash-recent-card">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <img className="recent-card-img" style={ImageSize} src={"https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/groundnut_rhdkdd.jpg"} alt='card' />
                                    <h5 className="h5">GroundNut</h5>
                                    {/* <p className="card-text">{props.Degree}</p> */}
                                    <Button variant='contained' onClick={()=>{
                                        navigate("/tomato");
                                    }}>View Details
                                    </Button>
                                   
                                </div>
                            </div>
                        </Col>
                        <Col sm={8} md={4}  className="dash-recent-card">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <img className="recent-card-img" style={ImageSize} src={"https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/beetroot_vlbh42.jpg"} alt='card' />
                                    <h5 className="h5">Beetroot</h5>
                                    {/* <p className="card-text">{props.Degree}</p> */}
                                    <Button variant='contained' onClick={()=>{
                                        navigate("/tomato");
                                    }}>View Details
                                    </Button>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>





            </div>
            {/* </Router> */}
        </>
    )
}

export default DashBoardRecent;