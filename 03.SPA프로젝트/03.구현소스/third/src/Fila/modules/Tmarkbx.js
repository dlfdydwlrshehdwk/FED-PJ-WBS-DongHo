import React from "react";
import "../css/tmarkbx.css"

const img = {
    canyon : {
        mark : "./images/canyon/cute.jpg",
        bg : "./images/canyon/bgi.jpg",
        front : "./images/canyon/front.jpg",
    },
    elements : {
        mark : "./images/elements/cute.jpg",
        bg : "./images/elements/bgi.jpg",
        front : "./images/elements/front.jpg",
    },
    woods : {
        mark : "./images/woods/cute.jpg",
        bg : "./images/woods/bgi.jpg",
        front : "./images/woods/front.jpg",
    },
    mountain : {
        mark : "./images/mountain/cute.jpg",
        bg : "./images/mountain/bgi.jpg",
        front : "./images/mountain/front.jpg",
    },
}

function Tmarkbx(props){
    return(
        <>
        <section className="tmarkbx_wrap">
            <div className="tmarkbx">
                <div className="tmark_bgimg">
                    <img src={img[props.tit]['bg']} alt=""/>
                <div className="tmarkl">
                    <img src={img[props.tit]['front']} alt=""/>
                </div>

                </div>
                <div className="tmarkr">
                    <img src={img[props.tit]['mark']} alt=""/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Tmarkbx;