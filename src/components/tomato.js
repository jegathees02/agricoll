import React from "react";
import Navbar from "./navbar";
import './css/tomato.css';
import { useLocation } from "react-router-dom";

function Tomato() {
    const location= useLocation();
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
                        <ol >
                            <li>The tomato seeds</li>
                            <li>Containers to plant the seeds</li>
                            <li>Soil for germination of the seeds</li>
                            <li>Water</li>
                            <li>Natural or artificial light</li>
                        </ol>
                         </p> 
                         <br></br><br></br>
                         <h3>1.THE TOMATO SEEDS</h3>
                         <p>
                         When choosing tomato seeds you have the option to use seeds from tomatoes bought from the grocery store, tomatoes from last year's harvest, or you could alternatively buy tomato seeds from a store or on the Internet. If you are buying seeds, you may want to look for seeds that are resistant to any diseases that are common in your area. 
                         </p>
                         <br></br>
                         <h3>2.CONTAINERS TO PLANT THE SEEDS</h3>
                         <p>
                         You're going to want to use small containers, with a depth of at least 3 inches for the germination of the seeds. You could use larger containers too, but I suggest smaller containers as the soil used for germination is a bit different from what the plants would eventually grow in. Moreover, there are benefits to transplanting a tomato plant after germination—you bury the stem a bit to get more roots—which I would personally say is crucial for the future well-being of the plant. However, you should understand that this is just a suggestion and not a must. I would recommend that you read my guide on how deep tomato roots grow so you can make an informed decision.
                         Just make sure that the container you use has holes at the bottom, if not, make some holes yourself. This prevents the possibility of the soil getting too wet, thereby preventing root rot.
                        <br></br>
                        For the seed containers, you can use almost anything. For example:
                        <ul>
                            <li>Yogurt containers</li>
                            <li>Egg cartons</li>
                            <li>Cut off milk or juice cartons</li>
                            <li>Plastic containers that strawberries and other fruit come in
</li>
                            <li>Plastic soda bottles</li>
                            <li>Plastic cups</li>
                            <li>Take away containers and just about anything else</li>
                        </ul>
                        <br/>
                        In most of the above cases, you are going to need to make holes in the bottom of the container yourself. Don't forget to place the container on a tray, so that the water seeping out does not damage your furniture, floor, or windowsill.
                        <br/>
                        In most of the above cases, you are going to need to make holes in the bottom of the container yourself. Don't forget to place the container on a tray, so that the water seeping out does not damage your furniture, floor, or windowsill.
                        <br/>
                        Moreover, these bio pots use natural fiber soil and not peat and have no traces of plastic in them. I have personally tested this out by burning them to see if there was any plastic residue. Also, after using such pots and studying their structure, I make my own using newspaper and some plant fiber.
                        <br/>
                        If you're sowing seeds for a home garden, you're probably not going to be sowing many. But for those of you with large gardens, greenhouses and farms you may want to plant your seedlings in trays. This helps you grow a lot in limited space during the initial germination stage
                         </p>
                         <br/>
                        <h3>
                            3.SOIL FOR GERMINATION OF TOMATO SEEDS
                        </h3>
                        <p>
                        Good germinating mixes are fine, uniform, allow for good aeration, are not compact but loose, and are free of pests and weed seeds. Also, germinating mixes usually do not need any fertilizer/compost if you intend to transplant as soon as the first true leaves appear. However, if you intend to leave your tomato plants in their initial container for longer than three to five weeks after sowing, you should seriously think about adding worm castings to the initial mix or alternatively supply liquid fertilizer after the appearance of the first true leaves.
                        </p>
                        <br/>
                        <br/>
                        <h3>BEST FERTILIZER FOR TOMATOES</h3>
                        <p>
                        Tomato seeds do not require any fertilizer to germinate, as the seed contains all the necessary nutrients. It is only after the first true leaves that the plant must begin fending for itself
                        </p>
                        <br/>
                        <h3>USE GARDEN SOIL</h3>
                        <p>
                        Backyard soil is typically too compact and is therefore not ideal for the germination of seeds. It tends to form a hard, crusty layer, and seedlings find this hard to penetrate and might ultimately die. Also, garden soil is not the best when it comes to aeration and drainage. Lastly, garden soil can harbor diseases and weed seeds.
                        </p>
                        <br/>
                        <h3>TRANSFORMING GARDEN SOIL INTO A SEED STARTING MIX</h3>
                        <p>
                        This is not recommended as the best practice, but if you want to be frugal, this is a good option. The rate of a successful germination may be lower, but it definitely is a lot cheaper to use garden soil and homemade compost as a starting mix. But it is vital that you first pasteurize the soil and compost. Check out this article on the best way to pasteurize soil.

Before you begin the pasteurization process, I would recommend that you use a sieve to only allow small particulates of soil and compost to pass through. I would also recommend you add some sand to this mix, if easily available. Now, pasteurize this mix and then add an equal proportion of moistened coconut coir to prevent the soil from clumping up and forming a brick. The coconut coir will help keep the soil loose and aerated. You can buy coconut coir bricks from your local gardening or pet store.
                        </p>
                        <br/>
                        <h3>IS  COMMERCIAL SEED STARTER MIXES ARE BEST</h3>
                        <p>
                        If you're a first-time gardener or if you do not intend to plant many seedlings, it is easier, cheaper and quicker to use a commercial seed starting mix such as the Black Gold seedling mix. It has no added fertilizer to it—it is not a potting mix—but just the perfect blend of ingredients to create a germinating media for your seeds. This was the mix my friend used to plant his peppers, and the pH of the mix was neutral, which is a good thing for most seeds. I stole some soil (with permission) to plant a few tomato seeds, and I realized that the mix I made at home and this mix produced similar seedlings. When you use this, you will have to transplant or add fertilizer after the growth of the first true leaves.
                        <br/>
                        Some people tend to use the Epsoma SS16 seed starter premium potting mix, but this leads to lower germination rates, as it's more of a potting mix than a seed starter mix. But, as stated earlier, if you intend to leave your seedlings in their original containers even after the appearance of their first true leaves, the Epsoma mix is a better option. Just plant three to four seeds in each container instead of one or two as you would usually do
                        </p>
                        <br/>
                        <h3></h3>

                    
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
    
}
export default Tomato;