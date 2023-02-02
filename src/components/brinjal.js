import React from "react";
import Navbar from "./navbar";
import './css/tomato.css';
import { useLocation } from "react-router-dom";

function Tomato() {
    // const location= useLocation();
    return(
        <>
        <div className="tomato-navbar">
            <Navbar/>
        </div>
        <div className="tomato-container">
            <div className="tomato-card">
                <div className="tomato-title">
                    <h3>BRINJAL</h3>
                </div>
                <div className="tomato-img">
                    <img src="https://res.cloudinary.com/dkmm9khbp/image/upload/v1675167725/AGRICOL/Vegetable%20images/brinjal_ewudyw.jpg"/>
                </div>
                <div className="tomato-card-contents">
                    <div className="tomato-botanical-name">
                        <h3>Name : BRINJAL</h3>
                        <h3>Botanical Name : Solanum melongena
</h3>
                    </div>
                    <div className="tomato-days" >
                        <h3>Days of Germination : 2-3 weeks</h3>
                        <h3>Days of Maturation : 120-130 days</h3>
                        <h3>Optimum Temperature : 65F-90F</h3>
                    </div>
                </div>
            </div>
                <div className="tomato-description">
                    <div className="tomato-content">
                        <h3>GERMINATION OF SEEDS</h3>
                        <p>Growing eggplants allow the gardener the ability to try varieties that never show up in the supermarket! Sure, you can choose to cultivate the ever-popular Purple Beauty, but the real winners of taste and tenderness come with the lesser known cultivars. In this guide on how to grow eggplants in containers, we'll touch on some of these unique varieties, as well as cover the essentials of eggplant cultivation.</p>
                        <br></br>
                        <br></br>
                        <h3>HOW TO SEED A BRINJAL</h3>
                        <p>
                        Starting Brinjal seeds successfully requires a few things, such as:
                        <ol >
                            <li>The brinjal seeds</li>
                            <li>Containers to plant the seeds</li>
                            <li>Soil for germination of the seeds</li>
                            <li>Water</li>
                            <li>Natural or artificial light</li>
                        </ol>
                         </p> 
                         <br></br><br></br>
                        <h3>Growing Eggplant:</h3>
                        <p>
                        
Eggplants need a long, hot growing season of at least five months and can be perennial in frost-free areas, cropping for several seasons. They need fertile, well-drained soil. They can be grown from seed sown directly in the ground, but because they take a long time to fruit, speed up the process by growing them in trays four weeks before planting time, then plant the seeds when the ground warms up.  Seeds will take about 2-3 weeks to germinate. Seedlings should be spaced about 45-60 cm i.e. 1.5 to 2 ft apart. Take optimum care while transplanting as it might disturb the plant growth. The plant will fruit after 3-4 months.
Eggplants grow about 40-90 cms as compact, self-supporting shrubs; but the heavier varieties might need support.

                        </p>
                        
                        <h3>
                            Brinjal Varieties
                        </h3>
                        <ul>
                            <li>
                            Classic large, oval, pear or teardrop shaped fruit are European or Italian types. They grow about 15-25 cm long and are available in varieties like purple-black, soft-lavender, or pale-green skin.
Black beauty is the most popular and reliable variety.
                            </li>
                            <li>
The Asian or Lebanese varieties are about 10-20 cm long. They are finger-like fruits that grow in clusters of 3-6. Each plant bears about 40-50 fruits.
                            </li>
                            <li>

The Thai Green variety produces slender, light green fruit that grows up to 30 cm long.
                            </li>
                            <li>

Casper is a French variety with white skin, elongated fruit to 15 cm.
                            </li>
                            <li>

Thai round green is a favorite variety in Asian cooking. Its small, round fruit, striped in light green and white, grows up to 5cm across.
                            </li>
                        </ul>
                        
                        
                       <h3>Brinjal Plant Diseases:</h3>
                       <p>
                       Like tomatoes, eggplants are a part of the Solanaceae family and are prone to the soil borne disease Verticillium wilt. To get rid of the disease the plant needs to be removed completely. Apart from this Aphids, Caterpillars, Fruit flies, Two-spotted mites are a threat too.
                       </p>
                       <h3>Harvesting Brinjals:</h3>
                       <p>
                       Harvest the brinjals only when the skin is firm and smooth. If the fruit is left on the tree for long, it will indeed develop wrinkles and taste bitter. Pick the fruit only with Pruning Shears as the top of it bears thorns. Large varieties will produce 6 to 8 fruits per plant.
                       </p>



                    
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
    
}
export default Tomato;