import React from "react";
import "../css/colorbx.css";
import $ from "jquery"
import { Parallax } from 'react-scroll-parallax';

function jqFn() {
    $(() => {

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function ColorBx(props){
    
    return(
        <>
            <section className="colorbx_wrap">
                <div className="color">
                    
                    
                <Parallax speed={30} translateY={[0,0]}>
                    <div className="color1">
                        <img src={
                            "./images/"+ props.tit +"/" + props.num +".jpg"
                            } title=""/>
                    </div>
                </Parallax>
                    
                <Parallax speed={30} translateY={[0,40]}>

                        <div className="colorbgwrap">
                    <div className="colorbg"
                    style={{
                        backgroundColor : props.bgc
                    }}>
                        </div>
                    </div>
                </Parallax>




                </div>
            </section>
            {jqFn()}
        </>
    )
}

export default ColorBx;