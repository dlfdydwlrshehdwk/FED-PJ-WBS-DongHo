import React from "react";
import "../css/colorbx.css";



function ColorBx(props){
    
    // const img = {
    //     canyon : {
    //         two : "./images/canyon/" + props.num2 + ".jpg",
    //         color : {backgroundColorcolor : 'gray'}
    //     },
    //     elements : {
    //         two : "./images/elements/" + props.num2 +".jpg",
    //         color : {color : '#c6d4e0'}
    //     },
    //     woods : {
    //         two : "./images/woods/" + props.num2 +".jpg",
    //         color : {backgroundColor : '#f4dfcd'}
    //     },
    //     mountain : {
    //         two : "./images/mountain/" + props.num +".jpg",
    //         color : {color : 'gray'}
    //     },
    // }



    return(
        <>
            <section className="colorbx_wrap">
                <div className="color">
                    <div className="color1">
                        <img src={
                            "./images/"+ props.tit +"/" + props.num +".jpg"
                            } title=""/>
                    </div>
                    <div className="colorbg"
                    style={{
                        backgroundColor : props.bgc
                    }}>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ColorBx;