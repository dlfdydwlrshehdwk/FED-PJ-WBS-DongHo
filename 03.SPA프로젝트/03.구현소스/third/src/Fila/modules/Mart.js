import React from "react";
import "../css/mart.css";
import $ from "jquery";
function Mart(props){

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

    // 제이쿼리 로드구역 함수 /////////
    let mob = 0;
    if($(window).width() < 600) mob = 1;
    function jqFn() {
        $(() => {
            $(window).on('resize',()=>{
                if($(window).width() >= 600 ) mob = 0;
                else mob = 1;

                if(mob){
                    console.log($('.marta span').last())
                    $('.arrow').fadeOut();
                }
                else {
                    $('.arrow').fadeIn();
                }
            })

            $('.martul li').hover(
                function(){
                    console.log('hi')
                    $(this).css({
                        color : props.color,
                        transition : '.4s '
                    })
                },
                function(){
                    $(this).css({
                        color : 'black',
                        transition : '.4s '
                    })
                }
            )

        }); //////// jQB ///////////
    } ////////////// jQFn ///////////

    return(
        <>
            <section className="martsc">
                <h1>POP-UP<br/>STORES</h1>
                <ul className="martul">
                    {
                        mart.map((x,i)=>
                        <li key={i}>
                            <a className="marta">
                                <div>
                                    <span>{x.city}</span>
                                    <span className="arrow">↗</span>
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
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    )
}
export default Mart;