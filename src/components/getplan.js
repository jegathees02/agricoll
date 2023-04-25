import React from "react";
import { Avatar, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import '../components/css/getplan.css';

function GetPlan() {
    const navigate=useNavigate();
    return (
        <div>

              <div>
              <Button  style={{width:105}}variant='contained' color='success' onClick={()=>{navigate("/cropplan")}}>GET PLAN
              </Button>
              </div>
             
        
            </div>
    )
}

export default GetPlan;