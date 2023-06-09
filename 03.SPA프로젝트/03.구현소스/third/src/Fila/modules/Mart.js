import React from "react";
import "../css/mart.css"
function Mart(){

    const mart = [
        {
            city : "SEOUL",
            addr : "Common Ground // 200 Achasan-ro,^Jayang 4(sa)-dong, Gwangjin-gu, Seoul",
        },
        {
            city : "TOKYO",
            addr : "16 6-19-15, Jingumae Shibuya Ku,^Tokyo To, 150-0001, Japan",
        },
        {
            city : "LOS ANGELES",
            addr : "721 S Los Angeles St,^Los Angeles, CA 90014",
        },
        {
            city : "MUMBAI",
            addr : "Kala Ghoda Fort, Mumbai,^Maharashtra 400001, India",
        },
        {
            city : "UIJEONGBU",
            addr : "Geumo-dong, Uijeongbu City^Apartment across from Cheonbo Middle School",
        },
        {
            city : "SANTORINI",
            addr : "Fabrica Shopping Center Fira,^Santorini, Greece",
        },
        {
            city : "NEW YORK",
            addr : "428 Broadway^New York, NY 10013",
        },
        {
            city : "NAMYANGJU",
            addr : "",
        },
        {
            city : "LONDON",
            addr : "",
        },
    ];

    return(
        <>
            <section className="martsc">
                <h1>POP-UP<br/>STORES</h1>
                <ul className="martul">
                    {
                        mart.map(x=>
                        <li>
                            <a className="marta">
                                <div>
                                    <h2>{x.city}</h2>
                                </div>
                                <div>
                                    <p>{x.addr.split('^')[0]}</p>
                                    {
                                        x.addr == "" ?
                                        <p>comming soon</p> : <p>{x.addr.split('^')[1]}</p>
                                    }
                                    
                                </div>
                            </a>
                        </li>
                            
                            )
                    }
                </ul>
            </section>
        </>
    )
}
export default Mart;