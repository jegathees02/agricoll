import React from "react";
import Navbar from "./navbar";
import './css/tomato.css';

function Tomato() {
    return(
        <>
        <div className="tomato-navbar">
            <Navbar/>
        </div>
        <div className="tomato-container">
            <div className="tomato-card">
                <div className="tomato-title">
                    <h3>TOMATO</h3>
                </div>
                <div className="tomato-img">
                    <img src="https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167504/AGRICOL/Vegetable%20images/tomato_t2wvjr.jpg"/>
                </div>
                <div className="tomato-card-contents">
                    <div className="tomato-botanical-name">
                        <h3>Name : TOMATO</h3>
                        <h3>Botanical Name : SOLANUM LYCOPERSICUM</h3>
                    </div>
                    <div className="tomato-days" >
                        <h3>Days of Germination : 5-10 days</h3>
                        <h3>Days of Maturation : 6-8 weeks</h3>
                        <h3>Optimum Temperature : 65F-85F</h3>
                    </div>
                </div>
            </div>
                <div className="tomato-description">
                    <div className="tomato-content">
                        <h3>GERMINATION OF SEEDS</h3>
                        <p>Tomato seeds are almost always germinated indoors, either in greenhouses, under grow lights, or simply on a sunny window ledge. Some people choose to speed up germination by placing heat mats at the bottom of the container bearing the seeds. This certainly helps, but it is not necessary.

                                Most of your vegetable plants do not need to be started indoors, but tomato seeds are delicate and require a constant soil temperature between 70–80 degrees Fahrenheit to germinate. They therefore need to be started indoors in many parts of the globe. Germinating indoors also prevents the young seedlings from being eaten by slugs or other creatures in your garden.

                                If you live in a region with long, warm summers, you don't need to germinate your seeds indoors. Instead, you just need to make sure that the temperature of the soil outdoors is within the requirements listed above. However, for those of you living in temperate climates, the soil only reaches this temperature sometime mid-summer, and by then it is too late to plant seeds outdoors, as the plants won't grow, mature, and bear fruit before the first frost.</p>
                        <h3>WHEN TO PLANT</h3>
                        <p>
                        When growing tomato seeds indoors, it is typical to plant the seeds somewhere between six to eight weeks before the date of the last frost. This is also stated on most seed packets if you read the fine print.
                        Not everyone is fortunate enough to plan their tomato gardens well in advance. Sometimes life gets in the way, and we are delayed. If it's already spring, and you're wondering whether it is too late to plant your tomatoes, the following paragraph will help you decide.

                        It depends on the time your plant has to grow, right from the date you wish to plant, until the first expected frost date. All you need to do is determine the days to maturity for the variety of tomatoes you intend to plant. If the number of days from the day you plant to the first frost is greater than the days to maturity, go ahead and plant your tomatoes. If you've missed out don't worry too much, look for other seed varieties that require shorter days to maturity and plant those instead. But, if you're extremely late to the party, there's nothing that you can do about it other than to learn from your mistakes and plan better the following year.

                        </p>
                        <br></br>
                        <br></br>
                        <h3>HOW TO SEED A TOMATO</h3>
                        <p>
                        Starting tomato seeds successfully requires a few things, such as:
                        {/* {/* <ol */}


                        </p> */

                    
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
    
}
export default Tomato;