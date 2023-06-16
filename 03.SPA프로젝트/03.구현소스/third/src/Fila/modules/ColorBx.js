import React from "react";
import "../css/colorbx.css";

const img = {
    canyon : {
        one : "./images/canyon/one.jpg",
        two : "./images/canyon/two.jpg",
        color : {backgroundColorcolor : 'gray'}
    },
    elements : {
        one : "./images/elements/one.jpg",
        two : "./images/elements/two.jpg",
        color : {color : '#c6d4e0'}
    },
    woods : {
        one : "./images/woods/one.jpg",
        two : "./images/woods/two.jpg",
        color : {backgroundColor : '#f4dfcd'}
    },
    mountain : {
        one : "./images/mountain/one.jpg",
        two : "./images/mountain/two.jpg",
        color : {color : 'gray'}
    },
}


function ColorBx(props){
    return(
        <>
            <section className="colorbx_wrap">
                <div className="color">
                    <div className="color1">
                        <img src={img[props.tit]['one']} title=""/>
                    </div>
                    <div className="color2">
                        <img src={img[props.tit]['two']} title=""/>
                    </div>
                    <div className="colorbg" style={img[props.tit].color}>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ColorBx;