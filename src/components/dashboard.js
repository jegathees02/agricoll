import React from 'react';
import './css/dashboard.css';
import Navbar from './navbar';
import Weather from './weather';
// import ChatbotMain from './chatbot/chatmain';
import DashBoardRecent from './dashboard-recent';
import Footer from './footer';
import Speed from'./speeddial';
import Details from './details'
import Stepper from './stepper';
function Dashboard() {
    
    return(
        <>
        <div>

            <div className="dashboard-Navbar">
                <Navbar/>
            </div>
            <div className='dashbaord-recent'>
                <DashBoardRecent/>
            </div>
            <div className='dashboard-chatbot'>
                {/* <ChatbotMain/> */}
            </div>
            <div className='dashboard-Weather'>
                <Weather/>
            </div>
            <div className='dashboard-footer'>
                <Footer/>
            </div>
            {/* <div className='dashboard-Weather'>
                <Stepper/>
            </div> */}
        </div>
        </>
    )
}
export default Dashboard;