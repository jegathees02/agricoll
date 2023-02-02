import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function GetPlan() {
    const navigate=useNavigate();
    return (
        <div className='navbar-get-your-plan'>
              <Button variant='contained' color='success' onClick={()=>{navigate("/cropplan")}}>GET PLAN</Button>
            </div>
    )
}

export default GetPlan;