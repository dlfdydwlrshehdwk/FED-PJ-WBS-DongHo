import React from "react";
import "../css/tmarkbx.css"
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

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
                <Parallax speed={30} translateY={[100,0]}>
                    <img src={img[props.tit]['front']} alt=""/>
                </Parallax>
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