import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import "../components/css/dashboardrecent.css";
import Tomato from "./tomato";
// import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
// import Button from "react-bootstrap";
import { Button } from "bootstrap";

function DashBoardRecent() {

    const ImageSize = {
        height : 75,
        width:105
      }

    const recentdata = [
        {
            Img:  "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167504/AGRICOL/Vegetable%20images/tomato_t2wvjr.jpg",
            Name:"Tomato",
            source: "Tomato"
        },
        {
            Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167725/AGRICOL/Vegetable%20images/brinjal_ewudyw.jpg" ,
            Name:"Brinjal",
            source:""
        },
        {
            Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167784/AGRICOL/Vegetable%20images/onion_csgzzw.jpg" ,
            Name:"Onion",
            source:""
        },
        {
            Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/raddish_bnptsy.jpg" ,
            Name:"Raddish",
            source:""
        },
        {
            Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/groundnut_rhdkdd.jpg" ,
            Name:"Ground Nut",
            source:""
        },
        {
            Img: "https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167519/AGRICOL/Vegetable%20images/beetroot_vlbh42.jpg" ,
            Name:"Beetroot",
            source:""
        }
    ];

//     let navigate = useNavigate(props); 
//   const routeChange = (props) =>{ 
//     let path = {source}; 
//     navigate(path);
//   }
    
    return(
        <>
            <div className="dash-recent-main">
                <h3 className="dash-recent-main-txt">Popular in your location</h3>

                {/* card */}
                {/* <div  className="dash-recent-card">
                    <div  className="dash-recent-card-img">

                    </div>
                    <div className="dash-recent-desc">

                    </div>
                </div> */}


                <Row>
                            {recentdata.map((props) => {
                                return ( 
                                    <Col sm={8} md={4} className="dash-recent-card">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <div className="card-body">
                                                <img className="recent-card-img" style={ImageSize} src={props.Img} alt='card' />
                                                <h5 className="h5">{props.Name}</h5>
                                                <p className="card-text">{props.Degree}</p>
                                                {/* <Route path={props.source} className="btn btn-primary">View Details</Route> */}
                                                {/* <Button color="primary" className="px-4"
            onClick={navigate({props.source})}
              >
              Login
            </Button> */}
            {/* <button onClick={navigate(props.source)}>View Details</button> */}
            <button href={props.source} >View</button>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>




            </div>
        </>
    )
}

export default DashBoardRecent;